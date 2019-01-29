<template>
  <div id="zip" class="section section--zip">
    <div class="section-wrapper">
      <div class="message">
        <h1>
          109 channels
          <span>available in the</span>
          <span class="noWrap">New York Area</span>
        </h1>

        <!-- <div class="zip-update">
          <p>Based on your zip code of 10013</p>
          <a href="">Not your zip?</a>
        </div> -->

        <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
        <h4 class="subCTA"> No contract. Cancel any time.</h4>
      </div>

      <div id="options" class="options">
        <div class="option">
          <div class="header">
            <h3>fubo&nbsp;<span> <span class="hideMob">&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span class="noWrap">90 channels</span></span></h3>

            <div class="detail">
              <div class="price">
                <span class="currency">$</span>
                <div class="dollars">44</div>
                <div class="cents">99</div>
              </div>
              <div class="first-month">
                per month
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="item" v-for="channel in fuboBasicNY" v-bind:key="channel.name">
              <img class="logo" :src="channel.logoSrc" :alt="channel.name" :title="channel.name">
            </div>
          </div>
        </div>

        <div class="option">
          <div class="header">
            <h3>fubo Extra&nbsp;<span> <span class="hideMob">&nbsp;&nbsp;|&nbsp;&nbsp;</span> <span class="noWrap">109 channels&nbsp;</span> </span></h3>

            <div class="detail">
              <div class="price">
                <span class="currency">$</span>
                <div class="dollars">49</div>
                <div class="cents">99</div>
              </div>
              <div class="first-month">
                per month
                
              </div>
            </div>
          </div>

          <div class="grid">
            <div class="item fuboextra text">
              <span>All channels above&nbsp;plus&hellip;</span>
            </div>
            <div class="item" v-for="channel in fuboPlusNY" v-bind:key="channel.name">
              <img class="logo" :src="channel.logoSrc" :alt="channel.name" :title="channel.name">
            </div>
          </div>
        </div>

        <div class="option option--addons">
          <div class="addon-group">
            <div class="header">
              <h3>Channel Add-ons</h3>
            </div>

            <div class="detail">
              <p>Customize your channel lineup with the sports &amp; TV you love.</p>
              
              <div class="logoContain">
                <div class="logos">
                  <div class="item" v-for="channel in addOnChannels" v-bind:key="channel.name">
                      <img class="logo" :src="channel.logoSrc" :alt="channel.name" :title="channel.name">
                  </div>
                </div>
              </div>     
            </div>
          </div>

          <div class="addon-group">
            <div class="header">
              <h3>Feature Add-ons</h3>
            </div>

            <div class="detail">
              <p>Let more people stream and record fuboTV at the same time.</p>
              
              <div class="featuresContain">
                <div class="featureBox">
                  <div class="logo logo--dvr">
                      <img   src="https://fubotv-v3-dev-custom-assets.imgix.net/image_overrides/icon-cloud-dvr-plus.png?w=100&ch=Width&auto=format,compress" alt="DVR Plus" title="DVR Plus">
                  </div>
                  <h2 class="text">
                    Cloud DVR Plus
                  </h2>
                </div>
                <div class="featureBox">
                  <div class="logo logo--family">
                      <img  src="https://fubotv-v3-dev-custom-assets.imgix.net/image_overrides/icon-family-share.png?w=100&ch=Width&auto=format,compress" alt="DVR Plus" title="DVR Plus">
                  </div>
                  <h2 class="text">Family Share</h2>
                </div>
              </div>
            </div>
          </div>

          <div class="addons">
            <!-- <div class="addOnChannels">
              <h3>Channels</h3>
              <p>Customize your channel lineup with the sports &amp; TV you love.</p>
              <div class="logoContain">
                <div class="logos">
                  <div class="item" v-for="channel in addOnChannels" v-bind:key="channel.name">
                      <img class="logo" :src="channel.logoSrc" :alt="channel.name" :title="channel.name">
                  </div>
                </div>
              </div>     
            </div>
            <div class="addOnFeatures">
              <h3>Features</h3>
              <p>Let more people stream and record fuboTV at the same time.</p>
              <div class="featuresContain">
                <div class="featureBox">
                  <div class="logo">
                      <img   src="https://fubotv-v3-dev-custom-assets.imgix.net/image_overrides/icon-cloud-dvr-plus.png?w=100&ch=Width&auto=format,compress" alt="DVR Plus" title="DVR Plus">
                  </div>
                  <h2 class="text">
                    Cloud DVR Plus
                  </h2>
                </div>
                <div class="featureBox">
                  <div class="logo">
                      <img  src="https://fubotv-v3-dev-custom-assets.imgix.net/image_overrides/icon-family-share.png?w=100&ch=Width&auto=format,compress" alt="DVR Plus" title="DVR Plus">
                  </div>
                  <h2 class="text">Family Share</h2>
                </div>
              </div>
            </div> -->
          </div>
        </div>

        <!-- <div class="option option--premium">
          <div class="headlineContain">
            <h3>Add-on channels</h3>
          </div>
          <div class="logoContain">
            <div class="logos">
              <div class="item" v-for="channel in addOnChannels" v-bind:key="channel.name">
                  <img class="logo" :src="channel.logoSrc" :alt="channel.name" :title="channel.name">
              </div>
            </div>
          </div>           
        </div> -->
      </div>
    </div>
  </div>
