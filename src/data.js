
export const data = {
    home: {
        title: "Hi👋 I'm Yakir Uzan",
        subtitle: "Software Developer",
        description: "Fast learning, Hard working with great interpersonal skills.",
        social_title: "Where can you find me:"
    },
    about: {
        description: "I am Yakir Uzan, a motivated software developer and a Computer Science graduate from the Technion. I have 3.5 years of professional experience in software development and ~3 years of experience in software development through personal projects.",
        sliderData: [
            { name: "Java", value: 98 },
            { name: "Android Development", value: 95 },
            { name: "Web Development", value: 91 },
            { name: "Backend Development", value: 94 },
        ]
    },
    resume: {
        educationData: [
            {
                year: "10/2019 - 07/2023",
                title: "B.Sc in Computer Science",
                companyOrInstitution: "Technion, Israel Institute of Technology",
                description: "I completed my first year at the Open University and continued my studies at the Technion.",
                gpa: "87",
                courses: ["OOP", "Machine Learning", "Databases", "Theory Of Compilation", "Network Security"]
            },
            {
                year: "08/2016 - 07/2017",
                title: "JAVA - Full Stack Development Course",
                companyOrInstitution: "John Bryce, Tel Aviv",
                description: "Completed the course with honors",
                skills: ["java", "javascript", "html", "css", "angular", "mysql"]
            },
        ],
        experienceData: [
            {
                year: "07/2022 - 02/2024",
                title: "RT Embedded Software Developer",
                companyOrInstitution: "Elbit Systems, Avionics",
                description: "Development of RT-embedded software for pilot helmets, enabling accurate tracking of head movements and determining the pilot's position relative to the world.",
                skills: ["c", "cpp", "python"],
                ides: ["visualstudio", "vxworks", "pycharm"]
            },
            {
                year: "04/2017 - 02/2019",
                title: "Full Stack Developer",
                companyOrInstitution: "Barak Capital",
                description: "Software development focused on risk management, aimed at minimizing errors and identifying risks for traders in the capital markets.",
                skills: ["java", "angular", "typescript", "html", "css", "mysql"],
                ides: ["intellij", "webstorm", "pycharm"]
            },
        ]
    },
    projects: [
        {
            name: "Jubot",
            icon: "/jubot_icon.png",
            location: "Google Play Application",
            description: "An application for tracking work shifts, performing analyses using graphs, and viewing paychecks.",
            images: ["/jubot_0.png", "/jubot_1.png", "/jubot_2.png", "/jubot_3.png", "/jubot_4.png"],
            skills: ["java", "android", "firebase", "gcp"],
            url: "https://play.google.com/store/apps/details?id=com.jubot.android"
        },
        {
            name: "Red Or Ad",
            icon: "/red_or_ad_icon.jpg",
            location: "Google Play Game",
            description: "A speed-based game where players collect gold coins and purchase items and additional characters.",
            images: ["/red_or_ad_0.png", "/red_or_ad_1.png", "/red_or_ad_2.png", "/red_or_ad_3.png", "/red_or_ad_4.png", "/red_or_ad_5.png", "/red_or_ad_6.png", "/red_or_ad_7.png", "/red_or_ad_8.png"],
            skills: ["java", "android", "firebase", "gcp"],
            url: "https://play.google.com/store/apps/details?id=com.redorad.android"
        },
        {
            name: "The Chef",
            icon: "/chef_icon.png",
            location: "Technion Final Project",
            description: "AI-driven model to predict restaurant ranking based on location, price level, restaurant type, and more.",
            skills: ["python", "pandas", "numpy", "googlemaps"],
            images: ["/chef_0.png", "/chef_1.png", "/chef_2.png", "/chef_3.png", "/chef_4.png"]
        },
    ],
    social: {
        facebook: "https://www.facebook.com/yakir.uzan.9/",
        linkedin: "https://www.linkedin.com/in/yakir-uzan/",
        gmail: "mailto:uzan.yakir@gmail.com",
        whatsapp: "https://api.whatsapp.com/send?phone=972544850933",
    }
};