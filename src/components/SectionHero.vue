<template>
  <div id="intro" class="section section--intro">
    <!-- <transition name="fade">
      <div class="scroll-hint" v-if="showScrollHint === true">
        <p>Scroll to explore features</p>
        <div class="icon-scroll">

        </div>
      </div>
    </transition> -->

    <div class="frame" id="heroFrame">
      <div class="message" id="heroMessage">
        <h1>Goodbye Cable TV</h1>
        <h2>Hello live sports &amp; TV with&nbsp;fuboTV</h2>
        <p>
          No contract. No hidden fees. <span class="noWrap">Only $44.99/mo.</span>
        </p>

        <button class="btn btn--ghost" v-scroll-to="'#zip'">See your channel lineup</button>
      </div>

      <div class="visual">
        <div class="tv" id="heroTV">
          <video class="video" src="../assets/video2.mp4" playsinline loop muted autoplay></video>
          <img class="device" src="../assets/tv.png" alt="">
        </div>

        <div class="reflection" id="heroReflection">
          <p class="note">fuboTV on an Apple TV</p>
          <img src="../assets/reflection.png" alt="">
        </div>

        <!-- <div class="actions" id="heroAction">
          <button class="btn btn--ghost" v-scroll-to="'#zip'">See your channel lineup</button>
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
  export default {
    
  }
</script>

<style lang="scss" scoped>
@import '../scss/app';

.section {
  &--intro {
    // min-height: auto;
    padding-top: 85px;
    background-color: #14101D;
    @media only screen and (max-width: 710px) {
        padding-top: 125px;
      }

    h1 {
      font-size: 56px;
      line-height: 1;
      

      @media only screen and (max-width: 1024px) {
        font-size: 42px;
        line-height: 52px;
        margin-bottom: -8px;
        font-weight: 800;
      }
      @media only screen and (max-width: 710px) {
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 0;
      }

    }

    .frame {
      overflow: hidden;
    }

    .btn--ghost {
      margin-bottom: 40px;
    }

    .actions {
      // position: absolute;
      // z-index: 500;
      // bottom: 100px;
      // left: 50%;
      // transform: translate(-50%);
      position: relative;
      z-index: 500;
      top: -50px;
      transform: none;
      margin-bottom: 50px;
      margin-top: 0;
      transition: all .15s $ease-in-quad;
      // bottom: 150px;

      @media only screen and (max-width: 1024px) {
        margin-top: -30px;
      }
      @media only screen and (max-width: 710px) {
        margin-top: -30px;
      }
      @media only screen and (max-width: 490px) {
        margin-top: 20px;
      }
    }

    .message {
      margin-bottom: 20px;
      padding: 0 5%;
      
      @media only screen and (max-width: 710px) {
        margin-bottom: 5px;
      }
    }

    .reflection {
      width: 180%;
      height: 150px;
      margin-top: -100px;
        @media only screen and (max-width: 1024px) {
          margin-top: -100px;
          width: 250%;
        }
        @media only screen and (max-width: 710px) {
          margin-top: -100px;
          width: 350%;
        }

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
      max-width: 1200px;
      width: 90%;
      min-width: 450px !important;

      // @media only screen and (max-width: 1024px) {
      //   max-width: 75vh;
      // }
      // @media only screen and (max-width: 710px) {
      //   max-width: 70vh !important;

      // }
      // @media only screen and (max-width: 440px) {
      //   max-width: 100% !important;
      //   min-width: 300px !important;
      // }

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
}
</style>