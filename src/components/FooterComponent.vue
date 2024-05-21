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
        <div class="network">
            <p>Github</p>
        </div>
        <div class="network">
            <p>Linkedin</p>
        </div>
        <div class="network">
            <p>Whatsapp</p>
        </div>
    </div>
    <div>
        <cite>"Tes réalisations n'ont pour seule limite que ton imagination."</cite>
    </div>
    <div class="footer-img">
        <div class="logo">
            
            <img src="../assets/LogoAlpha-B.png" alt="Alpha">
            <p>lpha</p>
        </div>
        <div>
            <p class="copyrigth">&copy; 2023 N.W.B</p>
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
    min-height: 50vh;
    max-height: 100vh;
    display: flex;
    flex-direction: column;
    align-items: center;
    gap: 5rem;
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
    flex-direction: column;
    align-items: center;
    gap: 5px;
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

.networks {
    display: flex;
    justify-content: center;
    gap: 25px;
}

cite {
    font-size: 15px;
    display: flex;
    text-align: center;
    color: lightgray;
    letter-spacing: 5px;
}

.nav-links-xl {
    display: flex;
    justify-content: center;
    gap: 10px;

    .nav-link {
      text-decoration: none;
      font-size: 14px;
      text-transform: uppercase;
      transition: 0.5s;
    }
  
    .nav-link:hover {
      text-decoration: underline;
      scale: 1.1;
    }
}

.copyrigth {
    font-size: 15px;
    color: lightgray;
    font-weight: lighter;
}

.router-link-exact-active {
        font-size: 15px;
        color: dodgerblue;
}

@media (max-width: 768px) {
    .footer {
        min-height: 60vh;
        gap: 3rem;
    }

    cite {
        font-size: 13px;
    }
    
    .nav-links-xl {
        align-items: center;
        flex-direction: column;
        gap: 5px;
    }
}
</style>