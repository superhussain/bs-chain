<template>
  <main class="record">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>
      <p class="tagline">Tell your buddy to repeat his BS!</p>
      <button v-if="!isRecording" @click="startRecording" class="record-button"><i class="fa fa-microphone-alt"></i></button>
      <button v-else @click="stopRecording" class="record-button record-button--recording"><i class="fa fa-microphone-alt"></i></button>
      
      <div v-if="!isRecording" class="button-helper">Click to start recording...</div>
      <div v-else>
        <div class="button-helper">Recording...</div>
        <div class="button-helper">(Click to stop recording)</div>
      </div>

      <div v-if="text" class="text">"{{ text }}"</div>
    </section>
  </main>
</template>

<script>
  import axios from 'axios'
  import { mapActions } from 'vuex'

  // eslint-disable-next-line
  const speechRec = new webkitSpeechRecognition()

  export default {
    name: 'Record',
    computed: {
      user () {
        return this.$store.getters.getUser
      }
    },
    data () {
      return {
        isRecording: false,
        recognition: null,
        text: ''
      }
    },
    methods: {
      ...mapActions([
        'setText',
        'setBetId'
      ]),
      startRecording (event) {
        event.preventDefault()
        this.recognition.start()
        // console.log(event)
      },
      stopRecording (event) {
        event.preventDefault()
        this.recognition.stop()
        // console.log(event)
      }
    },
    mounted () {
      this.recognition = speechRec
      this.recognition.continuous = true
      this.recognition.interimResults = true
      this.recognition.lang = 'en-US'

      this.recognition.onstart = (event) => {
        this.isRecording = true
        console.log('start')
      }

      this.recognition.onend = (event) => {
        this.isRecording = false
        console.log('end recording and send request')

        const text = this.text
        const user = this.user
        const time = new Date().getTime()

        if (text) {
          this.setText(text)

          // create-bet route
          // redirect to bet value page

          axios
            .post('https://sssaini-debug.mybluemix.net/betcreation', {
              text,
              user,
              time
            })
            .then((response) => {
              console.log(response.data)
              const betId = response.data.bet_id
              this.setBetId(betId)
              this.$router.push('/bet-invite/' + betId)
            })
            .catch((err) => {
              console.log(err)
            })
        }
      }

      this.recognition.onresult = (event) => {
        const result = event.results[0][0].transcript
        this.text = result
        console.log(this.text)
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

  .hero
    min-height 100vh

  .record-button
    cursor pointer
    border 5px solid $red
    width 120px
    height 120px
    font-size 2.5em
    color $white
    padding 0.75em 1.25em
    border-radius 10em
    font-weight 500
    text-transform uppercase
    letter-spacing 2px
    margin 1.5em auto 0
    display inline-flex
    align-items center
    justify-content center
    background-color transparent
    transition: 300ms ease-in-out
    &:hover
      background-color $red
      color $white
    &.record-button--recording
      background-color $red
      color $yellow

  .button-helper
    margin 1em 0
    font-size 1.2em

  .text
    background-color rgba(#222, 0.7)
    display inline-block
    padding 1em
    margin: 1em 0
    font-size 1.2em
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
