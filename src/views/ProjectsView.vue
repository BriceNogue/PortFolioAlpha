<template>
    <div class="div-container">
        <div class="div-top">
            <div class="blur blur_0">
            </div>
            <div class="blur blur_1">
            </div>
            <div class="blur blur_2">
            </div>
            <div class="projects-title">
                <h1>Projets</h1>
                <p>Du plus récent au plus ancien.</p>
            </div>
            <div class="projects-img">
                <img src="../assets/projects-imgs/projects.svg" alt="">
            </div>
        </div>
        <div class="projects inline-grid grid-cols-3 gap-9">
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Plateforme Appli...</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>Plateforme Appli...</h1>
                        <p>Proj académique</p>
                        <p>2023 / 2024</p>
                        <h2>Encours...</h2>
                    </div>
                    <div>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                </div>
                <div class="project-infos">
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
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                </div>
                <div class="project-infos">
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
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                </div>
                <div class="project-infos">
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
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/project.svg" alt="">
                </div>
                <div>
                    <h1>Poject Name</h1>
                </div>
                <div class="project-infos">                   
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
        padding: 0 10rem 10rem 10rem;
        //background: linear-gradient(180deg, white,#fcdbdb, white);
    }

    .div-top {
        width: 100%;
        height: 100vh;
        display: flex;
        justify-content: space-between;
        align-items: center;

        .projects-title {
            h1 {
                font-size: 10rem;
                font-weight: bold;
                font-family: 'Roboto';
            }

            p {
                font-size: 15px;
                font-family: 'Courier New', Courier, monospace;
                margin-left: 10px;
                font-weight: bold;
                line-height: 0;
            }
        }

        .projects-img {
            width: 40%;
        }

        .blur {
            width: 20rem;
            height: 20rem;     
            filter: blur(100px);
            position: fixed;
            z-index: -1;
        }
    
        .blur_0 {
            background: dodgerblue;
            top: 0;
            left: 0;
            z-index: -1;
        }
    
        
    
        .blur_2 {
            background: pink;
            bottom: 0;
            right: 0;
            z-index: -1;
        }
    }

    .projects {
        padding-top: 4rem;

        .project {
            width: auto;
            height: auto;
            box-shadow: 1px 1px 10px #93c5fd;
            padding: 20px 10px 20px 10px;
            border-radius: 10px;
            text-align: center;
            background: white;
            transition: 0.3s;
            position: relative;
            color: #454545;
            overflow: hidden;

            .project-infos {
                width: 100%;
                height: 0;
                display: flex;
                flex-direction: column;
                justify-content: center;
                overflow: hidden;
                position: absolute;
                bottom: 0;
                left: 0;
                border-bottom-left-radius: 10px;
                border-bottom-right-radius: 10px;
                transition: 0.3s;
            }

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

            p {
                font-size: 14px;                
                font-family: 'Courier New', Courier, monospace;
            }

            a {
                text-decoration: none;
                font-size: 15px;
                background: #2563eb;
                cursor: pointer;
                color: white;
                font-weight: 500;
                padding: 5px 20px 5px 20px;
                border-radius: 25px;
                transition: 0.3s;
            }

            a:hover {
                padding: 5px 30px 5px 30px;
            }
        }

        .project:hover .project-infos {
            background: rgba(26, 25, 25, 0.055);
            height: 100%;
            backdrop-filter: blur(15px);
            border-top-left-radius: 10px;
            border-top-right-radius: 10px;
            border: solid 3px white;
        }
    }

    /****************************** Responsive *********************************/

    @media (min-width: 320px) and (max-width: 768px) {
        .div-container {
            padding: 5rem 2rem 2rem 2rem;
        }

        .div-top {
            display: inherit;
    
            .projects-title {
                width: 100%;
                text-align: center;
                h1 {
                    font-size: 2rem;
                }
            }
    
            .projects-img {
                width: 100%;
                padding: 5rem 0 5rem 0;
            }
        }

        .projects {
            padding: 2rem 0 5rem 0;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 1.5rem;
    
            .project {
                width: 100%;
                height: 260px;
                box-shadow: 1px 1px 10px #93c5fd;
                padding: 20px 10px 20px 10px;
                border-radius: 10px;
                text-align: center;
                background: white;
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
                    padding: 5px 20px 5px 20px;
                    border-radius: 25px;
                }
            }
        }
    }

</style>