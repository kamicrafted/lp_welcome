<template>
  <div id="app">
    <Header />
    <router-view/>
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  components: {
    Header
  }
}
</script>


<style lang="scss">
@import './scss/app';

body, html {
  margin: 0;
  padding: 0;
  height: 100%;
  background: $color-fubo-dark;
  background: $color-site-bg;
  color: white;
  font-family: Qanelas, arial, sans-serif;
}

#app,
.slide,
.home {
  height: 100%;
}

h1 {
  text-transform: uppercase;
  font-size: 54px;
  line-height: 1.1;
  margin-bottom: 0;
}

button {
  padding: 12px 18px;
  border: none;
  background: $color-orange;
  color: white;
  font-size: 18px;
  font-weight: 700;
  border-radius: 2px;
  transition: all .25s $ease-out-circ;
  cursor: pointer;

  &:hover {
    transform: scale(1.05);
    
  }
}

a {
  color: white;
}

.scrollprompt {
  display: block;
  bottom: 30px;
  color: white;
  width: 100%;
  text-align: center;
  animation: bounce 4s infinite;
  pointer-events: none;
}

@keyframes bounce {
  0%, 20%, 50%, 80%, 100% {
      transform: translateY(0);
      transition: $ease-out-quad;
    }
  40% {
    transform: translateY(-20px);
    transition: $ease-out-quad;
    }
  60% {
    transform: translateY(-15px);
    transition: $ease-out-quad;
    }
}
</style>
