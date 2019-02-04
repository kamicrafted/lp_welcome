<template>
  <div id="home" class="home">
    <SectionHero />

    <SectionZip />

    <SectionBenefits />

    <div id="livenow" class="section section--livenow">
      <div class="section-inner">
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
    </div>

    <SectionDevices />

    <SectionQuote />

    <SectionFaq />

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Segments from '../components/Segments'
import SectionHero from '../components/SectionHero';
import SectionZip from '../components/SectionZip';
import SectionBenefits from '../components/SectionBenefits';
import SectionDevices from '../components/SectionDevices';
import SectionQuote from '../components/SectionQuote';
import SectionFaq from '../components/SectionFaq';

export default {
  name: 'home',
  data () {
    return {
      showScrollHint: true,
      componentKey: 0,
      filteredShows: [],
      showType: 'top channels',
      networks: [
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        },
        {
          logo: '../assets/networks/logo1.png'
        }
      ],
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
  components: {
    SectionHero,
    SectionZip,
    SectionBenefits,
    SectionDevices,
    SectionQuote,
    SectionFaq,
    Segments,
    Carousel,
    Footer
  },
  methods: {
    // eslint-disable-next-line
    scrollHandler (e) {
      window.recentScroll = true;
      setTimeout(function(){
        window.recentScroll = false;
      }, 1500)
      if (window.scrollY > 50) {
        this.showScrollHint = false
        this.$emit('header-mode', 'opaque')
      } else {
        this.showScrollHint = true
        this.$emit('header-mode', 'transparent')
      }
    }, 
    resizeHandler () {
      var scrollTimeout;
      var throttle = 250;
      if (!scrollTimeout) {
          scrollTimeout = setTimeout(function () {
              setTimeout( function(){
                  // resizeHero(this)
              }, 50);
              scrollTimeout = null;
          }, throttle);
      }

      /*
      function resizeHero(){
          var topElement = document.getElementById('heroFrame'); // to adjust margin-top
          var middleElement = document.getElementById('heroTV'); // to adjust max-width
          var bottomSpacer = document.getElementById('heroReflection') // to adjust height
          var bottomElement = document.getElementById('heroAction'); // to adjust margin-bottom or                margin-top

          topElement.style = "";
          middleElement.style = "";
          bottomElement.style = "";
          bottomSpacer.style = "";
          var channelCount= document.querySelectorAll('#zip div.message h1')[0]; //

          function sectionTwoPixelsAboveFold() {
            let innerHeight = window.innerHeight;
            let sectionTwo = channelCount.getBoundingClientRect().top + 32;
            return innerHeight - sectionTwo
          }

          function tightenMiddleBottom(pixelsToRemove){
            let spaceBetween = bottomElement.getBoundingClientRect().top - middleElement.getBoundingClientRect().bottom
            pixelsToRemove = pixelsToRemove * -1
            let maxReduction = spaceBetween + 15
            console.log(pixelsToRemove, maxReduction)
            if (pixelsToRemove > maxReduction) {
              console.log('yes');
                middleElement.style.width = middleElement.getBoundingClientRect().width - (pixelsToRemove - maxReduction) + 'px';
                middleElement.style.maxWidth = '85%';
                bottomSpacer.style.height = bottomSpacer.getBoundingClientRect().height - (maxReduction) + 'px';
              
            } else {
              bottomSpacer.style.height = (bottomSpacer.getBoundingClientRect().height - pixelsToRemove) + 'px';
            }
          }
          

          // function centerButton() {
          //   let space = bottomElement.getBoundingClientRect().top - middleElement.getBoundingClientRect().bottom;
          //   if (space > 0) {
          //     bottomElement.style.marginBottom = (space * .7) + 'px'
          //     bottomElement.style.marginTop = ( space * -1 ) + 'px'
          //   } else {
          //     bottomElement.style.marginTop = ( space * -.7 ) + 'px'
          //   }

          // }



          var pixelsAboveFold = sectionTwoPixelsAboveFold();

          if ( pixelsAboveFold < 0 ) {
            tightenMiddleBottom(pixelsAboveFold);
            // setTimeout( function() {
            //   centerButton()
            // }, 500)
          } else {
            // centerButton();
          }
           
       


          // if ( window.innerWidth >= 710 ) {
          //   var innerHeight = window.innerHeight;
          // } else {
          //   var innerHeight = bottomElement.getBoundingClientRect().top + 100;
          // }
          // var heroSection = document.querySelectorAll('.section--intro')[0];
          // var heroSectionSpecs = heroSection.getBoundingClientRect();

          function updateCSS(element, addOrSubtract, styleAttr, pixels) {
            if ( addOrSubtract === 'add' ) {
              let oldMargin = element['style'][styleAttr] ? parseInt(element['style'][styleAttr].split('px')[0]) : 0;
              let newMargin = oldMargin + pixels;
              newMargin = newMargin + 'px';
              element['style'][styleAttr] = newMargin;
            } else {
              let oldMargin = element['style'][styleAttr] ? parseInt(element['style'][styleAttr].split('px')[0]) : 0;
              let newMargin = oldMargin - pixels;
              newMargin = newMargin + 'px';
              element['style'][styleAttr] = newMargin;
            }
          }

          // var heightDiff = innerHeight - heroSectionSpecs.height;

          // if ( heightDiff > 0 ) {
          //     var pixelsToAdd = heightDiff;
          //     updateCSS(topElement, 'add', 'marginTop', (pixelsToAdd * .5))
          //     updateCSS(bottomElement, 'add', 'marginTop', (pixelsToAdd * .2))
          //     updateCSS(bottomElement, 'add', 'marginBottom', (pixelsToAdd * .2))
          // } else if ( heightDiff < 0 ) {
          //     var pixelsToRemove = heightDiff * -1
          //     // updateCSS(topElement, 'subtract', 'marginTop', (pixelsToRemove * .1))
          //     updateCSS(bottomElement, 'subtract', 'marginBottom', (pixelsToRemove))
          // }

      }
      */
      
    },
    forceRerender() {
      this.componentKey += 1;  
    },
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
    window.addEventListener('scroll', this.scrollHandler)
    window.addEventListener('resize', this.resizeHandler)
    this.resizeHandler();
    this.carouselUpdater();
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
  }
}
</script>

<style lang="scss">
@import '../scss/app';


#home {
  position: relative;
  height: 100vh;
}

