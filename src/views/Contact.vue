<template>
  <div id="contact">
    <v-container>
      <h1>Contact</h1>
      <h2>お問い合わせ・SNS</h2>
      <div id="icons">
        <a href="https://twin-t.com/%e3%81%8a%e5%95%8f%e3%81%84%e5%90%88%e3%82%8f%e3%81%9b/" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon icon="envelope" id="mail"/>
        </a>
        <a href="https://twitter.com/TARO_twinT" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab','twitter']" id="twitter"/>
        </a>
        <a href="https://www.facebook.com" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab','facebook']" id="facebook"/>
        </a>
        <a href="https://github.com/tt2tt" target="_blank" rel="noopener noreferrer">
          <font-awesome-icon :icon="['fab','github']" id="github"/>
        </a>
      </div>
    </v-container>
  </div>
</template>


<style scoped lang="scss">
#contact h1{
  font-size: 40px;
  text-align: center;
}
#contact h2{
  text-align: center;
  color: #777;
  margin-bottom: 20px;
}
#contact #icons{
  text-align: center;
}
#contact a{
  margin: 30px;
  font-size: 50px;
}
#contact #mail{
  color: #f00;
}
#contact #facebook{
  color: #00f;
}
#contact #github{
  color: #000;
}

@media screen and (max-width: 600px){
  #contact a{
    margin: 20px;
    font-size: 30px;
  }
}
</style>
