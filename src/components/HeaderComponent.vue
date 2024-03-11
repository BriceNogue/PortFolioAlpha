<template>
    <div>
      <header  ref="header" class="hidden md:block">
        <div class="nav-bar">
          <div class="logo">
            <router-link to="/">
              <img class="logo-B" src="../assets/LogoAlpha-B.png" alt="">
              <img class="logo-N" src="../assets/LogoAlpha-N.png" alt="">
            </router-link>
          </div>  
          <nav>
            <router-link class="nav-link" to="/">Accueil</router-link>
            <router-link class="nav-link" to="/education">Formations</router-link>
            <router-link class="nav-link" to="/skills">Compétences</router-link>
            <router-link class="nav-link" to="/experiences">Expérience</router-link>
            <router-link class="nav-link" to="/projects">Projets</router-link>
          </nav>
          <div class="hidden md:block">
            <button class="btn-contact bg-blue-600 text-white hover:scale-105">Contact me</button>
          </div>
        </div>
      </header>

      <!--Mobile-->
  
      <div class="side-nav hidden md:hidden">
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
        <div ref="sideNav" class="hidden sideNav">
          <nav>
            <router-link class="side-nav-link" to="/">About me</router-link>
            <router-link class="side-nav-link" to="/education">Education</router-link>
            <router-link class="side-nav-link" to="/skills">Skills</router-link>
            <router-link class="side-nav-link" to="/experiences">Experiences</router-link>
            <router-link class="side-nav-link" to="/projects">Projects</router-link>
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
      }
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

  .logo-B {
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
    width: 40px;
    height: 40px;

    img {
        width: 100%;
    }
}

nav {
  .nav-link {
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    color: #1E293B;
    font-weight: 500;
    text-indent: 15px;
  }

  .nav-link:hover {
    color: inherit;
  }

  .router-link-exact-active {
    font-size: 28px;
  }
}

.btn-contact {
  width: 150px;
  height: 40px;
  border-radius: 25px;
  font-size: 18px;
  font-weight: 500;
  transition: 0.3s;
}

@media (max-width: 768px) {
  .nav-bar {
    justify-content: space-between;
    background: white;
    padding: 0 15px 0px 15px;
  }

  .side-nav {
    width: 100%;
    height: 100vh;
    margin: 0;
    display: flex;
    position: fixed;
    flex-direction: column;
    align-items: center;
    background: white;
    transform: scale();
    transition: all 300ms ease-in-out;

    .side-nav-header {
      width: 100%;
      height: 80px;
      background: beige;
      display: flex;
      justify-content: space-between;
      align-items: center;
      padding: 0 15px 0 15px;
    }

    .sideNav.opened {
      display: block; 
    }

    nav {
      .side-nav-link {
        display: flex;
        flex-direction: column;
        align-items: center;
        text-decoration: none;
        text-transform: uppercase;
        padding: 10px 10px 10px;
        font-size: 18px;
        color: #1E293B;
        font-weight: 500;
      }
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

</style>