.vue-affix {
  width: 800px;
}

.scroll-hint {
  position: fixed;
  bottom: 50px;
  font-weight: 700;
  font-size: 12px;
  text-transform: uppercase;
  text-shadow: 0 3px 20px rgba(black, .6);
  z-index: 1000;

  p {
    animation: pulse-animation 2s infinite $ease-in-out-quad;
  }
}

.noWrap {
  display: inline-block;
}

.hideMob {
  @media only screen and (max-width: 710px) {
    display: none !important;
  }
}

h4.subCTA {
  position: relative;
  z-index: 50;
  font-weight: 400;
  margin: 0 auto 50px auto;
}

.message {
  position: relative;
  z-index: 50;
  text-align: center;
  margin: 0 auto;

  h1 {
    font-size: 48px;
    font-weight: 800;
    text-transform: uppercase;

    @media only screen and (max-width: 1024px) {
      font-size: 42px;
      line-height: 1.25;
      // margin-top: 30px;
    }
    @media only screen and (max-width: 710px) {
      font-size: 32px;
    }
      
  }

  h2 {
    font-size: 32px;
    text-transform: uppercase;
    @media only screen and (max-width: 1024px) {
      font-size: 28px;
      line-height: 34px;
    }
    @media only screen and (max-width: 710px) {
      font-size: 21px;
      line-height: 26px;
    }
   
  }

  p {
    font-size: 18px;
      @media only screen and (max-width: 710px) {
        font-size: 16px;
        line-height: 23px;
      }
  }
}

.frame {
  position: relative;
  z-index: 100;
  display: flex;
  flex-direction: column;
}

