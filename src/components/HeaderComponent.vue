<template>
    <div>
      <header  ref="header" class="hidden md:block">
        <div class="nav-bar">
          <div class="logo">
            <router-link to="/" class="logo-link">
              <img class="logo-B" src="../assets/LogoAlpha-B.png" alt="">
              <img class="logo-N" src="../assets/LogoAlpha-N.png" alt="">
              <p>lpha</p>
            </router-link>
          </div>  
          <nav class="nav-links">
            <router-link class="nav-link" to="/">About Me</router-link>
            <router-link class="nav-link" to="/education">Education</router-link>
            <router-link class="nav-link" to="/skills">Skills</router-link>
            <router-link class="nav-link" to="/experiences">Experiences</router-link>
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </nav>
          <div class="hidden md:block">
            <button class="btn-contact bg-blue-600 text-white hover:scale-105">Contact me</button>
          </div>
        </div>
      </header>

      <!--Mobile-->
  
      <div class="side-nav hidden md:hidden" ref="sideNav" id="side-nav">
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
          <nav>
            <router-link class="side-nav-link" to="/" @click="toggleSide">Accueil</router-link>
            <router-link class="side-nav-link" to="/education" @click="toggleSide">Formations</router-link>
            <router-link class="side-nav-link" to="/skills" @click="toggleSide">Compétences</router-link>
            <router-link class="side-nav-link" to="/experiences" @click="toggleSide">Expérience</router-link>
            <router-link class="side-nav-link" to="/projects" @click="toggleSide">Projets</router-link>
          </nav>
          <div class="nav-btn">
            <button class="btn-contact bg-blue-600 text-white">Contact me</button>
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
  font-family: 'Courier New', Courier, monospace;
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

nav {
  width: 50%;
  display: flex;
  justify-content: center;
  border: solid 1px lightgrey;
  background: rgba(26, 25, 25, 0.055);
  padding: 10px;
  border-radius: 50px;
  gap: 10px;
  
  .nav-link {
    text-decoration: none;
    font-size: 15px;
    color: #1E293B;
    text-indent: 15px;
  }

  .nav-link:hover {
    text-decoration: underline;
  }

  .router-link-exact-active {
    font-size: 15px;
    color: dodgerblue;
    text-decoration: underline;
  }
}

.btn-contact {
  width: 150px;
  height: 40px;
  border-radius: 25px;
  font-size: 18px;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .side-nav.opened {
    position: fixed;
  }

  .side-nav {
    margin: 0;
    display: inherit;
    width: 100%;
    position: absolute;
    z-index: 1;

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
      height: 0px;
      overflow: hidden;
      display: flex;
      padding: 5rem 0 0 0;
      flex-direction: column;
      align-items: center;
      transition: 0.5s;
    }

    nav {
      margin: 0 0 2rem 0;
      .side-nav-link {
        display: block;
        flex-direction: column;
        text-align: center;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 10px 10px;
        font-size: 18px;
        color: #1E293B;
        font-weight: 500;
      }
    }

    .sideMenu.opened {
      height: 100vh;
      background: white;
    }
  }

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
}

@media (min-width: 768px) and (max-width: 1024px) {
  .nav-bar {
    padding: 0 2rem 0 2rem; 
  }

  nav {
    .nav-link {
      font-size: 15px;
    }
  
    .nav-link:hover {
      color: inherit;
    }
  
    .router-link-exact-active {
      font-size: 20px;
    }
  }
}

</style>