<template>
  <div class="segments">
    <div class="segments-item active">Top Channels</div>
    <div class="segments-item">Live Sports</div>
    <div class="segments-item">Popular Shows</div>
    <div class="segments-item">On Demand Movies</div>
  </div>
</template>

<script>
export default {
  name: 'segments',
  data () {
    return {

    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app';

.segments {
  display: flex;

  &-item {
    position: relative;
    border: 2px solid $color-blue;
    padding: 10px 20px;
    line-height: 1;
    font-weight: 700;
    margin-left: -2px;
    transition: all .15s $ease-out-quad;
    cursor: pointer;

    &:first-child {
      border-radius: 4px 0 0 4px;
      margin-left: 0;
    }

    &:last-child {
      border-radius: 0 4px 4px 0;
    }

    &:hover {
      z-index: 10;
      background: rgba($color-blue, .6);
      border: 2px solid white;
    }

    &.active {
      background: $color-blue;
      border: 2px solid transparent;
    }
  }
}
</style>