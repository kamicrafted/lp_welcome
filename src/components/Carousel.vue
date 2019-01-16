<template>
  <div class="carousel">
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <CarouselItem v-for="(tile, index) in tiles" :key="index" :tiledata="tile"/>
    </flickity>
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
import CarouselItem from './CarouselItem'

export default {
  name: 'carousel',
  props: ['filteredTiles'],

  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        groupCells: true,
        cellAlign: 'center',
        contain: true,
      },
      tiles: this.filteredTiles
    }
  },

  methods: {
    next() {
      this.$refs.flickity.next();
    },
    
    previous() {
      this.$refs.flickity.previous();
    }
  },
  mounted () {
    console.log(this.props);
    // console.log('listening for scroll')
  },

  components: {
    Flickity,
    CarouselItem
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app';

.carousel {
  width: 100%;
  margin: 30px 0 30px 0;
  height: 320px;
}

.flickity {
  padding: 0 40px;
}
</style>