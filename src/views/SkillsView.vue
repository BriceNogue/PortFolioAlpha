<template>
    <div class="div-container">
        <div class="div-top">
            <h1>Compétences</h1>
            <p>What about my skills ?</p>
            <div class="blur blur_0">
            </div>
            <div class="blur blur_1">
            </div>
            <div class="blur blur_2">
            </div>
        </div>
        <div class="skills-list" id="skills-list">
            <div class="skills-title">
                <h1>Langages</h1>
                <hr>
            </div>
            <div class="skills languages">
                <div class="skill">
                    <div class="skill-img Csharp">
                        <div class="skill-img-2 Csharp-2" ref="light_0" id="si_2"></div>
                        <img src="@/assets/skills-imgs/csharp.png" alt="Csharp">
                    </div>
                    <div class="skill-name">
                        <h4>Csharp</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img Java">
                        <div class="skill-img-2 Java-2" ref="light_1"></div>
                        <img src="@/assets/skills-imgs/java.png" alt="Java">
                    </div>
                    <div class="skill-name">
                        <h4>Java</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img JS">
                        <div class="skill-img-2 JS-2" ref="light_2"></div>
                        <img src="@/assets/skills-imgs/javascript.png" alt="javascript">
                    </div>
                    <div class="skill-name">
                        <h4>JavaScript</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img TS">
                        <div class="skill-img-2 TS-2" ref="light_3"></div>
                        <img src="@/assets/skills-imgs/typescript.png" alt="typescript">
                    </div>
                    <div class="skill-name">
                        <h4>TypeScript</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img HTML">
                        <div class="skill-img-2 HTML-2" ref="light_4"></div>
                        <img src="@/assets/skills-imgs/HTML5.png" alt="html 5">
                    </div>
                    <div class="skill-name">
                        <h4>HTML 5</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img CSS" style="padding: 30px;">
                        <div class="skill-img-2 CSS-2" ref="light_5"></div>
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
                    <div class="skill-img Angular">
                        <div class="skill-img-2 Angular-2" ref="light_6"></div>
                        <img src="@/assets/skills-imgs/angular.png" alt="angular">
                    </div>
                    <div class="skill-name">
                        <h4>Angular</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img Vue">
                        <div class="skill-img-2 Vue-2" ref="light_7"></div>
                        <img src="@/assets/skills-imgs/vue-js.png" alt="vue-js">
                    </div>
                    <div class="skill-name">
                        <h4>Vue.Js</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img Blazor">
                        <div class="skill-img-2 Blazor-2" ref="light_8"></div>
                        <img src="@/assets/skills-imgs/blazor.png" alt="blazor">
                    </div>
                    <div class="skill-name">
                        <h4>Blazor</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img MAUI">
                        <div class="skill-img-2 MAUI-2" ref="light_9"></div>
                        <img src="@/assets/skills-imgs/maui.png" alt="maui">
                    </div>
                    <div class="skill-name">
                        <h4>MAUI</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img WPF">
                        <div class="skill-img-2 WPF-2" ref="light_10"></div>
                        <img src="@/assets/skills-imgs/wpf.png" alt="wpf">
                    </div>
                    <div class="skill-name">
                        <h4>WPF</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img ASP">
                        <div class="skill-img-2 ASP-2" ref="light_11"></div>
                        <img src="@/assets/skills-imgs/Asp_Net_Core.png" alt="asp">
                    </div>
                    <div class="skill-name">
                        <h4>ASP.Net Core</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img SB">
                        <div class="skill-img-2 SB-2" ref="light_12"></div>
                        <img src="@/assets/skills-imgs/springboot.png" alt="spring-boot">
                    </div>
                    <div class="skill-name">
                        <h4>Spring Boot</h4>
                    </div>
                </div>
                <div class="skill">
                    <div class="skill-img Node">
                        <div class="skill-img-2 Node-2" ref="light_13"></div>
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
            timer1: null,
            timer2: null
        };
    },

    mounted() {
        this.timer1 = setInterval(this.startLight, 1500);
        this.timer2 = setInterval(this.stopLight, 3000);
    },

    beforeDestroy() {
        clearTimeout(this.timer1);
    },

    methods: {
        startLight() {      
            this.$refs.light_0.classList.add('skill-light');
            this.$refs.light_1.classList.add('skill-light');
            this.$refs.light_2.classList.add('skill-light');
            this.$refs.light_3.classList.add('skill-light');
            this.$refs.light_4.classList.add('skill-light');
            this.$refs.light_5.classList.add('skill-light');
            this.$refs.light_6.classList.add('skill-light');
            this.$refs.light_7.classList.add('skill-light');
            this.$refs.light_8.classList.add('skill-light');
            this.$refs.light_9.classList.add('skill-light');
            this.$refs.light_10.classList.add('skill-light');
            this.$refs.light_11.classList.add('skill-light');
            this.$refs.light_12.classList.add('skill-light');
            this.$refs.light_13.classList.add('skill-light');
        },

        stopLight() {
            this.$refs.light_0.classList.remove('skill-light');
            this.$refs.light_1.classList.remove('skill-light');
            this.$refs.light_2.classList.remove('skill-light');
            this.$refs.light_3.classList.remove('skill-light');
            this.$refs.light_4.classList.remove('skill-light');
            this.$refs.light_5.classList.remove('skill-light');
            this.$refs.light_6.classList.remove('skill-light');
            this.$refs.light_7.classList.remove('skill-light');
            this.$refs.light_8.classList.remove('skill-light');
            this.$refs.light_9.classList.remove('skill-light');
            this.$refs.light_10.classList.remove('skill-light');
            this.$refs.light_11.classList.remove('skill-light');
            this.$refs.light_12.classList.remove('skill-light');
            this.$refs.light_13.classList.remove('skill-light');
        }
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
        position: absolute;
        
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
        font-size: 10rem;
        font-weight: bold; 
        font-family: 'Roboto';
    }

    p {
        font-size: 15px;
        font-weight: bold;
        line-height: 0;
        color: #454545;
        font-family: 'Courier New', Courier, monospace;
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
        font-family: 'Courier New', Courier, monospace;
        color: #454545;
    }

    hr {
        width: 100%;
        height: 2px;
        background: gray;
    }
}

