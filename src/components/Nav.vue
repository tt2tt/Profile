<template>
  <div id="nav">
    <router-link :to="{ name: 'top' }">Top</router-link>
    <router-link :to="{ name: 'about' }">About</router-link>
    <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
    <router-link :to="{ name: 'skill' }">Skill</router-link>
    <router-link :to="{ name: 'contact' }">Contact</router-link>
  </div>
</template>

<style scoped lang="scss">
  header a{
    color: #000;
    text-decoration: none;
    padding: 20px;
    font-size: 25px;
  }
  #nav{
    margin: 7px auto;
  }
</style>
