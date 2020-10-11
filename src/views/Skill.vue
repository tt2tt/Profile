<template>
  <div id="skill">
    <v-container>
      <h1>Skill</h1>
      <Tab></Tab>
    </v-container>
  </div>
</template>

<script>
import Tab from '../components/Tab.vue'

export default {
  name: 'App',
  components: {
    Tab
  },

  data: () => ({
    //
  }),
};
</script>

<style scoped lang="scss">
#skill h1{
  font-size: 40px;
  text-align: center;
}
</style>
