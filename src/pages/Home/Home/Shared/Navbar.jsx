import logo from "../../../../assets/logo.svg";
import { Link } from "react-router-dom";

const Navbar = () => {
  const navItems = (
    <>
      <li>
        <Link to={'/'}>Home</Link>
      </li>
      <li>
        <Link to={'/about'}>About</Link>
      </li>
      <li>
        <Link to={'/services'}>Services</Link>
      </li>
      <li>
        <Link to={'/blog'}>Blog</Link>
      </li>
      <li>
        <Link to={'/contact'}>Contact</Link>
      </li>
    </>
  );

  return (
    <div className="navbar h-28 mb-3 bg-base-100">
      <div className="navbar-start">
        <div className="dropdown">
          <label tabIndex={0} className="btn btn-ghost lg:hidden">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="h-5 w-5"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M4 6h16M4 12h8m-8 6h16"
              />
            </svg>
          </label>
          <ul
            tabIndex={0}
            className="menu menu-compact dropdown-content mt-3 p-2 shadow bg-base-100 rounded-box w-52"
          >
            {navItems}
          </ul>
        </div>
        <Link to={"/"} className="btn btn-ghost normal-case text-xl">
          <img className="w-24 h-20" src={logo} alt="" />
        </Link>
      </div>
      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">{navItems}</ul>
      </div>
      <div className="navbar-end">
        <div className="indicator">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            height="512"
            viewBox="0 0 512 512"
            id="bag"
          >
            <path d="M448 160h-64v-4.5C384 87 329 32 260.5 32h-8C184 32 128 87 128 155.5v4.5H64L32 480h448l-32-320zm-288-4.5c0-50.7 41.8-91.5 92.5-91.5h8c50.7 0 91.5 40.8 91.5 91.5v4.5H160v-4.5zM67.8 448l24.9-256H128v36.3c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7V192h192v36.3c-9.6 5.5-16 15.9-16 27.7 0 17.7 14.3 32 32 32s32-14.3 32-32c0-11.8-6.4-22.2-16-27.7V192h35.4l24.9 256H67.8z"></path>
          </svg>
          <span className="badge badge-xs badge-primary indicator-item"></span>
        </div>
        <button className="btn btn-ghost btn-circle">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            className="h-5 w-5"
            fill="none"
            viewBox="0 0 24 24"
            stroke="currentColor"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
            />
          </svg>
        </button>
        <button className="btn btn-outline btn-secondary">Appointment</button>
      </div>
    </div>
  );
};

export default Navbar;
