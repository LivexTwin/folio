import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { NavMenu } from "./NavMenu";
import { navItems } from "utils/navData";

export function Navbar() {
  return (
    <aside>
      <nav
        className="min-h-[64px] md:my-container lg:p-0 lg:max-w-[75rem] mx-auto flex flex-row items-center px-[24px] rounded-lg  bg-white dark:bg-black justify-between tracking-tight "
        id="nav"
      >
        <div>
          <Link href="/" aria-label="Go to homepage">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="40"
              height="30"
              fill="currentColor"
              zoomAndPan="magnify"
              preserveAspectRatio="xMidYMid meet"
              version="1.0"
              viewBox="154.93 173.73 67.76 28.32"
              className="cursor-pointer svg-icon"
            >
              <path
                d="M 171.683594 196.484375 L 171.683594 202.050781 L 154.933594 202.050781 L 157.378906 199.605469 L 157.378906 176.179688 L 154.933594 173.730469 L 164.148438 173.730469 L 161.699219 176.179688 L 161.699219 199.746094 L 168.46875 199.746094 Z M 171.683594 196.484375 "
                fillRule="nonzero"
              />
              <path
                d="M 190.660156 186.082031 L 187.554688 176.601562 L 187.441406 176.601562 L 184.335938 186.082031 L 174.460938 186.082031 L 174.460938 186.195312 L 182.445312 191.980469 L 179.3125 201.519531 L 179.398438 201.546875 L 187.5 195.679688 L 195.597656 201.546875 L 195.683594 201.519531 L 192.550781 191.980469 L 200.539062 186.195312 L 200.539062 186.082031 Z M 190.660156 186.082031 "
                fillRule="nonzero"
              />
              <path
                d="M 214.722656 199.605469 L 217.125 202.050781 L 207.957031 202.050781 L 210.402344 199.605469 L 210.402344 176.035156 L 205.601562 176.035156 L 202.386719 179.300781 L 202.386719 173.730469 L 222.691406 173.730469 L 222.691406 179.300781 L 219.476562 176.035156 L 214.722656 176.035156 Z M 214.722656 199.605469 "
                fillRule="nonzero"
              />
            </svg>
          </Link>
        </div>

        <div className="ml-auto flex items-center gap-4">
          <ul className="sm:flex flex-row space-x-0 pr-10 hidden ">
            {Object.entries(navItems).map(([path, { name }]) => (
              <li key={path} className="m-1">
                <Link
                  href={path}
                  className="link-style flex align-middle relative py-1 px-2"
                >
                  {name}
                </Link>
              </li>
            ))}
          </ul>
          <ToggleSwitch />
          <NavMenu />
        </div>
      </nav>
    </aside>
  );
}
