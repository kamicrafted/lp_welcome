<template>
  <div id="app">
    <Header :mode="mode" />
    <router-view @header-mode="setMode" />
  </div>
</template>

<script>
import Header from './components/Header'

export default {
  name: 'App',
  data () {
    return {
      mode: 'transparent'
    }
  },
  components: {
    Header
  },
  methods: {
    setMode (value) {
      this.mode = value
    }
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
  font-weight: 500;
}

#app,
.slide,
.home {
  height: 100%;
}

// button {
//   padding: 12px 18px;
//   border: none;
//   background: $color-orange;
//   color: white;
//   font-size: 18px;
//   font-weight: 700;
//   border-radius: 2px;
//   transition: all .25s $ease-out-circ;
//   cursor: pointer;

//   &:hover {
//     transform: scale(1.05);
    
//   }
// }

a {
  color: white;
}

p {
  line-height: 1.4;
}

.btn {
  border: none;
  font-family: Qanelas, arial, sans-serif;
  outline: none;
  cursor: pointer;
  transition: all .15s $ease-out-quad;

  &--cta {
    padding: 16px 24px;
    background: $color-orange;
    color: white;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;
    // text-transform: uppercase;
    box-shadow: 0 3px 8px rgba(black, .2);

    &:hover {
      background: white;
      color: $color-site-bg;
      transform: scale(1.05);
      box-shadow: 0 5px 12px rgba(black, .2);
    }
  }

  &--cta-white {
    display: inline-block;
    text-decoration: none;
    padding: 16px 24px;
    background: white;
    color: $color-site-bg;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;
    // text-transform: uppercase;
    box-shadow: 0 3px 8px rgba(black, .2);

    &:hover {
      background: white;
      color: $color-site-bg;
      transform: scale(1.05);
      box-shadow: 0 5px 12px rgba(black, .2);
    }
  }

  &--ghost {
    padding: 16px 24px;
    background: transparent;
    color: white;
    border: 2px solid white;
    border-radius: 4px;
    font-size: 18px;
    font-weight: 700;

    &:hover {
      background: white;
      color: $color-site-bg;
      transform: scale(1.05);
      box-shadow: 0 5px 12px rgba(black, .2);
    }
  }

  &--download {
    display: block;
    padding: 15px 20px;
    background: $color-blue;
    text-decoration: none;
    font-weight: 700;
    border-radius: 0 0 6px 6px;
  }
}

.flickity-viewport {
  overflow: visible !important;
}

.flickity-prev-next-button {
  border-radius: 0 !important;
  background: black !important;

  &.previous {
    left: 0 !important;
  } 

  &.next {
    right: 0 !important;
  } 
}

.flickity-button-icon {
  fill: white !important;
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
