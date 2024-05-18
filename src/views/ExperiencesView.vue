<template>
    <div class="div-container">
        <div class="div-top">
            <h1>Experiences</h1>
            <p>Are you interested in my experience ? 🙂</p>
            <div class="blur blur_0">
            </div>
            <div class="blur blur_1">
            </div>
            <div class="blur blur_2">
            </div>
        </div>
        <div class="div-experiences">
            <dir class="experiences grid grid-cols-2 gap-9">
                <div class="experience">
                    <div class="experience-title">
                        <h3><b>Développeur Web</b></h3>
                        <p>Avril 2023 à juillet 2023</p>
                        <span><b>+</b></span>
                    </div>
                    <div class="experience-details">
                        <p>
                            <b>DevPea</b><br>
                            📍Douala, Cameroun<br><br>
                            L'objectif de ce stage était de réaliser une plateforme pour l'apprentissage en ligne du
                            code de la route. <br>
                            J'étais dans une équipe de 4 développeurs mon rôle était: <br>
                            🔵 Participer a l'analyse du projet, <br>
                            🔵 Créer des maquettes UI, <br>
                            🔵 Intégrer ces maquettes avec Angular, <br>
                            🔵 Gérer le responsive des interfaces utilisateur. <br>

                        </p>
                    </div>
                </div>
                <div class="experience">
                    <div class="experience-title">
                        <h3>2022 / 2023</h3>
                        <span>+</span>
                    </div>
                    <div class="experience-details">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nihil enim officia perspiciatis quae nemo eveniet, quis illum quaerat officiis totam perferendis quos sint distinctio eos optio omnis adipisci eum.</p>
                    </div>
                </div>
                <div class="experience">
                    <div class="experience-title">
                        <h3>2022 / 2023</h3>
                        <span>+</span>
                    </div>
                    <div class="experience-details">
                        <p>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Voluptates nihil enim officia perspiciatis quae nemo eveniet, quis illum quaerat officiis totam perferendis quos sint distinctio eos optio omnis adipisci eum.</p>
                    </div>
                </div>
            </dir>
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
        font-size: 7rem;
        font-weight: bold;     
        color: #454545;
        font-family:Verdana, Geneva, Tahoma, sans-serif;
    }

    p {
        font-size: 18px;
        font-weight: 600;
        line-height: 0;
        color: #454545;
        font-family: 'Courier New', Courier, monospace;
    }
}

.div-experiences {
    min-height: 60vh;
    max-height: 100vh;   
    padding: 0 10rem 0 10rem;
}

.experiences {
    display: flex;
    flex-direction: column;
    gap: 1rem;
    padding: 10px;
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
    }

    .experience-details {
        width: 100%;
        height: 0;
        overflow: hidden;
        transition: 0.3s;
        position: relative;
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