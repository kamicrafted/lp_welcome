<template>
  <div class="header" :class="'header--' + mode">
    <header class="container">
      <div class="nav">
        <router-link to="/" class="logo-link"><img class="logo" src="../assets/logo-fubo.svg" alt=""></router-link>
        <router-link to="/promos">Promotions</router-link>
        <router-link to="/apps">Apps</router-link>
        <a href="https://support.fubo.tv">Help Center</a>
      </div>
      
      <div class="links">
        <a class="signin" href="https://www.fubo.tv/signin">Sign in</a>
        <a class="signup" href="https://www.fubo.tv/signup">Start your free trial</a>
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
    height: 150px;
    background: linear-gradient(to bottom, rgba(black, .5), rgba(black, 0));
    pointer-events: none;
  }

  &--opaque {
    background: rgba($color-header, .7);
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

.nav {
  display: flex;
  align-items: center;
  font-weight: 500;

  > a {
    margin: 0 30px 0 0;
    opacity: .7;
    transition: all .15s $ease-out-quad;

    &:hover {
      opacity: 1;
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

  a {
    font-size: 13px;
    font-weight: bold;
    color: white;
    text-decoration: none;
    transition: all .15s $ease-out-quad;

    &:hover {
      opacity: 1;
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
</style>