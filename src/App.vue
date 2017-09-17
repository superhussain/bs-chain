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

  // $black = #000
  $yellow = #ffc600

  @font-face
    font-family: 'adam.cg_proregular';
    src: url("/static/fonts/adam.cg_pro-webfont.eot");
    src: url("/static/fonts/adam.cg_pro-webfont.eot?#iefix") format('embedded-opentype'), url("/static/fonts/adam.cg_pro-webfont.woff2") format('woff2'), url("/static/fonts/adam.cg_pro-webfont.woff") format('woff'), url("/static/fonts/adam.cg_pro-webfont.ttf") format('truetype'), url("/static/fonts/adam.cg_pro-webfont.svg#adam.cg_proregular") format('svg');
    font-weight: normal;
    font-style: normal;
  @font-face
    font-family: 'againtsregular';
    src: url("/static/fonts/againts-webfont.woff2") format('woff2'), url("/static/fonts/againts-webfont.woff") format('woff');
    font-weight: normal;
    font-style: normal;

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
    a
      text-decoration none
    h1
      margin 0
    .wrapper
      width: 100%
      max-width 800px
      margin 5em auto
      padding 0 1.5em
      @media (max-width 600px)
        margin 3em auto

  .hero
    padding 5em 1em
    background-image url(https://images.unsplash.com/photo-1498713301984-508015049dc1?dpr=2&auto=format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb)
    background-size cover
    background-repeat no-repeat
    color $white

  .hero__title
    font-size: 8em;
    border-bottom: 0;
    font-weight: 100;
    letter-spacing: 2px;
    font-family: 'againtsregular';
    position: relative;
    color: #fff;
    text-shadow: 2px 2px 2px rgba(0,0,0,0.2), 0 0 10px rgba(0,0,0,0.1);
    z-index: 1;
    display: inline-block;
    animation-name: floating;
    animation-duration: 10s;
    animation-iteration-count: infinite;
    animation-timing-function: ease-in-out;
    @media (max-width 900px)
      font-size 6em
    @media (max-width 600px)
      font-size 4em
    &:before
      pointer-events none
      z-index: -1;
      content: '_';
      position: absolute;
      color: rgba($white, 0.2);
      left: 0;
      transform: translate(-20%, -250%);
      font-size: 35rem;
      line-height: 20px;
      @media (max-width 900px)
        font-size 2.5em
        transform translate(-10%, 0%)
      @media (max-width 600px)
        font-size 2em
        transform translate(-10%, 50%)

  .hero--yellow
    color: $yellow;
    position: relative;
    top: 0.07em;

  .tagline
    font-size 1.25em
    font-family: 'Roboto';
    text-transform uppercase
    font-weight 400
    letter-spacing 6px
    color rgba($white, 0.7)
    text-shadow 0 1px 3px rgba($black, 0.2)

  .text-heading, h1, h2, h3, h4, h5, h6
    font-family 'Roboto Slab', 'Roboto', Arial, Helvetica, sans-serif

  .el-notification
    .el-notification__title
      font-weight 700
    .el-notification__content
      font-weight 600
</style>
