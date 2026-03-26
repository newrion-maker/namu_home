document.addEventListener('DOMContentLoaded', () => {
    // 1. Translation System
    const translations = {
        ko: {
            nav_about: '소개',
            nav_services: '서비스',
            nav_gallery: '갤러리',
            nav_book: '예약하기',
            hero_title: 'PHOTOGRAPHY &<span>CREATIVE SPACE</span>',
            hero_desc: 'STUDIO NAMU는 웨딩, 가족 사진, 커머셜 촬영, 코스프레, 기업 이벤트를 위한 프리미엄 렌탈 스튜디오입니다. 우리의 하이엔드 장비와 미학적인 공간을 경험해 보세요.',
            hero_btn_services: '포트폴리오 보기',
            hero_btn_contact: '예약하기',
            about_subtitle: 'About STUDIO NAMU',
            about_title: '당신의 특별한 모든 순간을<br>가장 아름답게 담아냅니다',
            about_desc: '우리는 단순히 사진을 찍는 것을 넘어, 그 시절의 공기와 감정까지도 프레임에 담으려 노력합니다. 최고급 장비와 전문적인 스태프들이 당신의 이야기를 함께 써내려가겠습니다.',
            services_subtitle: 'Our Services',
            services_title: '우리가 제공하는 가치',
            service_1_title: '웨딩 사진 촬영',
            service_1_desc: '생애 가장 소중한 날, 자연스럽고 우아한 시선으로 당신의 웨딩 스냅을 예술로 승화시킵니다.',
            service_2_title: '스튜디오 대여',
            service_2_desc: '동호회, 쇼핑몰, 개인 작가를 위한 전문적인 조명과 공간을 제공합니다. 당신의 창의력을 마음껏 발휘하세요.',
            service_3_title: '커스텀 앨범 & 액자',
            service_3_desc: '촬영된 결과물을 가장 아름다운 모습으로 간직할 수 있도록 프리미엄 앨범 및 액자 제작 서비스를 제공합니다.',
            link_more: '더 알아보기 →',
            gallery_subtitle: 'Portfolio',
            gallery_title: '갤러리',
            filter_all: '전체',
            filter_wedding: '웨딩',
            filter_family: '가족',
            filter_club: '동호회',
            filter_ai: 'AI',
            gallery_col: '컬렉션',
            gallery_photo: '촬영',
            contact_subtitle: 'Get in Touch',
            contact_title: '문의 및 예약',
            contact_desc: '완벽한 순간을 위한 첫 걸음.<br>원하시는 날짜와 시간을 선택하여 간편하게 예약하세요.',
            contact_addr: '📍 4F Sir Thomas Sq Bldg. 18 Matalino St. Diliman, QC, Philippines',
            contact_phone: '📞 +63 956 301 1410',
            contact_email: '📧 silvershoes@hanmail.net',
            contact_hours: '⏰ 연중무휴 24시간 운영',
            form_name: '이름',
            form_name_placeholder: '성함을 입력하세요',
            form_service: '서비스 선택',
            opt_wedding: '웨딩 촬영',
            opt_rental: '스튜디오 대여',
            opt_family: '가족 사진',
            opt_other: '기타 문의',
            form_msg: '문의 내용',
            form_msg_placeholder: '상세한 내용을 입력해 주세요',
            form_submit: '문의하기',
            footer_copy: '&copy; 2026 STUDIO NAMU. All rights reserved.',
            alert_success: '님, 문의가 성공적으로 접수되었습니다. 곧 연락드리겠습니다!'
        },
        en: {
            nav_about: 'About',
            nav_services: 'Services',
            nav_gallery: 'Gallery',
            nav_book: 'Book Now',
            hero_title: 'PHOTOGRAPHY &<span>CREATIVE SPACE</span>',
            hero_desc: 'STUDIO NAMU is a premium rental studio for weddings, family portraits, commercial shoots, cosplay, and corporate events. Experience our high-end equipment and aesthetic spaces.',
            hero_btn_services: 'VIEW PORTFOLIO',
            hero_btn_contact: 'BOOK A SESSION',
            about_subtitle: 'About STUDIO NAMU',
            about_title: 'Preserving Your Special<br>Moments Most Beautifully',
            about_desc: 'Beyond just taking photos, we capture the emotions and essence of the moment. Our premium equipment and expert staff will help write your story.',
            services_subtitle: 'Our Services',
            services_title: 'The Value We Provide',
            service_1_title: 'Wedding Photography',
            service_1_desc: 'Transforming your most precious day into art through natural and elegant perspectives.',
            service_2_title: 'Studio Rental',
            service_2_desc: 'Providing professional lighting and space for clubs, shops, and individual artists. Express your creativity.',
            service_3_title: 'Custom Albums & Frames',
            service_3_desc: 'Premium album and frame crafting services to keep your results in their most beautiful form.',
            link_more: 'Learn More →',
            gallery_subtitle: 'Portfolio',
            gallery_title: 'Gallery',
            filter_all: 'All',
            filter_wedding: 'Wedding',
            filter_family: 'Family',
            filter_club: 'Club',
            filter_ai: 'AI',
            gallery_col: 'Collection',
            gallery_photo: 'Photography',
            contact_subtitle: 'Get in Touch',
            contact_title: 'CONTACT & RESERVATION',
            contact_desc: 'The first step towards your perfect moment.<br>Select your preferred date and time to book easily.',
            contact_addr: '📍 4F Sir Thomas Sq Bldg. 18 Matalino St. Diliman, QC, Philippines',
            contact_phone: '📞 +63 956 301 1410',
            contact_email: '📧 silvershoes@hanmail.net',
            contact_hours: '⏰ Open 24 Hours / 7 Days a Week',
            form_name: 'Name',
            form_name_placeholder: 'Enter your name',
            form_service: 'Select Service',
            opt_wedding: 'Wedding',
            opt_rental: 'Studio Rental',
            opt_family: 'Family Portrait',
            opt_other: 'Other Inquiry',
            form_msg: 'Message',
            form_msg_placeholder: 'Please feel free to contact us with any inquiries.',
            form_submit: 'Submit Inquiry',
            footer_copy: '&copy; 2026 STUDIO NAMU. All rights reserved.',
            alert_success: ', Your inquiry has been submitted. We will contact you soon!'
        }
    };

    let currentLang = localStorage.getItem('lang') || 'ko';

    const updateLanguage = (lang) => {
        currentLang = lang;
        localStorage.setItem('lang', lang);
        
        document.querySelectorAll('[data-i18n]').forEach(el => {
            const key = el.getAttribute('data-i18n');
            if (translations[lang][key]) {
                el.innerHTML = translations[lang][key];
            }
        });

        document.querySelectorAll('[data-i18n-placeholder]').forEach(el => {
            const key = el.getAttribute('data-i18n-placeholder');
            if (translations[lang][key]) {
                el.placeholder = translations[lang][key];
            }
        });

        document.querySelectorAll('.lang-btn').forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });

        loadGallery();
    };

    // 2. Dynamic Gallery Loading
    const galleryGrid = document.getElementById('gallery-grid');
    const categories = ['wedding', 'family', 'club', 'ai'];
    const maxImagesPerCategory = 10;

    const loadGallery = async () => {
        if (!galleryGrid) return;
        galleryGrid.innerHTML = '';
        
        for (const cat of categories) {
            for (let i = 1; i <= maxImagesPerCategory; i++) {
                const imgPath = `assets/images/gallery/${cat}/${i}.png`;
                const exists = await checkImageExists(imgPath);
                
                if (exists) {
                    const item = createGalleryItem(cat, imgPath, i);
                    galleryGrid.appendChild(item);
                } else {
                    break;
                }
            }
        }
        
        initRevealAnimations();
        initLightbox();
    };

    const checkImageExists = (url) => {
        return new Promise((resolve) => {
            const img = new Image();
            img.onload = () => resolve(true);
            img.onerror = () => resolve(false);
            img.src = url;
        });
    };

    const createGalleryItem = (category, path, index) => {
        const div = document.createElement('div');
        div.className = 'gallery-item glass-card reveal-up';
        div.setAttribute('data-category', category);
        
        const lang = currentLang;
        const colLabel = translations[lang].gallery_col;
        const photoLabel = translations[lang].gallery_photo;
        const catLabel = translations[lang][`filter_${category}`] || category;
        
        div.innerHTML = `
            <img src="${path}" alt="${catLabel} ${index}">
            <div class="gallery-info">
                <h4>${catLabel} ${colLabel}</h4>
                <p>${catLabel} ${photoLabel} #${index}</p>
            </div>
        `;
        return div;
    };

    // 3. Gallery Filtering
    const filterButtons = document.querySelectorAll('.tab-btn');
    filterButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const filter = btn.getAttribute('data-filter');
            filterButtons.forEach(b => b.classList.remove('active'));
            btn.classList.add('active');
            
            const items = document.querySelectorAll('.gallery-item');
            items.forEach(item => {
                if (filter === 'all' || item.getAttribute('data-category') === filter) {
                    item.style.display = 'block';
                    setTimeout(() => item.style.opacity = '1', 10);
                } else {
                    item.style.opacity = '0';
                    setTimeout(() => item.style.display = 'none', 300);
                }
            });
        });
    });

    // 4. Lightbox Modal
    const lightbox = document.getElementById('lightbox');
    const lightboxImg = document.getElementById('lightbox-img');
    const lightboxCaption = document.getElementById('lightbox-caption');
    const closeBtn = document.querySelector('.lightbox-close');

    const initLightbox = () => {
        const items = document.querySelectorAll('.gallery-item');
        items.forEach(item => {
            item.onclick = () => {
                const img = item.querySelector('img');
                const title = item.querySelector('h4').innerText;
                const desc = item.querySelector('p').innerText;
                
                lightboxImg.src = img.src;
                lightboxCaption.innerHTML = `<strong>${title}</strong><br>${desc}`;
                lightbox.classList.add('active');
                document.body.style.overflow = 'hidden';
            };
        });
    };

    if (closeBtn) {
        closeBtn.onclick = () => {
            lightbox.classList.remove('active');
            document.body.style.overflow = 'auto';
        };
    }

    if (lightbox) {
        lightbox.onclick = (e) => {
            if (e.target === lightbox || e.target === closeBtn) {
                lightbox.classList.remove('active');
                document.body.style.overflow = 'auto';
            }
        };
    }

    // 5. Theme Toggle Logic
    const themeToggle = document.getElementById('theme-toggle');
    const currentTheme = localStorage.getItem('theme') || 'light';
    document.documentElement.setAttribute('data-theme', currentTheme);

    if (themeToggle) {
        themeToggle.addEventListener('click', () => {
            const theme = document.documentElement.getAttribute('data-theme');
            const newTheme = theme === 'light' ? 'dark' : 'light';
            document.documentElement.setAttribute('data-theme', newTheme);
            localStorage.setItem('theme', newTheme);
        });
    }

    // 6. Navigation Scroll Effect
    const nav = document.querySelector('.glass-nav');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            nav.classList.add('scrolled');
        } else {
            nav.classList.remove('scrolled');
        }
    });

    // 7. Scroll Reveal Animations
    const initRevealAnimations = () => {
        const reveals = document.querySelectorAll('.reveal-up, .reveal-left, .reveal-right');
        const revealLoop = () => {
            reveals.forEach(el => {
                const windowHeight = window.innerHeight;
                const elementTop = el.getBoundingClientRect().top;
                if (elementTop < windowHeight - 100) {
                    el.classList.add('active');
                }
            });
        };
        window.addEventListener('scroll', revealLoop);
        revealLoop();
    };

    // 8. Form Submission
    const bookingForm = document.getElementById('booking-form');
    if (bookingForm) {
        bookingForm.addEventListener('submit', (e) => {
            e.preventDefault();
            const name = document.getElementById('name').value;
            const successMsg = translations[currentLang].alert_success;
            alert(`${name}${successMsg}`);
            bookingForm.reset();
        });
    }

    // 9. Language Switcher Event Listeners
    document.querySelectorAll('.lang-btn').forEach(btn => {
        btn.addEventListener('click', () => {
            updateLanguage(btn.getAttribute('data-lang'));
        });
    });

    // 10. Dynamic Hero Slider
    const heroSlider = document.getElementById('hero-slider');
    let heroSlides = [];
    let currentSlideIndex = 0;

    const loadHeroSlider = async () => {
        if (!heroSlider) return;
        
        const extensions = ['png', 'jpg', 'jpeg'];
        
        for (let i = 1; i <= 20; i++) {
            let foundPath = null;
            
            for (const ext of extensions) {
                const imgPath = `assets/images/hero/${i}.${ext}`;
                const exists = await checkImageExists(imgPath);
                if (exists) {
                    foundPath = imgPath;
                    break;
                }
            }
            
            if (foundPath) {
                const slide = document.createElement('div');
                slide.className = 'hero-slide';
                slide.style.backgroundImage = `url('${foundPath}')`;
                if (i === 1) slide.classList.add('active');
                heroSlider.appendChild(slide);
                heroSlides.push(slide);
            } else {
                if (i === 1) continue; // Try next index if 1 is missing? No, stay consistent.
                break;
            }
        }

        if (heroSlides.length > 1) {
            setInterval(nextHeroSlide, 5000); // Switch every 5 seconds
        }
    };

    const nextHeroSlide = () => {
        if (heroSlides.length === 0) return;
        heroSlides[currentSlideIndex].classList.remove('active');
        currentSlideIndex = (currentSlideIndex + 1) % heroSlides.length;
        heroSlides[currentSlideIndex].classList.add('active');
    };

    // 11. Dynamic Service Backgrounds
    const loadServiceBackgrounds = async () => {
        const serviceBgs = document.querySelectorAll('.service-card-bg');
        const extensions = ['png', 'jpg', 'jpeg'];

        for (const bg of serviceBgs) {
            const id = bg.getAttribute('data-service-id');
            for (const ext of extensions) {
                const imgPath = `assets/images/services/service${id}.${ext}`;
                const exists = await checkImageExists(imgPath);
                if (exists) {
                    bg.style.backgroundImage = `url('${imgPath}')`;
                    break;
                }
            }
        }
    };

    // 12. Mobile Menu Toggle
    const mobileMenuBtn = document.querySelector('.mobile-menu-btn');
    const navLinks = document.querySelector('.nav-links');

    if (mobileMenuBtn && navLinks) {
        mobileMenuBtn.addEventListener('click', () => {
            navLinks.classList.toggle('active');
            const isActive = navLinks.classList.contains('active');
            
            // Re-select icons as Lucide might have replaced them
            const currentMenuIcon = mobileMenuBtn.querySelector('.menu-icon');
            const currentCloseIcon = mobileMenuBtn.querySelector('.close-icon');
            
            if (isActive) {
                if (currentMenuIcon) currentMenuIcon.style.display = 'none';
                if (currentCloseIcon) currentCloseIcon.style.display = 'block';
                document.body.style.overflow = 'hidden';
            } else {
                if (currentMenuIcon) currentMenuIcon.style.display = 'block';
                if (currentCloseIcon) currentCloseIcon.style.display = 'none';
                document.body.style.overflow = 'auto';
            }
        });

        // Close menu when clicking a link
        document.querySelectorAll('.nav-links a').forEach(link => {
            link.addEventListener('click', () => {
                navLinks.classList.remove('active');
                const currentMenuIcon = mobileMenuBtn.querySelector('.menu-icon');
                const currentCloseIcon = mobileMenuBtn.querySelector('.close-icon');
                if (currentMenuIcon) currentMenuIcon.style.display = 'block';
                if (currentCloseIcon) currentCloseIcon.style.display = 'none';
                document.body.style.overflow = 'auto';
            });
        });
    }

    // Start everything
    lucide.createIcons();
    updateLanguage(currentLang);
    loadHeroSlider();
    loadServiceBackgrounds();
});
