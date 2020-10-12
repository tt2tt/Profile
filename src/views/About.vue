<template>
  <div id="about">
    <v-img :src="require('../assets/profile_img.jpg')" id="profile_img" />
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
#about #profile_img{
  height: 330px;
  width: 330px;
  border-radius: 330px;
  margin-top: 10%;
  margin-left: 20%;
  position: relative;
}
#detail{
  float: right;
  position: absolute;
  top: 120px;
  right: 300px;
}
#detail h1{
  font-size: 40px;
  text-align: center;
}
#detail th,td{
  padding-top: 25px;
  font-size: 20px;
}
#detail td{
  padding-left: 20px;
}
</style>
