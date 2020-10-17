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

      <vue-typed-js :strings="['Hello My name is Taro']" :type-speed="100">
        <h1 class="typing greeting1"></h1>
      </vue-typed-js>
      <vue-typed-js :strings="['Welcome to My Profile Site']" :type-speed="100" :startDelay="2900">
        <h1 class="typing greeting2"></h1>
      </vue-typed-js>

   </v-container>
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  #top{
    height: 100%;
    width: 100%;
    background-image: url('../assets/sea_of_night.png');
  }
  #top .container .container--fluid{
    height: 100%;
  }
  #top #particles-js{
    height: 100%;
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
  #top p{
    font-size: 50px;
    color: #fff;
    position: absolute;
  }

  @media screen and (max-width: 960px){
    #top{
      height: 100%;
      width: 100%;
    }
    #top #particles-js{
      height: 100%;
    }
  }

  @media screen and (max-width: 600px){
    #top .typing{
      font-size: 25px;
    }
    #top #particles-js{
      height: 400px;
    }
  }
</style>
