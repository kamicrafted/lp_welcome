<template>
  <div class="header">
    <header class="container">
      <div class="nav">
        <span class="logo"><a href="/"><img class="logo" src="../assets/logo-fubo.svg" alt=""></a></span>
        <router-link to="/">Promotions</router-link>
        <router-link to="/">Apps</router-link>
        <router-link to="/">Help Center</router-link>
      </div>
      
      <div class="links">
        <router-link to="/" :class="'signin'">Sign in</router-link>
        <router-link to="/" :class="'signup'">Join now</router-link>
      </div>
    </header>
  </div>
</template>

<script>
export default {
  name: 'Header',
  props: [
    'selection',
    'hybrid'
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
  min-height: 80px;

  &:after {
    content: '';
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: 100%;
    height: 150px;
    background: linear-gradient(to bottom, rgba(black, .5), rgba(black, 0));
  }
}

.nav {
  display: flex;
  align-items: center;
  font-weight: 500;

  > a {
    opacity: .7;
    transition: all .15s $ease-out-quad;

    &:hover {
      opacity: 1;
    }
  }
}

.links {
  .signin {
    background: transparent;
    border: 2px solid rgba(white, .5);
    color: white;
    padding: 6px 10px;
    border-radius: 2px;
    font-weight: 700;
  }

  .signup {
    background: $color-orange;
    border: 2px solid $color-orange;
    color: white;
    padding: 6px 10px;
    margin-left: -20px;
    border-radius: 2px;
    font-weight: 700;
  }

  .active {
    position: relative;
    color: white;

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
    margin: 10px 30px 0 0;
    color: white;
    text-decoration: none;
    transition: all .15s $ease-out-quad;

    &:hover {
      opacity: 1;
    }
  }
}

.logo {
  position: relative;
  opacity: 1;
  height: 28px;
}
</style>