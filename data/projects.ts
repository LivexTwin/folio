// data/projects.ts
export const projects = [
  {
    id: 1,
    title: "vlssh0p.com",
    description:
      "I developed a headless Shopify storefront, focusing on creating a seamless and customizable e-commerce experience. The project allowed me to explore Shopify's Storefront API and integrate dynamic features.",
    tech: ["Nuxt 3", "GraphQL", "Shopify Storefront API", "Pinia"],
    role: "Design, Frontend and Backend",
    url: "/projects/vlssh0p",
    isFeatured: true, // Add the isFeatured property here
  },
  {
    id: 2,
    title: "This Website",
    description:
      "This portfolio website features a minimalist design with clean typography. The simple layout and subtle animations highlight my work, offering a visually engaging experience.",
    tech: ["Next.js", "Tailwind CSS", "Markdown, Framer Motion"],
    role: "Frontend Developer and Animator",
    url: "/projects/portfolio-website",
    isFeatured: false, // Set this to false if not featured
  },
  {
    id: 3,
    title: "Yxngrod.com",
    description:
      "A personal rap portfolio website that features the artist's music, videos, and bio. I worked on the branding and crafted a design that reflects the artist’s identity while making the content easy to navigate for fans.",
    tech: ["Vite, Vue, Blender, Adobe Illustrator"],
    role: "Graphic Designer, Frontend and Backend",
    url: "/projects/blog-app",
    isFeatured: false, // Set this to false if not featured
  },
];
