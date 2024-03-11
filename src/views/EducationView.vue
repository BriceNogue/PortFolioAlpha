<template>
    <div class="div-container">
        <div class="div-top">
            <div>
                <h1>Formations</h1>
                <h2>Vous avez là un aperçu de mon cursus</h2>
            </div>
        </div>
        <div class="formation master-un">
            <div class="formation-img">
                <img src="../assets/educations-imgs/educations.svg" alt="">
            </div>
            <div class="formation-details">
                <h2>2023 / 2025</h2>
                <h1>Master 1 MS2D</h1>
                <h2>"Manager de  Solution Digital et Data"</h2>
                <a href="#">
                    <h1>Groupe 3IL France</h1>
                </a>
                <div class="acquis">
                    <h1>Acquis</h1>
                    <h2><b>💻Développement .NET📱</b></h2>
                    <h3>Web Blazor</h3>
                    <h3>Mobile MAUI</h3>
                    <h3>Dekstop avec WPF</h3>
                    <h3>Backend ASP.NET Core</h3>
                    <h2><b>👉Gestion de projet👈</b></h2>
                    <h3>UML</h3>
                </div>
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
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
    .div-container {
        width: 100%;
    }

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
   
        div {
            padding: 5rem 10rem 5rem 10rem;
            border-radius: 5px;
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
            padding-top: 2rem;

            h3 {
                font-size: 20px;
            }
        }
    }
</style>