</template>

<script>
var imgixChannelLogosRoute = 'https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/';
var imgixChannelLogoParams = '?w=100&h=63&fit=fill&fill=solid&auto=format,compress';

export default {
  data () {
    return {
      fuboBasicNY: [
        { name: 'WCBS',
          logoSrc:  imgixChannelLogosRoute + 'wcbs_tv_m.png' + imgixChannelLogoParams
        },
        { name: 'FOX',
          logoSrc:  imgixChannelLogosRoute + 'fox_m.png' + imgixChannelLogoParams
        },
        { name: 'NBC',
          logoSrc: imgixChannelLogosRoute + 'nbc_m.png' + imgixChannelLogoParams
        },
        { name: 'NBC 4K',
          logoSrc: imgixChannelLogosRoute + 'nbc4k_m.png' + imgixChannelLogoParams
        },
        { name: 'YES',
          logoSrc: imgixChannelLogosRoute + 'yes_m.png' + imgixChannelLogoParams
        },
        { name: 'SNY',
          logoSrc: imgixChannelLogosRoute + 'sny_m.png' + imgixChannelLogoParams
        },
        { name: 'MSG',
          logoSrc: imgixChannelLogosRoute + 'msg_m.png' + imgixChannelLogoParams
        },
        { name: 'MSG+',
          logoSrc: imgixChannelLogosRoute + 'msg_plus_m.png' + imgixChannelLogoParams
        },
        { name: 'MSG 2',
          logoSrc: imgixChannelLogosRoute + 'msg_2_m.png' + imgixChannelLogoParams
        },
        { name: 'MSG+ 2',
          logoSrc: imgixChannelLogosRoute + 'msg-plus-2_m.png' + imgixChannelLogoParams
        },
        { name: 'FS1',
          logoSrc: imgixChannelLogosRoute + 'fs1_m.png' + imgixChannelLogoParams
        },
        { name: 'NBCSN',
          logoSrc: imgixChannelLogosRoute + 'nbcsn_m.png' + imgixChannelLogoParams
        },
        { name: 'NFL Network',
          logoSrc: imgixChannelLogosRoute + 'nfl_network_m.png' + imgixChannelLogoParams
        },
        { name: 'NBA TV',
          logoSrc: imgixChannelLogosRoute + 'nba_tv_m.png' + imgixChannelLogoParams
        },
        { name: 'NBCSN 4k',
          logoSrc: imgixChannelLogosRoute + 'nbcsn4k_m.png' + imgixChannelLogoParams
        },
        { name: 'beIN Sports English',
          logoSrc: imgixChannelLogosRoute + 'bein_sports_english_m.png' + imgixChannelLogoParams
        },
        { name: 'PAC 12 Networks',
          logoSrc: imgixChannelLogosRoute + 'pac-12-networks_m.png' + imgixChannelLogoParams
        },
        { name: 'Univision Deportes',
          logoSrc: imgixChannelLogosRoute + 'univision_deportes_m.png' + imgixChannelLogoParams
        },
        { name: 'A&E',
          logoSrc: imgixChannelLogosRoute + 'a_e_m.png' + imgixChannelLogoParams
        },
        { name: 'AMC',
          logoSrc: imgixChannelLogosRoute + 'amc_m.png' + imgixChannelLogoParams
        },
        { name: 'BBC America',
          logoSrc: imgixChannelLogosRoute + 'bbc-america_m.png' + imgixChannelLogoParams
        },
        { name: 'Bravo',
          logoSrc: imgixChannelLogosRoute + 'bravo_m.png' + imgixChannelLogoParams
        },
        { name: 'E',
          logoSrc: imgixChannelLogosRoute + 'e_m.png' + imgixChannelLogoParams
        },
        { name: 'CNN',
          logoSrc: imgixChannelLogosRoute + 'cnn_m.png' + imgixChannelLogoParams
        },
        { name: 'Food Network',
          logoSrc: imgixChannelLogosRoute + 'food_network_m.png' + imgixChannelLogoParams
        },
        { name: 'Fox News',
          logoSrc: imgixChannelLogosRoute + 'fox_news_m.png' + imgixChannelLogoParams
        },
        { name: 'FX',
          logoSrc: imgixChannelLogosRoute + 'fx_m.png' + imgixChannelLogoParams
        },
        { name: 'HGTV',
          logoSrc: imgixChannelLogosRoute + 'hgtv_m.png' + imgixChannelLogoParams
        },
        { name: 'History Channel',
          logoSrc: imgixChannelLogosRoute + 'history_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'MSNBC',
          logoSrc: imgixChannelLogosRoute + 'msnbc_m.png' + imgixChannelLogoParams
        },
        { name: 'National Geographic',
          logoSrc: imgixChannelLogosRoute + 'national_geographic_m.png' + imgixChannelLogoParams
        },
        { name: 'USA',
          logoSrc: imgixChannelLogosRoute + 'usa_m.png' + imgixChannelLogoParams
        },
        { name: 'TNT',
          logoSrc: imgixChannelLogosRoute + 'tnt_m.png' + imgixChannelLogoParams
        },
        { name: 'TBS',
          logoSrc: imgixChannelLogosRoute + 'tbs_m.png' + imgixChannelLogoParams
        },
        { name: 'beIN Sports Spanish',
          logoSrc: imgixChannelLogosRoute + 'bein_sports_spanish_m.png' + imgixChannelLogoParams
        },
        { name: 'CBS Sports Network',
          logoSrc: imgixChannelLogosRoute + 'cbs_sn_m.png' + imgixChannelLogoParams
        },
        { name: 'Big Ten Network',
          logoSrc: imgixChannelLogosRoute + 'big_ten_m.png' + imgixChannelLogoParams
        },
        { name: 'The Golf Channel',
          logoSrc: imgixChannelLogosRoute + 'the_golf_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'Fox Deportes',
          logoSrc: imgixChannelLogosRoute + 'fox_deportes_m.png' + imgixChannelLogoParams
        },
        { name: 'FS2',
          logoSrc: imgixChannelLogosRoute + 'fs2_m.png' + imgixChannelLogoParams
        },
        { name: 'Olympic Channel',
          logoSrc: imgixChannelLogosRoute + 'olympic_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'Eleven Sports',
          logoSrc: imgixChannelLogosRoute + 'eleven_sports_m.png' + imgixChannelLogoParams
        },
        { name: 'Fox Soccer Plus',
          logoSrc: imgixChannelLogosRoute + 'fox_soccer_plus_m.png' + imgixChannelLogoParams
        },
        { name: 'FXM',
          logoSrc: imgixChannelLogosRoute + 'fxm_m.png' + imgixChannelLogoParams
        },
        { name: 'FXX',
          logoSrc: imgixChannelLogosRoute + 'fxx_m.png' + imgixChannelLogoParams
        },
        { name: 'Hallmark Channel',
          logoSrc: imgixChannelLogosRoute + 'hallmark_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'Hallmark Movies & Mysteries',
          logoSrc: imgixChannelLogosRoute + 'hallmark_movies_m.png' + imgixChannelLogoParams
        },
        { name: 'IFC',
          logoSrc: imgixChannelLogosRoute + 'ifc_m.png' + imgixChannelLogoParams
        },
        { name: 'Lifetime',
          logoSrc: imgixChannelLogosRoute + 'lifetime_m.png' + imgixChannelLogoParams
        },
        { name: 'Lifetime Movie Network',
          logoSrc: imgixChannelLogosRoute + 'lifetime_movie_network_m.png' + imgixChannelLogoParams
        },        
        { name: 'Nat Geo Wild',
          logoSrc: imgixChannelLogosRoute + 'nat_geo_wild_m.png' + imgixChannelLogoParams
        },
        { name: 'Oxygen',
          logoSrc: imgixChannelLogosRoute + 'oxygen_m.png' + imgixChannelLogoParams
        },
        { name: 'Sundance',
          logoSrc: imgixChannelLogosRoute + 'sundance_m.png' + imgixChannelLogoParams
        },        
        { name: 'SyFy',
          logoSrc: imgixChannelLogosRoute + 'syfy_m.png' + imgixChannelLogoParams
        },
        { name: 'Tru',
          logoSrc: imgixChannelLogosRoute + 'tru_m.png' + imgixChannelLogoParams
        },
        { name: 'TCM',
          logoSrc: imgixChannelLogosRoute + 'tcm_m.png' + imgixChannelLogoParams
        },        
        { name: 'Univision',
          logoSrc: imgixChannelLogosRoute + 'univision_m.png' + imgixChannelLogoParams
        },
        { name: 'Telemundo',
          logoSrc: imgixChannelLogosRoute + 'telemundo_m.png' + imgixChannelLogoParams
        },
        { name: 'WLNY 55',
          logoSrc: imgixChannelLogosRoute + 'wlny_55_m.png' + imgixChannelLogoParams
        },        
        { name: 'Travel Channel',
          logoSrc: imgixChannelLogosRoute + 'travel_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'CBSN',
          logoSrc: imgixChannelLogosRoute + 'cbs_news_m.png' + imgixChannelLogoParams
        },
        { name: 'Cartoon Network',
          logoSrc: imgixChannelLogosRoute + 'cartoon-network_m.png' + imgixChannelLogoParams
        },        
        { name: 'CNBC',
          logoSrc: imgixChannelLogosRoute + 'cnbc_m.png' + imgixChannelLogoParams
        },
        { name: 'CNBC World',
          logoSrc: imgixChannelLogosRoute + 'cnbc_world_m.png' + imgixChannelLogoParams
        },
        { name: 'Cheddar Business News',
          logoSrc: imgixChannelLogosRoute + 'Cheddar-Busness-News_m.png' + imgixChannelLogoParams
        },        
        { name: 'Fox Business',
          logoSrc: imgixChannelLogosRoute + 'fox_business_m.png' + imgixChannelLogoParams
        },
        { name: 'The Weather Channel',
          logoSrc: imgixChannelLogosRoute + 'the_weather_channel_m.png' + imgixChannelLogoParams
        },
        { name: 'HLN',
          logoSrc: imgixChannelLogosRoute + 'hln_m.png' + imgixChannelLogoParams
        },        
        { name: 'Local Now',
          logoSrc: imgixChannelLogosRoute + 'local_now_m.png' + imgixChannelLogoParams
        },        
        { name: 'Galavision',
          logoSrc: imgixChannelLogosRoute + 'galavision_m.png' + imgixChannelLogoParams
        },
        { name: 'NBC Universo',
          logoSrc: imgixChannelLogosRoute + 'nbc_universo_m.png' + imgixChannelLogoParams
        },
        { name: 'Unimas',
          logoSrc: imgixChannelLogosRoute + 'unimas_m.png' + imgixChannelLogoParams
        },        
        { name: 'Telexitos',
          logoSrc: imgixChannelLogosRoute + 'telexitos_m.png' + imgixChannelLogoParams
        },
        { name: 'COZI TV',
          logoSrc: imgixChannelLogosRoute + 'cozi_tv_m.png' + imgixChannelLogoParams
        },
        { name: 'Fuse',
          logoSrc: imgixChannelLogosRoute + 'fuse_m.png' + imgixChannelLogoParams
        },  
        { name: 'FYI',
          logoSrc: imgixChannelLogosRoute + 'fyi_m.png' + imgixChannelLogoParams
        },
        { name: 'Pop',
          logoSrc: imgixChannelLogosRoute + 'pop_m.png' + imgixChannelLogoParams
        },
        { name: 'Smithsonian',
          logoSrc: imgixChannelLogosRoute + 'smithsonian_m.png' + imgixChannelLogoParams
        },        
        { name: 'Universal Kids',
          logoSrc: imgixChannelLogosRoute + 'universal_kids_m.png' + imgixChannelLogoParams
        },  
        { name: 'Viceland',
          logoSrc: imgixChannelLogosRoute + 'viceland_m.png' + imgixChannelLogoParams
        },
        { name: 'WE TV',
          logoSrc: imgixChannelLogosRoute + 'we-tv_m.png' + imgixChannelLogoParams
        },
        { name: 'beIN Sports 4',
          logoSrc: imgixChannelLogosRoute + 'bein_connect_4_m.png' + imgixChannelLogoParams
        },  
        { name: 'beIN Sports 5',
          logoSrc: imgixChannelLogosRoute + 'bein_connect_5_m.png' + imgixChannelLogoParams
        },       
        { name: 'beIN Sports 6',
          logoSrc: imgixChannelLogosRoute + 'bein_connect_6_m.png' + imgixChannelLogoParams
        },       
        { name: 'beIN Sports 7',
          logoSrc: imgixChannelLogosRoute + 'bein_connect_7_m.png' + imgixChannelLogoParams
        },  
        { name: 'beIN Sports 8',
          logoSrc: imgixChannelLogosRoute + 'bein_connect_8_m.png' + imgixChannelLogoParams
        },         
        { name: 'beIN La Liga',
          logoSrc: 'https://fubotv-v3-dev-custom-assets.imgix.net/team_logos/' + 'bein-laliga_m.png' + imgixChannelLogoParams
        },     
        { name: 'fuboTV Network',
          logoSrc: imgixChannelLogosRoute + 'fubotv_network_m.png' + imgixChannelLogoParams
        }

      ],
      fuboPlusNY: [
        { name: 'Cooking Channel',
          logoSrc: imgixChannelLogosRoute + 'cooking-channel_m.png' + imgixChannelLogoParams
        },
        { name: 'DIY',
          logoSrc: imgixChannelLogosRoute + 'diy_m.png' + imgixChannelLogoParams
        },  
        { name: 'Game Show Network',
          logoSrc: imgixChannelLogosRoute + 'game-show-network_m.png' + imgixChannelLogoParams
        },
        { name: 'BBC News',
          logoSrc: imgixChannelLogosRoute + 'bbc-news_m.png' + imgixChannelLogoParams
        },
        { name: 'Hallmark Drama',
          logoSrc: imgixChannelLogosRoute + 'hallmark-drama_m.png' + imgixChannelLogoParams
        },        
        { name: 'Sony Movie Channel',
          logoSrc: imgixChannelLogosRoute + 'sony-movie-channel_m.png' + imgixChannelLogoParams
        },
        { name: 'People TV',
          logoSrc: imgixChannelLogosRoute + 'peopletv_m.png' + imgixChannelLogoParams
        },
        { name: 'Stadium',
          logoSrc: imgixChannelLogosRoute + 'stadium_m.png' + imgixChannelLogoParams
        },  
        { name: 'Insp',
          logoSrc: imgixChannelLogosRoute + 'insp_m.png' + imgixChannelLogoParams
        },  
        { name: 'Revolt',
          logoSrc: imgixChannelLogosRoute + 'revolt_m.png' + imgixChannelLogoParams
        },  
        { name: 'Boomerang',
          logoSrc: imgixChannelLogosRoute + 'boomerang_m.png' + imgixChannelLogoParams
        },  
        { name: 'CNN International',
          logoSrc: imgixChannelLogosRoute + 'cnn-international_m.png' + imgixChannelLogoParams
        },  
        { name: 'Xite',
          logoSrc: imgixChannelLogosRoute + 'xite_m.png' + imgixChannelLogoParams
        },  
        { name: 'Stadium 1',
          logoSrc: imgixChannelLogosRoute + 'stadium-1_m.png' + imgixChannelLogoParams
        },  
        { name: 'Stadium 2',
          logoSrc: imgixChannelLogosRoute + 'stadium-2_m.png' + imgixChannelLogoParams
        }, 
        { name: 'Stadium 3',
          logoSrc: imgixChannelLogosRoute + 'stadium-3_m.png' + imgixChannelLogoParams
        }, 
        { name: 'Xite Rock',
          logoSrc: imgixChannelLogosRoute + 'xite-rock_m.png' + imgixChannelLogoParams
        },  
        { name: 'Xite Vibe',
          logoSrc: imgixChannelLogosRoute + 'xite-vibe_m.png' + imgixChannelLogoParams
        },  
        { name: 'BabyTV',
          logoSrc: imgixChannelLogosRoute + 'babytv_m.png' + imgixChannelLogoParams
        },
      ],
      addOnChannels: [
        { name: 'NFL RedZone',
          logoSrc: imgixChannelLogosRoute + 'nfl_redzone_m.png' + imgixChannelLogoParams
        },
        { name: 'Showtime',
          logoSrc: imgixChannelLogosRoute + 'showtime_brand_m.png' + imgixChannelLogoParams
        },
        { name: 'RAI Italia',
          logoSrc: imgixChannelLogosRoute + 'rai-italia_m.png' + imgixChannelLogoParams
        },
        { name: 'NBA League Pass',
          logoSrc: imgixChannelLogosRoute + 'nba-league-pass_m.png' + imgixChannelLogoParams
        },
        { name: 'AMC Premiere',
          logoSrc: imgixChannelLogosRoute + 'amc-premiere_m.png' + imgixChannelLogoParams
        },
        { name: 'FX+',
          logoSrc: imgixChannelLogosRoute + 'FXPlus_m.png' + imgixChannelLogoParams 
        }
      ],
    }
  }
}
</script>

