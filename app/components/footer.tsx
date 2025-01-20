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
    <footer className="mb-6">
      <ul className="font-sm mt-8 flex flex-col space-x-0 space-y-2 text-neutral-600 md:flex-row md:space-x-4 md:space-y-0 dark:text-neutral-300">
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://github.com/LivexTwin"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">github</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://x.com/livestartwin"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">twitter</p>
          </a>
        </li>
        <li>
          <a
            className="flex items-center transition-all hover:text-neutral-800 dark:hover:text-neutral-100"
            rel="noopener noreferrer"
            target="_blank"
            href="https://www.linkedin.com/in/anthony-barahona-779287313/"
          >
            <ArrowIcon />
            <p className="ml-2 h-7">linkedin</p>
          </a>
        </li>
      </ul>
      <p className="mt-8 text-neutral-600 dark:text-neutral-300 uppercase">
        © {new Date().getFullYear()} a-is-lt.com
      </p>
    </footer>
  );
}
