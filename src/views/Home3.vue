<template>
  <div id="home" class="home">
    
    
    <div id="intro" class="section section--intro">
      <transition name="fade">
        <div class="scroll-hint" v-if="showScrollHint === true">
          <p>Scroll to explore features</p>
          <div class="icon-scroll">

          </div>
        </div>
      </transition>

      <div class="frame">
        <div class="message">
          <h1>Live TV & Sports</h1>
          <h2>Like you've never seen before</h2>
          <p>
            No contracts. Plans starting at $39.99/mo. Cancel anytime.
          </p>
        </div>

        <div class="visual">
          <div class="tv">
            <video class="video" src="../assets/video.mp4" autoplay muted loop></video>
            <img class="device" src="../assets/tv.png" alt="">
          </div>

          <div class="reflection">
            <img src="../assets/reflection.png" alt="">
          </div>

          <div class="actions">
            <button class="btn btn--ghost" v-scroll-to="'#zip'">Check channels in your area</button>
          </div>
        </div>
      </div>
    </div>

    <div id="zip" class="section section--zip">
      <div class="message">
        <h1>
          109 channels
          <span>available in</span>
          New York City.
        </h1>

        <div class="zip-update">
          <p>Based on your zip code of 10013</p>
          <a href="">Not your zip?</a>
        </div>

        <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
      </div>

      <div class="options">
        <div class="option">
          <div class="header">
            <h3>fubo <span>90 channels</span></h3>

            <div class="detail">
              <div class="price">
                <span class="currency">$</span>
                <div class="dollars">39</div>
                <div class="cents">99</div>
              </div>
              <div class="first-month">
                for first month
                <br>
                <em>($44.99 after)</em>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="item" v-for="n in 72" v-bind:key="n">
              <img class="logo" :src="require('@/assets/networks/logo' + n + '.png')" alt="">
            </div>
          </div>
        </div>

        <div class="option">
          <div class="header">
            <h3>fubo Extra <span>109 Channels (fubo + 19 more)</span></h3>

            <div class="detail">
              <div class="price">
                <span class="currency">$</span>
                <div class="dollars">44</div>
                <div class="cents">99</div>
              </div>
              <div class="first-month">
                for first month
                <br>
                <em>($44.99 after)</em>
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="item" v-for="n in range(73,90)" v-bind:key="n">
              <img class="logo" :src="require('@/assets/networks/logo' + n + '.png')" alt="">
            </div>

            <!-- <div class="item item--label">
              <h3>
                All channels in fubo<br>
                +
              </h3>
            </div> -->
          </div>
        </div>

        <div class="option option--premium">
          <h3>Add-on channels</h3>
          <div class="logos">
            <!-- <div class="item" v-for="n in 6" v-bind:key="n">
              <img class="logo" :src="require('@/assets/networks/logo' + n + '.png')" alt="">
            </div> -->

            <div class="item">
              <img :src="require('@/assets/networks/logo42.png')" alt="" class="logo">
            </div>

            <div class="item">
              <img :src="require('@/assets/networks/logo55.png')" alt="" class="logo">
            </div>

            <div class="item">
              <img :src="require('@/assets/networks/logo50.png')" alt="" class="logo">
            </div>
            
            <div class="item">
              <img :src="require('@/assets/networks/logo35.png')" alt="" class="logo">
            </div>

            <div class="item">
              <img :src="require('@/assets/networks/logo91.png')" alt="" class="logo">
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="benefits" class="section section--benefits">
      <div class="frame">
        <div class="message">
          <h1>
            More Premium Features For Free
            <br>
            More Money In Your Pocket
          </h1> 
          <p>Everything you love about cable, with none of the nonsense.</p>
        </div>

        <div class="features">
          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-save.svg" alt="">
            </div>
            <h3>Unbelievable savings</h3>
            <p>
              No long term contracts. No hidden fees. Save money over cable while keeping your favorite live sports, news and shows.
            </p>
          </div>

          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-4k.svg" alt="">
            </div>
            <h3>Leader in <strong>4K Live TV</strong></h3>
            <p>
              The first streaming service with live 4K games from College Football, English Premier League and Major League Baseball
            </p>
          </div>

          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-clouddvr.svg" alt="">
            </div>
            <h3>Cloud DVR included free</h3>
            <p>
              Get 30 hours of Cloud DVR space for free. Record what you love and watch from anywhere.
            </p>
          </div>
        </div>

        <div class="actions">
          <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
        </div>
      </div>
    </div>

    <div id="livenow" class="section section--livenow">
      <div class="message">
        <h1>LIVE NOW ON FUBO<sup>TV</sup></h1>
        <p>
          The perfect mix of sports and entertainment. Live and on demand.
        </p>
      </div>

      <Segments />

      <Carousel />

      <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
    </div>

    <div id="devices" class="section section--devices">
      <div class="message">
        <h1>
          LIVE TV. <br>
          WHEREVER, <br>
          WHENEVER.
        </h1>
        <p>
          Enjoy your favorite teams and shows on all of your screens.
        </p>

        <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
      </div>

      <div class="visual">
        <img src="../assets/devices.png" alt="">
      </div>
    </div>
    
    <div id="quote" class="section section--quote">
      <div class="message">
        <h3>
          <img class="quote-open" src="../assets/quote-open.svg" alt="">
          fuboTV offers an impressive lineup of 75+ sports and entertainment channels, multiplatform support, and dead-simple DVR functionality.
          <img class="quote-close" src="../assets/quote-close.svg" alt="">
        </h3>

        <p>
          -PC Magazine, 2018
        </p>

        <button class="btn btn--cta" v-scroll-to="'#zip'">Start your free trial</button>

        <p class="details">
          No contracts. Plans starting at $39.99/mo.
          <br>
          Cancel anytime.
        </p>
      </div>
    </div>

    <div id="faq" class="section section--faq">
      <div class="message">
        <h1>
          Frequently Asked questions
        </h1>
      </div>

      <div class="questions">
        <div class="question question--what">
          <h3>What is fuboTV? What do I need to get started?</h3>
          <p>
            fuboTV is a service that broadcasts live TV to your computer, phone or connected TV device (Roku, AppleTV, FireTV). No contracts or cable required. Watch your favorite teams, network shows, news and movies on 100+ channels. All you need is an internet connection with a minimum connection speed of at least 5Mb/s
          </p>
        </div>

        <div class="question question--entertainment">
          <h3>Does fuboTV have entertainment channels like FOX, CBS and NBC?</h3>
          <p>
            Yes, fuboTV has FOX*, CBS*, NBC*, Regional Sports Networks* as well as AMC, CNN, FOX News, MSNBC, beIN, Univision, FX, HGTV, SYFY, USA, Bravo, A&E, Food Network, E!, National Geographic, and History Channel among 100+ other channels. *Regional restrictions apply.
          </p>
        </div>

        <div class="question question--record">
          <h3>Can I record games & shows?</h3>
          <p>
            Yes, every fuboTV account includes 30 hours of Cloud DVR space at no extra charge so you can record your favorite programs. You can hit record from one device, then start watching on another, and finish in another.
          </p>
        </div>

        <div class="question question--contract">
          <h3>Do I have to sign a contract? How can I cancel?</h3>
          <p>
            Unlike Cable, fuboTV does not have contracts. You can cancel anytime. There are no fees for cancelling or equipment to return as fuboTV is streamed through the internet.
          </p>
        </div>

        <div class="question question--cost">
          <h3>How much does fuboTV cost? Is there a free trial?</h3>
          <p>
            All new users receive 7 days of free access to fuboTV (unless you opt into a discounted prepay promotional plan). After your trial has ended, your card will be charged a  discounted rate for your first month. Prices vary based on package and selected add-ons.
          </p>
        </div>

        <div class="question question--devices">
          <h3>What devices can I watch fuboTV on?</h3>
          <p>
            You can watch fuboTV on your
          </p>

          <ul>
            <li>
              Your desktop or laptop computer
            </li>
            <li>
              Apple iPhone and iPad
            </li>
            <li>
              Android phone and tablet
            </li>
            <li>
              Roku
            </li>
            <li>
              Amazon FireTV
            </li>
            <li>
              Apple TV
            </li>
            <li>
              Chromecast
            </li>
            <li>
              More devices coming soon
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

