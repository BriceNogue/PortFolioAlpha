<template>
    <header>
      <div class="navbar">
        <div class="logo">
          <a to="/">
            <img src="../assets/LogoAlpha-B.png" alt="">
          </a>
        </div>  
        <nav>
          <RouterLink class="nav-link" to="/">About me</RouterLink>
          <RouterLink class="nav-link" to="/projects">Projects</RouterLink>
        </nav>
        <div class="navBtn">
          <button>Contact me</button>
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
        
    },

    methods: {
        
    },
};
</script>

<style lang="scss" scoped>
header {
  background: black;
  width: 100%;
}
.navbar {
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

  .nav-link:hover {
    
  }
}
</style>