<template>
    <div class="container">
        <div class="div-top">
            <h1>Skills</h1>
            <p>What about my skills ?</p>
            <img src="@/assets/skills-imgs/fond-nerf.png" alt="fd">
            <div class="blur">
            </div>
        </div>
        <div class="skills-list">
            <div class="skills-title">
                <h1>Languages</h1>
                <hr>
            </div>
            <div class="skills languages">
                <div class="language">
                    <div class="language-img">
                        <img src="@/assets/skills-imgs/csharp.png" alt="Csharp">
                    </div>
                    <div class="language-name">
                        <h4>Csharp</h4>
                    </div>
                </div>
                <div class="language">
                    <div class="language-img">
                        <img src="@/assets/skills-imgs/java.png" alt="Java">
                    </div>
                    <div class="language-name">
                        <h4>Java</h4>
                    </div>
                </div>
                <div class="language">
                    <div class="language-img">
                        <img src="@/assets/skills-imgs/javascript.png" alt="javascript">
                    </div>
                    <div class="language-name">
                        <h4>JavaScript</h4>
                    </div>
                </div>
                <div class="language">
                    <div class="language-img">
                        <img src="@/assets/skills-imgs/typescript.png" alt="typescript">
                    </div>
                    <div class="language-name">
                        <h4>TypeScript</h4>
                    </div>
                </div>
            </div>
            <div class="skills-title">
                <h1>Frameworks</h1>
                <hr>
            </div>
            <div class="skills frameworks">
                
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
.container {
    width: 100%;
    min-height: 100vh;
}

.div-top {
    width: 100%;
    height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: white;
    gap: 0;

    img {
        width: 100%;
        position: absolute;
        top: 15%;
        left: 0%;
        z-index: 1;
        opacity: 30%;
    }

    .blur {
        width: 20rem;
        height: 20rem;
        background: blue;
        filter: blur(150px);
        position: absolute;
        top: 30%;
        left: 40%;
    }

    h1 {
        font-size: 15rem;
        font-weight: bold;       
        color: black;
    }

    p {
        font-size: 18px;
        font-weight: 600;
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

    hr {
        width: 100%;
        height: 2px;
        background: gray;
    }
}

.language {
    width: 17.2%;
    height: 10rem;
    display: flex;
    justify-content: center;
    align-items: center;
    position: relative;
}

.language-img {
    width: 50%;
    height: 50%;
    border-radius: 50%;
    display: flex;
    justify-content: center;
    align-items: center;
}

.language-name {
    display: flex;
    position: absolute;
    bottom: 0;
    color: black;
    font-size: 1.5rem;
}

</style>