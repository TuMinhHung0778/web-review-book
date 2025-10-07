import React, { useMemo, useState } from "react";
import InputField from "./InputField";
import SelectField from "./SelectField";
import { useForm } from "react-hook-form";
import { useAddBookMutation } from "../../../redux/features/books/booksApi";
import Swal from "sweetalert2";
import { getImgUrl } from "../../../utils/getImgUrl";

const AddBook = () => {
  const {
  	register,
  	handleSubmit,
  	reset,
  } = useForm();
  const [addBook, { isLoading }] = useAddBookMutation();
  const [selectedCover, setSelectedCover] = useState("book-1.png");
  const [coverDataUrl, setCoverDataUrl] = useState("");
  const onSubmit = async (data) => {
    const newBookData = {
      ...data,
      // prefer uploaded (compressed) dataURL; fallback to gallery image
      coverImage: coverDataUrl || selectedCover,
    };
    try {
      await addBook(newBookData).unwrap();
      Swal.fire({
        title: "Book added",
        text: "Your book is uploaded successfully!",
        icon: "success",
        showCancelButton: true,
        confirmButtonColor: "#3085d6",
        cancelButtonColor: "#d33",
        confirmButtonText: "Yes, It's Okay!",
      });
      reset();
    } catch (error) {
      console.error(error);
      alert("Failed to add book. Please try again.");
    }
  };

  // Build gallery options 1..20 once
  const galleryOptions = useMemo(
    () => Array.from({ length: 20 }, (_, i) => `book-${i + 1}.png`),
    []
  );

  // Handle file upload → crop to 3:4, resize, compress to keep payload small
  const handleUpload = (file) => {
    if (!file) return;
    const img = new Image();
    const reader = new FileReader();
    reader.onload = () => {
      img.onload = () => {
        // Compute crop region to 3:4 based on the shortest side
        const targetRatio = 3 / 4; // width/height
        let { width, height } = img;
        let sx = 0, sy = 0, sWidth = width, sHeight = height;
        const currentRatio = width / height;
        if (currentRatio > targetRatio) {
          // too wide → crop left/right
          sWidth = height * targetRatio;
          sx = (width - sWidth) / 2;
        } else if (currentRatio < targetRatio) {
          // too tall → crop top/bottom
          sHeight = width / targetRatio;
          sy = (height - sHeight) / 2;
        }
        // Resize to consistent display size, e.g., 384x512
        const dw = 384; // width
        const dh = 512; // height (3:4)
        const canvas = document.createElement("canvas");
        canvas.width = dw;
        canvas.height = dh;
        const ctx = canvas.getContext("2d");
        ctx.drawImage(img, sx, sy, sWidth, sHeight, 0, 0, dw, dh);
        // Compress to JPEG quality ~0.8 to keep payload small (<~150KB)
        const dataUrl = canvas.toDataURL("image/jpeg", 0.8);
        setCoverDataUrl(dataUrl);
      };
      img.src = reader.result;
    };
    reader.readAsDataURL(file);
  };
  return (
    <div className="max-w-lg   mx-auto md:p-6 p-3 bg-white rounded-lg shadow-md">
      <h2 className="text-2xl font-bold text-gray-800 mb-4">Add New Book</h2>

      {/* Form starts here */}
      <form onSubmit={handleSubmit(onSubmit)} className="">
        {/* Reusable Input Field for Title */}
        <InputField
          label="Title"
          name="title"
          placeholder="Enter book title"
          register={register}
        />

        {/* Reusable Textarea for Description */}
        <InputField
          label="Description"
          name="description"
          placeholder="Enter book description"
          type="textarea"
          register={register}
        />

        {/* Review Textarea */}
        <InputField
          label="Review"
          name="review"
          placeholder="Write a short review/thoughts about the book"
          type="textarea"
          register={register}
        />

        {/* Reusable Select Field for Category */}
        <SelectField
          label="Category"
          name="category"
          options={[
            { value: "", label: "Choose A Category" },
            { value: "business", label: "Business" },
            { value: "technology", label: "Technology" },
            { value: "fiction", label: "Fiction" },
            { value: "horror", label: "Horror" },
            { value: "adventure", label: "Adventure" },
            { value: "books", label: "Books" },
            // Add more options as needed
          ]}
          register={register}
        />

        {/* Trending Checkbox */}
        <div className="mb-4">
          <label className="inline-flex items-center">
            <input
              type="checkbox"
              {...register("trending")}
              className="rounded text-blue-600 focus:ring focus:ring-offset-2 focus:ring-blue-500"
            />
            <span className="ml-2 text-sm font-semibold text-gray-700">
              Trending
            </span>
          </label>
        </div>

        {/* Old Price */}
        <InputField
          label="Old Price"
          name="oldPrice"
          type="number"
          placeholder="Old Price"
          register={register}
        />

        {/* New Price */}
        <InputField
          label="New Price"
          name="newPrice"
          type="number"
          placeholder="New Price"
          register={register}
        />

        {/* Cover Image */}
        <div className="mb-4">
          <label className="block text-sm font-semibold text-gray-700 mb-2">
            Cover Image
          </label>
          {/* Upload (auto crop to 3:4 + compress) */}
          <input
            type="file"
            accept="image/*"
            onChange={(e) => handleUpload(e.target.files?.[0])}
            className="mb-3 w-full"
          />
          {/* Or choose from gallery */}
          <div className="mb-2">
            <span className="text-sm text-gray-500">or select from gallery</span>
            <select
              value={selectedCover}
              onChange={(e) => setSelectedCover(e.target.value)}
              className="w-full border rounded p-2 mt-1"
            >
              {galleryOptions.map((name) => (
                <option key={name} value={name}>{name}</option>
              ))}
            </select>
          </div>
          <div className="mt-3 flex items-center gap-3">
            <img
              src={coverDataUrl || `${getImgUrl(selectedCover)}`}
              alt="Preview"
              className="h-48 w-32 object-cover rounded border"
            />
            <p className="text-sm text-gray-500">Preview (auto 3:4)</p>
          </div>
        </div>

        {/* Submit Button */}
        <button
          type="submit"
          className="w-full py-2 bg-green-500 text-white font-bold rounded-md"
        >
          {isLoading ? (
            <span className="">Adding.. </span>
          ) : (
            <span>Add Book</span>
          )}
        </button>
      </form>
    </div>
  );
};

export default AddBook;
