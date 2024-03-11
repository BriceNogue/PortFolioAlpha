<template>
    <div class="div-container">
        <div class="div-top">
            <div class="projects-title">
                <h1>Mes projets <br> La plupart de ces projets ont été <br>réalisé en équipe</h1>
                <p>Du plus récent au plus ancien</p>
            </div>
            <div class="projects-img">
                <img src="../assets/projects-imgs/projects.svg" alt="">
            </div>
        </div>
        <div class="projects inline-grid grid-cols-4 gap-9">
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                    <p>Projet académique</p>
                    <h2>Encours...</h2>
                </div>
                <div>
                    <a>GitHub</a>
                </div>
            </div>
            <div class="project">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                    <p>Projet académique</p>
                    <h2>Encours...</h2>
                </div>
                <div>
                    <a>GitHub</a>
                </div>
            </div>
            <div class="project">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                    <p>Projet académique</p>
                    <h2>Encours...</h2>
                </div>
                <div>
                    <a>GitHub</a>
                </div>
            </div>
            <div class="project">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                    <p>Projet académique</p>
                    <h2>Encours...</h2>
                </div>
                <div>
                    <a>GitHub</a>
                </div>
            </div>
            <div class="project">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                    <p>Projet académique</p>
                    <h2>Encours...</h2>
                </div>
                <div>
                    <a>GitHub</a>
                </div>
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'ProjectsView',

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
        padding: 10rem;
    }

    .div-top {
        width: 100%;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .projects-title {
            h1 {
                font-size: 2rem;
                font-weight: bold;
            }
        }

        .projects-img {
            width: 20%;
        }
    }

    .projects {
        padding-top: 2rem;

        .project {
            width: 210px;
            height: 260px;
            box-shadow: 1px 1px 10px #93c5fd;
            padding: 20px 10px 20px 10px;
            border-radius: 10px;
            text-align: center;
            transition: 0.3s;

            h1 {
                font-size: 20px;
                font-weight: bold;
                margin-top: 10px;
            }

            h2 {
                font-size: 18px;
                font-weight: 500;
                color: green;
                margin-bottom: 10px;
            }

            a {
                text-decoration: none;
                font-size: 18px;
                background: #2563eb;
                color: white;
                font-weight: 500;
                padding: 5px 15px 5px 15px;
                border-radius: 5px;
            }
        }
    }
</style>