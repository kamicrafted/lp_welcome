<template>
  <div id="home" class="home">
    
    
    <div id="intro" class="section section--intro">
      <div class="scroll-hint">
        <p>Scroll to explore features</p>
        <div class="icon-scroll">

        </div>
      </div>

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
            <video class="video" src="http://client.kamicrafted.com/fubo/assets/videos/welcome-tvos.mp4" autoplay muted loop></video>
            <img class="device" src="../assets/tv.png" alt="">
          </div>
        </div>
      </div>

      <div class="reflection">
        <img src="../assets/reflection.png" alt="">
      </div>

      <div class="actions">
        <span class="check-channels" v-scroll-to="'#zip'">Check channels in your area</span>
      </div>
    </div>

    <div id="benefits" class="section section--benefits">
      <div class="frame">
        <div class="message">
          <h1>More Premium Features For Free</h1> 
          <h2>More Money In Your Pocket</h2>
        </div>
      </div>
    </div>

    <div id="zip" class="section section--zip">
      zip
    </div>
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

.section {
  position: relative;
  display: flex;
  justify-content: center;
  padding-top: 120px;
  min-height: 100vh;

  .actions {
    position: absolute;
    z-index: 500;
    bottom: 5%;
    left: 50%;
    transform: translate(-50%);
  }

  .message {
    position: relative;
    z-index: 50;
    margin-bottom: 30px;
    text-align: center;
    
    h1 {
      font-size: 52px;
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

  &--intro {
    background-color: #14101D;

    .actions {
      bottom: 0;

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

    .frame {
      position: relative;
      z-index: 100;
      display: flex;
      flex-direction: column;
    }

    .visual {
      display: flex;
      align-items: center;
      justify-content: center;
    }

    .reflection {
      position: absolute;
      z-index: 1;
      top: 98%;
      width: 180%;
      max-height: 200px;
      left: 50%;
      overflow: hidden;
      transform: translateX(-50%);

      > img {
        display: block;
        width: 100%;
      }
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
    background: #7278DB;
  }

  &--zip {
    background: #213FB7;
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