<style lang="scss" scoped>
@import '../scss/app';

.section {
  &-wrapper {
    display: flex;
    align-items: flex-start;
    width: 100%;
    max-width: 1600px;
    margin: 0 auto;

    @media only screen and (min-width: 1281px) {
      .message {
        position: -webkit-sticky !important;
        position: sticky !important;
        top: 100px;
        text-align: left !important;
        padding: 50px 0 0 50px !important;
      }
    }

    @media only screen and (max-width: 1280px) {
      flex-direction: column;
      padding: 20px 5%;
    }
  }

  &--zip {
    display: flex;
    position: relative;
    // align-items: center;
    // justify-content: space-between;
    padding: 50px 30px;
    background: $color-site-bg;

    

    @media only screen and (max-width: 710px) {
        
    }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-zip.jpg');
      background-size: cover;
      mix-blend-mode: screen;
    }

    .message {
      position: relative;
      z-index: 10;
      text-align: center;
      max-width: 400px;
      padding-top: 10px;
      
      @media only screen and (max-width: 1024px) {
        text-align: center;
        max-width: 100%;
        margin-top: 25px;
      }

      @media only screen and (max-width: 710px) {
          
      }
        

      h1 {
        line-height: 45px;

        @media only screen and (max-width: 1024px) {
          font-size: 40px;
          line-height: 42px;
          display: inline-block;
        }

        @media only screen and (max-width: 900px) {
          font-size: 36px;
          line-height: 38px;
        }

        @media only screen and (max-width: 825px) {
          display: block;
        }

        @media only screen and (max-width: 710px) {
            
        }
        
      }

      span:not(.noWrap) {
        display: block;
        font-size: 20px;
        opacity: .6;

        @media only screen and (max-width: 1024px) {
          display: inline-block;
          font-size: 18px;
          line-height: 45px;
          vertical-align: middle;
          margin: 0 10px;
        }

        @media only screen and (max-width: 825px) {
          display: block;
        }

        @media only screen and (max-width: 710px) {
         
        }
      }

      span.noWrap {
        @media only screen and (max-width: 1024px) {
          display: inline-block;
        }
        @media only screen and (max-width: 710px) {
         
        }
        
      }
    }

    .zip-update {
      display: flex;
      align-items: center;
      justify-content: space-between;
      margin: 20px 0 0;
      font-weight: 700;

      p {
        margin: 0;
      }

      a {
        color: $color-blue;
      }
    }

    .btn {
      margin: 50px auto 10px auto;
      
      @media only screen and (max-width: 1024px) {
        margin: 30px auto 10px auto;
      }  

      @media only screen and (max-width: 710px) {   
      }
      
    }
          

    .options {
      position: relative;
      z-index: 10;
      width: 90%;
      margin: 0 auto;

      @media only screen and (max-width: 1024px) {
        width: 100%;
      } 

      @media only screen and (max-width: 710px) {   
      }
           
      
      .option {
        max-width: 1200px;
        margin: 0 auto;
        margin-bottom: 50px;

        .addon-group {
          width: calc(50%);
          
          &:first-child {
            padding-right: 20px;
          }

          &:last-child {
            padding-left: 40px;
          }

          .detail {
            display: flex;
            flex-direction: column;
            border-top: 0;
            min-height: 100px;
            margin: 0;
            padding: 20px;
            border: 2px solid rgba($color-light-grey, .5);

            p {
              margin-top: 0;
            }

            .logoContain, .featuresContain {
              width: 100%;
            }

            .logos {
              display: flex;
              width: 100%;
              padding: 5px 0;

              @media only screen and (max-width: 710px) {   
                flex-wrap: wrap;
              }
            }

            .featuresContain {
              display: flex;
              justify-content: space-around;

              .text {
                font-size: 18px;
              }

              .logo--family img {
                width: 70px;
              }

              .logo--dvr img {
                width: 80px;
              }
            }

            .logoContain {
              .item {
                @media only screen and (max-width: 600px) {   
                  width: 65px;
                  padding: 10px 30px;
                }
              }
            }

            .featureBox {
              display: flex;
              align-items: center;
              height: 50px;
              overflow: hidden;
              margin-left: -10px;

              @media only screen and (max-width: 710px) {   
                flex-direction: column;
                height: auto;
                overflow: visible;
                text-align: center;

                .logo {
                  height: 76px;
                }

                .text {
                  font-size: 16px;
                }
              }
            }
          }
        }

        &--addons {
          display: flex;
          justify-content: space-between;

          @media only screen and (max-width: 1024px) {   
            flex-direction: column;

            .addon-group {
              width: 100%;
              margin-bottom: 50px;

              &:last-child {
                margin-bottom: 0;
              }
            }
          }
          
          .header {
            background: rgba($color-light-grey, .5);
            min-height: 40px;
          }
          
          h3 {
            font-size: 20px;
            font-weight: 700;

            @media only screen and (max-width: 1024px) {
            } 

            @media only screen and (max-width: 710px) {   
            }
          }
        }

        &--premium {
          display: block;
          width: 100%;
          margin-top: 50px;

          @media only screen and (max-width: 1024px) {
            margin: 25px 0;
          }  

          @media only screen and (max-width: 710px) {   
          
          }

          .headlineContain {
            display: inline-block;
            width: 35%;
            text-align: left;

            @media only screen and (max-width: 1024px) {
              width: 100%;
              text-align: center;
              margin-bottom: 10px;
            }  

            @media only screen and (max-width: 710px) {   
            }
            
            h3 {
              font-size: 22px;
              font-weight: 700;

              @media only screen and (max-width: 1024px) {
              } 

              @media only screen and (max-width: 710px) {   
              }
            }
          }

          .logoContain {
            display: inline-block;
            text-align: right;
            width: 62%;
            margin-left: 2.5%;

            @media only screen and (max-width: 1024px) {
              width: 100%;
              margin: 15px auto;
            }  
            @media only screen and (max-width: 710px) {   
            }
            

            .logos {
              display: flex;
            }
            .logos.grid {
              border: 0;
            }

            .item {
              transform: scale(1.9);

              &:hover {
                z-index: 50;
                transform: scale(3);
                background: $color-site-bg;
                box-shadow: 0 5px 10px rgba(black, .8);
                border-radius: 2px;
              }
            }
          }
        }
      }
    }

    .header {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 6px 15px;
      border-radius: 6px 6px 0 0;
      background: $color-blue;
      min-height: 60px;

      h3 {
        font-weight: 700;
        font-size: 24px;
         @media only screen and (max-width: 1024px) {
         }  
          @media only screen and (max-width: 710px) {
            font-size: 20px;
            line-height: 25px;   
          }
        


      }

      span {
        font-weight: normal;
        span {
          display: inline-block;
        }
      }
    }

    .detail {
      display: flex;
      align-items: center;
      margin-left: 15px;

      .price {
        display: flex;
        position: relative;
        margin-right: 10px;
      }

      .currency {
        position: relative;
        top: 8px;
        right: 3px;
        font-weight: 700;
      }
      
      .dollars {
        font-size: 50px;
        font-weight: 700;
        margin: 0;
      }

      .cents {
        position: relative;
        top: 8px;
        font-weight: 700;
        font-size: 20px;
      }
    }

    .first-month {
      font-weight: 500;
      em {
        opacity: .8;
        font-style: normal;
      }
    }

    .grid {
      display: grid;
      grid-template-columns: repeat(auto-fill, minmax(50px, 1fr));
      justify-content: start;
      gap: 30px 30px;
      padding: 20px;
      border: 3px solid rgba($color-blue, .5);
      border-top: 0;
      border-radius: 0 0 6px 6px;

      @media only screen and (max-width: 600px) {
        gap: 20px 20px;
      }            
    }

    .item.fuboextra:first-child {
      grid-column: 1 / 5;
    }
    
    .item {
      display: flex;
      align-items: center;
      justify-content: center;
      position: relative;
      width: 50px;
      height: auto;
      margin: 10px auto;
      transform: scale(2);
      transition: all .15s $ease-out-quad;
      overflow: hidden;

      @media only screen and (max-width: 600px) {
        width: 55px;
        margin: 10px auto;
        transform: scale(1.8);
      }

      &:hover {
        z-index: 50;
        transform: scale(3);
        background: $color-site-bg;
        box-shadow: 0 5px 10px rgba(black, .8);
        border-radius: 2px;
      }

      &--label {
        width: auto;
        transform: none;
      }

      .logo {
        width: 60%;
      }
    }
    .item.text {
      width: 150px;
      span {
        font-size: 12px;
        font-weight: 600;

      }
    }

    .addOnContain {
      display: flex;
      justify-content: space-around;
      border: 3px solid rgba($color-blue, .5);
      border-top: 0;
      border-radius: 0 0 6px 6px;
      min-height: 300px;
        @media only screen and (max-width: 710px) {
          display: block;
        }

      h3 {
          font-size: 24px;
          line-height: 1;
      }
      p {
        padding: 0 5%;
      }

      .addOnChannels {
        // display: flex;
        // align-items: center;
        // justify-content: flex-start;
        // flex-direction: column;
        width: calc( 50% - 40px);
        text-align: center;
        margin: 30px 5%;
        @media only screen and (max-width: 1024px) {
        }  
        @media only screen and (max-width: 710px) {
          width: 90%;
          display: inline-block;
        }

        .logoContain {

          .logos {
            display: grid;
            grid-template-columns: repeat(auto-fill, minmax(75px, 1fr));
            justify-content: start;
            gap: 10px 30px;
            margin-top: 20px;

            .item {
              display: flex;
              align-items: center;
              justify-content: center;
              position: relative;
              width: 65px;
              height: 60px;
              margin: 10px auto;
              transition: all .15s $ease-out-quad;
              overflow: hidden;

            }
          }
        }
      }

      p {
        font-size: 18px;
      }

      .addOnFeatures {
        width: calc(50% - 40px);
        text-align: center;
        margin: 30px 5%;
        @media only screen and (max-width: 1024px) {
         }  
        @media only screen and (max-width: 710px) {
          width: 90%;
          display: inline-block;
          margin: 15px 5%;
        }

        img {
          width: 100%;
          max-width: 100px;
        }

        .featuresContain {
          display: flex;
          align-items: flex-start;
          justify-content: center;
          align-items: center;
          margin: 10px 0;
          border-radius: 5px;

          .featureBox {
            width: calc(50% - 20px);
            margin-left: 10px;
            margin-right: 10px;    
          }

          .text {              
            padding: 0 0 20px 0;
            font-size: 20px;
            color: #FFFFFF;
            line-height: 1;
            font-weight: 600;
            margin-top: -10px;

            @media only screen and (max-width: 1300px) {
              font-size: 18px;
            } 
          }
        }
      }
    }
  }
}
</style>