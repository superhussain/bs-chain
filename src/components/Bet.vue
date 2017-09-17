<template>
  <main class="bet">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span>
          <span class="hero--yellow">Chain</span>
        </div>
      </h1>

      <div v-if="text" class="text">"{{ text }}"</div>

      <div class="bet-choices">
        <input type="radio" name="value" id="bet-choice--true" @change="selectAnswer" />
        <input type="radio" name="value" id="bet-choice--false" @change="selectAnswer" />
        <label for="bet-choice--true" class="bet-choice bet-choice--true">True</label>
        <label for="bet-choice--false" class="bet-choice bet-choice--false">False</label>
      </div>

      <button class="submit-bet" @click="submitBet" :disabled="value === null">Submit</button>
      <div class="button-helper">By clicking submit, you agree to our terms of service and give your consent to withdraw funds from your Coinbase wallet.</div>
    </section>
  </main>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Bet',
  computed: {
    text () {
      return this.$store.getters.getText
    }
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    ...mapActions([
      'setBetValue'
    ]),
    selectAnswer (event) {
      const checkbox = event.target
      const value = checkbox.id.split('--')[1]
      this.value = value
    },
    submitBet (event) {
      event.preventDefault()
      if (!this.value || this.value === 0) return

      // this.setBetValue(this.value)

      // betvalue route
      // redirect to timer page
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style lang="stylus" scoped>
  $white = #fff
  $black = #000
  $yellow = #ffc600
  $red = #ed1f25
  $green = #13CE66

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
    height 100vh

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

  .button-helper
    font-size 1em
    width 100%
    max-width 400px
    margin 1em auto
    line-height 1.5
    color rgba($white, 0.7)

  .bet-choices
    display block
    width 100%
    max-width 320px
    margin 2em auto
    font-size 0px
    input[type="radio"]
      position absolute
      opacity 0
      z-index -1
      top -9999px
      left -9999px
    .bet-choice
      cursor pointer
      border 2px solid $yellow
      font-size 1.25rem
      color $white
      padding 1em 1.25em
      font-weight 400
      text-transform uppercase
      letter-spacing 2px
      margin 1.5em auto 0.5em
      display inline-block
      background-color rgba($black, 0.15)
      transition: 300ms ease-in-out
      width 150px
      &.bet-choice--true
        border-right none
      &:hover
        background-color $yellow
        color $black

    #bet-choice--true:checked ~ .bet-choice--true
      background-color $yellow
      color $black
    #bet-choice--false:checked ~ .bet-choice--false
      background-color $yellow
      color $black

  .submit-bet
    cursor pointer
    appearance none
    border 2px solid $green
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
      background-color darken($green, 10%)
      border-color darken($green, 10%)
      color $white
    &[disabled="disabled"]
      cursor not-allowed
      border-color #aaa
      background-color #aaa
      color #777

  .text
    display inline-block
    margin: 1em 0
    font-size 1.5em
    font-style italic


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
