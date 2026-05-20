const settings = {};

const seo = {
  title: "Anushal's Portfolio",
  description:
    "A passionate individual who always thrives to work on end to end products which develop sustainable and scalable social and technical systems to create impact.",
  og: {
    title: "Anushal Gupta Portfolio",
    type: "website",
    url: "http://anushalgupta.com",
  },
};

//Home Page
const greeting = {
  title: "Anushal Gupta",
  logo_name: "AnushalGupta",
  subTitle:
    "Data Analyst focused on SQL, Power BI, and ETL workflows with experience transforming large-scale datasets into business insights and automated reporting solutions.",
  resumeLink:
    "https://drive.google.com/file/d/1bXRknv_h-XI_3CQ3SGPteGODtvEb7YvI/view?usp=sharing",
  portfolio_repository: "https://github.com/AnushalGupta/Portfolio",
  githubProfile: "https://github.com/AnushalGupta",
};

const socialMediaLinks = [
  {
    name: "Github",
    link: "https://github.com/AnushalGupta",
    fontAwesomeIcon: "fa-github", // Reference https://fontawesome.com/icons/github?style=brands
    backgroundColor: "#181717", // Reference https://simpleicons.org/?q=github
  },
  {
    name: "LinkedIn",
    link: "https://www.linkedin.com/in/AnushalGupta/",
    fontAwesomeIcon: "fa-linkedin-in", // Reference https://fontawesome.com/icons/linkedin-in?style=brands
    backgroundColor: "#0077B5", // Reference https://simpleicons.org/?q=linkedin
  },
  {
    name: "Gmail",
    link: "mailto:anushal7744@gmail.com",
    fontAwesomeIcon: "fa-google", // Reference https://fontawesome.com/icons/google?style=brands
    backgroundColor: "#D14836", // Reference https://simpleicons.org/?q=gmail
  },
  {
    name: "X-Twitter",
    link: "https://x.com/Anushalgupta",
    fontAwesomeIcon: "fa-x-twitter", // Reference https://fontawesome.com/icons/x-twitter?f=brands&s=solid
    backgroundColor: "#000000", // Reference https://simpleicons.org/?q=x
  },
];

const skills = {
  data: [
    {
      title: "Data Science & AI",
      fileName: "DataScienceImg",
      skills: [
        "⚡ Developing highly scalable production ready models for various deeplearning and statistical use cases",
        "⚡ Experience of working with Computer Vision and NLP projects",
        "⚡ Complex quantitative modelling for dynamic forecasting and time series analysis",
      ],
      softwareSkills: [
        {
          skillName: "Tensorflow",
          fontAwesomeClassname: "logos-tensorflow",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Keras",
          fontAwesomeClassname: "simple-icons:keras",
          style: {
            backgroundColor: "white",
            color: "#D00000",
          },
        },
        {
          skillName: "PyTorch",
          fontAwesomeClassname: "logos-pytorch",
          style: {
            backgroundColor: "transparent",
          },
        },
        {
          skillName: "Python",
          fontAwesomeClassname: "ion-logo-python",
          style: {
            backgroundColor: "transparent",
            color: "#3776AB",
          },
        },
        {
          skillName: "Deeplearning",
          imageSrc: "deeplearning_ai_logo.png",
        },
      ],
    },
    {
      title: "Full Stack Development",
      fileName: "FullStackImg",
      skills: [
        "⚡ Building responsive website front end using React-Redux",
        "⚡ Developing mobile applications using Flutter, React Native and solo android apps using Kotlin",
        "⚡ Creating application backend in Node, Express & Flask",
      ],
      softwareSkills: [
        {
          skillName: "HTML5",
          fontAwesomeClassname: "simple-icons:html5",
          style: {
            color: "#E34F26",
          },
        },
        {
          skillName: "CSS3",
          fontAwesomeClassname: "fa-css3",
          style: {
            color: "#1572B6",
          },
        },
        {
          skillName: "JavaScript",
          fontAwesomeClassname: "simple-icons:javascript",
          style: {
            backgroundColor: "#000000",
            color: "#F7DF1E",
          },
        },
        {
          skillName: "ReactJS",
          fontAwesomeClassname: "simple-icons:react",
          style: {
            color: "#61DAFB",
          },
        },
        {
          skillName: "NodeJS",
          fontAwesomeClassname: "devicon-plain:nodejs-wordmark",
          style: {
            color: "#339933",
          },
        },
        {
          skillName: "NPM",
          fontAwesomeClassname: "simple-icons:npm",
          style: {
            color: "#CB3837",
          },
        },
      ],
    },
    {
      title: "Cloud Infra-Architecture",
      fileName: "CloudInfraImg",
      skills: [
        "⚡ Experience working on multiple cloud platforms",
        "⚡ Hosting and maintaining websites on virtual machine instances along with integration of databases",
        "⚡ Deploying deep learning models on cloud to use on mobile devices",
        "⚡ Setting up streaming jobs from DB to Server or vice-versa on GCP and AWS",
      ],
      softwareSkills: [
        {
          skillName: "GCP",
          fontAwesomeClassname: "simple-icons:googlecloud",
          style: {
            color: "#4285F4",
          },
        },
        {
          skillName: "Firebase",
          fontAwesomeClassname: "simple-icons:firebase",
          style: {
            color: "#FFCA28",
          },
        },
        {
          skillName: "PostgreSQL",
          fontAwesomeClassname: "simple-icons:postgresql",
          style: {
            color: "#336791",
          },
        },
        {
          skillName: "MongoDB",
          fontAwesomeClassname: "simple-icons:mongodb",
          style: {
            color: "#47A248",
          },
        },
        {
          skillName: "SQL",
          fontAwesomeClassname: "simple-icons:mysql",
          style: {
            color: "#326CE5",
          },
        },
      ],
    },
  ],
};

