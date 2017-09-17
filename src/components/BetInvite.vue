<template>
  <main class="bet-invite">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>
      <p class="tagline">Share this bet with your friends!</p>

      <label class="input-wrapper">
        <input class="url-input" type="text" :value="url" @click="selectInput" autofocus />
      </label>

      <button class="continue-bet" @click="continueBet">Continue</button>
    </section>
  </main>
</template>

<script>
import { mapActions } from 'vuex'

export default {
  name: 'BetInvite',
  computed: {
    betId () {
      return this.$store.getters.getBetId
    },
    url () {
      return location.href.replace('bet-invite', 'bet')
    }
  },
  methods: {
    ...mapActions([
      'setBetValue',
      'setBetId'
    ]),
    selectInput (event) {
      event.target.select()
    },
    continueBet (event) {
      event.preventDefault()
      this.$router.push('/bet/' + this.betId)
    }
  },
  mounted () {
    this.setBetId(this.$route.params.bet_id)
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

  .hero
    min-height 100vh

  .input-wrapper
    display flex
    flex-direction column
    text-align left
    width: 100%
    max-width 440px
    margin 5em auto 2em
    position relative
    > span
      margin-bottom: 0.75em
      text-transform uppercase
      font-weight 500
      letter-spacing 1px
      font-size 0.85em

  .url-input
    text-align center
    width: 100%
    appearance none
    border 2px solid $yellow
    font-size 1.15em
    color $white
    padding 1em 1.25em
    font-weight 400
    // text-transform uppercase
    // letter-spacing 2px
    display inline-block
    background-color rgba($black, 0.1)
    transition: 300ms ease-in-out
    &:hover
      background-color rgba($black, 0.25)
    &:focus
      outline: none

  .continue-bet
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
