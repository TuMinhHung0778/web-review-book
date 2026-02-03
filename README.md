# Book Review Website

<p align="center">
  <img src="book-store-mern-project/frontend/public/fav-icon.png" alt="Book Store Logo" width="80" height="80" />
</p>

<p align="center">
  <strong>A full-stack book marketplace platform</strong> featuring comprehensive User and Admin dashboards, cart management, and secure checkout flows.
</p>

<p align="center">
  <a href="https://github.com/TuMinhHung0778/web-review-book">
    <img src="https://img.shields.io/badge/GitHub-Repository-181717?style=for-the-badge&logo=github" alt="GitHub" />
  </a>
  <a href="https://www.figma.com/design/A4mA8qvYJpWyaXKkpnJcCr/Book-Store--Community-?node-id=491-776&t=uYwBFLoL9QVb8kXi-0">
    <img src="https://img.shields.io/badge/Figma-Design-F24E1E?style=for-the-badge&logo=figma" alt="Figma" />
  </a>
</p>

---

## Overview

**Book Review Website** is a production-ready MERN (MongoDB, Express, React, Node.js) e-commerce application designed for book lovers. The platform provides a seamless shopping experience with role-based access control, real-time cart management, and an intuitive admin dashboard for content management.

### Key Highlights

- **Dual Authentication**: Firebase Auth (Email/Password & Google Sign-In) for users, JWT for Admin
- **Role-Based Access**: Separate User and Admin dashboards with protected routes
- **Full E-Commerce Flow**: Browse → Cart → Checkout → Order tracking
- **Admin Content Management**: Add, edit, delete books with real-time statistics
- **Modern Stack**: Built with React 19, Redux Toolkit, RTK Query, and Vite

---

## Features

### User Features

| Feature               | Description                                                 |
| --------------------- | ----------------------------------------------------------- |
| **Authentication**    | Email/Password & Google Sign-In via Firebase Auth           |
| **Top Sellers**       | Category-filtered book carousel with genre selection        |
| **Recommended Books** | Personalized book recommendations                           |
| **Cart Management**   | Add, remove, clear cart items with localStorage persistence |
| **Checkout**          | Cash on Delivery with form validation (React Hook Form)     |
| **Order History**     | View past orders filtered by user email                     |
| **User Dashboard**    | Personalized order management interface                     |

### Admin Features

| Feature                 | Description                                           |
| ----------------------- | ----------------------------------------------------- |
| **Admin Login**         | JWT-secured authentication with bcrypt                |
| **Dashboard Analytics** | Total sales, orders, products, trending books metrics |
| **Revenue Chart**       | Monthly sales visualization (Chart.js)                |
| **Add New Book**        | Create books with cover image, pricing, category      |
| **Manage Books**        | Full CRUD operations (Create, Read, Update, Delete)   |
| **Edit Book**           | Update book details with form validation              |

---

## Tech Stack

### Frontend

| Technology          | Purpose                             |
| ------------------- | ----------------------------------- |
| **React 19**        | UI component library                |
| **Vite 7**          | Build tool & dev server             |
| **Redux Toolkit**   | Global state management             |
| **RTK Query**       | Server state & API caching          |
| **React Router v7** | Client-side routing                 |
| **Firebase Auth**   | User authentication (Email, Google) |
| **Tailwind CSS**    | Utility-first styling               |
| **Swiper**          | Touch-enabled carousels             |
| **Chart.js**        | Revenue & analytics charts          |
| **React Hook Form** | Form validation                     |
| **SweetAlert2**     | Toast notifications                 |
| **Axios**           | HTTP client                         |

### Backend

| Technology    | Purpose                       |
| ------------- | ----------------------------- |
| **Node.js**   | Runtime environment           |
| **Express 5** | Web framework                 |
| **MongoDB**   | Database                      |
| **Mongoose**  | ODM                           |
| **JWT**       | Admin authentication          |
| **bcrypt**    | Password hashing              |
| **CORS**      | Cross-origin resource sharing |

### DevOps & Deployment

- **Vercel** – Frontend & Backend hosting

---

## Project Structure