// Education Page
const competitiveSites = {
  competitiveSites: [
    {
      siteName: "LeetCode",
      iconifyClassname: "simple-icons:leetcode",
      style: {
        color: "#F79F1B",
      },
      profileLink: "https://leetcode.com/u/anushalgupta/",
    },
    {
      siteName: "HackerRank",
      iconifyClassname: "simple-icons:hackerrank",
      style: {
        color: "#2EC866",
      },
      profileLink: "https://www.hackerrank.com/profile/Anushal7744",
    },
  ],
};

const degrees = {
  degrees: [
    {
      title: "KCC Institute of Technology and Management",
      subtitle: "B.Tech ( Computer Science & Engineering ) ",
      logo_path: "kcc.png",
      alt_name: "KCC ITM",
      duration: "2022 - 2026",
      descriptions: [
        "⚡ Studied core Computer Science subjects including Data Structures, DBMS, Operating Systems, Computer Networks, Software Engineering, and System Design.",
        "⚡ Participated in multiple technical projects and hackathons, gaining practical exposure to software development workflows, problem-solving, and collaborative engineering environments.",
        "⚡ Worked across cross-functional teams on academic and technical projects, strengthening communication, teamwork, project coordination, and leadership abilities.",
      ],
      website_link: "https://www.kccitm.edu.in/",
    },
  ],
};

const certifications = {
  certifications: [
    {
      title: "Data Analytics",
      subtitle: "- SkillUp",
      logo_path: "new_logo.svgz",
      certificate_link:
        "https://drive.google.com/file/d/1xDDlEYF5LJctqTynVdB3eXlcVD9AcQgA/view?usp=sharing",
      alt_name: "data analytics",
      color_code: "#ffffffdc",
    },
    {
      title: "Data Analytics Intern",
      subtitle: "- DRDO",
      logo_path: "drdo-logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1putfYHuO4REeYDajXvZpSR1dDaATmeDw/view?usp=sharing",
      alt_name: "DRDO",
      color_code: "#D83B0199",
    },
    {
      title: "Snowflake Hands-on Badge",
      subtitle: "- Snowflake",
      logo_path: "snowflake_logo.png",
      certificate_link:
        "https://drive.google.com/file/d/1JC-ne2bvYOBl5jLMQ8IT7y4tpMxkFjwH/view?usp=sharing",
      alt_name: "Snowflake Certificate",
      color_code: "#f77e7ea9",
    },
    {
      title: "Java Web Development with AI",
      subtitle: "- HCL Training",
      logo_path: "HCL.png",
      certificate_link:
        "https://drive.google.com/file/d/1JzkvtcwWxjDDr9CXIsqMwjO43OXDMH8X/view?usp=sharing",
      alt_name: "HCL Certificate",
      color_code: "#2067eb99",
    },
    {
      title: "AICTE-SANKALP",
      subtitle: "- Gov. Certificate",
      logo_path: "AICTE.png",
      certificate_link:
        "https://drive.google.com/file/d/14uZVwlhqugcSSbIsPWW1Lp7z9jDbbh0W/view?usp=sharing",
      alt_name: "Certificate",
      color_code: "#ee3b3b99",
    },
    {
      title: "Code-O-Fiesta 2023",
      subtitle: "- Hackathon",
      logo_path: "hackathon.png",
      certificate_link:
        "https://drive.google.com/file/d/1AuqiDQUvwKO6g-hhwCAlNQdPlRs_MVvX/view?usp=sharing",
      alt_name: "hackathon",
      color_code: "#0C9D5899",
    },
    {
      title: "Smart India Hackathon",
      subtitle: "- 2024",
      logo_path: "smart-india-hackathon.jpeg",
      certificate_link:
        "https://drive.google.com/file/d/1CSfr5oA57Oc2UAbcNOXEMyCtNXz699MC/view?usp=sharing",
      alt_name: "SIM",
      color_code: "#1F70C199",
    },
  ],
};

