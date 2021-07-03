<template>
  <div id="portfolio">
    <v-container>
      <h1>Portfolio</h1>
      <v-row>
        <ul v-for="portfolio in portfolios" :key="portfolio.name">
          <v-col cols="12" sm="8" md="4" lg="4" xl="3">
            <li class="card">
              <img v-bind:src="portfolio.img" class="card-img">
              <p class="card-title">{{ portfolio.name }}</p>
              <p class="card-text">{{ portfolio.detail }}</p>
              <p class="card-lang">{{ portfolio.technic }}</p>
              <div class="links">
                <a v-show="portfolio.link" :href="portfolio.link" class="card-link">Website</a>
                <a v-show="portfolio.github" :href="portfolio.github" class="card-link github-link">Github</a>
              </div>
            </li>
         </v-col>
        </ul>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'Portfolios',
  data() {
    return {
      portfolios: [
        {
          name: 'インスタクローン',
          detail: 'インスタグラムのクローンアプリ',
          img: require('../assets/insta_clone.png'),
          technic: 'Rails, Heroku',
          link: 'https://polar-retreat-64399.herokuapp.com',
          github: '',
        },
        {
          name: '5chクローン',
          detail: '5ちゃんねるのクローンアプリ',
          img: require('../assets/5ch_clone.png'),
          technic: 'Rails, Heroku',
          link: 'https://boiling-tor-99502.herokuapp.com',
          github: 'https://github.com/tt2tt/5ch_clone',
        },
        {
          name: 'Share Brain(サーバー停止中)',
          detail: '学習したことの説明を共有するアプリ',
          img: require('../assets/sharebrain.png'),
          technic: 'Rails, jQuery, AWS',
          link: 'https://sharebrain.net',
          github: 'https://github.com/tt2tt/Portfolio',
        },
        {
          name: 'Profile_Site',
          detail: '私のプロフィールサイト',
          img: require('../assets/profile_site.png'),
          technic: 'Vue.js, Firebase',
          link: 'https://tt2tt-profile-page.web.app/',
          github: 'https://github.com/tt2tt/Profile',
        },
        {
          name: '雑記学習帳',
          detail: '技術ブログ',
          img: require('../assets/zakki.png'),
          technic: '現在約100記事, 月間約1100PV',
          link: 'https://twin-t.com',
          github: '',
        },
        {
          name: '',
          detail: '',
          img: require('../assets/coming_soon.png'),
          technic: '',
          link: '',
          github: '',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#portfolio h1{
  font-size: 40px;
  text-align: center;
}
#portfolio ul{
  padding-left: 0px;
}
#portfolio ul{
  margin: auto;
}
#portfolio .card {
  display: inline-block;
  height: 370px;
  width: 350px;
  background: #fff;
  border-radius: 5px;
  box-shadow: 0 2px 5px #ccc;
}
#portfolio .card-img {
  height: 200px;
  width: 350px;
}
#portfolio .card-content {
  padding: 20px;
}
#portfolio .card-title {
  font-size: 20px;
  margin-bottom: 20px;
  text-align: center;
  color: #333;
}
#portfolio .card-text {
  color: #777;
  font-size: 14px;
  line-height: 1.5;
}
#portfolio .card-lang{
  font-weight: 500;
}
#portfolio .card-link{
  border: 1px solid #00aaff;
  text-decoration: none;
  color: #00aaff;
  margin: 0 10px;
  padding: 5px 10px;
  border-radius: 5px;
}
#portfolio .card-link:hover {
  font-weight: 700;
}
#portfolio .github-link{
  border-color: #171515;
  color: #171515;
}
#portfolio .card p{
  text-align: center;
}
#portfolio .card .links{
  text-align: center;
}
@media screen and (max-width: 600px){
  #portfolio .card {
    height: 330px;
    width: 270px;
  }
  #portfolio .card-img {
    height: 160px;
    width: 270px;
  }
}
</style>
