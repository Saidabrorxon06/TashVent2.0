document.addEventListener("DOMContentLoaded", () => {

    // Sample translations data
    const translations = {
        ENG: {
            heroTitle: "MODERN & ELEGANT",
            heroDescription: "Simple and beautiful design",
            qualityTitle: "Premium Quality",
            footer: "© 2024. All Rights Reserved.",
            home: "Home",
            contact: "Contact Us",

            contactTitle: "Contact Us",
            contactDescription: "Let us know how you would like to stay in touch.",
            submitButton: "Submit",
            locationTitle: "Our Location",

            reviewsTitle: "Customer Reviews",
            reviews: [
                { text: "Excellent service! Very satisfied with the result.", author: "- Anna K." },
                { text: "Amazing design and quality execution!", author: "- Igor P." },
                { text: "I'm absolutely thrilled with the work! Highly recommend.", author: "- Elena T." },
                { text: "Everything was done quickly and with quality. I'll order again.", author: "- Oleg S." },
                { text: "The work exceeded all my expectations. Thank you!", author: "- Vera M." },
                { text: "Highly recommended! Everything was top-notch.", author: "- Artem L." },
                { text: "Best experience with a service. Fast, clear, and problem-free!", author: "- Svetlana B." },
                { text: "Quality work, no complaints.", author: "- Maxim R." },
                { text: "Honestly, the result exceeded expectations! Thanks!", author: "- Marina Z." },
                { text: "True professionals. Recommend.", author: "- Dmitry K." }
            ]
        },
        RUS: {
            heroTitle: "СОВРЕМЕННЫЙ И ЭЛЕГАНТНЫЙ",
            heroDescription: "Простой и красивый дизайн",
            qualityTitle: "Премиальное качество",
            footer: "© 2024. Все права защищены.",
            home: "Главная",
            contact: "Контакты",
            contactTitle: "Связаться с нами",
            contactDescription: "Сообщите, как вы хотите оставаться на связи.",
            submitButton: "Отправить",
            locationTitle: "Наше местоположение",

            reviewsTitle: "Отзывы наших клиентов",
            reviews: [
                { text: "Отличный сервис! Очень доволен результатом.", author: "- Анна К." },
                { text: "Потрясающий дизайн и качественное исполнение!", author: "- Игорь П." },
                { text: "Я просто в восторге от работы! Настоятельно рекомендую.", author: "- Елена Т." },
                { text: "Всё выполнили быстро и качественно. Буду заказывать ещё.", author: "- Олег С." },
                { text: "Работа превзошла все мои ожидания. Спасибо!", author: "- Вера М." },
                { text: "Очень рекомендую! Все было сделано на высшем уровне.", author: "- Артем Л." },
                { text: "Лучший опыт работы с сервисом. Быстро, чётко и без проблем!", author: "- Светлана Б." },
                { text: "Качественная работа, никаких претензий.", author: "- Максим Р." },
                { text: "Честно, результат превзошел ожидания! Спасибо!", author: "- Марина З." },
                { text: "Настоящие профессионалы своего дела. Рекомендую.", author: "- Дмитрий К." }
            ]
        },
        UZB: {
            heroTitle: "ZAMONAVIY VA O'ZGARUVCHAN",
            heroDescription: "Oddiy va chiroyli dizayn",
            qualityTitle: "Mukammal sifat",
            footer: "© 2024. Barcha huquqlar himoyalangan.",
            home: "Asosiy",
            contact: "Aloqa",
            contactTitle: "Biz bilan bog'laning",
            contactDescription: "Biz bilan qanday bog'lanishni xohlayotganingizni bildiring.",
            submitButton: "Jo'natish",
            locationTitle: "Bizning joylashuvimiz",

            reviewsTitle: "Mijozlar sharhlari",
            reviews: [
                { text: "Ajoyib xizmat! Natijadan juda mamnunman.", author: "- Anna K." },
                { text: "Ajablanarli dizayn va sifatli bajarish!", author: "- Igor P." },
                { text: "Ishdan juda hayratdaman! Katta tavsiya!", author: "- Elena T." },
                { text: "Hammasi tez va sifatli bajarildi. Yana buyurtma qilaman.", author: "- Oleg S." },
                { text: "Ish barcha kutganimdan oshdi. Rahmat!", author: "- Vera M." },
                { text: "Juda tavsiya qilaman! Hammasi yuqori darajada edi.", author: "- Artem L." },
                { text: "Eng yaxshi xizmat tajribasi. Tez, aniq va muammosiz!", author: "- Svetlana B." },
                { text: "Sifatli ish, shikoyatlar yo'q.", author: "- Maxim R." },
                { text: "Rostini aytsam, natija kutilgandan oshdi! Rahmat!", author: "- Marina Z." },
                { text: "Haqiqiy professionallar. Tavsiya qilaman.", author: "- Dmitry K." }
            ]
        }
    };

    // Language switch function
    function changeLanguage(lang) {
        const elements = document.querySelectorAll("[data-i18n]");
        elements.forEach(element => {
            const key = element.getAttribute("data-i18n");
            if (translations[lang] && translations[lang][key]) {
                element.textContent = translations[lang][key];
            } else {
                console.warn(`Translation for ${key} not found in ${lang}`);
            }
        });

        // Update reviews
        const reviewElements = document.querySelectorAll(".review");
        const reviewTexts = translations[lang].reviews;
        reviewElements.forEach((review, index) => {
            if (reviewTexts[index]) {
                review.querySelector(".review-text").textContent = reviewTexts[index].text;
                review.querySelector(".review-author").textContent = reviewTexts[index].author;
            }
        });
    }

    // Event listener for language dropdown
    const languageOptions = document.getElementById("language-options");
    if (languageOptions) {
        languageOptions.addEventListener("click", (e) => {
            const selectedLang = e.target.getAttribute("data-lang");
            if (selectedLang) {
                changeLanguage(selectedLang);
            }
        });
    }

    // Set default language on page load
    changeLanguage("ENG");


    const TOKEN = '7427479878:AAHRFmdEO5AqhOqM-rYknRhjhrx_o9goxt0';
    const chat_id = '-4546379989';

    const form = document.querySelector('#contact-form');
    const nameInp = document.querySelector('#first-name');
    const lnameInp = document.querySelector('#last-name');
    const emailInp = document.querySelector('#email');
    const phoneInp = document.querySelector('#phone');

    if (form) {
        form.addEventListener('submit', function (e) {
            e.preventDefault();

            const nameValue = nameInp.value;
            const lnameValue = lnameInp.value;
            const phoneValue = phoneInp.value;
            const emailValue = emailInp.value;

            sendData(nameValue, lnameValue, phoneValue, emailValue);
        });
    }

    async function sendData(name, lname, phone, email) {
        const info = `
            Name: ${name}
            Last Name: ${lname}
            Phone: ${phone}
            Email: ${email}
        `;

        try {
            const response = await fetch(`https://api.telegram.org/bot${TOKEN}/sendMessage`, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    chat_id: chat_id,
                    text: info,
                    parse_mode: 'HTML'
                })
            });

            if (response.ok) {
                alert('Your message has been sent!');
                form.reset();
            } else {
                alert('There was an error sending your message. Please try again later.');
            }
        } catch (error) {
            alert('There was an error sending your message. Please try again later.');
        }
    }

    let currentSlide = 0;
    const slides = document.querySelectorAll(".carousel-item");
    const totalSlides = slides.length;

    function showSlide(index) {
        slides.forEach((slide, i) => {
            slide.classList.toggle("active", i === index);
        });
    }

    function nextSlide() {
        currentSlide = (currentSlide + 1) % totalSlides;
        showSlide(currentSlide);
    }

    function prevSlide() {
        currentSlide = (currentSlide - 1 + totalSlides) % totalSlides;
        showSlide(currentSlide);
    }

    showSlide(currentSlide);
    const slideInterval = setInterval(nextSlide, 3000);

    const nextBtn = document.querySelector('.carousel-control-next');
    const prevBtn = document.querySelector('.carousel-control-prev');

    if (nextBtn) {
        nextBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            nextSlide();
        });
    }

    if (prevBtn) {
        prevBtn.addEventListener('click', () => {
            clearInterval(slideInterval);
            prevSlide();
        });
    }

    const reviewsCarousel = document.querySelector(".reviews-carousel");
    let scrollPosition = 0;

    function scrollReviews() {
        scrollPosition += 300;
        if (scrollPosition >= reviewsCarousel.scrollWidth - reviewsCarousel.clientWidth) {
            scrollPosition = 0;
        }
        reviewsCarousel.scrollTo({
            left: scrollPosition,
            behavior: "smooth"
        });
    }

    setInterval(scrollReviews, 4000);
});
