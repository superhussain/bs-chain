<template>
  <main class="bet">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>
      
      <div v-if="!user">
        <div class="iframe-oauth-wrapper">
          <iframe id="coinbase_inline_iframe_ae60c5e2f0574543b82a3f0d05cfc9ac" src="https://www.coinbase.com/checkouts/ae60c5e2f0574543b82a3f0d05cfc9ac/inline" style="width: 460px; height: 350px; border: none; box-shadow: 0 1px 3px rgba(0,0,0,0.25);" allowtransparency="true" frameborder="0"></iframe>
        </div>

        <button class="skip-button" @click="setUser('dummykeyhere')">Skip (We're cheap)</button>
      </div>

      <div v-else>
        <div v-if="text" class="text">"{{ text }}"</div>

        <div class="bet-choices">
          <input type="radio" name="value" id="bet-choice--true" @change="selectAnswer" />
          <input type="radio" name="value" id="bet-choice--false" @change="selectAnswer" />
          <label for="bet-choice--true" class="bet-choice bet-choice--true">True</label>
          <label for="bet-choice--false" class="bet-choice bet-choice--false">False</label>
        </div>

        <button class="submit-bet" @click="submitBet" :disabled="value === null">Submit</button>
        <div class="button-helper">By clicking submit, you agree to our terms of service and give your consent to withdraw funds from your Coinbase wallet.</div>
      </div>

    </section>
  </main>
</template>

<script>
import axios from 'axios'
import { mapActions } from 'vuex'

export default {
  name: 'Bet',
  computed: {
    text () {
      return this.$store.getters.getText
    },
    betId () {
      return this.$store.getters.getBetId
    },
    user () {
      return this.$store.getters.getUser
    }
  },
  data () {
    return {
      value: null
    }
  },
  methods: {
    ...mapActions([
      'setBetId',
      'setText',
      'setBetAnswer',
      'setBetResult',
      'setUser'
    ]),
    selectAnswer (event) {
      const checkbox = event.target
      const value = checkbox.id.split('--')[1]
      this.value = value
    },
    submitBet (event) {
      event.preventDefault()
      if (!this.value) return

      const betId = this.betId
      const text = this.text
      const user = this.user
      const answer = this.value

      this.setBetAnswer(answer)

      axios
        .post('https://sssaini-debug.mybluemix.net/saveanswer', {
          bet_id: betId,
          user_id: user,
          text,
          answer
        })
        .then((response) => {
          if (response.data) {
            this.$router.push('/timer/' + betId)
          }
        })
        .catch((err) => {
          console.log(err)
        })
    }
  },
  mounted () {
    const betId = this.$route.params.bet_id
    this.setBetId(betId)
    axios
      .post('https://sssaini-debug.mybluemix.net/gettext', {
        bet_id: betId
      })
      .then((response) => {
        console.log(response.data)
        const text = response.data.output
        this.setText(text)
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
    max-width 400px
    margin 1em auto
    line-height 1.5
    color rgba($white, 0.7)

  .iframe-oauth-wrapper
    margin-top 3em

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

  .skip-button
    appearance none
    cursor pointer
    appearance none
    border 2px solid $yellow
    font-size 1.25em
    color $white
    padding 0.75em 1.25em
    font-weight 400
    text-transform uppercase
    letter-spacing 2px
    margin 1.5em auto 0
    display inline-block
    background-color rgba($black, 0.15)
    transition: 300ms ease-in-out
    &:hover
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
