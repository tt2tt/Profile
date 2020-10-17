<template>
  <div id="tabs">
    <v-card>
      <div id="over">
        <v-tabs
          v-model="tab"
          white
        >
          <v-tab
            v-for="item in items"
            :key="item.tab"
          >
           {{ item.tab }}
          </v-tab>
        </v-tabs>
      </div>
      <v-tabs-items v-model="tab">
        <v-tab-item
          v-for="item in items"
          :key="item.tab"
        >
          <v-card flat>
            <v-card-text :class="item.content1">{{ item.content1 }}</v-card-text>
            <v-card-text :class="item.content2" v-if="item.content2">{{ item.content2 }}</v-card-text>
            <v-card-text :class="item.content3" v-if="item.content3">{{ item.content3 }}</v-card-text>
          </v-card>
        </v-tab-item>
      </v-tabs-items>
    </v-card>
  </div>
</template>

<script>
  export default {
    data () {
      return {
        tab: null,
        items: [
          { tab: 'フロントエンド', content1: 'HTML&CSS', content2: "jQuery", content3: "Vue.js" },
          { tab: 'バックエンド', content1: 'Ruby \n（Ruby on Rails）' },
          { tab: 'その他', content1: 'AWS' , content2: 'ITパスポート'},
        ],
      }
    },
  }
</script>

<style scoped lang="scss">
#tabs{
  margin: auto;
}
#tabs #over{
  margin-left: 25%;
}
#tabs .v-card{
  width: 700px;
  margin: auto;
}
#tabs .v-card__text{
  font-size: 26px;
  text-align:  center;
  white-space: pre-wrap;
}

@media screen and (max-width: 600px){
  #tabs #over{
    margin-left: 30px;
  }
  #tabs .v-card{
    margin-left: 30;
  }
}
@media screen and (max-width: 380px){
  #tabs #over{
    margin-left: 0px;
  }
  #tabs .v-tab{
    margin-left: -8px;
  }
}
@media screen and (max-width: 330px){
  #tabs .v-tab{
    margin-left: -19px;
  }
}
</style>
