<template>
  <div class="home">
    <div class="div-img-and-years">
      <div class="div-img ">
        <img src="@/assets/profil.png" alt="">

        <div class="experience-years">
          <h1>+02 </h1>
          <h3>Années d'expérience</h3>
        </div>
      </div>
    </div>
    <div class="div-info">
      <div class="my-name">
        <h2 class="h-my-name">Je suis</h2>
        <h1 class="brice">Brice</h1>
        <h1 class="nogue"><b>NOGUE</b></h1>
        <h2>Souvent appelé</h2>
        <h1 class="alpha"><b>ALPHA</b></h1>
      </div>
      <div>
        <p class="about-p">Développeur Full Stack et étudiants en Mastrer un</p>
      </div>
      <div class="div-btn">
        <button class="btn-HireMe">Mon CV</button>
      </div>
      <!--<div class="div-skils">
        <div class="javascript">
          <span>JavaScript</span>
        </div>
        <div class="java">
          <span>Java</span>
        </div>
        <div class="c-sharp">
          <span>C#</span>
        </div>
      </div> -->
    </div>
  </div>
</template>

<script>
export default {
  name: 'HomeView',

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
.home {
  width: 100%;
  height: 100vh;
  display: flex;
}

.div-img-and-years {
  width: 50%;
  height: 100vh;
  position: relative;

  .div-img {
    width: 100%;
    position: relative;

    img {
      width: 100%;
    }

    .experience-years {
      position: absolute;
      top: 65%;
      left: 90%;
      width: auto;
      height: auto;
      display: flex;
      flex-direction: column;
      justify-content: center;
      background: rgb(26, 25, 25, 0.5);
      color: white;
      border-radius: 10px;
      padding: 5px 5px 5px 5px;
    }
  }
}


.div-info {
  width: 50%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 0 10rem 0 0;

  .my-name {
    line-height: 0;

    h1 {
      font-size: 5rem;
      letter-spacing: 15px;
    }

    h2 {
      margin: 0 0 0 5px;
    }

    .brice {
      margin: 40px 0 65px 0;
      
    }

    .nogue {
      margin: 0 0 60px 0;
    }

    .alpha {
      margin: 40px 0 60px 0;
    }
  }

  .about-p {
    letter-spacing: 0.1px;
  }

  .div-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .btn-HireMe {
      width: 150px;
      height: 40px;
      background: #2F2BF6;
      border-radius: 25px;
      font-size: 18px;
      color: white;
      margin-top: 60px;
    }
  }

  .div-skils {
    margin-top: 30px;
    width: 220px;
    height: 80px;
    display: table;
    
    span {
      height: 35px;
      border-radius: 5px;
      display: flex;
      justify-content: center;
      align-items: center;
      float: right;
      margin: 5px;
    }

    .java span {
      width: 80px;
      background: #2F2BF6;
      color: white;
    }

    .javascript span {
      width: 115px;
      background: #D9D9D9;
      color: #1A1919;
    }

    .c-sharp span {
      width: 80px;
      background: #1A1919;
      color: white;
    }
  }
}

/************************** Responsive **************************/

@media (max-width: 880px) {
  .home {
    height: auto;
    flex-direction: column;
  }

  .div-img-and-years {
    width: 100%;
    height: 55vh;
    position: inherit;
  
    .div-img {
      width: 100%;
      position: relative;
  
      img {
        position: absolute;
        top: -2rem;
        left: -130px;
      }
  
      .experience-years {
        top: 14rem;
        left: 58%;
      }
    }
  }

  .div-info {
    width: 100%;
    height: auto;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: flex-end;
    padding: 0 10rem 0 0;
    border: #1A1919 solid 1px;
  
    .my-name {
      line-height: 0;
  
      h1 {
        font-size: 5rem;
        letter-spacing: 15px;
      }
  
      h2 {
        margin: 0 0 0 5px;
      }
  
      .brice {
        margin: 40px 0 65px 0;
        
      }
  
      .nogue {
        margin: 0 0 60px 0;
      }
  
      .alpha {
        margin: 40px 0 60px 0;
      }
    }
  
    .about-p {
      letter-spacing: 0.1px;
    }
  
    .div-btn {
      width: 100%;
      display: flex;
      justify-content: flex-end;
  
      .btn-HireMe {
        width: 150px;
        height: 40px;
        background: #2F2BF6;
        border-radius: 25px;
        font-size: 18px;
        color: white;
        margin-top: 60px;
      }
    }
  }
}
</style>