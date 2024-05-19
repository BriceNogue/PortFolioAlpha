<template>
  <div class="home">
    <div class="div-img-and-years">
      <div class="div-img ">
        <img src="@/assets/profil.png" alt="">

        <div class="experience-years">
          <p>+02 <br> Années d'expérience</p>
        </div>
      </div>
    </div>

    <div class="div-info">
      <div class="my-name">
        <h2 class="h-my-name">Je suis</h2>
        <h1 class="brice">Brice</h1>
        <h1 class="nogue"><b>NOGUE</b></h1>
        <h2>✌️Encore appelé</h2>
        <h1 class="alpha"><b>ALPHA</b></h1>
      </div>
      <div>
        <p class="about-p">Développeur Full Stack et étudiant en Master un</p>
      </div>
      <div class="div-btn">
        <button class="btn-HireMe">Mon CV</button>
      </div>

      <!-- <div class="div-skils">
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
  display: grid;
  grid-template-columns: 50% 50%;
}

.div-img-and-years {
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
      width: 10.5rem;
      
      p {
        background: rgb(26, 25, 25, 0.5);
        color: white;
        border-radius: 10px;
        padding: 10px;
      }
    }
  }
}


.div-info {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-end;
  padding: 5rem 10rem 0 0;

  .my-name {
    line-height: 0;

    h1 {
      font-size: 6rem;
      font-family: 'Roboto';
      line-height: 1rem;
    }

    h2 {
      font-family: 'Roboto';
      font-size: 15px;
      margin: 0 0 0 5px;
    }

    .brice {
      margin: 40px 0 65px 0;
      letter-spacing: 10px;
    }

    .nogue {
      margin: 0 0 60px 0;
      letter-spacing: 10px;
    }

    .alpha {
      margin: 40px 0 50px 0;
      font-family: 'Verdana, Geneva, Tahoma, sans-serif';
    }
  }

  .about-p {
    font-family: 'Roboto';
    font-size: 15px;
    letter-spacing: 1.1px;
  }

  .div-btn {
    width: 100%;
    display: flex;
    justify-content: flex-end;

    .btn-HireMe {
      width: 150px;
      height: 40px;
      background: #2563eb;
      border-radius: 25px;
      font-size: 15px;
      font-family: 'Roboto';
      font-weight: bold;
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

@media (min-width: 320px) and (max-width: 768px) {
  .home {
    .home {
      display: grid;
      grid-template-columns: 100%;
    }
  }

  .div-img-and-years {
    width: 100%;
    height: auto;
    
    .div-img {
      width: 100%;
      height: 52vh;

      img {
        position: absolute;
        top: -3rem;
        left: -8rem;
      }
  
      .experience-years {
        display: inherit;
        width: 140px;
        top: 55%;
        left: 57%;

        h1, h3 {
          font-size: 13px;
        }
      }
    }
  }

  .div-info {
    width: 100%;
    height: auto;
    justify-content: inherit;
    align-items: flex-start;
    padding: 2rem;
  
    .my-name {
      line-height: 0;
  
      h1 {
        font-size: 3rem;
        letter-spacing: 5px;
      }
  
      .brice {
        margin: 40px 0 40px 0;
        
      }
  
      .nogue {
        margin: 0 0 40px 0;
      }
  
      .alpha {
        margin: 40px 0 40px 0;
      }
    }
  
    .about-p {
      letter-spacing: 0.3px;
      font-size: 15px;
    }
  
    .div-btn {
      justify-content: center;
  
      .btn-HireMe {
        width: 200px;
        margin-top: 30px;
      }
    }
  }
}
</style>