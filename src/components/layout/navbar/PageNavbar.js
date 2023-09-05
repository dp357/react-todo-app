import { NavLink } from "react-router-dom";

const PageNavbar = () => {
  const links = [
    {
      text: "Home",
      path: "/",
    },
    {
      text: "About",
      path: "/about",
    },
    {
      text: "Login",
      path: "/login",
    },
    {
      text: "Sign up",
      path: "/signup",
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

export default PageNavbar;
