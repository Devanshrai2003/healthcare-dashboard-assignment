import { MagnifyingGlassIcon } from "@heroicons/react/24/outline";
import { BellIcon, PlusIcon } from "@heroicons/react/24/solid";
import "./Header.css";
export function Header() {
  return (
    <header className="header">
      <div className="header-left">
        <div className="search-bar">
          <MagnifyingGlassIcon className="icon search" />
          <input type="text" placeholder="Search" />
        </div>
        <button className="notification">
          <BellIcon className="icon" />
        </button>
      </div>
      <div className="header-right">
        <div className="user-profile">
          <img
            src="/assets/images/avatar-removebg-preview.png"
            alt="User avatar"
            className="avatar"
          />
        </div>
        <button className="add-button">
          <PlusIcon className="icon" />
        </button>
      </div>
    </header>
  );
}