.section {
  position: relative;
  display: flex;
  justify-content: center;
  min-height: 85vh;

  &--livenow {
    position: relative;
    align-items: center;
    justify-content: center;
    flex-direction: column;
    background: $gradient-blue-purple-dark;
    overflow: hidden;
    height: 100%;

    .section-inner {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
      width: 100%;
      height: 100%;
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-size: cover;
      background-image: url('../assets/bg-live-shows.jpg');
      mix-blend-mode: multiply;
      opacity: .6;
    }

    .message,
    .segments,
    .carousel {
      position: relative;
      z-index: 10;
    }

    .message {
      padding: 0 5%;
      margin-top: 50px;
      @media only screen and (max-width: 710px) {
          margin-top: 30px;
      }
      sup {
        position: relative;
        font-size: 18px;  
        top: -4px;
      }
      
    }

    .btn {
      position: relative;
      z-index: 10;
      margin-top: 15px;
      margin-bottom: 10px;
    }

  }

  &--devices {
    align-items: center;
    justify-content: center;
    background: $gradient-orange-purple;
    overflow: hidden;
    padding-top: 50px;
    padding-bottom: 50px;
    padding-left: 50px;

      @media only screen and (max-width: 1024px) {
        padding: 0 5%;
      }
      @media only screen and (max-width: 710px) {
        flex-direction: column-reverse;
        text-align: center;
      }
    
    .message {
      text-align: left;
      width: 37%;
      @media only screen and (max-width: 1024px) {
        width: 37%;
        padding: 30px 0;
      }
      @media only screen and (max-width: 710px) {
        width: 100%;
        display: block;
        text-align: center;
      }

      h1 {
        margin-bottom: 20px;
      }

      .deviceIcons {
        text-align: left;
        margin-top: 30px;
        img {
          width: 50%;
          display: inline-block;
          @media only screen and (max-width: 1200px) {
            display: block;
            width: 100%;
          }
          @media only screen and (max-width: 710px) {
            width: 90%;
            margin: 0 auto;
          }
        }

      }
      
      .actions {
        margin: 30px auto 70px auto;
        h4 {
        text-align: left;
        padding: 0 15px;
        margin-top: 10px;
          @media only screen and (max-width: 710px) {
          text-align: center;
          padding: 0px;
          }
        }
      }
      
      
    }

    .visual {
      position: relative;
      right: -10%;
      max-width: 1200px;
      margin-top: 50px;
      margin-bottom: 50px;
      width: 63%;

        @media only screen and (max-width: 1024px) {
          width: 63%;
          right: -18%;
          padding-top: 50px;
          margin-top: 0px;
          margin-bottom: 0px;
        }
        @media only screen and (max-width: 710px) {
          display: block;
          width: 130%;
        }

      img {
        display: block;
        width: 100%;
        @media only screen and (max-width: 1024px) {
          width: 130%
        }
        @media only screen and (max-width: 710px) {
          width: 100%;
          margin: 0 auto;
        }
      }
    } 
  }

  &--quote {
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 50px;
    background: $gradient-blue-purple-dark;

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-devices.png');
      mix-blend-mode: overlay;
      opacity: .4;
    }

    h3 {
      font-size: 26px;
      max-width: 600px;

      @media only screen and (max-width: 600px) {
        font-size: 24px;
      }

      > img {
        display: inline-block;
        padding: 0 10px;
        opacity: .7;
      }
    }

    button {
      margin-bottom: 10px;
    }

    .details {
      font-size: 16px;
    }
  }

  &--faq {
    align-items: center;
    justify-content: center;
    flex-direction: column;
    padding-top: 50px;
    padding-bottom:  50px;
      @media only screen and (max-width: 1024px) {
        padding-top: 30px;
        padding-bottom: 30px;

      } 
      @media only screen and (max-width: 710px) {
        padding-top: 0px;
        padding-bottom: 30px;
      } 


    h1 {
      margin-bottom: 50px;
       @media only screen and (max-width: 1024px) {
        margin-top: 50px;
      } 
    }

    p {
      opacity: .9;
    }

    a {
      color: $color-blue-light;
    }

    .questions {
      display: flex;
      flex-wrap: wrap;
      max-width: 1200px;

      ul {
        padding: 0 0 0 20px;
      }
    }

    .question {
      width: calc(100% / 3 - 40px);
      padding: 20px;
      @media only screen and (max-width: 1024px) {
        width: calc(100% / 2 - 40px)
      } 
      @media only screen and (max-width: 710px) {   
        width: calc(100% - 40px)
      }

      
    }
  }
}

.icon-scroll {
  position: relative;
  width: 18px;
  height: 32px;
  margin: 0 auto;
  border: 2px solid white;
  border-radius: 20px;
  box-shadow: 0 3px 10px rgba(black, .4);
  animation: scroll-animation 2s infinite $ease-in-out-quad;
  animation-delay: .25s;
  
  &:after {
    content: '';
    position: absolute;
    top: 10px;
    left: 50%;
    width: 2px;
    height: 4px;
    background: white;
    box-shadow: 0 3px 10px rgba(black, .4);
    transform: translateX(-50%);
    animation: nib-animation 2s infinite $ease-in-out-quad;
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

@keyframes scroll-animation {
  0%, 100% {
    top: 0;
  }
  20% {
    top: 20px;
  }
  50% {
    top: 0;
  }
}

@keyframes nib-animation {
  0%, 100% {
    top: 8px;
  }
  20% {
    top: 16px;
  }
  50% {
    top: 8px;
  }
}

@keyframes pulse-animation {
  0%, 100% {
    opacity: .4;
  }
  20% {
    opacity: 1;
  }
  80% {
    opacity: 1;
  }
  100% {
    opacity: .4;
  }
}


</style>

