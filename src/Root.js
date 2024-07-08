import { Outlet } from "react-router-dom";
import NavBar from "./components/NavBar";

// This component will render on load.
export default function Root() {
  return (
    // Note: `className` props throughout this app leverage Tailwind CSS, an optional dependency.
    <div >
      {/* A <nav> component that links out to /, /teas, and /about. */}
      <NavBar />
      {/* Nested routes will render right here. */}
      <Outlet />
      {/* This <footer> will render below every route. */}
      <footer >&copy; Pedro Vincenty</footer>
    </div>
  );
}
