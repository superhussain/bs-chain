<template>
  <main class="bet-value">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>
      <p class="tagline">Place the value of your bet</p>
      
      <label class="input-wrapper">
        <span>Enter Value</span>
        <input class="value-input" type="number" v-model="value" placeholder="0" autofocus />
      </label>

      <button class="submit-bet-value" @click="submitBetValue" :disabled="!value || value === 0">Continue</button>
    </section>
  </main>
</template>

<script>
// import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'BetValue',
  data () {
    return {
      value: null
    }
  },
  methods: {
    ...mapActions([
      'setBetValue',
      'setBetId'
    ]),
    submitBetValue (event) {
      event.preventDefault()
      if (!this.value || this.value === 0) return

      this.setBetValue(this.value)

      // betvalue route
      // redirect to timer page
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
    max-width 300px
    margin 5em auto 3em
    position relative
    &:before
      content '$'
      font-size 1.25em
      position absolute
      bottom 0
      left 0
      padding 1em 1.25em
    > span
      margin-bottom: 0.75em
      text-transform uppercase
      font-weight 500
      letter-spacing 1px
      font-size 0.85em

  .value-input
    width: 100%
    appearance none
    border 2px solid $yellow
    font-size 1.25em
    color $white
    padding 1em 1.25em
    padding-left 2.5em
    font-weight 400
    text-transform uppercase
    letter-spacing 2px
    display inline-block
    background-color rgba($black, 0.1)
    transition: 300ms ease-in-out
    &:hover
      background-color rgba($black, 0.25)
    &:focus
      outline: none

  .submit-bet-value
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
