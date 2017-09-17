<template>
  <main class="timer">
    <section class="hero">
      <h1>
        <div class="hero__title">
          <span class="hero--white">BS</span><span class="hero--yellow">Chain</span>
        </div>
      </h1>

      <div v-if="timer" class="timer-clock">{{ msToTime(timer) }}</div>

      <div class="button-helper">You will be redirected once the timer is complete.</div>
    </section>
  </main>
</template>

<script>
export default {
  name: 'Timer',
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
      timer: null // 5 mins in milliseconds
    }
  },
  methods: {
    msToTime (duration) {
      let seconds = parseInt((duration / 1000) % 60)
      let minutes = parseInt((duration / (1000 * 60)) % 60)

      minutes = (minutes < 10) ? '0' + minutes : minutes
      seconds = (seconds < 10) ? '0' + seconds : seconds

      if (parseInt(minutes) < 1) {
        return `${seconds} seconds remaining`
      }

      return `${minutes}:${seconds} remaining`
    },
    subtractTime (timeElapsed) {
      this.timer = (60 * 1000) - timeElapsed
    }
  },
  mounted () {
    const socket = new WebSocket('wss://sssaini-debug.mybluemix.net/public/timer')
    const betId = this.$route.params.bet_id

    socket.onopen = (message) => {
      console.log('Socket open.', message)
    }
    socket.onmessage = (message) => {
      // console.log('Socket server message', message)
      const timeElapsed = parseInt(JSON.parse(message.data).output)
      if (timeElapsed) {
        this.subtractTime(timeElapsed)
      } else {
        this.$router.push('/complete/' + betId)
      }
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

  .hero
    min-height 100vh

  .button-helper
    font-size 1em
    width 100%
    max-width 500px
    margin 1em auto
    line-height 1.5
    color rgba($white, 0.75)

  .timer-clock
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
