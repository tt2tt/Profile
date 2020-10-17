<template>
  <div id="navs">
    <div id="nav" class="hidden-xs-only">
      <router-link :to="{ name: 'top' }">Top</router-link>
      <router-link :to="{ name: 'about' }">About</router-link>
      <router-link :to="{ name: 'portfolio' }">Portfolio</router-link>
      <router-link :to="{ name: 'skill' }">Skill</router-link>
      <router-link :to="{ name: 'contact' }">Contact</router-link>
    </div>

    <div id="sumaho-nav" class="hidden-sm-and-up">
      <router-link :to="{ name: 'top' }">
        <font-awesome-icon icon="home"/>
      </router-link>
      <router-link :to="{ name: 'about' }">
        <font-awesome-icon icon="user-circle"/>
      </router-link>
      <router-link :to="{ name: 'portfolio' }">
        <font-awesome-icon icon="folder"/>
      </router-link>
      <router-link :to="{ name: 'skill' }">
        <font-awesome-icon icon="laptop-code"/>
      </router-link>
      <router-link :to="{ name: 'contact' }">
        <font-awesome-icon icon="envelope"/>
      </router-link>
    </div>
  </div>
</template>

<style scoped lang="scss">
  header a{
    color: #000;
    text-decoration: none;
    padding: 20px;
  }
  #nav{
    margin: 7px auto;
    font-size: 25px;
  }
  #sumaho-nav{
    margin: 10px auto;
    font-size: 20px;
  }
</style>
