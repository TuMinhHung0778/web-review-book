import React, { useEffect } from "react";
import { FiShoppingCart } from "react-icons/fi";
import { FaQuoteLeft, FaStar } from "react-icons/fa";
import { useParams } from "react-router-dom";

import { getImgUrl } from "../../utils/getImgUrl";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/booksApi";

const SingleBook = () => {
  const { id } = useParams();
  const { data: book, isLoading, isError } = useFetchBookByIdQuery(id);

  useEffect(() => {
    // Always scroll to top when entering this page or switching books
    window.scrollTo({ top: 0, behavior: "smooth" });
  }, [id]);

  const dispatch = useDispatch();

  const handleAddToCart = (product) => {
    dispatch(addToCart(product));
  };

  if (isLoading) return <div>Loading...</div>;
  if (isError) return <div>Error happending to load book info</div>;
  return (
    <div className="container mx-auto px-4 md:px-0">
      <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
        {/* Left: Book info */}
        <div className="max-w-lg shadow-md p-5">
          <h1 className="text-2xl font-bold mb-6">{book.title}</h1>

          <div>
            <div>
              <img
                src={`${getImgUrl(book.coverImage)}`}
                alt={book.title}
                className="mb-8"
              />
            </div>

            <div className="mb-5">
              <p className="text-gray-700 mb-2">
                <strong>Author:</strong> {book.author || "admin"}
              </p>
              <p className="text-gray-700 mb-4">
                <strong>Published:</strong>{" "}
                {new Date(book?.createdAt).toLocaleDateString()}
              </p>
              <p className="text-gray-700 mb-4 capitalize">
                <strong>Category:</strong> {book?.category}
              </p>
              <p className="text-gray-700">
                <strong>Description:</strong> {book.description}
              </p>
            </div>

            <button
              onClick={() => handleAddToCart(book)}
              className="btn-primary px-6 space-x-1 flex items-center gap-1 "
            >
              <FiShoppingCart className="" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>

        {/* Right: Review panel */}
        <aside className="w-full h-fit">
          {/* Gradient frame */}
          <div className="p-[1px] rounded-2xl bg-gradient-to-r from-blue-500/40 via-indigo-500/40 to-purple-500/40">
            <div className="relative rounded-2xl bg-white/80 backdrop-blur p-6 shadow-md overflow-hidden">
              {/* animated glow */}
              <div className="pointer-events-none absolute -top-10 -right-10 h-32 w-32 rounded-full bg-blue-200/40 blur-3xl" />

              <div className="flex items-center gap-3 mb-4">
                <span className="inline-flex items-center justify-center w-10 h-10 rounded-xl bg-blue-600 text-white shadow-md animate-[pulse_2s_ease-in-out_infinite]">
                  <FaQuoteLeft />
                </span>
                <h2 className="text-xl font-semibold text-gray-800">Review</h2>
              </div>

              {/* Stars (decorative) */}
              <div className="flex items-center gap-1 text-yellow-400 mb-3">
                {Array.from({ length: 5 }).map((_, i) => (
                  <FaStar key={i} />
                ))}
                <span className="ml-2 text-xs text-gray-500">Community rating</span>
              </div>

              {book?.review && book.review.trim().length > 0 ? (
                <blockquote className="rounded-xl bg-white/70 p-5 border border-blue-100">
                  <p className="text-gray-800 leading-relaxed whitespace-pre-wrap break-words hyphens-auto">
                    {book.review}
                  </p>
                </blockquote>
              ) : (
                <p className="text-gray-500 italic">No review available for this book.</p>
              )}
            </div>
          </div>
        </aside>
      </div>
    </div>
  );
};

export default SingleBook;
