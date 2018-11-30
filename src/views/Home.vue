<template>
  <div class="home">
    <div id="intro" class="slide slide--intro">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Live Sports & TV
            <br>
            without cable
          </h1>
          <p>
            Want to see what's available in your area?
            <br>
            All we need is your zip code to get started!
          </p>

          <div class="field">
            <input type="text" placeholder="Enter 5-digit zip">
            <div class="icon"></div>
          </div>

          <div class="actions">
            <button v-scroll-to="'#channels'">See available channels</button>
            <span class="or">or</span>
            <router-link to="/features">Explore features</router-link>
            <!-- <a href="#" @click=""></a> -->
          </div>
        </div>
        
        <div class="slide__visual">

        </div>
      </div>

      <div class="video">
        <video class="video__background" src="http://clips.vorwaerts-gmbh.de/big_buck_bunny.mp4" autoplay muted></video>
      </div>
    </div>

    <div id="channels" class="slide slide--channels">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Great news!
          </h1>
          <p>
            <strong>We’ve found up to 100 channels that are available to you!</strong>
            <br>
            <strong>75</strong> for our standard <strong>fubo plan</strong>
            <br>
            <strong>25</strong> additional for <strong>fubo extra</strong>
          </p>

          <div class="actions">
            <button v-scroll-to="'#choice'">Browse all plans</button>
            <span class="or">or</span>
            <a href="#">View available content</a>
          </div>
        </div>

        <div class="slide__visual">
          <h3>Included in <strong>fubo plan</strong></h3>
          <div class="standard">
            <div v-for="n in 75" :key="n" class="channel"></div>
          </div>

          <h3>Additional channels with <strong>fubo Extra</strong></h3>
          <div class="extra">
            <div v-for="n in 20" :key="n" class="channel"></div>
          </div>
        </div>
      </div>
    </div>

    <div id="choice" class="slide slide--choice">
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
    </div>

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

            <div class="plan plan--prepay">
              <h2>fubo Extra + Stuff</h2>
            </div>

            <div class="plan plan--extra">
              <h2>fubo</h2>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'home'
}
</script>

<style lang="scss">
@import '../scss/app';

[type="text"] {
  padding: 10px 20px;
  border: none;
  border-radius: 4px;
  font-size: 18px;
  color: $color-medium-dark;
  background: white;
}

.video {
  position: absolute;
  width: 100%;
  height: 100%;
  overflow: hidden;

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
  &__background {
    height: 100%;
  }
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

    [type="text"] {
      margin-bottom: 10px;
    }
  }

  &__message,
  &__visual {
    width: 50%;
  }

  .field {
    position: relative;
    .icon {
      width: 25px;
      height: 25px;
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
      margin: 0 15px;
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
        position: relative;
        left: 30px;

        h2 {
          background: $color-blue;
          color: white;
        }

        &:after {
          background: $color-blue;
        }
      }

      &:last-child {
        position: relative;
        right: 30px;
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
      width: 50px;
      height: 50px;
      margin: 3px;
      background: white;
    }
  }
}
</style>

