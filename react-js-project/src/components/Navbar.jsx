import { navlinks, logo } from "./data";

const Navbar = () => {
  return (
    <nav className="flex items-center text-white justify-between">
      <div className="logo text-2xl">
        {logo.map((logoItem, index) => (
          <h1 key={index} className="uppercase">{logoItem.name}</h1>
        ))}
      </div>
      <ul className="nav-links flex gap-4 font-[600] uppercase">
        {navlinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>

      <div className="text-xl flex gap-5 items-center justify-center">
      <i className="ri-user-smile-line cursor-pointer"></i>
      <i className="ri-menu-fill cursor-pointer"></i>
      </div>
    </nav>
  );
};

export default Navbar;


