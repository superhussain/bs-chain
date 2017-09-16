<template>
  <div class="hello">
    <h1>BS Chain</h1>
    <p class="tagline">Lose more than just respect</p>

    <a href="#">
      <el-button type="primary">Connect Coinbase</el-button>
    </a>
  </div>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'hello'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $green = #41b883
  $dark-blue = #35495e

  h2
    font-weight normal
</style>
