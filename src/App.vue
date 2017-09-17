<template>
  <div id="app">
    <router-view></router-view>
  </div>
</template>

<script>
  export default {
    name: 'app'
  }
</script>

<style lang="stylus">
  @import url('https://fonts.googleapis.com/css?family=Roboto+Slab:300,400,700|Roboto:300,400,400i,500,500i,700,900')

  $black = #1F2D3D
  $light-black = #324057
  $extra-light-black = #475669
  $silver = #8492A6
  $light-silver = #99A9BF
  $extra-light-silver = #C0CCDA
  $gray = #D3DCE6
  $light-gray = #E5E9F2
  $extra-light-gray = #EFF2F7
  $dark-white = #F9FAFC
  $white = #FFFFFF

  *
    box-sizing border-box

  body
    margin 0
    font-family 'Roboto', Arial, Helvetica, sans-serif
    -webkit-font-smoothing antialiased
    -moz-osx-font-smoothing grayscale
    color $black
    
  #app
    text-align center
    margin 0
    .wrapper
      width: 100%
      max-width 800px
      margin 5em auto

  .text-heading, h1, h2, h3, h4, h5, h6
    font-family 'Roboto Slab', 'Roboto', Arial, Helvetica, sans-serif

  .el-notification
    .el-notification__title
      font-weight 700
    .el-notification__content
      font-weight 600
</style>
