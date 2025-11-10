const navLinks = [
    {
        name: "Work",
        link: "#work",
    },
    {
        name: "Experience",
        link: "#experience",
    },
    {
        name: "Skills",
        link: "#skills",
    },
    {
        name: "Tech",
        link: "#tech",
    },
];

const words = [
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
    { text: "Ideas", imgPath: "/images/ideas.svg" },
    { text: "Concepts", imgPath: "/images/concepts.svg" },
    { text: "Designs", imgPath: "/images/designs.svg" },
    { text: "Code", imgPath: "/images/code.svg" },
];

// const counterItems = [
//     { value: 3, suffix: "+", label: "Years of Experience" },
//     { value: 3, suffix: "+", label: "Satisfied Clients" },
//     { value: 20, suffix: "+", label: "Completed Projects" },
//     { value: 90, suffix: "%", label: "Client Retention Rate" },
// ];
const counterItems = [
    { value: 3, suffix: "+", label: "Years Building Digital Products" },
    { value: 10, suffix: "+", label: "Real-World Applications Shipped" },
    { value: 5, suffix: "+", label: "Tech Ecosystems Worked In" },
    { value: 90, suffix: "%", label: "Feature Delivery Efficiency" },
]
const logoIconsList = [
    {
        imgPath: "/images/logos/company-logo-1.png",
    },
    {
        imgPath: "/images/logos/company-logo-2.png",
    },
    {
        imgPath: "/images/logos/company-logo-3.png",
    },

];

// const abilities = [
//     {
//         imgPath: "/images/seo.png",
//         title: "Quality Focus",
//         desc: "Delivering high-quality results while maintaining attention to every detail.",
//     },
//     {
//         imgPath: "/images/chat.png",
//         title: "Reliable Communication",
//         desc: "Keeping you updated at every step to ensure transparency and clarity.",
//     },
//     {
//         imgPath: "/images/time.png",
//         title: "On-Time Delivery",
//         desc: "Making sure projects are completed on schedule, with quality & attention to detail.",
//     },
// ];
const abilities = [
    {
        imgPath: "/images/debug.png",
        title: "Effective Debugging",
        desc: "Skilled at identifying, analyzing, and fixing complex issues quickly to ensure smooth performance.",
    },
    {
        imgPath: "/images/time.png",
        title: "Fast & Reliable Delivery",
        desc: "Delivering high-quality work efficiently without compromising attention to detail or project goals.",
    },
    {
        imgPath: "/images/brain.png",
        title: "Problem-Solving Mindset",
        desc: "Approaching challenges with logic and creativity to build efficient, scalable solutions.",
    },
];
const techStackImgs = [
    {
        name: "Postgres",
        imgPath: "/images/logos/postgre.png",
    },
    // {
    //     name: "Python Developer",
    //     imgPath: "/images/logos/python.svg",
    // },
    {
        name: "Next js",
        imgPath: "/images/logos/next.png",
    },
    {
        name: "vue js",
        imgPath: "/images/logos/vuejs.png",
    },
    {
        name: "PHP",
        imgPath: "/images/logos/php.png",
    },
    {
        name: "Wordpress",
        imgPath: "/images/logos/wordpress.png",
    },
];

const techStackIcons = [
    {
        name: "React ",
        modelPath: "/models/react_logo-transformed.glb",
        scale: 1,
        rotation: [0, 0, 0],
    },
    {
        name: "Python ",
        modelPath: "/models/python-transformed.glb",
        scale: 0.8,
        rotation: [0, 0, 0],
    },
    {
        name: "Nodejs ",
        modelPath: "/models/node-transformed.glb",
        scale: 5,
        rotation: [0, -Math.PI / 2, 0],
    },
    // {
    //     name: "PHP",
    //     modelPath: "/models/php_logo.glb",
    //     scale: 0.01,
    //     rotation: [0, -Math.PI / 2, 0],
    // },
    {
        name: "Project Manager",
        modelPath: "/models/git-svg-transformed.glb",
        scale: 0.05,
        rotation: [0, -Math.PI / 4, 0],
    },
];

