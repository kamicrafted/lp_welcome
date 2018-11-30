<template>
  <div id="home" class="home">
    <div class="scrollprompt">
      Scroll to explore
    </div>

    <div id="intro" class="slide slide--intro">
      <div class="slide__content">
        <div class="message">
          <h1>
            Live TV & Sports
          </h1>
          <h2>
            Like You've Never Seen Before
          </h2>
        </div>
        <div class="tv">
          <!-- <div class="phone">
            <img src="../assets/phone.png" alt="">
          </div>

          <img class="phone-shadow" src="../assets/phone-shadow.png" alt="">

          <div class="tablet">
            <video class="tablet-video" src="https://preview-mp4.fubo.tv/fs1.mp4" autoplay muted loop></video>
            <img src="../assets/tablet.png" alt="">
          </div>
          
          <img class="tablet-shadow" src="../assets/tablet-shadow.png" alt=""> -->

          <div class="tv-bg">
            <video class="video" src="http://client.kamicrafted.com/fubo/assets/videos/welcome-tvos.mp4" autoplay muted loop></video>

            <!-- <video class="video" src="https://preview-mp4.fubo.tv/fs1.mp4" autoplay muted loop></video> -->

            <img class="scissors" src="../assets/scissors.png" alt="">

            <img src="../assets/tv.jpg" alt="">
            <img class="glow" src="../assets/glow.png" alt="">
          </div>
        </div>

        <div class="actions">
          <button v-scroll-to="'#zip'">See available channels</button>
          <span class="or">or</span>
          <router-link to="/features">Explore features</router-link>
          <!-- <a href="#" @click=""></a> -->
        </div>
      </div>
    </div>

    <div id="zip" class="slide slide--zip">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Where are you located?
          </h1>
          <p>
            We'll fetch all available channels based on your zip code.
          </p>

          <div class="field">
            <input type="text" placeholder="Enter 5-digit zip" @keyup.enter="goto('#channels')">
            <div class="icon"></div>
            <button v-scroll-to="'#channels'">Show available channels</button>
          </div>
        </div>
        
        <div class="slide__visual">

        </div>
      </div>

      <!-- <div class="video-bg">
        <video class="video-object" src="http://client.kamicrafted.com/fubo/assets/videos/particles.mp4" autoplay muted loop></video>
      </div> -->
    </div>

    <div id="channels" class="slide slide--channels">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Great news!
          </h1>
          <p>
            <strong>We’ve found up to 100 channels that are available to you!</strong>
          </p>

          <div class="actions">
            <button v-scroll-to="'#plans'">Browse all plans</button>
            <span class="or">or</span>
            <a href="#">View available content</a>
          </div>
        </div>

        <div class="slide__visual">
          <h3><strong>75 Channels</strong> included in <strong>fubo plan</strong></h3>
          <div class="standard">
            <div v-for="n in 75" :key="n" class="channel"><img src="https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/tnt_m.png?w=0.1&h=0.1&ch=Width&auto=format,compress&dpr=2" alt=""></div>
          </div>

          <h3><strong>25 Additional channels</strong> with <strong>fubo Extra</strong></h3>
          <div class="extra">
            <div v-for="n in 20" :key="n" class="channel"><img src="https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/tnt_m.png?w=0.1&h=0.1&ch=Width&auto=format,compress&dpr=2" alt=""></div>
          </div>
        </div>
      </div>
    </div>

    <!-- <div id="choice" class="slide slide--choice">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            What type of plan
            <br>
            are you looking for?
          </h1>
          
          <div class="choices">
            <button v-scroll-to="'#plans'">Plans that have a free trial</button>
            <button v-scroll-to="'#plans'">Plans with the most savings</button>
          </div>
        </div>
      </div>
    </div> -->

    <div id="plans" class="slide slide--plans">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Select a Plan
          </h1>
          
          <div class="plans">
            <div class="plan plan--fubo">
              <h2>fubo</h2>
            </div>

            <!-- <div class="plan plan--prepay">
              <h2>fubo Extra + Stuff</h2>
            </div> -->

            <div class="plan plan--extra" v-scroll-to="'#promos'">
              <h2>fubo Extra</h2>
            </div>
          </div>
        </div>
      </div>
    </div>

    <div id="promos" class="slide slide--promos slide--center">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Special Offer
          </h1>

          <h2>Pay 2 months up front to enjoy massive saving!</h2>
          
          <div class="offer">
            <h3 class="title">
              fubo Extra + Showtime + Cloud DVR + Family Share
            </h3>
            <p>
              Promotion details
            </p>
            <ul>
              <li>Promo feature</li>
              <li>Promo feature</li>
              <li>Promo feature</li>
              <li>Promo feature</li>
            </ul>
          </div>
        </div>

        <div class="actions">
          <a href="#">No thanks</a>
          <div class="or"></div>
          <button v-scroll-to="'#plans'">Select offer</button>
        </div>
      </div>
    </div>

    <vue-particles
      color="#4e00dc"
      :particleOpacity="0.6"
      :particlesNumber="120"
      shapeType="circle"
      :particleSize="2"
      linesColor="transparent"
      :lineLinked="false"
      :moveSpeed="1"
      :hoverEffect="false"
      hoverMode="grab"
      :clickEffect="false"
      clickMode="push"
    >
    </vue-particles>
  </div>
