<template>
  <div id="top">
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

    <p id="top-1">Hello My name is Taro</p>
    <p id="top-2">Welcome to My Profile Site</p>

    <!-- <vue-typer :text="['Hello My name is Taro \nWelcome to My Profile Site \n']"
      class="top-text"
      :repeat='0'
       :preTypeDelay="1000"
       :typeDelay="120"
       :preEraseDelay="5000"
       :eraseDelay="2000">
     </vue-typer> -->
  </div>
</template>

<script>

</script>

<style scoped lang="scss">
  #top{
    height: 750px;
    width: 2000px;
    background-image: url('../assets/sea_of_night.png');
    background-size: contain;
  }
  #top #particles-js{
    height: 600px!important;
    position: relative;
  }
  // .vue-typer{
  //   font-size: 40px;
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
</style>
