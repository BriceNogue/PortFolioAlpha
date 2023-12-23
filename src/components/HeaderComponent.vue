<template>
    <header  ref="header">
      <div class="nav-bar">
        <div class="logo">
          <a to="/">
            <img src="../assets/LogoAlpha-B.png" alt="">
          </a>
        </div>  
        <nav>
          <router-link class="nav-link text-blue-600 active:text-red-600" to="/">About me</router-link>
          <router-link class="nav-link text-blue-600 active:text-red-600" to="/projects">Education</router-link>
          <router-link class="nav-link text-blue-600 active:text-red-600" to="/projects">Skills</router-link>
          <router-link class="nav-link text-blue-600 active:text-red-600" to="/projects">Experiences</router-link>
          <router-link class="nav-link text-blue-600 active:text-red-600" to="/projects">Projects</router-link>
        </nav>
        <div class="nav-btn">
          <button class="btn-contact bg-blue-600 text-white">Contact me</button>
        </div>
      </div>
    </header>
</template>

<script>
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
          // Ajoutez la classe 'fixed' à l'élément du header
          this.$refs.header.classList.add('fixed');
        } else {
          // Supprimez la classe 'fixed' de l'élément du header
          this.$refs.header.classList.remove('fixed');
        }
      },
    },
};
</script>

<style lang="scss" scoped>
header {
  width: 100%;
  background-color: transparent;
  z-index: 1;
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
    text-indent: 15px;
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
</style>