const data = {
    // --- ÇEVİRİLER ---
    translations: {
        tr: {
            btn_lang: "EN | English",
            nav: { about: "Hakkımda", projects: "Projeler", journal: "Blog", contact: "İletişim" },
            hero: {
                greeting: "MERHABA, BEN",
                title: "Ali Eren KAMALIOĞLU",
                role_1: "Yazılım Mühendisi",
                role_2: "Full Stack Geliştirici",
                role_3: "Yapay Zeka Uzmanı",
                desc: "İşletmeler için ölçeklenebilir <b>Backend</b> mimarileri, kullanıcı dostu <b>Frontend</b> arayüzleri ve veriye dayalı <b>Yapay Zeka</b> çözümleri tasarlıyorum. Karmaşık problemleri, şirketiniz için ölçülebilir değere dönüştürüyorum.",
                btn: "Projeleri İncele",
                btn_about: "Beni Tanıyın"
            },
            about: {
                heading: "Mühendislik Profili",
                sub_heading: "Vizyon & Yetkinlikler",
                p1: "2002 yılında Aydın'da başlayan hikayemi, <b>İstanbul Topkapı Üniversitesi</b>'nde mühendislik disipliniyle birleştirdim. Sadece kod yazan değil; işletmelerin ihtiyaçlarını anlayan, <b>maliyet etkin (cost-effective)</b> ve <b>sürdürülebilir</b> sistemler kuran bir mühendislik yaklaşımını benimsiyorum.",
                p2: "Backend tarafında <b>.NET Core & N-Tier Architecture</b> ile güvenli API'lar geliştirirken, Frontend'de modern UI/UX prensiplerini uyguluyorum. Aynı zamanda <b>TensorFlow</b> ile geliştirdiğim AI modelleriyle, veriyi stratejik bir güce dönüştürüyorum.",
                p3: "Takım çalışmasına yatkın, sürekli öğrenen ve proaktif bir yapıya sahibim.",
                stat_1: "Kodlama Yılı",
                stat_2: "Tamamlanan Proje",
                stat_3: "AI Başarım",
                btn_cv: "Özgeçmişi İndir (PDF)"
            },
            projects: {
                heading: "Seçilmiş Projeler",
                sub: "Backend, Frontend ve AI alanındaki teknik yetkinliklerim.",
                filter_all: "Tümü",
                btn_code: "Kodu İncele"
            },
            journal: {
                heading: "Teknik Blog",
                sub: "Sektörel içgörüler ve mimari notlarım."
            },
            contact: {
                heading: "İş Birliği & İletişim",
                sub: "Staj, proje veya tanışmak için iletişime geçebilirsiniz.",
                label_name: "AD SOYAD",
                label_email: "E-POSTA ADRESİ",
                label_msg: "MESAJINIZ",
                ph_name: "Adınız Soyadınız",
                ph_email: "ik@sirket.com",
                ph_msg: "Merhaba, staj pozisyonu için...",
                btn_send: "Mesajı Gönder",
                info_email: "E-POSTA",
                info_loc: "KONUM",
                info_social: "PROFESYONEL AĞLAR"
            },
            footer: "Ali Eren KAMALIOĞLU © 2026 | Tüm Hakları Saklıdır."
        },
        en: {
            btn_lang: "TR | Türkçe",
            nav: { about: "About", projects: "Projects", journal: "Blog", contact: "Contact" },
            hero: {
                greeting: "HELLO, I AM",
                title: "Ali Eren KAMALIOĞLU",
                role_1: "Software Engineer",
                role_2: "Full Stack Developer",
                role_3: "AI Specialist",
                desc: "I design scalable <b>Backend</b> architectures, user-friendly <b>Frontend</b> interfaces, and data-driven <b>AI</b> solutions. I transform complex technical problems into measurable business value.",
                btn: "View Projects",
                btn_about: "More About Me"
            },
            about: {
                heading: "Engineering Profile",
                sub_heading: "Vision & Skills",
                p1: "Born in Aydın in 2002, I combined my story with engineering discipline at <b>Istanbul Topkapi University</b>. I adopt an engineering approach that not only writes code but also builds <b>cost-effective</b> and <b>scalable</b> systems aimed at business needs.",
                p2: "While developing secure APIs with <b>.NET Core & N-Tier Architecture</b> on the Backend, I apply modern UI/UX principles on the Frontend. Simultaneously, I turn data into strategic power with AI models I develop using <b>TensorFlow</b>.",
                p3: "I am a proactive team player who is constantly learning and adapting.",
                stat_1: "Years Coding",
                stat_2: "Projects Done",
                stat_3: "AI Accuracy",
                btn_cv: "Download Resume (PDF)"
            },
            projects: {
                heading: "Featured Projects",
                sub: "My technical competencies in Backend, Frontend, and AI.",
                filter_all: "All",
                btn_code: "View Code"
            },
            journal: {
                heading: "Technical Blog",
                sub: "Industry insights and architectural notes."
            },
            contact: {
                heading: "Contact & Collaboration",
                sub: "Feel free to reach out for internship or collaboration.",
                label_name: "FULL NAME",
                label_email: "EMAIL ADDRESS",
                label_msg: "YOUR MESSAGE",
                ph_name: "John Doe",
                ph_email: "hr@company.com",
                ph_msg: "Hi, regarding the internship...",
                btn_send: "Send Message",
                info_email: "EMAIL",
                info_loc: "LOCATION",
                info_social: "PROFESSIONAL NETWORKS"
            },
            footer: "Ali Eren KAMALIOĞLU © 2026 | All Rights Reserved."
        }
    },

    // --- PROJE LİSTESİ ---
    projects: [
        {
            id: "melanoma",
            featured: true,
            title: "Melanoma AI Diagnosis",
            category: "ai",
            tech: ["Python", "TensorFlow", "CNN", "Medical"],
            desc_tr: "Sağlık sektörü için geliştirilen, 10.000+ görüntü ile eğitilmiş erken teşhis asistanı. %94.5 doğruluk oranı ile doktorlara karar desteği sunar.",
            desc_en: "Early diagnosis assistant for healthcare, trained with 10k+ images. Provides decision support to doctors with 94.5% accuracy.",
            github: "https://github.com/ErenRR001"
        },
        {
            id: "artgallery",
            featured: true,
            title: "Enterprise CMS Architecture",
            category: "backend",
            tech: [".NET Core", "N-Tier", "MSSQL", "Clean Arch"],
            desc_tr: "Kurumsal ölçeklenebilirlik için N-Katmanlı mimari ile geliştirilmiş içerik yönetim sistemi. SOLID prensipleri ve güvenli API yapısı.",
            desc_en: "Content management system developed with N-Tier architecture for enterprise scalability. SOLID principles and secure API structure.",
            github: "https://github.com/ErenRR001"
        },
        {
            id: "crypto",
            featured: true,
            title: "Crypto Dashboard UI",
            category: "frontend",
            tech: ["JavaScript", "Chart.js", "API Integration"],
            desc_tr: "Binance API entegrasyonu ile canlı veri akışı sağlayan, kullanıcı dostu finansal takip arayüzü. Dinamik grafikler ve anlık uyarılar.",
            desc_en: "User-friendly financial tracking interface providing live data stream with Binance API integration. Dynamic charts and instant alerts.",
            github: "https://github.com/ErenRR001"
        },
        {
            id: "lms",
            featured: false,
            title: "Library Automation",
            category: "fullstack",
            tech: ["C#", "WinForms", "Entity Framework"],
            desc_tr: "Veritabanı yönetimi ve kullanıcı arayüzünü birleştiren masaüstü otomasyonu. Envanter takibi ve raporlama modülleri.",
            desc_en: "Desktop automation combining database management and UI. Inventory tracking and reporting modules.",
            github: "https://github.com/ErenRR001"
        },
        {
            id: "spotify",
            featured: false,
            title: "Big Data Analysis",
            category: "ai",
            tech: ["Python", "Pandas", "Scikit-Learn"],
            desc_tr: "Spotify verileri üzerinden şarkı popülaritesini tahmin eden veri madenciliği projesi. Büyük veri işleme teknikleri.",
            desc_en: "Data mining project predicting song popularity using Spotify data. Big data processing techniques.",
            github: "https://github.com/ErenRR001"
        }
    ],

    // --- BLOG YAZILARI ---
    journal: [
        {
            date: "20 Jan 2026",
            title_tr: "Neden N-Katmanlı Mimari Kullanıyorum?",
            title_en: "Why I Use N-Tier Architecture?",
            desc_tr: "Kurumsal projelerde kodun sürdürülebilirliği, güvenliği ve veritabanı bağımsızlığı üzerine teknik bir inceleme.",
            desc_en: "A technical review on code maintainability, security, and database independence in enterprise projects.",
            tags: ["Architecture", "Backend"]
        },
        {
            date: "15 Dec 2025",
            title_tr: "Yapay Zeka ve Etik: Sağlık Verileri",
            title_en: "AI and Ethics: Healthcare Data",
            desc_tr: "Melanoma projesi sürecinde dengesiz veri setleriyle (Imbalanced Datasets) nasıl başa çıktım?",
            desc_en: "How did I deal with Imbalanced Datasets during the Melanoma project process?",
            tags: ["AI", "Research"]
        }
    ]
};