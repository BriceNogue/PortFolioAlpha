<template>
    <div class="div-container">
        <div class="div-top">
            <h1>Skills</h1>
            <p>What about my skills ?</p>
            <div class="blur">
            </div>
        </div>
        <div class="skills-list">
            <div class="skills-title">
                <h1>Languages</h1>
                <hr>
            </div>
            <div class="skills languages">
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/csharp.png" alt="Csharp">
                    </div>
                    <div class="skill-name">
                        <h4>Csharp</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/java.png" alt="Java">
                    </div>
                    <div class="skill-name">
                        <h4>Java</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/javascript.png" alt="javascript">
                    </div>
                    <div class="skill-name">
                        <h4>JavaScript</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/typescript.png" alt="typescript">
                    </div>
                    <div class="skill-name">
                        <h4>TypeScript</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/HTML5.png" alt="html 5">
                    </div>
                    <div class="skill-name">
                        <h4>HTML 5</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img" style="padding: 15px;">
                        <img src="@/assets/skills-imgs/css-3.png" alt="css 5">
                    </div>
                    <div class="skill-name">
                        <h4>CSS 3</h4>
                    </div>
                </div>
            </div>
            <div class="skills-title">
                <h1>Frameworks</h1>
                <hr>
            </div>
            <div class="skills frameworks">
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/angular.png" alt="angular">
                    </div>
                    <div class="skill-name">
                        <h4>Angular</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/vue-js.png" alt="vue-js">
                    </div>
                    <div class="skill-name">
                        <h4>Vue.Js</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img">
                        <img src="@/assets/skills-imgs/blazor.png" alt="blazor">
                    </div>
                    <div class="skill-name">
                        <h4>Blazor</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img maui">
                        <img src="@/assets/skills-imgs/maui.png" alt="maui">
                    </div>
                    <div class="skill-name">
                        <h4>MAUI</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img wpf">
                        <img src="@/assets/skills-imgs/wpf.png" alt="wpf">
                    </div>
                    <div class="skill-name">
                        <h4>WPF</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img asp">
                        <img src="@/assets/skills-imgs/Asp_Net_Core.png" alt="asp">
                    </div>
                    <div class="skill-name">
                        <h4>ASP.Net Core</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img spring-boot">
                        <img src="@/assets/skills-imgs/springboot.png" alt="spring-boot">
                    </div>
                    <div class="skill-name">
                        <h4>Spring Boot</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img node-js">
                        <img src="@/assets/skills-imgs/node-js.png" alt="node.js">
                    </div>
                    <div class="skill-name">
                        <h4>Node.Js</h4>
                    </div>
                </div>
            </div>
            <div class="skills sgbdrs">
                
            </div>
            <div class="skills architectures">
                
            </div>
            <div class="skills prototypings">
                
            </div>
        </div>
    </div>
</template>

<script>
export default {
    name: 'SkillsView',

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
        background: blue;
        filter: blur(100px);
        position: absolute;
        top: 30%;
        left: 40%;
        z-index: -1;
    }

    h1 {
        font-size: 15rem;
        font-weight: bold;       
        color: #454545;
    }

    p {
        font-size: 18px;
        font-weight: 600;
        line-height: 0;
        color: #454545;
    }
}

.skills-list {
    width: 100%;
    min-height: 100vh;
    padding:  0 10rem 5rem 10rem;
}

.skills {
    width: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 2rem;
}

.skills-title {
    display: flex;
    align-items: center;
    gap: 15px;
    padding: 2rem 0 2rem 0;

    h1 {
        font-size: larger;
        font-weight: 600;
    }

    hr {
        width: 100%;
        height: 2px;
        background: gray;
    }
}

.skill {
    width: 17.2%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.skill-img {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.skill-name {
    display: flex;
    position: absolute;
    bottom: 0;
    color: black;
    font-size: 1.5rem;
}

</style>