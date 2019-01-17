<template>
  <div class="apps">
    <div class="hero">
      <div class="message">
        <h1>LIVE TV. <br>ANYTIME, ANYWHERE.</h1>
        <p>Your favorite teams and shows on the go or on the couch.</p>
      </div>
    </div>

    <div class="device-group">
      <div class="section-label">
        <span>On the big screen</span>
      </div>
      <div class="devices">
        <div class="device">
          <div class="image">
            <img src="../assets/devices/roku.png" alt="">
          </div>
          <h3>Roku</h3>
          <em>Available for</em>
          <ul>
            <li>Roku 2</li>
            <li>Roku 3</li>
            <li>Roku 4</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/firetv.png" alt="">
          </div>
          <h3>AMAZON FIRE TV</h3>
          <em>Available for</em>
          <ul>
            <li>Fire TV 1st Generation</li>
            <li>Fire TV 2nd Generation</li>
            <li>Fire TV 3rd Generation</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/appletv.png" alt="">
          </div>
          <h3>Apple TV</h3>
          <em>Available for</em>
          <ul>
            <li>Apple TV 4th Generation</li>
            <li>Apple TV 4K</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/androidtv.png" alt="">
          </div>
          <h3>Android TV</h3>
          <em>Available for</em>
          <ul>
            <li>Android TV 4.4+</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>
      </div>
    </div>

    <div class="device-group">
      <div class="section-label">
        <span>Mobile, Computers and Casting</span>
      </div>
      <div class="devices">
        <div class="device">
          <div class="image">
            <img src="../assets/devices/ios.png" alt="">
          </div>
          <h3 class="ios">iOS</h3>
          <em>Available for</em>
          <ul>
            <li>iPhone</li>
            <li>iPad</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/android.png" alt="">
          </div>
          <h3>Android</h3>
          <em>Available for</em>
          <ul>
            <li>Phones</li>
            <li>Tablets</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/computer.png" alt="">
          </div>
          <h3>Mac/PC</h3>
          <em>Available for</em>
          <ul>
            <li>Desktops</li>
            <li>Laptops</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>

        <div class="device">
          <div class="image">
            <img src="../assets/devices/chromecast.png" alt="">
          </div>
          <h3>Chromecast</h3>
          <em>Available for</em>
          <ul>
            <li>All versions</li>
          </ul>
          <a class="btn btn--download" href="">Download</a>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'

export default {
  data () {
    return {
    }
  },
  components: {
    Footer
  },
  methods: {
    scrollHandler (e) {
      if (window.scrollY > 50) {
        this.$emit('header-mode', 'opaque')
      } else {
        this.$emit('header-mode', 'transparent')
      }
    }
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

<style lang="scss" scoped>
@import '../scss/app';

.hero {
  display: flex;
  align-items: center;
  justify-content: center;
  padding-top: 60px;
  text-align: center;
  background: $gradient-orange-purple;
  padding-right: 5%;
  padding-left: 5%;
  min-height: 30vh;
  @media only screen and (max-width: 1024px) {
  }
  @media only screen and (max-width: 710px) {
    padding-top: 60px;
    padding-bottom: 60px;
  }
}

.section-label {
  position: relative;
  max-width: $site-max-width;
  margin: 0 auto;
  font-size: 18px;
  font-weight: 700;
  text-transform: uppercase;
  margin: 50px auto;

  span {
    position: relative;
    z-index: 10;
    padding-right: 20px;
    background: $color-site-bg;
  }

  &:after {
    content: '';
    position: absolute;
    top: 50%;
    left: 0;
    width: 100%;
    height: 1px;
    background: rgba(white, .2);
  }
}

.device-group {
    margin-bottom: 100px;
    padding-right: 5%;
    padding-left: 5%;
}

.devices {
  display: flex;
  justify-content: space-between;
  max-width: $site-max-width;
  margin: 0 auto;

  @media only screen and (max-width: 1024px) {
    flex-wrap: wrap;
  }
  @media only screen and (max-width: 710px) {
  
  }
}

.device {
  display: flex;
  flex-direction: column;
  width: calc(25% - 40px);
  text-align: center;
  background: $gradient-grey-purple;
  border-radius: 6px;
  margin-top: 100px;
  box-shadow: 0 8px 16px rgba(black, .3);
  transition: all .15s $ease-out-quad;

  @media only screen and (max-width: 1024px) {
    width: calc(50% - 40px);
  }
  @media only screen and (max-width: 710px) {
    width: calc(100% - 40px);
  }

  &:hover {
    box-shadow: 0 16px 32px rgba(black, .3);
    transform: scale(1.05);

    .btn {
      background: white;
      color: $color-site-bg;
    }
  }

  .image {
    height: 150px;

    img {
      width: 100%;
      max-width: 240px;
      margin-top: -100px;
    }
  }

  ul {
    padding: 0;
    margin: 0;
    margin-bottom: auto;
    list-style-type: none;

    > li {
      margin: 20px 0;
      font-size: 16px;

      &:first-child {
        margin-top: 10px;
      }

      &:last-child {
        margin-bottom: 30px;
      }
    }
  }

  em {
    font-size: 12px;
    font-style: normal;
    text-transform: uppercase;
    font-weight: 700;
    opacity: .6;
  }

  h3 {
    margin-bottom: 15px;
    text-transform: uppercase;
    font-size: 24px;
    font-weight: 900;
    padding: 0 5%;

    &.ios {
      text-transform: none;
    }
  }
}

.message {
  position: relative;
  z-index: 10;
  h1 {
    font-size: 48px;
    font-weight: 900;
    text-transform: uppercase;
    @media only screen and (max-width: 1024px) {
      font-size: 42px;
      line-height: 52px;
      font-weight: 800;
    }
    @media only screen and (max-width: 710px) {
      padding-top: 120px;
    }
  }

  h2 {
    font-size: 32px !important;
    text-transform: uppercase;
  }

  p {
    font-size: 18px;
  }
}
</style>