<template>
  <div class="carousel">
    <flickity class="flickity" ref="flickity" :options="flickityOptions">
      <CarouselItem v-for="(tile, index) in tiles" :key="index" :tiledata="tile" />
    </flickity>

    <!-- <button @click="previous()">Custom Previous Button</button>
    <button @click="next()">Custom Next Button</button> -->
  </div>
</template>

<script>
import Flickity from 'vue-flickity';
import CarouselItem from './CarouselItem'

export default {
  name: 'carousel',

  data () {
    return {
      flickityOptions: {
        initialIndex: 0,
        prevNextButtons: true,
        pageDots: false,
        groupCells: true,
        cellAlign: 'left',
        contain: true
      },
      tiles: [
        {
          title: 'The Walking Dead',
          subtitle: 'S9 • E8 - Evolution',
          day: 'Today',
          time: '8:00PM',
          logo: 'livelogo/amc.png',
          thumb: 'livethumb/amc.jpg'
        },
        {
          title: 'The Real Housewives of Dallas',
          subtitle: 'S3 • E18 - Reunion Part 2',
          day: 'Tomorrow',
          time: '8:00PM',
          logo: 'livelogo/bravo.png',
          thumb: 'livethumb/bravo.jpg'
        },
        {
          title: 'Riverdale',
          subtitle: 'S3 • E7 - Chapter Forty-Two: The Man in Black',
          day: 'Today',
          time: '8:00PM',
          logo: 'livelogo/cw.png',
          thumb: 'livethumb/cw.jpg'
        },
        {
          title: 'Keeping up with the Kardashians',
          subtitle: 'S15 • E16 - Break Free',
          day: 'Today',
          time: '8:00PM',
          logo: 'livelogo/e.png',
          thumb: 'livethumb/e.jpg'
        },
        {
          title: 'So You Think You Can Dance',
          subtitle: 'S15 • E14 - Finale',
          day: 'Tomorrow',
          time: '8:00PM',
          logo: 'livelogo/fox.png',
          thumb: 'livethumb/fox.jpg'
        },
        {
          title: 'The Five',
          subtitle: '',
          day: 'FRI',
          time: '8:00PM',
          logo: 'livelogo/foxnews.png',
          thumb: 'livethumb/foxnews.jpg'
        },
        {
          title: 'Mayans',
          subtitle: "S1 • E10 - Cuervo/Tz'ikb'uul",
          day: 'FRI',
          time: '8:00PM',
          logo: 'livelogo/fx.png',
          thumb: 'livethumb/fx.jpg'
        },
        {
          title: 'Fixer Upper',
          subtitle: 'S5 • E18 - Rock Star Renovation',
          day: 'Today',
          time: '8:00PM',
          logo: 'livelogo/hgtv.png',
          thumb: 'livethumb/hgtv.jpg'
        },
        {
          title: 'Pawn Stars',
          subtitle: 'S15 • E29 - The Pistol Is Mightier Than the Sword',
          day: 'SUN',
          time: '8:00PM',
          logo: 'livelogo/history.png',
          thumb: 'livethumb/history.jpg'
        },
        {
          title: 'Portlandia',
          subtitle: 'S8 • E6 - You Do You',
          day: 'TUE',
          time: '8:00PM',
          logo: 'livelogo/ifc.png',
          thumb: 'livethumb/ifc.jpg'
        },
        {
          title: 'The Journey: Canelo Vs. Rocky',
          subtitle: '',
          day: 'SAT',
          time: '8:00PM',
          logo: 'livelogo/msg.png',
          thumb: 'livethumb/msg.jpg'
        },
        {
          title: 'Animal Fight Night',
          subtitle: 'S6 • E12 - No Way Out',
          day: 'Today',
          time: '8:00PM',
          logo: 'livelogo/natgeo.png',
          thumb: 'livethumb/natgeo.jpg'
        },
        {
          title: "'86 Jack's 6th Green Jacket",
          subtitle: '',
          day: 'Tomorrow',
          time: '8:00PM',
          logo: 'livelogo/nbcgolf.png',
          thumb: 'livethumb/nbcgolf.jpg'
        },
        {
          title: 'Gameday Live',
          subtitle: '',
          day: 'MON',
          time: '8:00PM',
          logo: 'livelogo/nfl.png',
          thumb: 'livethumb/nfl.jpg'
        },
        {
          title: 'Billions',
          subtitle: 'S3 • E12 - Elmsley Count',
          day: 'SAT',
          time: '8:00PM',
          logo: 'livelogo/showtime.png',
          thumb: 'livethumb/showtime.jpg'
        },
        {
          title: 'M.A.S.H.',
          subtitle: 'S10 • E20 - Sons and Bowlers',
          day: 'THU',
          time: '8:00PM',
          logo: 'livelogo/sundance.png',
          thumb: 'livethumb/sundance.jpg'
        },
        {
          title: 'Happy!',
          subtitle: 'S1 • E8 - I Am the Future',
          day: 'Tomorrow',
          time: '8:00PM',
          logo: 'livelogo/syfy.png',
          thumb: 'livethumb/syfy.jpg'
        },
        {
          title: 'NCIS: New Orleans',
          subtitle: 'S5 • E10 - Tick Tock',
          day: 'TUE',
          time: '8:00PM',
          logo: 'livelogo/tnt.png',
          thumb: 'livethumb/tnt.jpg'
        },
        {
          title: 'The Sinner',
          subtitle: 'S2 • E3 - Part III',
          day: 'WED',
          time: '8:00PM',
          logo: 'livelogo/usa.png',
          thumb: 'livethumb/usa.jpg'
        },
        {
          title: "It's Always Sunny in Philadelhia",
          subtitle: 'S13 • E10 - Mac Finds His Pride',
          day: 'FRI',
          time: '8:00PM',
          logo: 'livelogo/viceland.png',
          thumb: 'livethumb/viceland.jpg'
        },
      ]
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
  margin-top: 50px;
}

.flickity {
  padding: 0 40px;
}
</style>