// const expCards = [
//     {
//         review:
//             "Adrian brought creativity and technical expertise to the team, significantly improving our frontend performance. His work has been invaluable in delivering faster experiences.",
//         imgPath: "/images/exp1.png",
//         logoPath: "/images/logo1.png",
//         title: "Full Stack Developer",
//         date: "April 2023 - July 2025",
//         responsibilities: [
//             "Developed and maintained user-facing features for the Hostinger website.",
//             "Collaborated closely with UI/UX designers to ensure seamless user experiences.",
//             "Optimized web applications for maximum speed and scalability.",
//         ],
//     },
//     {
//         review:
//             "Adrian’s contributions to Docker's web applications have been outstanding. He approaches challenges with a problem-solving mindset.",
//         imgPath: "/images/exp2.png",
//         logoPath: "/images/logo2.png",
//         title: "Full Stack Developer",
//         date: "June 2020 - December 2023",
//         responsibilities: [
//             "Led the development of Docker's web applications, focusing on scalability.",
//             "Worked with backend engineers to integrate APIs seamlessly with the frontend.",
//             "Contributed to open-source projects that were used with the Docker ecosystem.",
//         ],
//     },
//     {
//         review:
//             "Adrian’s work on Appwrite’s mobile app brought a high level of quality and efficiency. He delivered solutions that enhanced our mobile experience & meet our product goals.",
//         imgPath: "/images/exp3.png",
//         logoPath: "/images/logo3.png",
//         title: "React Native Developer",
//         date: "March 2019 - May 2020",
//         responsibilities: [
//             "Built cross-platform mobile apps using React Native, integrating with Appwrite's backend services.",
//             "Improved app performance and user experience through code optimization and testing.",
//             "Coordinated with the product team to implement features based on feedback.",
//         ],
//     },
// ];

const expCards = [
    {
        review:
            "Showed strong ownership, fast delivery, and excellent debugging skills.successfully shipped complex features across multiple products.",
        imgPath: "/images/soft.png",
        logoPath: "/images/logosoft (1).png",
        title: "Full-Stack Web Developer — Softt365",
        date: "April 2023 – July 2025",
        responsibilities: [
            // ContrackTime (SaaS)
            "Maintained & improved ContrackTime (SaaS contract management platform).",
            "Developed tree-structured planning system with PostgreSQL functions & automated dependencies.",
            "Built Gmail Add-On (Apps Script + React), OAuth2 + passed Google security verification.",
            "Optimized React components, reducing over-rendering and improving load speed.",
            "Built PDF extraction tool (Python + FastAPI + pdfplumber) for automatic meeting notes.",
            "Developed subscription management dashboard with billing & storage control.",
            "Integrated MFA (TOTP) for account security.",
            "Designed & launched the official ContrackTime WordPress website (Elementor).",

            // Ariane project (inside Softt365)
            "Created responsive mini-sites for real-estate sales using HTML, jQuery, Bootstrap, PHP.",
            "Managed hosting, FTP deployment & maintenance for client deliveries.",
        ],
    },
    {
        review:
            "Contributed to scalable web projects and demonstrated strong MERN stack development skills.",
        imgPath: "/images/code.png",
        logoPath: "/images/code.png",
        title: "Full-Stack MERN Developer — mobiSm",
        date: "Oct 2021 – Dec 2021",
        responsibilities: [
            "Developed web applications using the MERN stack.",
            "Built REST APIs and optimized database schemas.",
            "Integrated React UI with backend logic.",
        ],
    },
    {
        review:
            "Demonstrated excellent learning speed and delivered complete MERN features",
        imgPath: "/images/opt1.png",
        logoPath: "/images/opt.png",
        title: "Full-Stack Intern — Optimatech",
        date: "June 2021 – Aug 2021",
        responsibilities: [
            "Designed & built a full MERN application from scratch.",
            "Created admin dashboard with authentication and moderation.",
            "Implemented Redux for state management.",
            "Developed modern showcase websites.",
        ],
    },
];


const expLogos = [
    {
        name: "logo1",
        imgPath: "/images/logo1.png",
    },
    {
        name: "logo2",
        imgPath: "/images/logo2.png",
    },
    {
        name: "logo3",
        imgPath: "/images/logo3.png",
    },
];