</template>

<script>

export default {
  name: 'home',
  methods: {
    goto (target) {
      // this.$scrollTo(target, 500, options)
    }
  }
}
</script>

<style lang="scss">
@import '../scss/app';

#particles-js {
  position: absolute;
  z-index: 10;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  pointer-events: none;
}

#home {
  position: relative;
  
  .scrollprompt {
    position: absolute;
    z-index: 50;
  }
}

[type="text"] {
  padding: 10px 20px;
  border: none;
  border-radius: 2px;
  font-size: 18px;
  color: $color-medium-dark;
  background: white;
}

.slide {
  display: flex;
  align-items: center;
  justify-content: center;

  &__content {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    width: 100%;
    padding: 0 100px;

    p {
      font-size: 20px;
    }
  }

  &__message,
  &__visual {
    width: 50%;
  }

  .field {
    position: relative;
    display: flex;
    align-items: center;

    .icon {
      position: absolute;
      width: 25px;
      height: 25px;
    }

    input {
      margin: 0;
      max-width: 150px;
      margin-right: 5px;
    }

    button {
      flex: 0 1 auto;
      font-size: 14px;
      padding: 13px 10px;
      margin: 0;

      &:hover {
        transform: scale(1);
      }
    }
  }

  .actions {
    display: flex;
    align-items: center;

    a {
      display: inline-block;
      font-weight: 700;
    }

    .or {
      font-weight: 700;
      font-size: 14px;
      opacity: .6;
      text-transform: uppercase;
      margin: 0 15px;
    }
  }

  &--intro {
    position: relative;
    overflow: hidden;
    background: $color-site-bg;
    min-height: 1150px;

    h1 {
      font-size: 49px;
    }

    h2 {
      font-size: 26px;
      text-transform: uppercase;
      margin: 0;
    }

    button {
      text-transform: uppercase;
      background: transparent;
      border: 2px solid white;
      padding: 14px 28px;
      font-size: 14px;
      cursor: pointer;

      &:hover {
        border: 2px solid $color-orange;
        transform: scale(1.025);
      }
    }

    a {
      position: relative;
      text-transform: uppercase;
      text-decoration: none;
      letter-spacing: .05em;
      font-size: 14px;
      
      &:after {
        content: '';
        position: absolute;
        bottom: -5px;
        left: 50%;
        width: 0;
        height: 2px;
        background: $color-orange;
        opacity: 0;
        transform: translateX(-50%);
        transition: all .15s $ease-out-quad;
      }

      &:hover {
        &:after {
          opacity: 1;
          width: 100%;
        }
      }
    }

    .slide__content {
      position: relative;
      z-index: 10;
      height: 100%;
      text-align: center;
      flex-direction: column;
    }

    .tv {
      position: absolute;
      z-index: 0;
      top: 100px;
      left: 50%;
      height: 100%;
      margin-top: -60px;
      transform: translateX(-50%);

      .tv-bg {
        transform: scale(1.25)
      }

      .glow {
        margin-top: -50px;
      }

      img {
        display: block;
      }

      .video {
        position: absolute;
        top: 289px;
        left: 50%;
        width: 800px;
        transform: translateX(-50.12%);
      }

      .glow {
        position: absolute;
        bottom: 0;
        animation: flicker 10s infinite;
      }

      .phone {
        position: absolute;
        z-index: 50;
        top: 40%;
        left: 11%;
        width: 160px;
        animation: floatPhone 19s infinite;

        img {
          display: block;
          width: 100%;
          transform: rotate(-20deg);
        }

        &-shadow {
          position: absolute;
          z-index: 50;
          top: 70%;
          left: 16%;
          width: 190px;
          opacity: .5;
        }
      }

      .tablet {
        position: absolute;
        z-index: 50;
        top: 50%;
        right: 3%;
        width: 320px;
        perspective: 1000px;
        animation: floatTablet 20s infinite;

        img {
          display: block;
          width: 100%;
        }

        &-shadow {
          position: absolute;
          z-index: 50;
          top: 70%;
          right: 6%;
          width: 300px;
          animation: floatShadow 20s infinite;
        }

        &-video {
          position: absolute;
          height: 200px;
          transform: rotateZ(-31deg) rotateY(34deg) rotateX(26deg) rotate(14deg) scaleX(.65);
          left: -12px;
          top: -1px;
        }
      }

      .scissors {
        position: absolute;
        width: 300px;
        left: 90px;
        top: 640px;
      }
    }

    .actions {
      position: relative;
      flex-direction: column;
      margin-top: 750px;

      .or {
        margin: 20px 0;
      }
    }

    .message {
      position: relative;
      z-index: 100;
      margin-top: 70px;
    }
  }

  &--zip {
    .slide__message {
      max-width: 500px;
    }
    .actions {
      margin-top: 0;
    }

    .video-bg {
      position: absolute;
      width: 100%;
      height: 100%;
      overflow: hidden;
      background: #2b105c;

      &:before {
        content: '';
        position: absolute;
        z-index: 1;
        top: 0;
        left: 0;
        width: 60%;
        height: 100%;
        background: linear-gradient(to right, rgba(black, .75), rgba(black, 0));
      }
      
      .video-object {
        height: 100%;
        mix-blend-mode: color-dodge;
      }
    }
  }

  &--choice {
    text-align: center;

    h1 {
      margin: 0 auto;
      margin-bottom: 50px;
    }

    .slide__message {
      width: 100%;
    }

    .choices {
      button {
        margin: 0 10px;
        background: transparent;
        box-shadow: 0 0 0 2px $color-light-sand;
        border: none;

        &:hover {
          background: $color-orange;
          box-shadow: 0 0 0 2px $color-orange;
        }
      }
    }
  }

  &--plans {
    h1 {
      font-size: 28px;
      margin-bottom: 20px;
    }

    h2 {
      color: $color-medium-dark;
      text-align: center;
      font-size: 18px;
      margin: 0;
      padding: 20px 0;
      background: $color-light-sand;
      border-radius: 6px 6px 0 0;
    }

    .slide__message {
      width: 100%;
    }

    h1,
    p {
      text-align: center;
    }

    .plans {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .plan {
      position: relative;
      width: 340px;
      height: 440px;
      background: white;
      box-shadow: 0 15px 35px rgba(black, .25);
      border-radius: 8px;
      margin: 0 10px;
      transition: all .15s $ease-out-quad;

      &:hover {
        transform: scale(1.05);
        box-shadow: 0 25px 45px -10px rgba(black, .5);
      }

      &:after {
        content: '';
        position: absolute;
        bottom: -25px;
        left: 50%;
        transform: translateX(-50%);
        width: 50px;
        height: 50px;
        background: $color-light-sand;
        border: 3px solid white;
        border-radius: 100%;
      }

      &--prepay {
        height: 550px;
        z-index: 10;
      }

      &:first-child {
        // position: relative;
        // left: 30px;

        h2 {
          background: $color-blue;
          color: white;
        }

        &:after {
          background: $color-blue;
        }
      }

      &:last-child {
        // position: relative;
        // right: 30px;
      }
    }
  }

  &--channels {
    h3 {
      font-weight: 500;
    }

    .standard,
    .extra {
      display: flex;
      flex-wrap: wrap;
    }

    .channel {
      width: 40px;
      height: 40px;
      margin: 5px;

      img {
        width: 100%;
      }
    }
  }

  &--promos {
    .slide__message {
      width: 100% !important;
    }

    .offer {
      width: 500px;
      margin: 0 auto;
      margin-top: 50px;
      background: white;
      border-radius: 4px;
      box-shadow: 0 20px 40px rgba(black, .5);
    }

    .title {
      text-align: center;
      padding: 15px;
      background: $color-blue;
      border-radius: 4px 4px 0 0;
    }

    p {
      color: $color-medium-dark;
      padding: 15px 0 !important;
    }

    ul {
      color: $color-medium-dark;

      > li {
        margin: 10px 0;

        &:last-child {
          padding-bottom: 40px;
        }
      }
    }
  }
}

@keyframes flicker {
  0%   { opacity:1; }
  25%   { opacity:.3; }
  50%  { opacity:.1; }
  75%  { opacity:.6; }
  85%  { opacity:.3; }
  100% { opacity:1; }
}

@keyframes floatPhone {
  0%   { top: 30%; transform: rotate(0deg); }
  10%   { top: 32%; transform: rotate(3deg); }
  30%   { top: 28%; transform: rotate(1deg); }
  50%   { top: 29%; transform: rotate(2deg); }
  70%   { top: 31%; transform: rotate(-1deg); }
  100%   { top: 30%; transform: rotate(0deg); }
}

@keyframes floatTablet {
  0%   { top: 50%; transform: rotate(0deg); }
  10%   { top: 52%; transform: rotate(-1deg); }
  30%   { top: 48%; transform: rotate(2deg); }
  50%   { top: 49%; transform: rotate(1deg); }
  70%   { top: 51%; transform: rotate(-1deg); }
  100%   { top: 50%; transform: rotate(0deg); }
}

@keyframes floatShadow {
  0%   { top: 70%; transform: scale(1) opacity(1); }
  10%   { top: 71%; transform: scale(.8) opacity(.5); }
  30%   { top: 69%; transform: scale(1.2) opacity(.7); }
  50%   { top: 70%; transform: scale(1.1) opacity(.6); }
  70%   { top: 69%; transform: scale(1.2) opacity(.7); }
  100%   { top: 70%; transform: scale(1) opacity(1); }
}
</style>

