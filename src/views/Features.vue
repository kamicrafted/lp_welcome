<template>
  <div class="features">
    <div class="slide" style="background-image: url(https://www.extremetech.com/wp-content/uploads/2015/12/Editorial_Image_1201.jpg); background-size: cover; background-position: center center;">
      <video class="feature-video" src="https://preview-mp4.fubo.tv/fs1.mp4" autoplay muted loop></video>

      <div class="slide__content">
        <div class="slide__message">
          <h1>
            Low Latency. Clear Picture. 4K Quality*.
          </h1>
          <p>
            Who says you can't have it all?
          </p>

          <div class="actions">
            <router-link tag="button" to="/#zip">
              Join now
            </router-link>
            <span class="or">or</span>
            <a href="" v-scroll-to="'#preview'">Check out the content lineup</a>
          </div>

          <br>

          <small>* Requires a 4K compatible device</small>
        </div>
      </div>
    </div>

    <div id="preview" class="slide slide--center slide--preview">
      <div class="slide__content">
        <div class="slide__message">
          <h1>
            SEXY CONTENT STUFF – SPORTS, MOVIES, SHOWS
          </h1>
          <p>
            SO MUCH SEXY.
          </p>

          <div class="actions">
            <router-link tag="button" to="/#zip">
              Join now
            </router-link>
          </div>
        </div>

        <div class="slide__visual">
          <div class="player">

          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'features'
}
</script>

<style lang="scss">
@import '../scss/app';

.features {
  height: 100%;
  
  .slide {
    perspective: 1540px;
  }

  .feature-video {
    position: absolute;
    transform: perspective(10000px) rotateY(-50deg) scale(2.15) scaleX(0.838) scaleY(0.97) scale(1.12) skewY(1deg) skewX(1deg) rotate(0.7deg);
    left: 759px;
    top: 322px;
  }

  .slide__message {
    max-width: 450px;
  }
}

.player {
  width: 850px;
  height: 450px;
  margin: 0 auto;
  margin-top: 50px;
  background: $color-light-dark;
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

  &--center {
    .slide__content {
      display: block;
    }

    .slide__message {
      width: 30%;
      margin: 0 auto;
    }

    h1, h2, p {
      margin: 0 auto;
      text-align: center;
    }

    p {
      margin: 0 auto;
      text-align: center;
    }

    small {
      width: 100%;
      display: block;
      text-align: center;
    }

    .actions {
      justify-content: center;
    }
  }

  &--right {
    .slide__content {
      flex-direction: row-reverse;
    }
  }

  &--preview {
    .slide__message,
    .slide__visual {
      width: 100%;
    }

    h1 {
      font-size: 23px;
      margin-bottom: 10px;
    }

    p {
      font-size: 16px;
    }

    br {
      display: none;
    }
  }
}

.actions {
  margin-top: 40px;
}
</style>