```
book-store-mern-project/
├── backend/                    # Node.js + Express API
│   ├── src/
│   │   ├── books/             # Book CRUD (controller, model, routes)
│   │   ├── orders/            # Order management
│   │   ├── users/             # Admin auth
│   │   ├── stats/             # Admin dashboard statistics
│   │   └── middleware/        # JWT verification
│   ├── scripts/               # Seed scripts
│   ├── index.js               # Entry point
│   └── vercel.json            # Vercel config
│
└── frontend/                   # React SPA
    ├── src/
    │   ├── components/        # Reusable UI (Login, Register, Navbar, Footer)
    │   ├── context/           # AuthContext (Firebase)
    │   ├── firebase/          # Firebase config
    │   ├── pages/             # Page components
    │   │   ├── home/          # Banner, TopSellers, Recommended, News
    │   │   ├── books/         # SingleBook, Cart, Checkout, Order
    │   │   └── dashboard/     # Admin: Dashboard, AddBook, ManageBooks
    │   ├── redux/             # Store, slices, RTK Query APIs
    │   ├── routers/           # PrivateRoute, AdminRoute
    │   └── utils/             # baseURL, getImgUrl
    ├── public/
    └── vercel.json
```

---

## API Endpoints

### Books

| Method | Endpoint                 | Description       | Auth        |
| ------ | ------------------------ | ----------------- | ----------- |
| GET    | `/api/books`             | Fetch all books   | Public      |
| GET    | `/api/books/:id`         | Fetch single book | Public      |
| POST   | `/api/books/create-book` | Create book       | Admin (JWT) |
| PUT    | `/api/books/edit/:id`    | Update book       | Admin (JWT) |
| DELETE | `/api/books/:id`         | Delete book       | Admin (JWT) |

### Orders

| Method | Endpoint                   | Description              |
| ------ | -------------------------- | ------------------------ |
| POST   | `/api/orders`              | Create order             |
| GET    | `/api/orders/email/:email` | Get orders by user email |

### Auth & Admin

| Method | Endpoint          | Description               |
| ------ | ----------------- | ------------------------- | ----------- |
| POST   | `/api/auth/admin` | Admin login (returns JWT) |
| GET    | `/api/admin`      | Admin dashboard stats     | Admin (JWT) |

---

## Getting Started

### Prerequisites

- **Node.js** >= 18.x
- **MongoDB** (local or Atlas)
- **Firebase** project (for user auth)
- **npm** or **yarn**

### Installation

1. **Clone the repository**

   ```bash
   git clone https://github.com/TuMinhHung0778/web-review-book.git
   cd web-review-book/book-store-mern-project
   ```

2. **Backend setup**

   ```bash
   cd backend
   npm install
   ```

3. **Create `.env` in backend**

   ```env
   PORT=5000
   DB_URL=mongodb+srv://<user>:<password>@cluster.mongodb.net/book-store
   JWT_SECRET_KEY=your-secret-key
   ```

4. **Frontend setup**

   ```bash
   cd ../frontend
   npm install
   ```

5. **Create `.env` in frontend** (Firebase config)
   ```env
   VITE_API_KEY=your-firebase-api-key
   VITE_Auth_Domain=your-project.firebaseapp.com
   VITE_PROJECT_ID=your-project-id
   VITE_STORAGE_BUCKET=your-project.appspot.com
   VITE_MESSAGING_SENDERID=your-sender-id
   VITE_APPID=your-app-id
   VITE_MEASUREMENT_ID=G-XXXXXXXXXX
   ```

### Running Locally

1. **Start backend**

   ```bash
   cd backend
   npm run start
   # or: npm run start:dev  (with nodemon)
   ```

2. **Start frontend**

   ```bash
   cd frontend
   npm run dev
   ```

3. **Access**
   - Frontend: http://localhost:5173
   - Backend: http://localhost:5000

### Build for Production

```bash
# Frontend
cd frontend && npm run build

# Backend: ensure .env is configured, then:
cd backend && npm start
```

---

## Configuration

### Base URL

Update `frontend/src/utils/baseURL.js` for production:

```javascript
// Local
return "http://localhost:5000";

// Production (Vercel)
return "https://book-review-backend-teal.vercel.app";
```

### CORS

Backend CORS is configured for `http://localhost:5173`. For production, update `backend/index.js`:

```javascript
app.use(
  cors({
    origin: ["https://your-frontend.vercel.app"],
    credentials: true,
  }),
);
```

---

## Deployment (Vercel)

Both frontend and backend include `vercel.json` for deployment:

- **Frontend**: SPA rewrite to `index.html`
- **Backend**: Node.js serverless function

Ensure environment variables are set in Vercel project settings.

---

## Design

UI design: [Figma – Book Store Community](https://www.figma.com/design/A4mA8qvYJpWyaXKkpnJcCr/Book-Store--Community-?node-id=491-776&t=uYwBFLoL9QVb8kXi-0)

---

## License

This project is open source and available under the [MIT License](LICENSE).

---

<p align="center">
  Built with ❤️ using React, Node.js, MongoDB & Firebase
</p>
