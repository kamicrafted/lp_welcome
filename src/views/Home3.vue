<template>
  <div id="home" class="home">
    <div class="scrollprompt">
      Scroll to explore
    </div>

    <div id="intro" class="section section--intro">
      <div class="frame">
        <div class="message">
          <h1>Live TV & Sports</h1>
          <h2>Like you've never seen before</h2>
          <p>
            No contracts. Plans starting at $39.99/mo. Cancel anytime.
          </p>
        </div>

        <div class="visual">
          TV
        </div>
      </div>
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
  
  .scrollprompt {
    position: absolute;
    z-index: 50;
  }
}

.section {
  display: flex;
  justify-content: center;
  padding-top: 100px;
  height: 100%;

  .message {
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
    .visual {
      width: 1000px;
      height: 600px;
      background: grey;
    }
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
</style>

