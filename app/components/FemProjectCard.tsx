import RightArrowIcon from "./RightArrowIcon";

const FemProjectCard = () => {
  const FrontendMentorIcon = () => (
    <svg
      className="w-14 h-14 fill-neutral-800 dark:fill-neutral-600 mx-auto mb-8 md:mb-0"
      viewBox="0 0 24 24"
      role="img"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path d="M12.17 1.272a.732.732 0 0 0-.718.732v13.914a.732.732 0 0 0 .732.732.732.732 0 0 0 .732-.732V2.004a.732.732 0 0 0-.745-.732zM23.246 5.44a.734.734 0 0 0-.277.063l-6.282 2.804a.733.733 0 0 0 0 1.336l6.282 2.813a.738.738 0 0 0 .3.065.732.732 0 0 0 .297-1.4L18.78 8.976l4.786-2.137a.734.734 0 0 0 .37-.966.734.734 0 0 0-.69-.433zm-22.5 5.032a.732.732 0 0 0-.722.915c1.736 6.677 7.775 11.341 14.683 11.341a.732.732 0 0 0 0-1.464A13.706 13.706 0 0 1 1.44 11.02a.732.732 0 0 0-.694-.547z" />
    </svg>
  );

  return (
    <div className="project-card p-4 flex flex-col justify-between">
      <a
        href="https://github.com/LivexTwin/frontend-mentor-projects"
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="flex justify-between items-center">
          <h2 className="text-xl font-light uppercase mb-2">Frontend Mentor</h2>
        </div>

        <p className="mb-5 lg:text-base text-neutral-700 dark:text-neutral-400 ">
          A collection of 13 Frontend Mentor challenges I completed. View the
          source code inside the monorepo.
        </p>
      </a>

      {/* Container for "Made with" and "Role" sections */}
      <FrontendMentorIcon />

      <a
        className="flex items-center gap-2 hover:underline"
        href="https://github.com/yourusername/monorepo"
        target="_blank"
        rel="noopener noreferrer"
      >
        <p className="font-medium uppercase">Explore more projects</p>
        <RightArrowIcon />
      </a>
    </div>
  );
};

export default FemProjectCard;
