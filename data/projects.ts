// data/projects.ts
export type Project = {
  id: number;
  title: string;
  description: string;
  overview: string;
  tech: string[]; // Tech stack
  designTools: string[]; // Design tools (e.g., Blender, Adobe Illustrator, CapCut)
  designOverview: string; // Brief overview of your design process and what tools you used
  role: string;
  url: string;
  githubUrl?: string; // Add optional GitHub URL
  liveSiteUrl?: string; // Add optional Live Site URL
  slug: string;
  image: string;
  mobileImage: string;
  isFeatured: boolean;
  isUnderConstruction: boolean;
};

export const projects: Project[] = [
  {
    id: 1,
    title: "vlssh0p.com",
    description:
      "I developed a headless Shopify storefront, focusing on creating a seamless and customizable e-commerce experience.",
    overview:
      "Designed and developed a custom storefront for vlssh0p.com using Nuxt 3. Starting with an engaging 'Enter Shop' page, I opted for a headless approach for maximum customization, using GraphQL for querying and Pinia for state management to ensure a seamless shopping experience.",
    tech: ["Nuxt 3", "GraphQL", "Shopify Storefront API", "Pinia"],
    designTools: ["Blender", "Adobe Illustrator", "CapCut"],
    designOverview:
      "For the design, I created a 3D spinning logo using Blender, designed the t-shirt mockup in Adobe Illustrator, and produced the site background video with CapCut. These design elements helped establish the branding for vlssh0p.com.",
    role: "Design, Frontend and Backend",
    url: "/projects/vlssh0p",
    githubUrl: "https://github.com/LivexTwin/vls-shop", // Add your GitHub URL
    liveSiteUrl: "https://vlssh0p.com", // Add your live site URL
    slug: "vlssh0p",
    image: "/images/vls_large.jpg",
    mobileImage: "/images/vls_mobile.png",
    isFeatured: true,
    isUnderConstruction: false,
  },
  {
    id: 2,
    title: "This Website",
    description:
      "My portfolio focuses on minimalist design, clean typography, and subtle animations to create a visually engaging experience.",
    overview:
      "This portfolio project focuses on a clean, responsive, and visually appealing design. Built with Next.js and styled using Tailwind CSS, it incorporates Framer Motion for smooth animations and Markdown for content management. The goal was to create a site that effectively showcases my skills and projects while offering a great user experience.",
    tech: ["Next.js", "Tailwind CSS", "MDX", "Framer Motion"],
    designTools: ["Figma", "Adobe Illustrator", "After Effects"],
    designOverview:
      "For this portfolio, I focused on a minimalist design, using Figma for wireframing and layout design, and Adobe Illustrator for creating vector assets. After Effects was used for subtle animations to enhance the user experience.",
    role: "Frontend Developer and Animator",
    url: "/projects/this-website",
    githubUrl: "https://github.com/yourusername/portfolio", // Add your GitHub URL
    liveSiteUrl: "https://yourportfolio.com", // Add your live site URL
    slug: "this-website",
    image: "/images/vlssh0p-desktop.png",
    mobileImage: "/images/vlssh0p-mobile.png",
    isFeatured: false,
    isUnderConstruction: true,
  },
  {
    id: 3,
    title: "Yxngrod.com",
    description:
      "A personal rap portfolio showcasing the artist’s recent work. I designed the branding to reflect their identity while ensuring easy navigation for fans.",
    overview:
      "Yxngrod.com was a collaborative effort to highlight the artist's creative work. I focused on creating a cohesive brand identity and implemented a design that was bold and interactive. The website includes custom features like a music player, embedded videos, and a visually striking layout. Technologies like Vite, Vue, and Blender were used to bring the concept to life.",
    tech: ["Vite", "Vue", "Node.js", "Vanilla CSS"],
    designTools: ["Blender", "Adobe Illustrator", "CapCut"],
    designOverview:
      "I used Blender to create the 3D extruded logo and applied a custom background image in the World settings. The branding was designed in Adobe Illustrator, and the background video was created with CapCut.",
    role: "Graphic Designer, Frontend and Backend",
    url: "/projects/yxngrod",
    githubUrl: "https://github.com/LivexTwin/yxngrod2.0", // Add your GitHub URL
    liveSiteUrl: "https://yxngrod.com", // Add your live site URL
    slug: "yxngrod",
    image: "/images/yxngrod_large.jpg",
    mobileImage: "/images/yxngrod_mobile.png",
    isFeatured: false,
    isUnderConstruction: false,
  },
];
