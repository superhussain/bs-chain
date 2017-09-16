<template>
  <div class="hello">
    <div class="hero">
      <h1>
        <a class="hero__title" href="#">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </a>
      </h1>
      <p class="tagline">Lose more than just respect</p>
    </div>

    <a href="#">
      <el-button type="primary">Connect Coinbase</el-button>
    </a>
  </div>
</template>

<script>
  export default {
    name: 'hello'
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $white = #fff
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

  a
    text-decoration none

  h1
    margin 0
  
  .hero
    padding 5em 1em
    background-image url(https://images.unsplash.com/photo-1498713301984-508015049dc1?dpr=2&auto=format&fit=crop&w=1199&h=798&q=80&cs=tinysrgb)
    background-size cover
    background-repeat no-repeat
    color $white

  .hero__title
    font-size: 7.5em;
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
    &:before
      z-index: -1;
      content: '_';
      position: absolute;
      color: rgba($white, 0.2);
      left: 0;
      transform: translateX(-15%);
      font-size: 35rem;
      line-height: 20px;

  .hero--yellow
    color: #ffc600;
    position: relative;
    top: 0.07em;

  .tagline
    font-size 1em
    font-family: 'Roboto';
    text-transform uppercase
    font-weight 400
    letter-spacing 6px

@keyframes floating
  from
    transform: translate(0, 0px) rotateY(-12deg);
    text-shadow: 10px 10px 3px rgba(0,0,0,0.15);
  65%
    transform: translate(0, 15px) rotateY(10deg) rotateX(10deg);
    text-shadow: -10px -10px 3px rgba(0,0,0,0.15);
  to
    transform: translate(0, 0px) rotateY(-12deg);
    text-shadow: 10px 10px 3px rgba(0,0,0,0.15);
</style>
