import { NavLink } from "react-router-dom";

const Navbar = () => {
  const links = [
    {
      text: "Dashboard",
      path: "/app/dashboard",
    },
    {
      text: "Settings",
      path: "/app/settings",
    },
  ];

  return (
    <nav>
      <ul>
        {links.map((link) => {
          return (
            <li key={link.text}>
              <NavLink to={link.path}>{link.text}</NavLink>
            </li>
          );
        })}
      </ul>
    </nav>
  );
};

export default Navbar;
