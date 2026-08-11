
/* =====================================================
   PORTFÓLIO - JAVASCRIPT
===================================================== */


/* =========================================================
   MENU HAMBÚRGUER
========================================================= */

const menuToggle = document.getElementById("menu-toggle");
const navbar = document.getElementById("navbar");


/*
    Verifica se os elementos existem.
*/

if (menuToggle && navbar) {

    menuToggle.addEventListener("click", function () {

        /*
            Adiciona ou remove a classe "active".
        */

        navbar.classList.toggle("active");


        /*
            Verifica se o menu está aberto.
        */

        const menuAberto =
            navbar.classList.contains("active");


        /*
            Atualiza aria-expanded.
        */

        menuToggle.setAttribute(
            "aria-expanded",
            menuAberto
        );


        /*
            Altera o ícone.
        */

        const icon =
            menuToggle.querySelector("i");


        if (icon) {

            if (menuAberto) {

                icon.classList.remove("fa-bars");

                icon.classList.add("fa-xmark");

            } else {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        }

    });


    /*
        Fecha o menu quando um link é clicado.
    */

    const links =
        navbar.querySelectorAll("a");


    links.forEach(link => {

        link.addEventListener("click", function () {

            navbar.classList.remove("active");

            menuToggle.setAttribute(
                "aria-expanded",
                "false"
            );


            const icon =
                menuToggle.querySelector("i");


            if (icon) {

                icon.classList.remove("fa-xmark");

                icon.classList.add("fa-bars");

            }

        });

    });

}


/* =====================================================
   HEADER AO FAZER SCROLL
===================================================== */

const header =
    document.getElementById("header");


function updateHeader() {

    if (window.scrollY > 50) {

        header.classList.add("scrolled");

    } else {

        header.classList.remove("scrolled");

    }

}


window.addEventListener(
    "scroll",
    updateHeader
);


updateHeader();


/* =====================================================
   TEMA CLARO / ESCURO
===================================================== */

const themeToggle =
    document.getElementById("theme-toggle");


const savedTheme =
    localStorage.getItem("portfolio-theme");


if (savedTheme === "light") {

    document.body.classList.add(
        "light-theme"
    );

    updateThemeIcon();

}


function updateThemeIcon() {

    const icon =
        themeToggle.querySelector("i");


    if (
        document.body.classList.contains(
            "light-theme"
        )
    ) {

        icon.classList.remove(
            "fa-moon"
        );

        icon.classList.add(
            "fa-sun"
        );

    } else {

        icon.classList.remove(
            "fa-sun"
        );

        icon.classList.add(
            "fa-moon"
        );

    }

}


themeToggle.addEventListener(
    "click",
    () => {

        document.body.classList.toggle(
            "light-theme"
        );


        const theme =
            document.body.classList.contains(
                "light-theme"
            )
                ? "light"
                : "dark";


        localStorage.setItem(
            "portfolio-theme",
            theme
        );


        updateThemeIcon();

    }
);


/* =====================================================
   EFEITO DE DIGITAÇÃO
===================================================== */

const typingElement =
    document.getElementById("typing");


const typingWords = [
    "Java",
    "Backend",
    "Spring Boot",
    "Software"
];


let wordIndex = 0;

let charIndex = 0;

let deleting = false;


function typingEffect() {

    const currentWord =
        typingWords[wordIndex];


    if (!deleting) {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex + 1
            );

        charIndex++;


        if (
            charIndex ===
            currentWord.length
        ) {

            deleting = true;

            setTimeout(
                typingEffect,
                1500
            );

            return;

        }

    } else {

        typingElement.textContent =
            currentWord.substring(
                0,
                charIndex - 1
            );

        charIndex--;


        if (charIndex === 0) {

            deleting = false;

            wordIndex =
                (wordIndex + 1)
                % typingWords.length;

        }

    }


    const speed =
        deleting ? 60 : 100;


    setTimeout(
        typingEffect,
        speed
    );

}


if (typingElement) {

    typingEffect();

}


/* =====================================================
   FILTRO DE PROJETOS
===================================================== */

const filterButtons =
    document.querySelectorAll(
        ".filter-btn"
    );


const projectCards =
    document.querySelectorAll(
        ".project-card"
    );


filterButtons.forEach(button => {

    button.addEventListener(
        "click",
        () => {

            filterButtons.forEach(btn => {

                btn.classList.remove(
                    "active"
                );

            });


            button.classList.add(
                "active"
            );


            const filter =
                button.dataset.filter;


            projectCards.forEach(project => {

                const category =
                    project.dataset.category;


                if (
                    filter === "all" ||
                    category === filter
                ) {

                    project.classList.remove(
                        "hidden"
                    );

                } else {

                    project.classList.add(
                        "hidden"
                    );

                }

            });

        }
    );

});


/* =====================================================
   GALERIA / MODAL
===================================================== */

