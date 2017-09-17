<template>
  <main class="record">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span>
          <span class="hero--yellow">Chain</span>
        </div>
      </h1>
      <p class="tagline">Tell your buddy to repeat his BS!</p>
      <a v-if="!isRecording" href="" @click="startRecording" class="record-button"><i class="fa fa-microphone-alt"></i></a>
      <a v-else href="" @click="stopRecording" class="record-button record-button--recording"><i class="fa fa-microphone-alt"></i></a>
      
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
  // import axios from 'axios'
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
        'setText'
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

        if (text) {
          this.setText(text)

          // create-bet route
          // redirect to bet value page

          // axios
          //   .post('https://sssaini-debug.mybluemix.net/bs', {
          //     text
          //   })
          //   .then((response) => {
          //     console.log(response.data)
          //   })
          //   .catch((err) => {
          //     console.log(err)
          //   })
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

  .record-button
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