beforeMount() {
  document.body.addEventListener('scroll', this.handleScroll);
  console.log('scrolling Injected');
},
beforeDestroy() {
  document.body.removeEventListener('scroll', this.handleScroll);
  console.log('scrolling Destroyed');
},
methods: {
  handleScroll: function(e){
      console.log('scrolling...');
  }
} 

<script>
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Segments from '../components/Segments'

export default {
  name: 'home',
  data () {
    return {
      showScrollHint: true,
      networks: [
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        }
      ]
    }
  },
  components: {
    Segments,
    Carousel,
    Footer
  },
  methods: {
    scrollHandler (e) {
      if (window.scrollY > 50) {
        this.showScrollHint = false
        this.$emit('header-mode', 'opaque')
      } else {
        this.showScrollHint = true
        this.$emit('header-mode', 'transparent')
      }
      // console.log('scrolling...' + window.scrollY)
    }
    // goto (target) {
      // this.$scrollTo(target, 500, options)
    // }
  },
  mounted () {
    window.addEventListener('scroll', this.scrollHandler)
    // console.log('listening for scroll')
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
    // console.log('stopped listening')
  }
}
</script>

<style lang="scss">
@import '../scss/app';

#home {
  position: relative;
  height: 100vh;
}

.scroll-hint {
  position: fixed;
  bottom: 50px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 3px 20px rgba(black, .6);
  z-index: 1000;

  p {
    animation: pulse-animation 2s infinite $ease-in-out-quad;
  }
}

