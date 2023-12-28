<template>
    <div>
      <header  ref="header" class="hidden md:block">
        <div class="nav-bar">
          <div class="logo">
            <a to="/">
              <img src="../assets/LogoAlpha-B.png" alt="">
            </a>
          </div>  
          <nav>
            <router-link class="nav-link" to="/">About me</router-link>
            <router-link class="nav-link" to="/projects">Education</router-link>
            <router-link class="nav-link" to="/projects">Skills</router-link>
            <router-link class="nav-link" to="/projects">Experiences</router-link>
            <router-link class="nav-link" to="/projects">Projects</router-link>
          </nav>
          <div class="hidden md:block">
            <button class="btn-contact bg-blue-600 text-white">Contact me</button>
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
            <router-link class="side-nav-link" to="/projects">Education</router-link>
            <router-link class="side-nav-link" to="/projects">Skills</router-link>
            <router-link class="side-nav-link" to="/projects">Experiences</router-link>
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
          this.$refs.header.classList.add('onScroll');
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
  position: fixed;
  background: transparent;
  z-index: 1;
  transition: all 300ms ease-in-out;
}

header.onScroll {
  //background: opacify($color: #000000, $amount: 1);
}

.nav-bar {
  width: 100%;
  height: 80px;
  display: flex;
  justify-content: space-around;
  align-items: center;  
}
.logo {
    width: 50px;
    height: 50px;

    img {
        width: 100%;
    }
}

nav {
  .nav-link {
    display: inline-block;
    text-decoration: none;
    font-size: 18px;
    color: #1A1919;
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
        color: #1A1919;
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