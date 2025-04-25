type ExtraInfo = {
  label?: string;
  content: string[];
};

type Item = {
  id: number;
  name: string;
  category: string;
  subcategory?: string; // Optional subcategory for better structure
  extraInfo?: ExtraInfo[]; // Additional details
};

type Uses = {
  devices: Item[];
  stack: Item[];
  tools: Item[];
  software: Item[];
};

export const uses: Uses = {
  devices: [
    {
      id: 1,
      name: "Laptop",
      category: "Devices",
      subcategory: '"13" core i5 Macbook Pro',
      extraInfo: [
        {
          label: "Specs",
          content: [
            "Intel Core i5 (2.7 GHz)",
            "16GB RAM",
            "512GB SSD",
            "Intel Iris Graphics 6100",
            '13.3" Retina Display (2560 x 1600)',
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Desktop",
      category: "Devices",
      subcategory: "Custom PC",
      extraInfo: [
        {
          label: "Specs",
          content: [
            "Intel(R) Core(TM) i9-9900K CPU @ 3.60GHz",
            "32.0 GB RAM",
            "SSD - 931.5 GB",
            "NVIDIA GeForce RTX 2060 SUPER",
            "DirectX 12",
            "Graphics Clock: 1695 MHz",
            "G-SYNC Compatible",
            "Microsoft Windows 10",
          ],
        },
      ],
    },
    {
      id: 3,
      name: "Monitor",
      category: "Devices",
      extraInfo: [
        {
          content: ["ASUS VG259QM"],
        },
      ],
    },
    {
      id: 4,
      name: "Productivity",
      category: "Devices",
      extraInfo: [
        {
          content: ["Magic Trackpad 2", "HUION - Inspiroy H640P"],
        },
      ],
    },
    {
      id: 5,
      name: "Headphones",
      category: "Devices",
      extraInfo: [
        {
          content: ["Apple AirPods Pro (2nd gen.)"],
        },
      ],
    },
  ],
  stack: [
    {
      id: 1,
      name: "Web Dev",
      category: "Stack",
      extraInfo: [
        {
          content: [
            "Next.js",
            "Nuxt.js",
            "Astro,js",
            "Shopify",
            "TypeScript",
            "Tailwind CSS",
            "MongoDB",
            "Sanity",
            "GraphQL",
            "Markdown",
            "JavaScript",
            "React",
            "Vue",
            "Vercel",

            "Netlify",
            "GitHub",
            "Git",
          ],
        },
      ],
    },
    {
      id: 2,
      name: "Shell",
      category: "Stack",
      extraInfo: [
        {
          content: ["macOS: Homebrew", "Win: Powershell 7", "Git Bash"],
        },
      ],
    },
    {
      id: 3,
      name: "CLI",
      category: "Stack",
      extraInfo: [
        {
          content: ["GitHub CLI", "Vercel CLI"],
        },
      ],
    },
    {
      id: 4,
      name: "AI",
      category: "Stack",
      extraInfo: [
        {
          content: ["GitHub Copilot", "ChatGPT"],
        },
      ],
    },
  ],
  tools: [
    {
      id: 1,
      name: "IDE",
      category: "Tools",
      subcategory: "VS Code",
      extraInfo: [
        {
          label: "Extensions",
          content: ["TabOut", "ESLint", "GitLens", "Prettier", "Nuxtr"],
        },
      ],
    },
    {
      id: 2,
      name: "Testing",
      category: "Tools",
      subcategory: "API Testing",
      extraInfo: [
        {
          content: ["Insomnia", "Postman"],
        },
      ],
    },
    {
      id: 3,
      name: "Testing",
      category: "Tools",
      subcategory: " Testing",
      extraInfo: [
        {
          content: [
            "Cypress",
            "Vitest",
            "Jest",
            "React Testing Library",
            "Dockertest",
          ],
        },
      ],
    },
  ],
  software: [
    {
      id: 1,
      name: "Design / Photo",
      category: "Software",
      extraInfo: [
        {
          content: [
            "Figma",
            "Adobe Illustrator",
            "Aseprite",
            "Photoshop",
            "Blender",
            "Inkscape",
            "Canva",
            "GIMP",
          ],
        },
      ],
    },

    {
      id: 3,
      name: "Listening",
      category: "Software",
      extraInfo: [
        {
          content: ["YouTube Music Premium", "Spotify"],
        },
      ],
    },
  ],
};
