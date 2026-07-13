// script.js

// --- DICTIONARY DIALECT CODES ---
const translations = {
    en: {
        title: "Pardis Nasimian | Personal Portfolio",
        badgeIntern: "Available for Internship",
        heroName: "Pardis Nasimian",
        heroTitle: "Computer Engineering Student",
        heroSubtitle: "Front-End Developer • WordPress Developer",
        heroDesc: "Computer Engineering student with hands-on experience in developing corporate and e-commerce websites. Skilled in WordPress, HTML, CSS, JavaScript and familiar with PHP. Passionate about Front-End Development, UI Design and modern web technologies.",
        titleAbout: "About Me",
        aboutText: "Computer Engineering student with hands-on experience in developing corporate and e-commerce websites. Passionate about Front-End development, UI design, and modern web technologies.",
        titleSkills: "Skills",
        skillResponsive: "Responsive Design",
        skillSeo: "SEO Basics",
        skillMarketing: "Digital Marketing Basics",
        titleExperience: "Experience",
        exp1_date: "May 2022 - Present",
        exp1_role: "Web Developer & Digital Marketing Team Member",
        exp1_company: "Mohtavazoom",
        exp1_l1: "Designing and developing corporate and e-commerce websites with WordPress",
        exp1_l2: "UI Design and implementing responsive pages",
        exp1_l3: "Familiar with fundamental SEO and Digital Marketing strategies",
        exp2_date: "June - November 2025",
        exp2_role: "WordPress Website Design Instructor",
        exp2_company: "Farhangian Institute",
        exp3_date: "June - Nov 2025 / May 2026 - Present",
        exp3_role: "ICDL Instructor",
        exp3_company: "Farhangian Institute",
        exp4_date: "June 2026 - Present",
        exp4_role: "HTML Instructor",
        exp4_company: "Alton Institute",
        titleProjects: "Projects",
        proj_saraye_desc: "E-commerce website designed and developed for product distribution and commercial sales platforms.",
        proj_bohlul_desc: "Corporate web representation detailing industrial pump machinery catalogs and utility services.",
        proj_dr_desc: "Medical and pharmaceutical online catalog system developed for user product checking and distribution.",
        proj_mohtava_desc: "Corporate portal highlighting specialized digital marketing frameworks, design portfolios and strategic SEO content.",
        proj5_tag: "Portfolio Project",
        proj_aseman_desc: "Showcase corporate interface built to model carpentry and bespoke manufacturing design provisions.",
        proj_task_desc: "A highly organized architecture dashboard focused on task handling workflows, prioritizing dynamic user adjustments.",
        btnVisit: "Visit Website",
        btnNoLive: "No Live Preview",
        btnSource: "View Source",
        titleEducation: "Education",
        eduDegree: "Bachelor of Computer Engineering",
        eduUni: "Quchan University of Technology",
        titleCourses: "Certificates & Courses",
        courseWp: "Website Design with WordPress",
        courseWpOrg: "Iran ICDL Foundation",
        courseAi: "Fundamentals of Artificial Intelligence",
        footerRights: "All Rights Reserved.",
        footerBuilt: "Built with HTML5 • CSS3 • Vanilla JavaScript"
    },
    fa: {
        title: "پردیس نسیمیان | رزومه شخصی",
        badgeIntern: "آماده برای کارآموزی",
        heroName: "پردیس نسیمیان",
        heroTitle: "دانشجوی مهندسی کامپیوتر",
        heroSubtitle: "Front-End Developer • WordPress Developer",
        heroDesc: "دانشجوی کارشناسی مهندسی کامپیوتر با تجربه طراحی و توسعه وب‌سایت‌های شرکتی و فروشگاهی در پروژه‌های واقعی. مسلط به WordPress، HTML، CSS و JavaScript و آشنا به PHP. علاقه‌مند به توسعه Front-End، طراحی رابط کاربری و توسعه راهکارهای تحت وب.",
        titleAbout: "درباره من",
        aboutText: "دانشجوی مهندسی کامپیوتر با تجربه طراحی و توسعه وب‌سایت‌های شرکتی و فروشگاهی و علاقه‌مند به توسعه Front-End، طراحی رابط کاربری و فناوری‌های وب.",
        titleSkills: "مهارت‌ها",
        skillResponsive: "طراحی واکنش‌گرا",
        skillSeo: "سئو مقدماتی",
        skillMarketing: "دیجیتال مارکتینگ مقدماتی",
        titleExperience: "سوابق شغلی",
        exp1_date: "اردیبهشت ۱۴۰۱ - تاکنون",
        exp1_role: "طراح وب و عضو تیم دیجیتال مارکتینگ",
        exp1_company: "محتوازوم",
        exp1_l1: "طراحی و توسعه وب‌سایت‌های شرکتی و فروشگاهی با WordPress",
        exp1_l2: "طراحی رابط کاربری و صفحات واکنش‌گرا",
        exp1_l3: "آشنایی با SEO پایه و Digital Marketing",
        exp2_date: "خرداد - آبان ۱۴۰۴",
        exp2_role: "مدرس طراحی سایت با WordPress",
        exp2_company: "آموزشگاه فرهیختگان",
        exp3_date: "خرداد - آبان ۱۴۰۴ / اردیبهشت ۱۴۰۵ - تاکنون",
        exp3_role: "مدرس ICDL",
        exp3_company: "آموزشگاه فرهیختگان",
        exp4_date: "خرداد ۱۴۰۵ - تاکنون",
        exp4_role: "مدرس HTML",
        exp4_company: "آموزشگاه آلتون",
        titleProjects: "پروژه‌ها",
        proj_saraye_desc: "وب‌سایت فروشگاهی طراحی و پیاده‌سازی شده جهت توزیع کالا و بسترهای مبادلات تجاری فروشگاهی.",
        proj_bohlul_desc: "پورتال شرکتی معرفی جامع ماشین‌آلات پمپ‌های صنعتی و کاتالوگ‌های کاربری تجهیزات.",
        proj_dr_desc: "سامانه اطلاعاتی و کاتالوگ دارویی توسعه‌یافته به منظور بررسی و دسترسی به اقلام درمانی.",
        proj_mohtava_desc: "وب‌سایت معرفی خدمات دیجیتال مارکتینگ، مدیریت محتوای تخصصی و استراتژی‌های بهینه‌سازی وب.",
        proj5_tag: "پروژه نمونه‌کار",
        proj_aseman_desc: "طراحی رابط کاربری شرکتی مدلسازی شده جهت ارائه نمونه مصنوعات و صنایع چوب سفارشی.",
        proj_task_desc: "داشبورد ساختاریافته مدیریت وظایف روزانه متمرکز بر زمان‌بندی پویا و فرآیندهای کاربردی.",
        btnVisit: "مشاهده وب‌سایت",
        btnNoLive: "پیش‌نمایش زنده ندارد",
        btnSource: "مشاهده سورس‌کد",
        titleEducation: "تحصیلات",
        eduDegree: "کارشناسی مهندسی کامپیوتر",
        eduUni: "دانشگاه صنعتی قوچان",
        titleCourses: "دوره‌ها و گواهینامه‌ها",
        courseWp: "طراحی سایت با WordPress",
        courseWpOrg: "بنیاد ICDL ایران",
        courseAi: "مبانی هوش مصنوعی",
        footerRights: "تمامی حقوق محفوظ است.",
        footerBuilt: "طراحی شده با HTML5 • CSS3 • Vanilla JavaScript"
    }
};

