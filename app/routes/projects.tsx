import { Outlet, NavLink } from "@remix-run/react";
import Blogs from "./blogs";

export default function Projects() {
  return (
    <div>
    <NavLink
      to='/'
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Home Page
    </NavLink>
    <p> </p>
    <NavLink
      to='/projects'
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Projects
    </NavLink>
    <p> </p>
    <NavLink
      to='/blogs'
      className={({ isActive, isPending }) =>
        isPending ? "pending" : isActive ? "active" : ""
      }
    >
      Blogs
    </NavLink>
    <Outlet />
  </div>
  );
}
