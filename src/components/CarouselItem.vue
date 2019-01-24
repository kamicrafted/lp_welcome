<template>
  <div class="carousel-cell">
    <div class="channel">
      <img class="logo" :src="require('@/assets/' + tiledata.logo)" alt="">
    </div>
    <div class="thumbnail">
      <img :src="tiledata.thumb + '?w=816&h=416&fit=fillmax&fill=solid&fill-color=302E38&auto=format,compress'" alt="">
    </div>
    <div class="info">
      <div class="record"></div>
      <!-- <div class="airtime">{{ tiledata.day }}&nbsp;&nbsp;{{ tiledata.time }}</div> -->
      <h3 class="title">{{ tiledata.title }}</h3>
      <div class="meta">{{ tiledata.subtitle }}</div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'CarouselItem',
  props: ['tiledata']
}
</script>

<style lang="scss" scoped>
.carousel-cell {
  position: relative;
  width: 288px;
  margin: 0 10px;
  box-shadow: 0 10px 24px rgba(black, .3), 0 8px 12px -4px rgba(black, .4);

  .record {
    position: absolute;
    right: 0;
    top: 0;
    // background: 
  }
}

.channel {
  display: flex;
  align-items: center;
  justify-content: center;
  max-height: 50px;
  padding: 0 20px;
  background-color: #302E38;
  border-radius: 4px 4px 0 0;
  overflow: hidden;

  .logo {
    display: block;
    max-height: 70px;
    margin: 0 auto;
  }
}

.thumbnail {
  background: #38373D;
  height: 160px;

  > img {
    width: 100%;
  }
}

.info {
  min-height: 80px;
  padding: 15px;
  background-color: #211F29;
  border-radius: 0 0 4px 4px;

  .airtime {
    text-transform: uppercase;
    font-weight: bold;
    font-size: 11px;
  }

  .title {
    font-size: 16px;
    margin: 3px 0 10px 0;
  }

  .meta {
    font-size: 11px;
  }
}
</style>