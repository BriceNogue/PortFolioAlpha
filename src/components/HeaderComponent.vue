<template>
    <header>
      <div class="logo">
        <a to="/">
          <img src="../assets/LogoAlpha-B.png" alt="">
        </a>
      </div>  
        <div class="navbar">
          <nav>
            <RouterLink to="/">About Me</RouterLink>
            <RouterLink to="/projects">Projects</RouterLink>
          </nav>
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
* {
  margin: none;
  padding: none;  
}
header {
  background: black;
  width: 100%;     
}
.logo {
    width: 8px;
    
    img {
        width: 100%;
    }
}
</style>