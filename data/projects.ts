// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "vlssh0p.com",
    description:
      "I developed a headless Shopify storefront, focusing on creating a seamless and customizable e-commerce experience.",
    overview:
      "This project involved designing and developing a completely custom storefront for vlssh0p.com. I utilized Nuxt 3 for building the frontend, integrated Shopify Storefront API for seamless e-commerce functionality, and managed state using Pinia. The challenge was creating a responsive and fast user experience while keeping the design modern and user-friendly.",
    tech: ["Nuxt 3", "GraphQL", "Shopify Storefront API", "Pinia"],
    role: "Design, Frontend and Backend",
    url: "/projects/vlssh0p",
    slug: "vlssh0p",
    image: "/images/vls_large.png",
    mobileImage: "/images/vls_mobile.png",
    isFeatured: true,
  },
  {
    id: 2,
    title: "This Website",
    description:
      "My portfolio focuses on minimalist design, clean typography, and subtle animations to create a visually engaging experience.",
    overview:
      "This portfolio project focuses on a clean, responsive, and visually appealing design. Built with Next.js and styled using Tailwind CSS, it incorporates Framer Motion for smooth animations and Markdown for content management. The goal was to create a site that effectively showcases my skills and projects while offering a great user experience.",
    tech: ["Next.js", "Tailwind CSS", "Markdown", "Framer Motion"],
    role: "Frontend Developer and Animator",
    url: "/projects/this-website",
    slug: "this-website",
    image: "/images/vlssh0p-desktop.png",
    mobileImage: "/images/vlssh0p-mobile.png",
    isFeatured: false,
  },
  {
    id: 3,
    title: "Yxngrod.com",
    description:
      "A personal rap portfolio showcasing the artist’s recent work. I designed the branding to reflect their identity while ensuring easy navigation for fans.",
    overview:
      "Yxngrod.com was a collaborative effort to highlight the artist's creative work. I focused on creating a cohesive brand identity and implemented a design that was bold and interactive. The website includes custom features like a music player, embedded videos, and a visually striking layout. Technologies like Vite, Vue, and Blender were used to bring the concept to life.",
    tech: ["Vite", "Vue", "Blender", "Adobe Illustrator"],
    role: "Graphic Designer, Frontend and Backend",
    url: "/projects/yxngrod",
    slug: "yxngrod",
    image: "/images/yxngrod_large.png",
    mobileImage: "/images/yxngrod_mobile.png",
    isFeatured: false,
  },
];
