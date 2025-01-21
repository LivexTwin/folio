import Link from "next/link";
import ToggleSwitch from "./ToggleSwitch";
import { NavMenu } from "./NavMenu";
import { navItems } from "utils/navData";

export function Navbar() {
  return (
    <aside className="-ml-[8px] mb-16 tracking-tight">
      <div className="lg:sticky lg:top-20">
        <nav
          className="flex flex-row items-center justify-between relative px-0 pb-0 fade md:overflow-auto scroll-pr-6 md:relative"
          id="nav"
        >
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

          <div className="ml-auto flex items-center gap-4">
            <ToggleSwitch />
            <NavMenu />
          </div>
        </nav>
      </div>
    </aside>
  );
}
