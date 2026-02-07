import { title } from "process";

const NavbarData = [
  {
    title: "Home",
    path:"/",
  },
  {
    title: "About Us",
    path: "/about-us",
  },
  {
    title: "Services",
    path: "/services",
     submenu: [
      {
        title: "Digital Marketing",
        path: "/services/digital_marketing",
        subInSub: [
          {
            title: "SEO",
            path: "/services/digital_marketing/seo",
          },
          {
            title: "SEM",
            path: "/services/digital_marketing/sem",
          },
          {
            title: "SMM",
            path: "/services/digital_marketing/smm",
          },
          {
            title: "E-Mail Marketing",
            path:"/services/digital_marketing/email_marketing",
          },
        ]
      },
      {
        title: "Web Developement",
        path:"/services/web_development",
      },
      {
        title: "Branding",
        path: "/services/branding",
      },
      {
        title: "Graphic Design",
        path: "/services/graphic_design",
      },
      {
        title: "Video Production",
        path: "/services/video_production",
      },
      
    ], 
  },
  {
    title: "LearnHub",
    path: "/learnhub",
    submenu: [
      {
        title: "Digital Marketing Internship",
        path: "/learnhub/learn-dm",
      },
      {
        title: "Web Developement Internship",
        path:"/learnhub/learn-web",
      },
      {
        title: "Video Editing Internship",
        path: "/learnhub/learn-vid",
      },
      {
        title: "Graphic Design Internship",
        path: "/learnhub/learn-design",
      },

    ]    
  },
  {
    title: "SAG·EO Framework",
    path: "/sageo-framework",
  },
  {
    title: "Blog",
    path: "/blog",    
  },
  {
    title: "Career",
    path: "/career"
  },
  {
    title: "Contact Us",
    path: "/contact-us",
  },
];

export default NavbarData;