const testimonials = [
    {
        name: "Esther Howard",
        mentions: "@estherhoward",
        review:
            "I can’t say enough good things about Adrian. He was able to take our complex project requirements and turn them into a seamless, functional website. His problem-solving abilities are outstanding.",
        imgPath: "/images/client1.png",
    },
    {
        name: "Wade Warren",
        mentions: "@wadewarren",
        review:
            "Working with Adrian was a fantastic experience. He transformed our outdated website into a modern, user-friendly platform. His attention to detail and commitment to quality are unmatched. Highly recommend him for any web dev projects.",
        imgPath: "/images/client3.png",
    },
    {
        name: "Guy Hawkins",
        mentions: "@guyhawkins",
        review:
            "Collaborating with Adrian was an absolute pleasure. His professionalism, promptness, and dedication to delivering exceptional results were evident throughout our project. Adrian's enthusiasm for every facet of development truly stands out. If you're seeking to elevate your website and elevate your brand, Adrian is the ideal partner.",
        imgPath: "/images/client2.png",
    },
    {
        name: "Marvin McKinney",
        mentions: "@marvinmckinney",
        review:
            "Adrian was a pleasure to work with. He turned our outdated website into a fresh, intuitive platform that’s both modern and easy to navigate. Fantastic work overall.",
        imgPath: "/images/client5.png",
    },
    {
        name: "Floyd Miles",
        mentions: "@floydmiles",
        review:
            "Adrian’s expertise in web development is truly impressive. He delivered a robust and scalable solution for our e-commerce site, and our online sales have significantly increased since the launch. He’s a true professional!",
        imgPath: "/images/client4.png",
    },
    {
        name: "Albert Flores",
        mentions: "@albertflores",
        review:
            "Adrian was a pleasure to work with. He understood our requirements perfectly and delivered a website that exceeded our expectations. His skills in both frontend and backend dev are top-notch.",
        imgPath: "/images/client6.png",
    },
];

const socialImgs = [
    {
        name: "insta",
        url: "https://www.instagram.com/malekaridhii/",
        imgPath: "/images/insta.png",
    },
    {
        name: "fb",
        url: "https://www.facebook.com/",
        imgPath: "/images/fb.png",
    },
    {
        name: "Github",
        url: "https://github.com/malekaridhi",
        imgPath: "/images/github.png",
    },
    {
        name: "linkedin",
        url: "https://www.linkedin.com/in/malek-aridhi-a011341a0/",
        imgPath: "/images/linkedin.png",
    },
];
const stackIcons = [
    // Frontend
    { name: "JavaScript", imgPath: "/images/logos/js.png" },
    { name: "TypeScript", imgPath: "/images/logos/typescript.png" },
    { name: "React.js", imgPath: "/images/logos/react.png" },
    { name: "Redux", imgPath: "/images/logos/redux.svg" },
    { name: "Next.js", imgPath: "/images/logos/next-js-seeklogo.svg" },
    { name: "Angular", imgPath: "/images/logos/angular.svg" },
    { name: "Vue.js", imgPath: "/images/logos/vuejs.png" },
    { name: "React Native", imgPath: "/images/logos/react.png" },
    // { name: "HTML5", imgPath: "/images/logos/html5.svg" },
    // { name: "CSS3", imgPath: "/images/logos/css3.svg" },
    { name: "Bootstrap", imgPath: "/images/logos/bootstrap.svg" },
    { name: "Tailwind CSS", imgPath: "/images/logos/tailwind-css.svg" },
    { name: "WordPress", imgPath: "/images/logos/wordpress.png" },
    { name: "Elementor", imgPath: "/images/logos/elem.png" },

    // Backend
    { name: "Node.js", imgPath: "/images/logos/node.png" },
    { name: "Express.js", imgPath: "/images/logos/expressjs.svg" },
    { name: "Python", imgPath: "/images/logos/python.svg" },
    { name: "FastAPI", imgPath: "/images/logos/Fastapi.svg" },
    { name: "PHP", imgPath: "/images/logos/php.png" },

    // Databases
    { name: "PostgreSQL", imgPath: "/images/logos/postgre.png" },
    { name: "MongoDB", imgPath: "/images/logos/mongodb.png" },
    { name: "Firebase", imgPath: "/images/logos/firebase.svg" },

    // Tools & DevOps
    { name: "Git", imgPath: "/images/logos/git.svg" },
    { name: "Google Apps Script", imgPath: "/images/logos/search.png" },

];


export {
    words,
    abilities,
    logoIconsList,
    counterItems,
    expCards,
    expLogos,
    testimonials,
    socialImgs,
    techStackIcons,
    techStackImgs,
    navLinks,
    stackIcons
};