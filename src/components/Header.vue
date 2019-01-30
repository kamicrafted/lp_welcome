<template>
  <div class="header" :class="'header--' + mode">

    <header class="container">

      <div class="nav hideMob">
        
        <img class="logo" src="../assets/logo-fubo.svg" alt="">
        <!-- <router-link to="/promos">Promotions</router-link> -->
        <!-- <router-link to="/apps">Apps</router-link> -->
        <a v-scroll-to="'#devices'">Apps</a>
        <a href="https://support.fubo.tv">Help Center</a>

      </div>

      <div class="nav showMob">
        <router-link to="/" class="logo-link">
          <img class="logo" src="../assets/logo-fubo.svg" alt="">
        </router-link>
      </div>
      
      <div class="links hideMob">
        <a class="signin" href="https://www.fubo.tv/signin">Sign in</a>
        <a class="signup" href="https://www.fubo.tv/signup">Start your free trial</a>
      </div>

      <div class="links showMob">
        <a v-scroll-to="'#devices'">Apps</a>
        <a href="https://support.fubo.tv">Help</a>
        <a class="" href="https://www.fubo.tv/signin">Sign in</a>
        <a class="" href="https://www.fubo.tv/signup">Start your free trial</a>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
    'mode'
  ]
}
</script>

<style lang="scss" scoped>
@import '../scss/app';





.header {
  position: fixed;
  z-index: 500;
  display: flex;
  align-items: center;
  width: 100%;
  color: white;
  min-height: 60px;
  transition: all .25s $ease-out-quad;

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 100px;
    background: linear-gradient(to bottom, rgba(black, .5), rgba(black, 0));
    pointer-events: none;
  }

  &--opaque {
    background: rgba($color-header, .7);

    .nav.showMob {
       @media only screen and (max-width: 710px) {
          display: none !important;
        }
    }

    header {
       @media only screen and (max-width: 710px) {
        display: block;
        margin: 0 auto !important;
      }
    }

    header .links.showMob {
      margin: 20px auto;
    }


  }

  

  header {
    position: relative;
    z-index: 10;
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
    text-transform: uppercase;
    min-height: 60px;
    padding: 0 20px;

    @media only screen and (max-width: 710px) {
      display: block;
      margin: 5px auto;
    }


    a {
      font-size: 16px;
      font-weight: bold;
      color: white;
      text-decoration: none;
      transition: all .15s $ease-out-quad;
      @media only screen and (max-width: 710px) {
        font-size: 13px;
      }

      &:hover {
        opacity: 1;
      }
    }

    .nav {
      display: flex;
      align-items: center;
      font-weight: 500;
      
      > a {
      margin: 0 15px;
      opacity: .7;
      transition: all .15s $ease-out-quad;
        &:hover {
          opacity: 1;
        }
      }

      .router-link-exact-active {
        position: relative;
        opacity: 1;

        &:after {
          content: '';
          position: absolute;
          bottom: -20px;
          left: 0;
          width: 100%;
          height: 2px;
          background: $color-orange;
        }
      }
    }

    .links {
      display: flex;
      align-items: center;
      text-align: right;
      transition: all .15s $ease-out-quad;

      .signin {
        display: block;
        background: transparent;
        border: 2px solid rgba(white, .5);
        color: white;
        padding: 6px 10px;
        border-radius: 2px;
        font-weight: 700;

        &:hover {
          background: white;
          color: $color-site-bg;
          transform: scale(1.05);
        }
      }

      .signup {
        display: block;
        background: $color-orange;
        border: 2px solid $color-orange;
        color: white;
        padding: 6px 10px;
        margin-left: 10px;
        border-radius: 2px;
        font-weight: 700;

        &:hover {
          background: white;
          color: $color-site-bg;
          border: 2px solid white;
          transform: scale(1.05);
        }
      }
    }
    .links.hideMob {
      @media only screen and (max-width: 710px) {
        display: none;
      }
    }

    .links.showMob {
      display: none;
      @media only screen and (max-width: 710px) {
        display: flex;
        align-items: center;
        text-align: right;
        justify-content: space-between;
      }
      > a {
        @media only screen and (max-width: 710px) {
          margin: 0 5px;
          opacity: .7;
          transition: all .15s $ease-out-quad;
          background-color: none;
          padding: 0;
          border: none;
            &:hover {
              opacity: 1;
            }
          }
         }
      
    }

    .logo-link {
      &:after {
        display: none;
      }
    }

    .logo {
      position: relative;
      opacity: 1;
      height: 28px;
      margin-right: 10px;
    }
    
  
    .nav.hideMob {
      @media only screen and (max-width: 710px) {
        display: none;
      }
    }
    
    .nav.showMob {
      display: none;
      @media only screen and (max-width: 710px) {
        display: block;
        margin: 0 auto 10px auto;
      }
      img {
         @media only screen and (max-width: 710px) {
          display: block;
          margin: 0 auto;
        }
      }
    }
  }
}

  
</style>