.skill {
    width: 10rem;
    height: 10rem;
    display: flex;
    gap: 100px;
    justify-content: center;
    position: relative;
}

.skill-name {
    h4 {
        font-size: 15px;
        font-family: 'Courier New', Courier, monospace;
        font-weight: bold;
        color: #454545;
    }
}

.skill-img {
    width: 70%;
    height: 70%;
    padding: 10px;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
    border: solid 1px;

    .skill-img-2 {
        position: absolute;
        border-radius: 50%;
        width: 0%;
        height: 0%;
        transition: 1.5s;
    }
    
    .MAUI-2 {
        width: 60%;
        height: 60%;
    }

    .skill-light {
        width: 90%;
        height: 90%;
    }

    img {
        z-index: 1;
    }
}

.Csharp, .Blazor, .MAUI, .ASP {
    border-color: #9b009b;
}
.Csharp-2, .Blazor-2, .MAUI-2, .ASP-2 {
    background: rgba(238, 130, 238, 0.507);
}

.Java {
    border-color: dodgerblue;
}
.Java-2 {
    background: #a8ebff;
}

.JS {
    border-color: yellow;
}
.JS-2 {
    background: blanchedalmond;
}

.TS, .CSS, .WPF {
    border-color: dodgerblue;
}
.TS-2, .CSS-2, .WPF-2 {
    background: lightblue;
}

.HTML {
    border-color: orange;
}
.HTML-2 {
    background: orange;
}

.Angular {
    border-color: red;
}
.Angular-2 {
    background: #ff000079;
}

.Vue, .SB, .Node {
    border-color: green;
}
.Vue-2, .SB-2, .Node-2 {
    background: #2fff97af;
}

.skill-name {
    display: flex;
    position: absolute;
    bottom: 0;
    color: black;
    font-size: 1.5rem;
}

</style>