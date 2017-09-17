<template>
  <main class="complete">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>

      <div v-if="result">
        <div v-if="isWinner" class="complete-message complete-message--winner">
          <h2>Congratulations!</h2>
          <p>You were correct in your bet and have just awarded yourself <strong>${{ result }}</strong>! Use it wisely!</p>
          <h3 class="bounty">+ ${{ result }}</h3>
          <button class="play-again-button" @click="playAgain">Play again?</button>
        </div>
        <div v-else class="complete-message complete-message--loser">
          <h2>Try again next time!</h2>
          <p>The BS was strong in this one, but you win some, you lose some.</p>
          <button class="play-again-button" @click="playAgain">Give it another go?</button>
        </div>
      </div>
    </section>
  </main>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Complete',
  computed: {
    text () {
      return this.$store.getters.getText
    },
    betId () {
      return this.$store.getters.getBetId
    },
    user () {
      return this.$store.getters.getUser
    },
    answer () {
      return this.$store.getters.getBetAnswer
    },
    result () {
      return this.$store.getters.getBetResult
    },
    isWinner () {
      console.log(this.result)
      return this.result && parseInt(this.result) > 0
    }
  },
  methods: {
    ...mapActions([
      'setBetResult'
    ]),
    playAgain (event) {
      event.preventDefault()
      this.$router.push('/')
    }
  },
  mounted () {
    const betId = this.$route.params.bet_id
    const text = this.$store.getters.getText
    const answer = this.$store.getters.getBetAnswer

    axios
      .post('https://sssaini-debug.mybluemix.net/result', {
        bet_id: betId,
        text,
        answer
      })
      .then((response) => {
        console.log(response.data)

        if (response.data) {
          this.setBetResult(response.data.output)

          localStorage.removeItem('betValue')
          localStorage.removeItem('betText')
          localStorage.removeItem('betId')
          localStorage.removeItem('betAnswer')
          localStorage.removeItem('betResult')
        }
      })
      .catch((err) => {
        console.log(err)
      })
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

  .button-helper
    font-size 1em
    width 100%
    max-width 500px
    margin 1em auto
    line-height 1.5
    color rgba($white, 0.75)

  .bounty
    font-size 3em
    font-family 'Roboto', sans-serif
    color $yellow
    @media (max-width 800px)
      font-size 2.5em
    @media (max-width 600px)
      font-size 2em

  .play-again-button
    cursor pointer
    appearance none
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