// --- INITIAL CONFIGURATION ON LOAD ---
document.addEventListener("DOMContentLoaded", () => {
    let currentLang = localStorage.getItem("portfolio-lang") || "en";
    applyLanguage(currentLang);

    const langBtn = document.getElementById("lang-btn");
    langBtn.addEventListener("click", () => {
        currentLang = currentLang === "en" ? "fa" : "en";
        localStorage.setItem("portfolio-lang", currentLang);
        applyLanguage(currentLang);
    });

    const animatedElements = document.querySelectorAll(".fade-in-section");
    const observerOptions = {
        root: null,
        threshold: 0.1,
        rootMargin: "0px 0px -40px 0px"
    };

    const appearanceObserver = new IntersectionObserver((entries, observer) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add("is-visible");
                observer.unobserve(entry.target);
            }
        });
    }, observerOptions);

    animatedElements.forEach(element => {
        appearanceObserver.observe(element);
    });
});

// --- RENDER TEXT DATA BY DIRECTION DOM STATE ---
function applyLanguage(lang) {
    const htmlNode = document.documentElement;
    htmlNode.setAttribute("lang", lang);
    htmlNode.setAttribute("dir", lang === "fa" ? "rtl" : "ltr");
    document.title = translations[lang].title;

    const btnIndicator = document.getElementById("lang-btn");
    btnIndicator.textContent = lang === "en" ? "FA" : "EN";

    document.getElementById("hero-name").textContent = translations[lang].heroName;
    document.getElementById("hero-title").textContent = translations[lang].heroTitle;
    document.getElementById("hero-subtitle").innerHTML = translations[lang].heroSubtitle;
    document.getElementById("hero-desc").textContent = translations[lang].heroDesc;
    document.getElementById("about-text").textContent = translations[lang].aboutText;

    document.querySelectorAll("[data-key]").forEach(element => {
        const dataAttributeKey = element.getAttribute("data-key");
        
        switch (dataAttributeKey) {
            case "badge-intern":
                element.textContent = translations[lang].badgeIntern;
                break;
            case "title-about":
                element.textContent = translations[lang].titleAbout;
                break;
            case "title-skills":
                element.textContent = translations[lang].titleSkills;
                break;
            case "skill-responsive":
                element.textContent = translations[lang].skillResponsive;
                break;
            case "skill-seo":
                element.textContent = translations[lang].skillSeo;
                break;
            case "skill-marketing":
                element.textContent = translations[lang].skillMarketing;
                break;
            case "title-experience":
                element.textContent = translations[lang].titleExperience;
                break;
            case "exp1-date":
                element.textContent = translations[lang].exp1_date;
                break;
            case "exp1-role":
                element.textContent = translations[lang].exp1_role;
                break;
            case "exp1-company":
                element.textContent = translations[lang].exp1_company;
                break;
            case "exp1-l1":
                element.textContent = translations[lang].exp1_l1;
                break;
            case "exp1-l2":
                element.textContent = translations[lang].exp1_l2;
                break;
            case "exp1-l3":
                element.textContent = translations[lang].exp1_l3;
                break;
            case "exp2-date":
                element.textContent = translations[lang].exp2_date;
                break;
            case "exp2-role":
                element.textContent = translations[lang].exp2_role;
                break;
            case "exp2-company":
                element.textContent = translations[lang].exp2_company;
                break;
            case "exp3-date":
                element.textContent = translations[lang].exp3_date;
                break;
            case "exp3-role":
                element.textContent = translations[lang].exp3_role;
                break;
            case "exp3-company":
                element.textContent = translations[lang].exp3_company;
                break;
            case "exp4-date":
                element.textContent = translations[lang].exp4_date;
                break;
            case "exp4-role":
                element.textContent = translations[lang].exp4_role;
                break;
            case "exp4-company":
                element.textContent = translations[lang].exp4_company;
                break;
            case "title-projects":
                element.textContent = translations[lang].titleProjects;
                break;
            case "proj-saraye-desc":
                element.textContent = translations[lang].proj_saraye_desc;
                break;
            case "proj-bohlul-desc":
                element.textContent = translations[lang].proj_bohlul_desc;
                break;
            case "proj-dr-desc":
                element.textContent = translations[lang].proj_dr_desc;
                break;
            case "proj-mohtava-desc":
                element.textContent = translations[lang].proj_mohtava_desc;
                break;
            case "proj5-tag":
                element.textContent = translations[lang].proj5_tag;
                break;
            case "proj-aseman-desc":
                element.textContent = translations[lang].proj_aseman_desc;
                break;
            case "proj-task-desc":
                element.textContent = translations[lang].proj_task_desc;
                break;
            case "btn-visit":
                element.textContent = translations[lang].btnVisit;
                break;
            case "btn-no-live":
                element.textContent = translations[lang].btnNoLive;
                break;
            case "btn-source":
                element.textContent = translations[lang].btnSource;
                break;
            case "title-education":
                element.textContent = translations[lang].titleEducation;
                break;
            case "edu-degree":
                element.textContent = translations[lang].eduDegree;
                break;
            case "edu-uni":
                element.textContent = translations[lang].eduUni;
                break;
            case "title-courses":
                element.textContent = translations[lang].titleCourses;
                break;
            case "course-wp":
                element.textContent = translations[lang].courseWp;
                break;
            case "course-wp-org":
                element.textContent = translations[lang].courseWpOrg;
                break;
            case "course-ai":
                element.textContent = translations[lang].courseAi;
                break;
            case "footer-rights":
                element.textContent = translations[lang].footerRights;
                break;
            case "footer-built":
                element.innerHTML = translations[lang].footerBuilt;
                break;
        }
    });
}