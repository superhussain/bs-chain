<template>
  <main class="home">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>
      <p class="tagline">Lose more than just respect</p>
      <a href="/auth/coinbase" class="connect-button">Connect Coinbase</a>
    </section>
    <section class="info">
      <div class="wrapper">
        <h2>What is BS Chain?</h2>
        <hr>
        <p>Tumblr dolore PBR&B, art party meggings squid venmo photo booth cliche sriracha readymade thundercats bitters roof party try-hard. Mlkshk chicharrones cillum, palo santo marfa polaroid YOLO four dollar toast consequat freegan. You probably haven't heard of them tumblr swag, bicycle rights man bun adipisicing selvage. Schlitz edison bulb sed anim, post-ironic hammock pour-over roof party exercitation shaman fashion axe neutra pork belly four loko. Next level raw denim slow-carb forage. La croix semiotics umami eiusmod you probably haven't heard of them, waistcoat beard officia sunt sed chicharrones pinterest drinking vinegar occaecat. Seitan tumeric keytar fingerstache. Leggings quis reprehenderit, farm-to-table deserunt aliquip copper mug ennui cold-pressed incididunt. In cloud bread freegan nostrud yr jean shorts fugiat scenester.</p>
        <p>Readymade bushwick locavore consequat YOLO pinterest aliquip godard palo santo wolf. Swag authentic four loko chillwave, fugiat ea vape subway tile cred. Crucifix kinfolk copper mug four loko tousled fam mumblecore semiotics marfa vape raw denim keytar mlkshk live-edge. Marfa lyft glossier 90's helvetica gastropub street art iceland. Cray edison bulb mustache helvetica jean shorts truffaut stumptown try-hard unicorn whatever church-key butcher readymade ethical. Drinking vinegar consectetur dolor adipisicing vegan gastropub. Crucifix excepteur shoreditch plaid. Poke aute gastropub, banjo normcore drinking vinegar chambray magna paleo marfa vexillologist pok pok. Keytar flexitarian vice salvia meh. Fugiat mlkshk organic roof party freegan tbh actually duis tilde do nostrud trust fund. Tattooed sustainable tofu sriracha drinking vinegar raw denim kickstarter mlkshk jean shorts letterpress keffiyeh subway tile semiotics sed copper mug. Lo-fi retro ullamco, quinoa woke affogato pork belly.</p>
      </div>
    </section>
  </main>
</template>

<script>
  import { mapActions } from 'vuex'

  export default {
    name: 'Home',
    computed: {
      user () {
        return this.$store.getters.getUser
      }
    },
    methods: {
      ...mapActions([
        'setUser'
      ])
    },
    mounted () {
      // Check if user is connected
      if (this.user) {
        this.$router.push('/record')
        location.search = ''
      }

      // Check if callback is success
      if (location.search && location.search.indexOf('status=success') > -1) {
        this.$router.push('/record')
        const user = location.search.split('user=')[1]
        this.setUser(user)
        location.search = ''
      }
    }
  }
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $white = #fff
  $black = #000
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

  .connect-button
    border 2px solid $yellow
    font-size 1.25em
    color $white
    padding 1em 1.25em
    font-weight 400
    text-transform uppercase
    letter-spacing 2px
    margin 1.5em auto 1em
    display inline-block
    background-color rgba($black, 0.15)
    transition: 300ms ease-in-out
    &:hover
      background-color $yellow
      color $black

  section.info
    text-align left
    font-size 1.1em
    hr
      border none 
      border-top 4px solid $yellow
      margin 1em 0 3em
      width 100px
    p
      font-weight 300


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