const galleryItems =
    document.querySelectorAll(
        ".gallery-item"
    );


const imageModal =
    document.getElementById(
        "image-modal"
    );


const modalImage =
    document.getElementById(
        "modal-image"
    );


const modalClose =
    document.getElementById(
        "modal-close"
    );


galleryItems.forEach(item => {

    item.addEventListener(
        "click",
        () => {

            const image =
                item.dataset.image;


            modalImage.src =
                image;


            imageModal.classList.add(
                "active"
            );


            document.body.style.overflow =
                "hidden";

        }
    );

});


function closeModal() {

    imageModal.classList.remove(
        "active"
    );


    document.body.style.overflow =
        "";

}


modalClose.addEventListener(
    "click",
    closeModal
);


imageModal.addEventListener(
    "click",
    event => {

        if (
            event.target ===
            imageModal
        ) {

            closeModal();

        }

    }
);


/* ESC fecha a imagem */

document.addEventListener(
    "keydown",
    event => {

        if (
            event.key === "Escape" &&
            imageModal.classList.contains(
                "active"
            )
        ) {

            closeModal();

        }

    }
);


/* =====================================================
   ANIMAÇÃO AO ENTRAR NA TELA
===================================================== */

const elementsToReveal =
    document.querySelectorAll(
        ".section, .technology-card, .project-card, .article-card, .stack-card, .timeline-item"
    );


elementsToReveal.forEach(
    element => {

        element.classList.add(
            "reveal"
        );

    }
);


const observer =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    entry.target.classList.add(
                        "visible"
                    );

                    observer.unobserve(
                        entry.target
                    );

                }

            });

        },
        {
            threshold: 0.1
        }
    );


elementsToReveal.forEach(
    element => {

        observer.observe(
            element
        );

    }
);


/* =====================================================
   MENU ATIVO CONFORME A SEÇÃO
===================================================== */

const sections =
    document.querySelectorAll(
        "main section[id]"
    );


const navigationLinks =
    document.querySelectorAll(
        ".nav-link"
    );


const sectionObserver =
    new IntersectionObserver(
        entries => {

            entries.forEach(entry => {

                if (
                    entry.isIntersecting
                ) {

                    navigationLinks.forEach(
                        link => {

                            link.classList.remove(
                                "active"
                            );

                        }
                    );


                    const activeLink =
                        document.querySelector(
                            `.nav-link[href="#${entry.target.id}"]`
                        );


                    if (activeLink) {

                        activeLink.classList.add(
                            "active"
                        );

                    }

                }

            });

        },
        {
            threshold: 0.35
        }
    );


sections.forEach(
    section => {

        sectionObserver.observe(
            section
        );

    }
);


/* =====================================================
   VOLTAR AO TOPO
===================================================== */

const backToTop =
    document.getElementById(
        "back-to-top"
    );


window.addEventListener(
    "scroll",
    () => {

        if (window.scrollY > 500) {

            backToTop.classList.add(
                "show"
            );

        } else {

            backToTop.classList.remove(
                "show"
            );

        }

    }
);


backToTop.addEventListener(
    "click",
    () => {

        window.scrollTo({
            top: 0,
            behavior: "smooth"
        });

    }
);


/* =====================================================
   FORMULÁRIO DE CONTATO
===================================================== */

const contactForm =
    document.getElementById(
        "contact-form"
    );


const formMessage =
    document.getElementById(
        "form-message"
    );


if (contactForm) {

    contactForm.addEventListener(
        "submit",
        event => {

            event.preventDefault();


            const name =
                document
                    .getElementById("name")
                    .value
                    .trim();


            const email =
                document
                    .getElementById("email")
                    .value
                    .trim();


            const message =
                document
                    .getElementById("message")
                    .value
                    .trim();


            if (
                !name ||
                !email ||
                !message
            ) {

                formMessage.textContent =
                    "Preencha todos os campos.";

                return;

            }


            /*
             * ALTERE ESTE EMAIL
             * PARA O SEU EMAIL REAL.
             */

            const destination =
                "seuemail@exemplo.com";


            const subject =
                encodeURIComponent(
                    `Contato do portfólio - ${name}`
                );


            const body =
                encodeURIComponent(
                    `Nome: ${name}\n` +
                    `Email: ${email}\n\n` +
                    `Mensagem:\n${message}`
                );


            formMessage.textContent =
                "Abrindo seu aplicativo de email...";


            window.location.href =
                `mailto:${destination}?subject=${subject}&body=${body}`;

        }
    );

}


/* =====================================================
   ANO AUTOMÁTICO DO FOOTER
===================================================== */

const currentYear =
    new Date().getFullYear();


const footerYear =
    document.querySelector(
        ".footer-bottom p"
    );


if (footerYear) {

    footerYear.innerHTML =
        `© ${currentYear} Edilson Alexandre.
         Todos os direitos reservados.`;

}