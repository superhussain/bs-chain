<template>
  <div class="bye">
    <h1>{{ msg }}</h1>

    <router-link to="/">
      <el-button type="primary">Go Back</el-button>
    </router-link>
  </div>
</template>

<script>
export default {
  name: 'bye',
  data () {
    return {
      msg: 'Goodbyeeee!!'
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $green = #42b983

  h1
    color $green
</style>
