<template>
  <div id="about">
    <v-container>
      <v-row>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" id="img-aria">
          <v-img :src="require('../assets/profile_img.jpg')" id="profile_img" />
        </v-col>
        <v-col cols="12" sm="12" md="4" lg="4" xl="4" id="detail-aria" >
          <div id="detail">
            <h1>About</h1>
            <table>
              <tbody>
                <tr v-for="(contact, index) in contacts" :key="index">
                  <th align="left">{{ contact.key }}</th>
                  <td v-if="contact.url" class="last-td">
                    <a :href="contact.url" target="_blank" rel="noopener noreferrer">
                      {{ contact.value }}
                    </a>
                  </td>
                  <td v-else class="last-td">
                    {{ contact.value }}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </v-col>
      </v-row>
    </v-container>
  </div>
</template>

<script>
export default{
  data() {
    return {
      contacts: [
        { key: 'Name', value: '田中 太朗 (Taro Tanaka)', url: '' },
        { key: 'University', value: '西九州大学 子ども部 子ども学科', url: '' },
        {
          key: 'GitHub',
          value: 'tt2tt',
          url: 'https://github.com/tt2tt',
        },
        {
          key: 'Blog',
          value: '雑記学習帳',
          url: 'https://twin-t.com/',
        },
      ],
    }
  },
}
</script>

<style scoped lang="scss">
#about #img-aria{
  margin-top: 100px;
  margin-left: 180px;
  margin-right: 20px;
  display: inline;
  text-align:  center;
}
#about #profile_img{
  height: 330px;
  width: 330px;
  border-radius: 330px;
}
#about #detail{
  margin-top: 70px;
}
#about #detail h1{
  font-size: 40px;
  text-align: center;
}
#detail table{
  margin: auto;
}
#about #detail th,td{
  padding-top: 25px;
  font-size: 20px;
}
#about #detail td{
  padding-left: 20px;
}
@media screen and (max-width: 960px){
  #about #img-aria{
    margin-left: 0px;
  }
  #about #profile_img{
    margin: auto;
  }
}

@media screen and (max-width: 600px){
  #about #img-aria{
    margin-top: 20px;
  }
  #about #detail{
    margin-top: 0;
  }
  #about h1{
    margin-bottom: 0;
  }
  #about #profile_img{
    height: 200px;
    width: 200px;
    border-radius: 200px;
  }
}
</style>
