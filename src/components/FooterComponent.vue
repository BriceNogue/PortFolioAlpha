<template>
  <div class="footer">
    <div>
        <nav class="nav-links-xl">
            <router-link class="nav-link" to="/">Accueil</router-link>
            <router-link class="nav-link" to="/education">Formations</router-link>
            <router-link class="nav-link" to="/skills">Compétences</router-link>
            <router-link class="nav-link" to="/experiences">Expérience</router-link>
            <router-link class="nav-link" to="/projects">Projets</router-link>
        </nav>
    </div>
    <div class="networks">
        <cite>"Tes réalisations n'ont pour seule limite que ton imagination."</cite>
    </div>
    <div class="footer-img">
        <div class="logo">
            <img src="../assets/LogoAlpha-B.png" alt="Alpha">
            <p>lpha 2023 ©</p>
        </div>
    </div>
  </div>
</template>

<script>
import { ref } from 'vue';

export default {
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
.footer {
    width: 100%;
    height: 50vh;
    background: #1E293B;
    overflow: hidden;
    color: white;
    padding-top: 2rem;
    position: relative;
}

.footer-img {
    width: 100%;
    position: absolute;
    display: flex;
    justify-content: center;
    bottom: 0;
    padding-bottom: 1rem;
}

.logo {
    display: flex;
    align-items: end;
    img {
        width: 40px;
        height: 40px;
    }

    p {
        font-size: 15px;
        color: white;
        letter-spacing: 5px;
    }
}

.nav-links-xl {
    display: flex;
    justify-content: center;
    gap: 10px;
    
    .nav-link {
      text-decoration: none;
      font-size: 15px;
      text-indent: 15px;
      transition: 0.5s;
    }
  
    .nav-link:hover {
      text-decoration: underline;
      scale: 1.1;
    }
}

.router-link-exact-active {
        font-size: 15px;
        color: dodgerblue;
}
</style>