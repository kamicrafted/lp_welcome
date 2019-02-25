<template>
  <div id="home" class="home">
    <SectionHero />

    <SectionChannels v-bind:availableChannels="availableChannels" :key="componentKey"/>

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
import SectionChannels from '../components/SectionChannels';
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
      availableChannels: { basicChannels: [], extraChannels: [], basicCount: 0, extraCount: 0, dma: ''},
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
      dma_dictionary: {
        "500": "Portland",
        "501": "New York",
        "502": "Binghamton",
        "503": "Macon",
        "504": "Philadelphia",
        "505": "Detroit",
        "506": "Boston",
        "507": "Savannah",
        "508": "Pittsburgh",
        "509": "Ft. Wayne",
        "510": "Clevelandn",
        "511": "Washington, DC",
        "512": "Baltimore",
        "513": "Flint",
        "514": "Buffalo",
        "515": "Cincinnati",
        "516": "Erie",
        "517": "Charlotte",
        "518": "Greensboro",
        "519": "Charleston",
        "520": "Augusta",
        "521": "Providence",
        "522": "Columbus",
        "523": "Burlington",
        "524": "Atlanta",
        "525": "Albany",
        "526": "Utica",
        "527": "Indianapolis",
        "528": "Miami",
        "529": "Louisville",
        "530": "Tallahassee",
        "531": "Tri-Cities",
        "532": "Albany",
        "533": "Hartford & New Haven",
        "534": "Orlando",
        "535": "Columbus",
        "536": "Youngstown",
        "537": "Bangor",
        "538": "Rochester",
        "539": "Tampa",
        "540": "Traverse City",
        "541": "Lexington",
        "542": "Dayton",
        "543": "Springfield",
        "544": "Norfolk",
        "545": "Greenville",
        "546": "Columbia",
        "547": "Toledo",
        "548": "West Palm Beach",
        "549": "Watertown",
        "550": "Wilmington",
        "551": "Lansing",
        "552": "Presque Isle",
        "553": "Marquette",
        "554": "Wheeling",
        "555": "Syracuse",
        "556": "Richmond",
        "557": "Knoxville",
        "558": "Lima",
        "559": "Bluefield",
        "560": "Raleigh",
        "561": "Jacksonville",
        "563": "Grand Rapids",
        "564": "Charleston",
        "565": "Elmira",
        "566": "Harrisburg",
        "567": "Greenville",
        "569": "Harrisonburg",
        "570": "Myrtle Beach",
        "571": "Ft. Myers",
        "573": "Roanoke",
        "574": "Johnstown",
        "575": "Chattanooga",
        "576": "Salisbury",
        "577": "Scranton",
        "581": "Terre Haute",
        "582": "Lafayette, IN",
        "583": "Alpena",
        "584": "Charlottesville",
        "588": "South Bend",
        "592": "Gainesville",
        "596": "Zanesville",
        "597": "Parkersburg",
        "598": "Clarksburg-Weston",
        "600": "Corpus Christi",
        "602": "Chicago",
        "603": "Joplin",
        "604": "Columbia",
        "605": "Topeka",
        "606": "Dothan",
        "609": "St. Louis",
        "610": "Rockford",
        "611": "Rochester - Mason City",
        "612": "Shreveport",
        "613": "Minneapolis",
        "616": "Kansas City",
        "617": "Milwaukee",
        "618": "Houston",
        "619": "Springfield",
        "622": "New Orleans",
        "623": "Dallas - Ft. Worth",
        "624": "Sioux City",
        "625": "Waco",
        "626": "Victoria",
        "627": "Wichita Falls & Lawton",
        "628": "Monroe",
        "630": "Birmingham",
        "631": "Ottumwa",
        "632": "Paducah",
        "633": "Odessa",
        "634": "Amarillo",
        "635": "Austin",
        "636": "Harlingen",
        "637": "Cedar Rapids",
        "638": "St. Joseph",
        "639": "Jackson",
        "640": "Memphis",
        "641": "San Antonio",
        "642": "Lafayette",
        "643": "Lake Charles",
        "644": "Alexandria",
        "647": "Greenwood",
        "648": "Champaign & Springfield",
        "649": "Evansville",
        "650": "Oklahoma City",
        "651": "Lubbock",
        "652": "Omaha",
        "656": "Panama City",
        "657": "Sherman",
        "658": "Green Bay",
        "659": "Nashville",
        "661": "San Angelo",
        "662": "Abilene",
        "669": "Madison",
        "670": "Ft. Smith",
        "671": "Tulsa",
        "673": "Columbus",
        "675": "Peoria",
        "676": "Duluth",
        "678": "Wichita",
        "679": "Des Moines",
        "682": "Davenport",
        "686": "Mobile",
        "687": "Minot",
        "691": "Huntsville",
        "692": "Beaumont",
        "693": "Little Rock",
        "698": "Montgomery",
        "702": "La Crosse",
        "705": "Wausau",
        "709": "Tyler",
        "710": "Hattiesburg",
        "711": "Meridian",
        "716": "Baton Rouge",
        "717": "Quincy",
        "718": "Jackson",
        "722": "Lincoln",
        "724": "Fargo",
        "725": "Sioux Falls",
        "734": "Jonesboro",
        "736": "Bowling Green",
        "737": "Mankato",
        "740": "North Platte",
        "743": "Anchorage",
        "744": "Honolulu",
        "745": "Fairbanks",
        "746": "Biloxi",
        "747": "Juneau",
        "749": "Laredo",
        "751": "Denver",
        "752": "Colorado Springs",
        "753": "Phoenix",
        "754": "Butte-Bozeman",
        "755": "Great Falls",
        "756": "Billings",
        "757": "Boise",
        "758": "Idaho Falls",
        "759": "Cheyenne",
        "760": "Twin Falls",
        "762": "Missoula",
        "764": "Rapid City",
        "765": "El Paso",
        "766": "Helena",
        "767": "Casper",
        "770": "Salt Lake City",
        "771": "Yuma",
        "773": "Grand Junction",
        "789": "Tucson",
        "790": "Albuquerque",
        "798": "Glendive",
        "800": "Bakersfield",
        "801": "Eugene",
        "802": "Eureka",
        "803": "Los Angeles",
        "804": "Palm Springs",
        "807": "San Francisco",
        "810": "Yakima",
        "811": "Reno",
        "813": "Medford",
        "819": "Seattle",
        "820": "Portland",
        "821": "Bend",
        "825": "San Diego",
        "828": "Montereys",
        "839": "Las Vegas",
        "855": "Santa Barbara",
        "862": "Sacramento",
        "866": "Fresno",
        "868": "Chico",
        "881": "Spokane"
      }
    }
  },
  components: {
    SectionHero,
    SectionChannels,
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

      
    },
    forceRerender() {
      this.componentKey += 1;  
    },
    fetchLocation(){
      var self = this;
      function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      }

      fetch('https://api.fubo.tv/v3/location')
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseObject) {
          self.availableChannels.dma = responseObject.dma;
          self.availableChannels.postal = responseObject.postal;
          self.availableChannels.country_code = responseObject.country_code;
          var responseData = responseObject;
          self.availableChannels.dma = self.dma_dictionary[responseObject.dma] ? self.dma_dictionary[responseObject.dma] + ' Area' : 'Your Area';
          })
        .catch(function(error) {
            console.log(error);
        })
    },
    fetchChannels(){
      var self = this;
      // fill in availableChannels object with API calls
      // self.availableChannels = { basicChannels: [], extraChannels: [], dma: ''},

      function handleErrors(response) {
        if (!response.ok) {
            throw Error(response.statusText);
        }
        return response;
      }

      fetch('https://api.fubo.tv/v3/plan-manager/plans')
        .then(handleErrors)
        .then(function (response) {
            return response.json();
        })
        .then(function (responseObject) {
          var responseData = responseObject.data;
          if (responseData && responseData.length > 0) {
              // basic package is first in response
              self.availableChannels.basicChannels = responseData[0].default_package.channels;
              self.availableChannels.basicCount = self.availableChannels.basicChannels.length;

              console.log('fubo Basic channels are:')
              console.log(self.availableChannels.basicChannels);

              // if more than one item in response array, second item includes fubo extra
              if ( responseData.length > 1 && responseData[1].default_package ) {
                  var extraCount = responseData[1].default_package.channels.length - self.availableChannels.basicChannels.length;
                  self.availableChannels.extraChannels = responseData[1].default_package.channels.slice(0,extraCount);
                  self.availableChannels.extraCount = self.availableChannels.extraChannels.length;
                  console.log('fubo Plus channels are:')
                  console.log(self.availableChannels.extraChannels);
              } else {
                  console.log('No additional fubo Plus channels available')
              }
          } 
          else {
              throw Error('No channels available.')
          }   
          })
          .catch(function(error) {
              console.log(error);
              // fetch location-agnostic US channel package
              fetch('https://www.fubo.tv/lp/tools/channelfetcher/default.json')
                  .then(handleErrors)
                  .then(function (response) {
                      return response.json();
                  })
                  .then(function (responseObject) {
                      self.availableChannels.basicChannels = responseObject;
                      self.availableChannels.basicCount = responseObject.length;
                      console.log('default basic channels data');
                      console.log(self.availableChannels.basicChannels);
                  })
                  .then(function () {
                      fetch('https://www.fubo.tv/lp/tools/channelfetcher/default_extra.json')
                      .then(handleErrors)
                      .then(function (response) {
                          return response.json();
                      })
                      .then(function (responseObject) {
                          self.availableChannels.extraChannels = responseObject;
                          self.availableChannels.extraCount = responseObject.length;
                          console.log('default plus channels data');
                          console.log(self.availableChannels.extraChannels);
                      })
                  })
                  .catch(function(error) {
                        console.log(error);
                  })
          })
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
    this.fetchLocation();
    this.fetchChannels();
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

