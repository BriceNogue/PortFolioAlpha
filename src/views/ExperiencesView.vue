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
            <dir class="experiences grid grid-cols-2 gap-5 ">
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
    height: 100vh;
}

.experiences {
    padding: 0 10rem 0 10rem;
    position: relative;
}

.experiences-img {
    height: 100vh;
    img {
        width: 50%;
    }
}

.experience {

    .experience-title {
        width: 100%;
        display: inline-flex;
        justify-content: space-between;
        padding: 10px;
        background: lightgray;
        border-radius: 10px 5px 10px 5px;
    }

    .experience-details {
        width: 100%;
        height: 0;
        overflow: hidden;
        border-radius: 0 0 10px 5px;
        transition: 0.3s;
    }
}

.experience:hover .experience-details {
    height: auto;   
    backdrop-filter: blur(14px);
    padding: 10px;
    border: solid 1px lightgray;
}

</style>