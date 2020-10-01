<template>
  <header>
    <Nav></Nav>
  </header>
</template>

<script>
import Nav from './Nav.vue'

export default{
    components:{
        Nav
    }
}
</script>


<style scoped lang="scss">
  header {
    height: 50px;
    background-color: #2C7CFF;
    text-align: center;
  }
</style>