.message {
  position: relative;
  z-index: 50;
  text-align: center;

  h1 {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
  }

  h2 {
    font-size: 32px !important;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
  }
}

.frame {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.section {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 100vh;

  &--intro {
    min-height: auto;
    padding-top: 120px;
    background-color: #14101D;

    h1 {
      font-size: 62px;
      margin-bottom: -16px;
    }

    .frame {
      overflow: hidden;
    }

    .actions {
      position: absolute;
      z-index: 500;
      bottom: 100px;
      left: 50%;
      transform: translate(-50%);

      .check-channels {
        padding: 20px 40px;
        border-radius: 4px;
        border: 2px solid white;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        transition: all .15s $ease-out-quad;

        &:hover {
          background: white;
          color: $color-site-bg;
        }
      }
    }

    .message{
      margin-bottom: 30px;
    }

    .reflection {
      width: 180%;
      max-height: 250px;
      margin-top: -100px;
      overflow: hidden;

      > img {
        display: block;
        width: 100%;
      }
    }

    .visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .tv {
      position: relative;
      margin: 0 auto;
      max-width: 1600px;
      width: 90%;

      &:after {
        content: "";
        position: absolute;
        width: 92%;
        height: 80%;
        left: 50%;
        top: 50%;
        box-shadow: 0 0 120px #171F60, 0 0 180px 10px #2e3cb6;
        transform: translateX(-50%) translateY(-60%);
      }
      
      .device {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
      }

      .video {
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 50%;
        width: 94%;
        transform: translateX(-50%) translateY(-58%);
      }
    }
  }

  &--benefits {
    position: relative;
    align-items: center;
    justify-content: center;
    background: $gradient-blue-purple-light;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-benefits.jpg');
      background-size: cover;
      mix-blend-mode: overlay;
      opacity: .3;
    }


    .features {
      display: flex;
      padding-top: 50px;

      h3 {
        font-size: 21px;
        color: #FFF680;
      }
    }

    .features-item {
      max-width: 360px;
      padding: 0 20px;
      text-align: center;

      img {
        margin-bottom: 20px;
      }
    }

    .actions {
      margin: 0 auto;
      margin-top: 50px;
    }

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;
    }
  }

  &--livenow {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: $gradient-blue-purple-dark;
    overflow: hidden;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      background-image: url('../assets/bg-live-shows.jpg');
      mix-blend-mode: multiply;
      opacity: .8;
    }

    .message,
    .segments,
    .carousel {
      position: relative;
      z-index: 10;
    }

    .message {
      sup {
        position: relative;
        font-size: 18px;  
        top: -4px;
      }
    }

    .btn {
      position: relative;
      z-index: 10;
      margin-top: 100px;
    }
  }

  &--devices {
    align-items: center;
    justify-content: center;
    background: $gradient-orange-purple;
    overflow: hidden;
    padding-left: 50px;
    
    .message {
      text-align: left;
    }

    .visual {
      position: relative;
      right: -10%;
      max-width: 1600px;

      img {
        display: block;
        width: 100%;
      }
    }
  }

  &--zip {
    position: relative;
    align-items: center;
    justify-content: space-between;
    padding: 50px;
    background: $color-site-bg;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-zip.jpg');
      background-size: cover;
      mix-blend-mode: screen;
    }

    .message {
      position: relative;
      z-index: 10;
      text-align: left;
      max-width: 400px;

      h1 {
        line-height: 45px;
      }

      span {
        display: block;
        font-size: 20px;
        opacity: .6;
      }
    }

    .zip-update {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0 0;
      font-weight: 700;

      p {
        margin: 0;
      }

      a {
        color: $color-blue;
      }
    }

    .btn {
      margin-top: 50px;
    }

    .options {
      position: relative;
      z-index: 10;
      width: calc(100% - 450px);

      .option {
        &:first-child {
          margin-bottom: 50px;
        }

        &--premium {
          display: flex;
          align-items: center;
          justify-content: space-between;
          width: 100%;
          margin-top: 50px;

          h3 {
            margin-right: auto;
          }

          .logos {
            display: flex;
          }

          .item {
            margin-left: 40px;
            transform: scale(2.5);

            &:hover {
              z-index: 50;
              transform: scale(3);
              background: $color-site-bg;
              box-shadow: 0 5px 10px rgba(black, .8);
              border-radius: 2px;
            }
          }
        }
      }
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 15px;
      border-radius: 6px 6px 0 0;
      background: $color-blue;

      h3 {
        font-weight: 700;
        font-size: 24px;
      }

      span {
        font-weight: normal;
      }
    }

    .detail {
      display: flex;
      align-items: center;

      .price {
        display: flex;
        position: relative;
        margin-right: 10px;
      }

      .currency {
        position: relative;
        top: 8px;
        right: 3px;
        font-weight: 700;
      }
      
      .dollars {
        font-size: 50px;
        font-weight: 700;
        margin: 0;
      }

      .cents {
        position: relative;
        top: 8px;
        font-weight: 700;
        font-size: 20px;
      }
    }

    .first-month {
      font-weight: 500;
      em {
        opacity: .8;
        font-style: normal;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
      justify-content: start;
      gap: 30px 30px;
      padding: 20px;
      border: 3px solid rgba($color-blue, .5);
      border-top: 0;
      border-radius: 0 0 6px 6px;
    }

    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 50px;
      height: auto;
      transform: scale(2);
      transition: all .15s $ease-out-quad;
      overflow: hidden;

      &:hover {
        z-index: 50;
        transform: scale(3);
        background: $color-site-bg;
        box-shadow: 0 5px 10px rgba(black, .8);
        border-radius: 2px;
      }

      &--label {
        width: auto;
        transform: none;
      }

      .logo {
        // display: block;
        width: 100%;
      }
    }
  }

  &--quote {
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 50px 0;
    background: $gradient-blue-purple-dark;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-devices.png');
      mix-blend-mode: overlay;
      opacity: .4;
    }

    h3 {
      font-size: 26px;
      max-width: 600px;

      > img {
        display: inline-block;
        padding: 0 10px;
        opacity: .7;
      }
    }

    button {
      margin-bottom: 50px;
    }

    .details {
      font-size: 16px;
    }
  }

  &--faq {
    align-items: center;
    justify-content: center;
    flex-direction: column;

    h1 {
      margin-bottom: 50px;
    }

    p {
      opacity: .9;
    }

    a {
      color: $color-blue-light;
    }

    .questions {
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;

      ul {
        padding: 0 0 0 20px;
      }
    }

    .question {
      width: calc(100% / 3 - 40px);
      padding: 20px;
    }
  }
}

.icon-scroll {
  position: relative;
  width: 18px;
  height: 32px;
  margin: 0 auto;
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(black, .4);
  animation: scroll-animation 2s infinite $ease-in-out-quad;
  animation-delay: .25s;
  
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 2px;
    height: 4px;
    background: white;
    box-shadow: 0 3px 10px rgba(black, .4);
    transform: translateX(-50%);
    animation: nib-animation 2s infinite $ease-in-out-quad;
  }
}

@keyframes flicker {
  0%   { opacity:1; }
  25%  { opacity:.3; }
  50%  { opacity:.1; }
  75%  { opacity:.6; }
  85%  { opacity:.3; }
  100% { opacity:1; }
}

@keyframes scroll-animation {
  0%, 100% {
    top: 0;
  }
  20% {
    top: 20px;
  }
  50% {
    top: 0;
  }
}

@keyframes nib-animation {
  0%, 100% {
    top: 8px;
  }
  20% {
    top: 16px;
  }
  50% {
    top: 8px;
  }
}

@keyframes pulse-animation {
  0%, 100% {
    opacity: .4;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: .4;
  }
}
</style>

