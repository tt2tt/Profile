<template>
  <div id="top">
    <v-container fluid >
      <vue-particles
        :area="2000"
        color="#dedede"
        :particleOpacity="0.7"
        :particlesNumber="80"
        shapeType="circle"
        :particleSize="4"
        linesColor="#dedede"
        :linesWidth="1"
        :lineLinked="true"
        :lineOpacity="0.4"
        :linesDistance="150"
        :moveSpeed="3"
        :hoverEffect="true"
        hoverMode="grab"
        :clickEffect="true"
        clickMode="push"
      >
      </vue-particles>

      <!-- <p id="top-1">Hello My name is Taro</p> -->
      <!-- <p id="top-2">Welcome to My Profile Site</p> -->
      <vue-typed-js :strings="['Hello My name is Taro']" :type-speed="100">
        <h1 class="typing greeting1"></h1>
      </vue-typed-js>
      <vue-typed-js :strings="['Welcome to My Profile Site']" :type-speed="100" :startDelay="2900">
        <h1 class="typing greeting2"></h1>
      </vue-typed-js>

      <!-- <vue-typer :text="['Hello My name is Taro \nWelcome to My Profile Site \n']"
        class="top-text"
        :repeat='0'
         :preTypeDelay="1000"
         :typeDelay="120"
         :preEraseDelay="5000"
         :eraseDelay="2000"
         >
       </vue-typer> -->

   </v-container>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  #top{
    height: 100%;
    width: 100%;
    // height: 750px;
    // width: 2000px;
    background-image: url('../assets/sea_of_night.png');
    // background-image: url('../assets/space.jpg');
    // background-position: center;
    // background-repeat: no-repeat;
    // background-attachment: fixed;
    // background-size: cover;

    // background-size: contain;
  }
  #top #particles-js{
    // height: 600px!important;
    // display: inline;
    position: relative;
  }
  #top .typing{
    width: 100%;
    font-size: 50px;
    color: #fff;
    text-align: center;
    position: absolute;
    left: 50%;
    transform: translateX(-50%);
    -webkit-transform: translateX(-50%);
    -ms-transform: translateX(-50%);
  }
  #top .greeting1{
    top: 20%;
  }
  #top .greeting2{
    top: 30%;
  }
  // .top-text{
  //   color: #fff!important;
  // }
  // .vue-typer{
  //   font-size: 40px;
  //   color: #fff;
  // }
  // .vue-typer .custom.char{
  //   color: aliceblue!important;
  // }
  // #top .vue-typer .typed {
  //   color: #fff!important;
  //   font-size: 80px;
  // }
  #top p{
    font-size: 50px;
    color: #fff;
    position: absolute;
  }
  #top-1{
    top: 130px;
    left: 120px;
  }
  #top-2{
    top: 220px;
    left: 120px;
  }

  @media screen and (max-width: 960px){
    #top{
      // width: 1660px;
      height: 100%;
      width: 100%;
      // background-image: none;
      // background-color: #000;
    }
    #top .container .container--fluid{
      height: 100%;
    }
    #top .particles-js-canvas-el{
    }
    #top .typing{
      // font-size: 30px;
    }
  }

  @media screen and (max-width: 600px){
    #top .typing{
      font-size: 25px;
    }
  }
</style>
