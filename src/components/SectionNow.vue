<template>
  <div id="livenow" class="section section--livenow">
    <div class="message">
      <h1>Start Watching Now</h1>
      <p>
        Sports and TV. Movies and news. Live and on demand. We have it all.
      </p>
    </div>
    
      <Segments v-bind:carouselCategories="carouselCategories" @updatedIndex="carouselUpdater"/>

      <Carousel v-bind:filteredTiles="filteredShows" :key="componentKey" />

    <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
      <h4 class="subCTA"> No contract. Cancel any time.</h4>
  </div>
</template>

<script>
export default {
  data () {
    return {
      carouselCategories: [
        {
          name: 'Top Channels'
        },
        {
          name: 'Live Sports'
        },
        {
          name: 'News'
        },
        {
          name: 'On Demand'
        }
      ],
      tiles: [
        { 
          title: 'The Big Bang Theory',
          subtitle: 'S12 • E13 - The Confirmation Polarization',
          // day: 'Tomorrow',
          // time: '8:00PM',
          logo: 'livelogo/cbs.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p185554_b_h8_az.jpg',
          category: 'Top Channels On Demand'
        },
        {
          title: 'The Simpsons',
          subtitle: 'S30 • E9 - Daddicus Finch',
          logo: 'livelogo/fox.png',
          thumb: 'https://fubotv-v3-dev-custom-assets.imgix.net/image_overrides/Simpsons_S30_1920x1080_1.jpg',
          category: 'Top Channels'
        },
        {
          title: 'This is Us',
          subtitle: 'S3 • E11 - Songbird Road: Part One',
          logo: 'livelogo/nbc.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p12900252_b_h8_al.jpg',
          category: 'Top Channels On Demand'
        },
         {
          title: 'Inside the NBA',
          logo: 'livelogo/tnt.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p248610_b_h10_ad.jpg',
          category: 'Top Channels Live Sports'
        },
        {
          title: 'Full Frontal with Samantha Bee',
          subtitle: 'S3 • E33',
          logo: 'livelogo/tbs.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p12412201_b_h10_ab.jpg',
          category: 'Top Channels'
        },
        {
          title: 'LaLiga News',
          subtitle: '',
          logo: 'livelogo/bein.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p13423044_b_h8_ab.jpg',
          category: 'Top Channels Live Sports'
        },
        {
          title: 'NFL Total Access',
          subtitle: '',
          logo: 'livelogo/nfl.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p267772_b_h10_ae.jpg',
          category: 'Top Channels Live Sports'
        },
        {
          title: 'The Starters',
          subtitle: '',
          logo: 'livelogo/nbatv.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p10271133_b_h8_af.jpg',
          category: 'Top Channels Live Sports'
        },
        { 
          title: 'Anderson Cooper 360',
          subtitle: '',
          logo: 'livelogo/cnn.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p185440_b_h10_ad.jpg',
          category: 'Top Channels News'
        },
        {
          title: 'The Five',
          logo: 'livelogo/foxnews.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p8743813_b_h8_af.jpg',
          category: 'Top Channels News'
        },
        {
          title: 'The Rachel Maddow Show',
          logo: 'livelogo/msnbc.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p188599_b_h8_ac.jpg',
          category: 'Top Channels News'
        },
        {
          title: 'Billions',
          subtitle: 'S3 • E12 - Elmsley Count',
          logo: 'livelogo/showtime.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p10639349_b_h10_ae.jpg',
          category: 'Top Channels On Demand'
        },
        {
          title: 'Fixer Upper',
          subtitle: 'S5 • E18 - Rock Star Renovation',
          logo: 'livelogo/hgtv.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p9928145_b_h8_ag.jpg',
          category: 'Top Channels'
        },
        {
          title: 'Diners, Drive-ins and Dives',
          subtitle: 'S30 • E30 - Piling on the Pork',
          logo: 'livelogo/foodnetwork.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p185941_b_h8_aq.jpg',
          category: 'Top Channels'
        },
        {
          title: 'Live P.D.',
          subtitle: '',
          logo: 'livelogo/ae.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p13357824_b_h8_an.jpg?',
          category: 'Top Channels'
        },
        {
          title: 'The Walking Dead',
          subtitle: 'S9 • E8 - Evolution',
          logo: 'livelogo/amc.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p8282918_b_h10_aw.jpg',
          category: 'Top Channels'
        },
        { 
          title: 'The Real Housewives of New Jersey',
          subtitle: 'S9 • E13 - Camels, Cabo & Catfights',
          // day: 'Tomorrow',
          // time: '8:00PM',
          logo: 'livelogo/bravo.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p302409_b_h8_am.jpg',
          category: 'Top Channels'
        },
        {
          title: 'Keeping up with the Kardashians',
          subtitle: 'S15 • E16 - Break Free',
          logo: 'livelogo/e.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p185738_b_h8_bg.jpg',
          category: 'Top Channels'
        },
        {
          title: "It's Always Sunny in Philadelphia",
          subtitle: 'S13 • E10 - Mac Finds His Pride',
          logo: 'livelogo/fx.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p185171_b_h8_ak.jpg',
          category: 'Top Channels On Demand'
        },
        {
          title: 'Modern Family',
          subtitle: 'S7 • E22 - Double-Click',
          logo: 'livelogo/usa.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p3560360_b_h8_nu.jpg',
          category: 'Top Channels'
        },
        {
          title: 'American Pickers',
          subtitle: 'S18 • E89 - The Great Pick Off',
          logo: 'livelogo/history.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p7939201_b_h10_ae.jpg?',
          category: 'Top Channels'
        },
        {
          title: "Feherty",
          subtitle: 'S8 • E15 - Jimmy Walker',
          logo: 'livelogo/nbcgolf.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p8575315_b_h10_ac.jpg',
          category: 'Top Channels Live Sports'
        },
        {
          title: 'Mysteries at the Museum',
          subtitle: 'S17 • E39 - Cosmic Collision, Haunted Hotel and Van Gogh\'s Ear',
          logo: 'livelogo/travel_channel.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p8237828_b_h8_bd.jpg',
          category: 'Top Channels'
        },
        {
          title: 'Suits',
          subtitle: 'S8 • E18 - Whale Hunt',
          logo: 'livelogo/usa.png',
          thumb: 'https://fubotv-v3-dev.imgix.net/assets/p8630071_b_h10_ax.jpg',
          category: 'Top Channels'
        },
        
      ],
    }
  },

  methods: {
    carouselUpdater(e) {
      if ( e && e.toLowerCase() === 'top channels') {
        this.showType = 'top channels'
      } else if ( e && e.toLowerCase() === 'live sports') {
        this.showType = 'live sports'
      } else if ( e && e.toLowerCase() === 'news') {
        this.showType = 'news'
      } else if ( e && e.toLowerCase() === 'on demand') {
        this.showType = 'on demand'
      } else {
        this.showType = 'top channels'
      }
      this.getFilteredShows(this.showType);
      this.forceRerender();

    },

    getFilteredShows (type = this.showType) {
      let filteredShowsArray = this.tiles.filter( function(show) {
          if ( show.category && show.category.toLowerCase().indexOf(type) !== -1) {
            return true
          } else {
            return false
          }
      });
      this.filteredShows = filteredShowsArray;
      return filteredShowsArray
    },
  },

  mounted () {
    this.carouselUpdater();
  }
}
</script>

<style scoped>

</style>