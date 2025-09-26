import { Outlet } from "react-router-dom";
import "./App.css";
import Navbar from "./components/Navbar";

function App() {
  return (
    <div className="min-h-screen flex flex-col">
      <Navbar />
      <main className="flex-1 max-w-screen-2xl mx-auto px-4 py-6 font-primary">
        <Outlet />
      </main>
      <footer className="mt-auto">Footer</footer>
    </div>
  );
}

export default App;
