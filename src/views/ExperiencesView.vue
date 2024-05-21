<template>
    <div class="div-container">
        <div class="div-top">
            <h1>Expériences</h1>
            <p>Are you interested in my experience ? 🙂</p>
            <div class="blur blur_0">
            </div>
            <div class="blur blur_1">
            </div>
            <div class="blur blur_2">
            </div>
        </div>
        <div class="div-experiences">
            <hr>
            <div class="experiences grid grid-cols-1 gap-5">
                <div class="experience">
                    <div class="experience-title">
                        <h3><b>Stage Développeur Fullstack</b></h3>
                        <p>Avril 2023 -- Juillet 2023</p>
                        <span><b>+</b></span>
                    </div>
                    <div class="experience-details">
                        <div class="entrprise">
                            <p>
                                <b>DevPea</b>
                            </p>
                            <div class="entreprise-logo">
                                <img src="../assets/logo.svg" alt="DevPea">
                            </div>
                        </div>
                        <p>                           
                            📍Douala, Cameroun<br><br>
                            L'objectif de ce stage était de réaliser une plateforme pour l'apprentissage en ligne du
                            code de la route. <br><br>
                            Dans une équipe de 4 développeurs mes missions étaient: <br>
                            🔵 Analyse de projet, <br>
                            🔵 UI design, <br>
                            🔵 Développement frontend, <br>
                            🔵 Développement backend. <br>
                        </p>
                    </div>
                </div>

                <div class="experience">
                    <div class="experience-title">
                        <h3><b>Stage Développeur Web</b></h3>
                        <p>Juin 2022 -- Août 2022</p>
                        <span><b>+</b></span>
                    </div>
                    <div class="experience-details">
                        <div class="entrprise">
                            <p>
                                <b>Limitless-Tech</b>
                            </p>
                            <div class="entreprise-logo">
                                <img src="../assets/logo.svg" alt="Limitless-Tech">
                            </div>
                        </div>
                        <p>                           
                            📍Yaoundé, Cameroun<br><br>
                            Il m'a été demande de concevoir et implémenter un backoffice pour la gestion d'une 
                            plateforme de payement en ligne. <br><br>

                            Missions: <br>
                            🔵 Analyse de projet, <br>
                            🔵 Planification, <br>
                            🔵 UI design, <br>
                            🔵 Développement frontend, <br>
                            🔵 Développement backend, <br>
                            🔵 Tests.<br>
                        </p>
                    </div>
                </div>

                <div class="experience">
                    <div class="experience-title">
                        <h3><b>Stage Développeur Fullstack</b></h3>
                        <p>Juin 2021 -- Août 2021</p>
                        <span><b>+</b></span>
                    </div>
                    <div class="experience-details">
                        <div class="entrprise">
                            <p>
                                <b>Limitless-Tech</b>
                            </p>
                            <div class="entreprise-logo">
                                <img src="../assets/logo.svg" alt="Limitless-Tech">
                            </div>
                        </div>
                        <p>                           
                            📍Yaoundé, Cameroun<br><br>
                            Durant ce stage j'avais pour objectif de réaliser une application de gestion de stock. <br><br>

                            Missions: <br>
                            🔵 Rédaction du cahier de charges, <br>
                            🔵 Analyse de projet, <br>
                            🔵 Planification, <br>
                            🔵 UI design, <br>
                            🔵 Développement frontend, <br>
                            🔵 Développement backend. <br>
                        </p>
                    </div>
                </div>
            </div>
            <hr>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ExperiencesView',

    data() {
        return {
            
        };
    },

    mounted() {
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
.div-container {
    width: 100%;
    min-height: 100vh;
    background-image: linear-gradient(white 0.9px, transparent 0.9px), linear-gradient(to right, white 0.9px, rgba(248, 252, 252, 0.74) 0.9px);
    background-size: 18px 18px;
}

.div-top {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    gap: 0;

    .blur {
        width: 20rem;
        height: 20rem;     
        filter: blur(100px);
        position: fixed;  
    }

    .blur_0 {
        background: dodgerblue;
        top: 0;
        left: 0;
    }

    .blur_1 {
        position: absolute; 
        background: blue;
        top: 30%;
        left: 40%;
        z-index: -1;
    }

    .blur_2 {
        background: pink;
        bottom: 0;
        right: 0;
    }

    h1 {
        font-size: 10rem;
        font-weight: bold;   
    }

    p {
        font-size: 15px;
        font-weight: 600;
        line-height: 0;
        color: #454545;
        font-family: 'Courier New', Courier, monospace;
    }
}

.div-experiences {
    min-height: 80vh;
    max-height: 100vh;   
    padding: 0 10rem 0 10rem;
}

.experiences {
    padding: 5px;
}

.experience {
    z-index: 1;

    .experience-title {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        padding: 10px;
        background: rgba(26, 25, 25, 0.055);
        backdrop-filter: blur(14px);
        border-radius: 10px 5px 10px 5px;
        
        h3 {
            width: 50%;
        }

        p {
            font-size: 13px;
        }
    }

    .experience-details {
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: 0.3s;
        position: relative;

        .entrprise {
            width: 100%;
            display: inline-flex;
            justify-content: space-between;
            align-items: center;

            .entreprise-logo {
                width: 40px;
                height: 40px;
            }
        }

        p {
        }
    }
}

.experience:hover .experience-details {
    height: auto;   
    backdrop-filter: blur(14px);
    padding: 10px;    
    border-radius: 0 0 10px 5px;
    background: rgba(26, 25, 25, 0.055);
}

.experience:hover .experience-title {
     
    border-radius: 10px 5px 0 0;
}

</style>