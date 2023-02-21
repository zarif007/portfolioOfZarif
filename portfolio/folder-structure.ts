export const folderStructure = {
  name: "About Zarif",
  icon: "",
  url: "/",
  type: "folder",
  children: [
    {
      name: "home.tsx",
      icon: "https://i.ibb.co/KzCJb7z/typescript.png",
      url: "/",
      type: "file",
    },
    {
      name: "personality",
      icon: "",
      url: "/personality",
      type: "folder",
      children: [
        {
          name: "index.tsx",
          icon: "https://i.ibb.co/KzCJb7z/typescript.png",
          url: "/personality",
          type: "file",
        },
        {
          name: "philosophy.go",
          icon: "https://i.ibb.co/YNxf6zq/download-6-removebg-preview.png",
          url: "/personality/philosophy",
          type: "file",
        },
        {
          name: "preference.sol",
          icon: "https://i.ibb.co/6XSg9Mk/facebook-love-png-3.png",
          url: "/personality/preference",
          type: "file",
        },
      ],
    },
    {
      name: "skills",
      icon: "",
      url: "/skills",
      type: "folder",
      children: [
        {
          name: "problem-solving",
          icon: "",
          url: "/skills/problem-solving",
          type: "folder",
          children: [
            {
              name: "competitive-programming.cpp",
              icon: "https://i.ibb.co/gVRhCyt/ISO-C-Logo-svg.png",
              url: "/skills/problem-solving/competitive-programming",
              type: "file",
            },
          ]
        },
        {
          name: "technologies",
          icon: "",
          url: "skills/technologies",
          type: "folder",
          children: [
            {
              name: "index.tsx",
              icon: "https://i.ibb.co/KzCJb7z/typescript.png",
              url: "/skills/technologies",
              type: "file",
            },
            {
              name: "reactJS.tsx",
              icon: "https://i.ibb.co/jhsJV1P/react.png",
              url: "/skills/technologies/reactJS",
              type: "file",
            },
            {
              name: "nextJS.tsx",
              icon: "https://i.ibb.co/R9FDdTY/nextjs.jpg",
              url: "/skills/technologies/nextJS",
              type: "file",
            },
            {
              name: "django.py",
              icon: "https://i.ibb.co/0GVw0yF/django.png",
              url: "/skills/technologies/django",
              type: "file",
            },
          ]
        },
      ],
    },
  ],
};
