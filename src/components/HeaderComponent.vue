<template>
    <div>
      <header  ref="header">
        <div class="nav-bar">
          <div class="logo">
            <router-link to="/" class="logo-link">
              <img class="logo-B" src="../assets/LogoAlpha-B.png" alt="">
              <img class="logo-N" src="../assets/LogoAlpha-N.png" alt="">
              <p>lpha</p>
            </router-link>
          </div>  
          <nav class="nav-links-xl">
            <router-link class="nav-link" to="/">Accueil</router-link>
            <router-link class="nav-link" to="/education">Formations</router-link>
            <router-link class="nav-link" to="/skills">Compétences</router-link>
            <router-link class="nav-link" to="/experiences">Expérience</router-link>
            <router-link class="nav-link" to="/projects">Projets</router-link>
          </nav>
          <div class="hidden md:block">
            <button class="btn-contact bg-blue-600 text-white hover:scale-105">Me contacter</button>
          </div>
        </div>
      </header>

      <!--Mobile-->
  
      <div class="side-nav hidden md:hidden" ref="sideNav" id="side-nav">
        <div class="blur blur_0">
        </div>
        <div class="blur blur_1">
        </div>
        <div class="side-nav-header">
          <div class="logo">
            <a to="/">
              <img src="../assets/LogoAlpha-B.png" alt="">
            </a>
          </div>
          <div class="block md:hidden" id="navbar-toggle" ref="sideNavBtn" @click="toggleSide">
            <span class="top"></span>
            <span class="midle"></span>
            <span class="bottom"></span>
          </div>
        </div>
        <div class="sideMenu" ref="sideMenu">
          <nav class="nav-links-s">
            <router-link class="side-nav-link" to="/" @click="toggleSide">Accueil</router-link>
            <router-link class="side-nav-link" to="/education" @click="toggleSide">Formations</router-link>
            <router-link class="side-nav-link" to="/skills" @click="toggleSide">Compétences</router-link>
            <router-link class="side-nav-link" to="/experiences" @click="toggleSide">Expérience</router-link>
            <router-link class="side-nav-link" to="/projects" @click="toggleSide">Projets</router-link>
          </nav>
          <div class="nav-btn">
            <button class="btn-contact bg-blue-600 hover:scale-105 text-white">Contact me</button>
          </div>
        </div>
      </div>
    </div>
</template>

<script>
import { BaseTransition } from 'vue';

export default {
    name: 'HeaderComponent',

    data() {
        return {
            
        };
    },

    mounted() {
      window.addEventListener('scroll', this.handleScroll);
    },

    beforeUnmount() {
      window.removeEventListener('scroll', this.handleScroll);
    },

    methods: {
      handleScroll() {
        if (window.scrollY > 150) {
          //this.$refs.header.classList.add('onScroll');
        } else {
          this.$refs.header.classList.remove('onScroll');
        }
      },

      toggleSide() {
        this.$refs.sideNavBtn.classList.toggle('active');
        this.$refs.sideNav.classList.toggle('opened');
        this.$refs.sideMenu.classList.toggle('opened');
      },
    },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  position: absolute;
  background: transparent;
  z-index: 1;
  transition: all 300ms ease-in-out;
  font-family: 'Roboto';
  font-weight: bold;

  .logo-N {
    display: none;
  }
}

header.onScroll {
  background: opacify($color: white, $amount: 1);

  .logo-B {
    display: none;
  }

  .logo-N {
    display: block;
  }
}


@keyframes scale-animation {
  0% {
    scale: 0;
  }
  50% {
    scale: 1.1;
  }
  100% {
    scale: 1;
  }
}

.nav-bar {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  padding: 0 10rem 0 10rem;
  align-items: center;  
}

.logo {

    img {
        width: 40px;
        height: 40px;
    }

    .logo-link {
      display: flex;
      align-items: end;

      p {
        font-size: 15px;
        color: white;
        letter-spacing: 5px;
      }
    }
}

.nav-links-xl {
  display: flex;
  justify-content: center;
  border: solid 1px lightgrey;
  background: rgba(26, 25, 25, 0.055);
  padding: 10px 35px 10px 20px;
  gap: 10px;
  border-radius: 50px;
  
  .nav-link {
    text-decoration: none;
    font-size: 15px;
    color: #1E293B;
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

.btn-contact {
  width: 150px;
  height: 40px;
  border-radius: 25px;
  font-size: 18px;
  transition: 0.3s;
}

/******************** Responsive ****************/

#navbar-toggle {
  cursor: pointer;
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 30px;
  height: 30px;
}

#navbar-toggle span {
  border-radius: 1px;
  height: 3px;
  width: 30px;
  position: relative;
  background: #1A1919;
  content: '';
  transition: all 300ms ease-in-out;
}
#navbar-toggle .top {
  margin-bottom: 5px; 
}
#navbar-toggle .bottom {
  margin-top: 5px;
}
#navbar-toggle.active .midle {
  display: none;
}

#navbar-toggle.active .topp, #navbar-toggle.active .bottomm {
  top: -10px;
}
#navbar-toggle.active .top {
  transform: rotate(45deg);
  margin: 0;
  top: 2.5px;
}
#navbar-toggle.active .bottom {
  transform: rotate(-45deg);
  margin: 0;
  top: 0px;
}

.side-nav {
  height: 0;
  background: white;
  font-family: 'Roboto';
  z-index: 100;
  transition: 0.5s;

  .blur {
    width: 0;
    height: 0;     
    filter: blur(50px);
    position: absolute;
    transition: 0.5s;
  }
  
  .blur_0 {
    background: dodgerblue;
    top: 0;
    left: 0;
  }
  
  .blur_1 {
    background: pink;
    bottom: 0;
    right: 0;    
  }
}

.side-nav.opened {
  position: fixed;
  height: 100vh;

  .blur {
    width: 10rem;
    height: 10rem;  
  }

  .sideMenu {
    height: 100vh;
  }

  .side-nav-link {   
    animation-name: scale-animation;
    animation-duration: 1s;
  }
}

.side-nav-header {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 0 15px 0 15px;
  position: relative;
  z-index: 1;
}

.sideMenu {
  width: 100%;
  position: absolute;
  top: 0;
  height: 0;
  overflow: hidden;
  display: flex;
  padding: 5rem 0 0 0;
  flex-direction: column;
  align-items: center;
}

.nav-links-s {
  margin: 0 0 2rem 0;

  .side-nav-link {
    display: block;
    flex-direction: column;
    text-align: center;
    text-decoration: none;
    text-transform: uppercase;
    padding: 10px 10px 10px;
    font-size: 18px;
    //color: #1E293B;
    font-weight: bold;
  }
}

@media (max-width: 1024px) {
  .header, .nav-bar {
    display: none;
  }

  .side-nav {
    margin: 0;
    display: inherit;
    width: 100%;
    position: absolute;
  }
}

@media (max-width: 1194px) {
  .nav-bar {
    padding: 0 5rem 0 5rem;
  }
}


</style>