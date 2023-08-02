import type { V2_MetaFunction } from "@remix-run/node";
import { Outlet, NavLink } from "@remix-run/react";

export const meta: V2_MetaFunction = () => {
  return [
    { title: "New Remix App" },
    { name: "description", content: "Welcome to Remix!" },
  ];
};

export default function Index() {
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