// Experience Page
const experience = {
  title: "Experience",
  subtitle: "Internship",
  description:
    "During my academic journey, I gained practical industry exposure through internships and project-based work in data analytics &git  machine learning. I have worked on real-world datasets, collaborative technical projects, and analytical workflows involving SQL, Python, ETL pipelines, and reporting systems.",
  header_image_path: "experience.svg",
  sections: [
    {
      title: "Work",
      work: true,
      experiences: [
        // {
        //   title: "Machine Learning Intern",
        //   company: "TikTok Inc.",
        //   company_url: "https://www.tiktok.com/en/",
        //   logo_path: "tiktok_logo.png",
        //   duration: "May 2022 - Aug 2022",
        //   location: "San Francisco, USA",
        //   description:
        //     "Building new features on the backend recommendation system, specifically ranking algorithms for Ads that touch hundreds of millions of people around the world. Improving online and offline content ranking algorithms by performing hard sample data replays for training steps.",
        //   color: "#000000",
        // },
      ],
    },
    {
      title: "Internships",
      experiences: [
        {
          title: "Data Analytics Intern",
          company: "Defence Research and Development Organisation",
          company_url:
            "https://www.indiascienceandtechnology.gov.in/organisations/ministry-and-departments/defence-research-and-development-organisation-drdo-govt-india/institute-nuclear-medicine-allied-sciences-inmas",
          logo_path: "drdo-logo.png",
          duration: "Oct 2025 - Apr 2026",
          location: "New Delhi, India",
          description:
            "Working on EEG-based pilot mental-state classification for aviation safety. Performing EEG preprocessing & feature extraction using Python, MNE-Python. Training ML/DL models using Scikit-learn, PyTorch for state prediction. Building a simple evaluation & visualization pipeline (Streamlit).",
          color: "#000000",
        },
        {
          title: "Java Web Development with AI",
          company: "HCL Technologies",
          company_url: "https://www.hcltech.com/",
          logo_path: "hcl-logo.jpg",
          duration: "Nov 2024 - Jan 2025",
          location: "Greater Noida",
          description:
            "Developed 'Instamart,' a functional e-commerce platform utilizing Java for robust backend logic and SQL Server for secure data management. The project involved designing schema for user authentication and product inventory, integrated within an AI-focused web development curriculum.",
          color: "#0071C5",
        },
      ],
    },
    {
      title: "Volunteerships",
      experiences: [
        // {
        //   title: "Google Explore ML Facilitator",
        //   company: "Google",
        //   company_url: "https://about.google/",
        //   logo_path: "google_logo.png",
        //   duration: "June 2019 - April 2020",
        //   location: "Hyderabad, Telangana",
        //   description:
        //     "Explore Machine Learning (ML) is a Google-sponsored program for university students to get started with Machine Learning. The curriculum offers 3 tracks of ML Content (Beginner, Intermediate, Advanced) and relies on university student facilitators to train other students on campus and to build opensource projects under this program.",
        //   color: "#4285F4",
        // },
      ],
    },
  ],
};

// Projects Page
const projectsHeader = {
  title: "Projects",
  description:
    "My projects makes use of vast variety of latest technology tools. My best experience is to create Data Science projects and deploy them to web applications using cloud infrastructure.",
  avatar_image_path: "projects_image.svg",
};

const publicationsHeader = {
  title: "Publications",
  description: "Some of my published Articles, Blogs and Research.",
  avatar_image_path: "projects_image.svg",
};

const publications = {
  data: [
    // {
    //   id: "neuro-symbolic-sudoku-solver",
    //   name: "Neuro-Symbolic Sudoku Solver",
    //   createdAt: "2023-07-02T00:00:00Z",
    //   description: "Paper published in KDD KiML 2023",
    //   url: "https://arxiv.org/abs/2307.00653",
    // },
    // {
    //   id: "mdp-diffusion",
    //   name: "MDP-Diffusion",
    //   createdAt: "2023-09-19T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/mdp-diffusion/",
    // },
    // {
    //   id: "consistency-models",
    //   name: "Consistency Models",
    //   createdAt: "2023-10-12T00:00:00Z",
    //   description: "Blog published in Paperspace",
    //   url: "https://blog.paperspace.com/consistency-models/",
    // },
  ],
};

// Contact Page
const contactPageData = {
  contactSection: {
    title: "Contact Me",
    profile_image_path: "animated-anushal.png",
    description:
      "I am available on almost every social media. You can message me, I will reply within 24 hours. I can help you with ML, AI, React, Android, Cloud and Opensource Development.",
  },

  addressSection: {
    title: "Address",
    subtitle: "Greater Noida ,Uttar Pradesh",
    country: "INDIA",
    region: "GREATER NOIDA",
    postalCode: "201310",
    avatar_image_path: "address_image.svg",
    location_map_link: "https://maps.app.goo.gl/rT4Ng5BWAdEPDA9G7",
  },
  phoneSection: {
    title: "Phone No.",
    subtitle: "+91 9468373725",
  },
};

export {
  settings,
  seo,
  greeting,
  socialMediaLinks,
  skills,
  competitiveSites,
  degrees,
  certifications,
  experience,
  projectsHeader,
  publicationsHeader,
  publications,
  contactPageData,
};
