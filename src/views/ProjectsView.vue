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
                    <img src="../assets/projects-imgs/bitkap-payment-BO.png" alt="">
                </div>
                <div class="porject-name-div">
                    <h1>IT Management API</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>IT Management</h1>
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
                    <img src="../assets/projects-imgs/bitkap-payment-BO.png" alt="">
                </div>
                <div class="porject-name-div">
                    <h1>IT Management Desktop</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>IT Management</h1>
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
                    <img src="../assets/projects-imgs/bitkap-payment-BO.png" alt="">
                </div>
                <div class="porject-name-div">
                    <h1>IT Management Mobile</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>IT Management</h1>
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
                    <img src="../assets/projects-imgs/bitkap-payment-BO.png" alt="">
                </div>
                <div class="porject-name-div">
                    <h1>IT Management Web</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>IT Management</h1>
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
                <div class="porject-name-div">
                    <h1>Napaj-App</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>Napaj-App</h1>
                        <p>Projet académique</p>
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
                <div class="porject-name-div">
                    <h1>Mojio Auto</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>Mojio Auto</h1>
                        <p>Projet personnel</p>
                        <h2>Terminé</h2>
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
                <div class="porject-name-div">
                    <h1>TackCare</h1>
                </div>
                <div class="project-infos">
                    <div>
                        <h1>TackCare</h1>
                        <p>Projet académique</p>
                        <h2>Terminé</h2>
                    </div>
                    <div>
                        <a>GitHub</a>
                    </div>
                </div>
            </div>
            <div class="project hover:scale-110">
                <div>
                    <img src="../assets/projects-imgs/bitkap-payment-BO.png" alt="">
                </div>
                <div class="porject-name-div">
                    <h1>Bitkap Payment BackOffice</h1>
                </div>
                <div class="project-infos">                   
                <div>
                    <h1>Bitkap Payment BackOffice</h1>
                    <p>Projet de stage</p>
                    <h2>Terminé</h2>
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
        color: #1E293B;

        .projects-title {
            h1 {
                font-size: 10rem;
                font-weight: bold;
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
            padding: 10px 10px 30px 10px;
            border-radius: 10px;
            text-align: center;
            background: white;
            transition: 0.3s;
            position: relative;
            color: #454545;
            overflow: hidden;

            .porject-name-div {
                width: 100%;
                position: absolute;
                display: flex;
                justify-content: center;
                bottom: 5px;
                left: 0;
            }

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
                font-size: 18px;
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

    @media (max-width: 1024px) {
        .div-container {
            padding: 10rem 5rem 5rem 5rem;
        }

        .div-top {
            display: inherit;

            .blur {
                width: 15rem;
                height: 15rem;     
                filter: blur(80px);
            }
    
            .projects-title {
                width: 100%;
                text-align: center;
            }
    
            .projects-img {
                width: 100%;
                padding: 10rem 5rem 10rem 5rem;
            }
        }

        .projects {
            padding: 0rem 0 5rem 0;
            grid-template-columns: repeat(2, minmax(0, 1fr));
            gap: 2rem;
    
            .project {
    
                h1 {
                    font-size: 18px;
                }
    
                h2 {
                    font-size: 15px;
                }
    
                a {
                    font-size: 15px;
                }
            }
        }
    }

    @media (max-width: 768px) {
        .div-container {
            padding: 5rem 2rem 2rem 2rem;
        }

        .div-top {
            .blur {
                width: 10rem;
                height: 10rem;     
                filter: blur(50px);
            }
    
            .projects-title {
                width: 100%;
                text-align: center;
                h1 {
                    font-size: 6rem;
                }
            }
    
            .projects-img {
                width: 100%;
                padding: 5rem 0 5rem 0;
            }
        }

        .projects {
            grid-template-columns: repeat(1, minmax(0, 1fr));
            gap: 1.5rem;
        }
    }

    @media (max-width: 320px) {
        .div-top {

            .blur {
                width: 7rem;
                height: 7rem;     
                filter: blur(40px);
            }
    
            .projects-title {
                width: 100%;
                text-align: center;

                h1 {
                    font-size: 4rem;
                }

                p {
                    font-size: 11px;
                }
            }
    
            .projects-img {
                width: 100%;
                padding: 3rem 0 0 0;
            }
        }
    }

</style>