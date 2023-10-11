import { navlinks, logo } from "./data";

const Navbar = () => {
  return (
    <nav className="flex items-center justify-between">
      <div className="logo">
        {logo.map((logoItem, index) => (
          <h1 key={index} className="uppercase">{logoItem.name}</h1>
        ))}
      </div>
      <ul className="nav-links flex gap-4 uppercase">
        {navlinks.map((link, index) => (
          <li key={index}>
            <a href={link.url}>{link.name}</a>
          </li>
        ))}
      </ul>
    </nav>
  );
};

export default Navbar;


