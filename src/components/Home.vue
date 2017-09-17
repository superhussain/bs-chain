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
        <h3>Inspiration</h3>
        <p>We started off with a medical application to be put on blockchain but came across a much more fun, much more crazy idea! What is this winning idea you ask? Let me explain. We know a lot of people that love to b.s. casually, so we wanted to build an app to hold them accountable. Thus BS Chain was born! BS Chain allows individuals to put their money where their mouth is, get rewarded in return and shame those who deserve it.</p>

        <p>Hosted at: <a href="http://bs-chain.com">bs-chain.com</a></p>
        <p><em>"Lose more than just respect."</em></p>

        <h3>What it does</h3>
        <p>The web app allows a user to login with their Coinbase credentials, record their friend's BS arguments. The argument is recorded on the blockchain and a betting round is opened. Nearby friends can chime in and bet on the validity of the BS using an invite link. The fact is validated and the winning parties are rewarded with a handsome payout.</p>

        <h3>How we built it</h3>
        <p><strong>Sukhpal</strong></p>
        <p>I worked on the back end of the project creating the required endpoints and track the user data. I also worked with IBM Hyperledger to include blockchain technology.</p>

        <p><strong>Hussain</strong></p>
        <p>I worked on the front-end of BS Chain. The sexy design you see in front of you is only made possible by yours truly. I used a Nodejs and Express backend for serving the client side Vue.js application. State of the application is handled using Vuex, a Flux based philosophy of managing application state. I also through the app on a t2.micro AWS instance and pointed the domain's A records to the webserver. Speech to text was also implemented using the new web Speech Recognition API.</p>

        <h3>Challenges we ran into</h3>
        <ol>
          <li>Right of the bat, we found out on the Saturday morning that IBM Hyperledger had discontinued their Free Plan for Blockchain. After having to wrestle and deploy the required containers for ourselves, we finally got it up and running.</li>
          <li>Worked with SQL database like CockroachDB only once before. Setting it up reminded me of why I didn't like it initially.</li>
          <li>We also came across a few different bugs when working with the Coinbase merchant profile. After talking with the representatives from Coinbase, we were able to work our way through these challenges and successfully implement their API.</li>
          <li>The new Web Speech Recognition API doesn't have many examples around the web so it was tough to know if things were setup correctly, but after a bit of tinkering, the speech to text accuracy turned out to be pretty fantastic!!</li>
        </ol>

        <h3>Accomplishments that I'm proud of</h3>
        <ol>
          <li>We got it done!</li>
          <li>Actually got CoinBase working after initially running into bugs like, "Please fill out Merchant Profile" even though there was nothing left to fill out.</li>
          <li>The sheer number of different views and states to manage for different kinds of users, using a client-side only implementation. </li>
        </ol>

        <h3>What we learned</h3>
        <ol>
          <li>Always keep the idea small because during the weekend it will snowball and become huuuugely difficult to accomplish.</li>
          <li>Front-end design is noooot easy.</li>
          <li>The Web Speech Recognition API is freaking amazing!!</li>
        </ol>

        <h3>What's next for BS Chain</h3>
        <p>We are trying to extend it to support:</p>
        <ol>
          <li>More parallel bet sessions</li>
          <li>Ratio based payout system</li>
          <li>Add public viewing system (people that can watch but do not want to bet)</li>
          <li>Crowd sourced fact collection</li>
          <li>Rolling out our own ICO (BS Coin!)</li>
        </ol>
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

  a
    text-decoration none

  h1
    margin 0

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
    p, ol, li, em
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
