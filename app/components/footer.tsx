import Link from "next/link";
import Icons from "./Icons";

function ArrowIcon() {
  return (
    <svg
      xmlns="http://www.w3.org/2000/svg"
      viewBox="0 0 24 24"
      width="12"
      height="12"
      fill="currentColor"
    >
      <path
        fillRule="evenodd"
        d="M8.25 3.75H19.5a.75.75 0 0 1 .75.75v11.25a.75.75 0 0 1-1.5 0V6.31L5.03 20.03a.75.75 0 0 1-1.06-1.06L17.69 5.25H8.25a.75.75 0 0 1 0-1.5Z"
      />
    </svg>
  );
}

export default function Footer() {
  return (
    <footer className="pb-8 px-[24px] pt-8 ">
      <div className="my-container mx-auto">
        <div className="grid grid-cols-2 lg:grid-cols-3 gap-8">
          {/* Connect Section */}
          <div>
            <h3 className="font-semibold mb-4">Connect</h3>
            <ul className="space-y-3">
              <li>
                <a
                  href="https://github.com/LivexTwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-style flex items-center"
                >
                  <ArrowIcon />
                  <span className="ml-2">Github</span>
                </a>
              </li>
              <li>
                <a
                  href="https://x.com/livestartwin"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-style flex items-center"
                >
                  <ArrowIcon />
                  <span className="ml-2">X</span>
                </a>
              </li>
              <li>
                <a
                  href="https://www.linkedin.com/in/anthony-barahona-779287313/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="link-style flex items-center"
                >
                  <ArrowIcon />
                  <span className="ml-2">LinkedIn</span>
                </a>
              </li>
            </ul>
          </div>

          {/* More Section */}
          <div>
            <h3 className="font-semibold  mb-4">More</h3>
            <ul className="space-y-3">
              <li>
                <Link href="/uses" className="link-style">
                  Uses
                </Link>
              </li>
              <li>
                <Link href="/blog" className="link-style">
                  Blog
                </Link>
              </li>
              <li>
                <Link href="/projects" className="link-style">
                  Projects
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div>
            <h3 className="font-semibold  mb-4">Contact</h3>
            <p className="pb-4">
              Email:{" "}
              <Link
                href="mailto:hello@a-is-lt.com"
                className="link-style whitespace-nowrap"
              >
                hello@a-is-lt.com
              </Link>
            </p>
            <span className="hidden lg:flex gap-4">
              <Icons />
            </span>
          </div>

          <div className="lg:hidden">
            <Icons />
          </div>
        </div>

        {/* Footer Bottom */}
        <div className="mt-8 text-center text-sm uppercase ">
          <p>© {new Date().getFullYear()} a-is-lt.com</p>
        </div>
      </div>
    </footer>
  );
}
