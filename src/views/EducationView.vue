<template>
    <div class="div-container">
        <div class="div-top">
            <div class="div-1">
                <div class="div-2">
                    <h1>Formations</h1>
                    <h2>Vous avez là un aperçu de mon cursus</h2>
                </div>
            </div>
        </div>
        <div class="formation master-un">
            <div class="formation-img animate-on-scroll">
                <img src="../assets/educations-imgs/logo-3il.png" alt="">
            </div>
            <div class="formation-details animate-on-scroll">
                <h2>2023 / 2025</h2>
                <h1>Master 1 MS2D</h1>
                <h2>"Manager de  Solution Digital et Data"</h2>
                <a href="#">
                    <h1>Groupe 3IL France</h1>
                </a>
                <div class="acquis">
                    <h1>Acquis</h1>
                    <h2>💻Développement .NET📱</h2>
                    <h3>Blazor, MAUI, WPF, ASP.NET Core</h3>
                    <h2>👉Base de données👈</h2>
                    <h3>SQL Server</h3>
                    <h2>👉CI / CD👈</h2>
                    <h3>GitHub, GitLab, SonarCloud, Docker</h3>
                    <h2>👉Gestion de projet👈</h2>
                    <h3>UML</h3>
                </div>
            </div>
        </div>
        <div class="formation bachelor">
            <div class="formation-details animate-on-scroll">
                <h2>2022 / 2023</h2>
                <h1>Bachelor DLW</h1>
                <h2>"Développement Logiciel Web"</h2>
                <a href="#">
                    <h1>IUC Douala, Cameroun</h1>
                </a>
                <div class="acquis">
                    <h1>Acquis</h1>
                    <h2>💻Développement JS/TS & Java📱</h2>
                    <h3>Frontend Angular & Vue.js</h3>
                    <h3>Backend Node.js & SpringBoot</h3>
                    <h2>👉Test Logiciel👈</h2>
                    <h3>JUnit</h3>
                </div>
            </div>
            <div class="formation-img animate-on-scroll">
                <img src="../assets/educations-imgs/logo-iuc.png" alt="">
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'MyPortFolioEducationView',

    data() {
        return {
            
        };
    },

    mounted() {
        //this.elements = this.$refs.animatedElements;
        window.addEventListener('scroll', this.handleScroll);
    },

    beforeDestroy() {
        window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
        handleScroll() {
            const elements = document.querySelectorAll(".animate-on-scroll");
            const options = {
                threshold: 0.25
            };

            const observer = new IntersectionObserver((entries, observer) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                    entry.target.classList.add("is-visible");
                    observer.unobserve(entry.target);
                    }
                });
            }, options);
            
            elements.forEach(element => {
                observer.observe(element);
            });
        }
    },
};
</script>

<style lang="scss" scoped>
    .div-container {
        width: 100%;
        //background-image: linear-gradient(to bottom, rgb(252, 219, 219, 0.7), #ffffff), url("../assets/educations-imgs/educations.svg");
        //background-repeat: no-repeat;

        //animation: linear move-background;
        //animation-duration: auto;
        //animation-timeline: scroll(root block);
    }

    /*@keyframes move-background {
        from {
          background-position: 50% 0%;
        }
        to {
          background-position: 50% 100%;
        }
    }*/

    .div-top {
        width: 100%;
        display: flex;
        align-items: center;
        justify-content: center;
        height: 100vh;
        padding: 10rem;
        background-image: linear-gradient(to bottom, rgb(252, 219, 219, 0.7), #ffffff), url("../assets/educations-imgs/educations.svg");
        background-repeat: no-repeat;
        background-position: center;
        color: #1E293B;

        .div-1 {
            padding: 5px;
            border: 1px solid #9CA3AF;
        }

        .div-2 {
            padding: 5rem 10rem 5rem 10rem;
            border: 1px solid #9CA3AF;
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
        }

        h1 {
            font-size: 7rem;
            font-weight: bold; 
        }

        h2 {
            font-size: 18px;
            font-weight: 500;
        }

        .educations-img {
            width: 20%;
        }
    }

    .formation {
        width: 100%;
        height: 100vh;
        padding: 5rem;
        display: flex;

        div {
            width: 50%;
            text-align: center;
            display: flex;
            flex-direction: column;
            justify-content: center;

            h1 {
                font-size: 2rem;
                font-weight: bold;
            }

            h2 {
                font-size: 25px;
                font-weight: 500;
            }
        }

        .acquis {
            width: 100%;

            h3 {
                font-size: 20px;
            }
        }
    }

    .bachelor {
        background: linear-gradient(to bottom, #ffffff, rgb(252, 219, 219, 0.7), #ffffff);
    }

    /********************* Animations *************************/

    .animate-on-scroll {
        opacity: 0;
        transform: translateY(50px);
        transition: opacity 0.3s ease-in-out, transform 0.3s ease-in-out;
    }
    .animate-on-scroll.is-visible {
        opacity: 1;
        transform: translateY(0);
    }

    /********************** Responsive *************************/

    @media (max-width: 768px) {
        
    }
</style>