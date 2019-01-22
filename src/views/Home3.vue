<template>
  <div id="home" class="home">
    
    
    <div id="intro" class="section section--intro">
      <!-- <transition name="fade">
        <div class="scroll-hint" v-if="showScrollHint === true">
          <p>Scroll to explore features</p>
          <div class="icon-scroll">

          </div>
        </div>
      </transition> -->

      <div class="frame" id="heroFrame">
        <div class="message" id="heroMessage">
          <h1>Goodbye Cable TV</h1>
          <h2>Hello live sports &amp; TV with&nbsp;fuboTV</h2>
          <p>
            No contract. No hidden fees. <span class="noWrap">Only $44.99/mo.</span>
          </p>
        </div>

        <div class="visual">
          <div class="tv" id="heroTV">
            <video class="video" src="../assets/video2.mp4" playsinline loop muted autoplay></video>
            <img class="device" src="../assets/tv.png" alt="">
          </div>

          <div class="reflection" id="heroReflection">
            <img src="../assets/reflection.png" alt="">
          </div>

          <div class="actions" id="heroAction">
            <button class="btn btn--ghost" v-scroll-to="'#zip'">See your channel lineup</button>
          </div>
        </div>
      </div>
    </div>

    <div id="zip" class="section section--zip">
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

      <div class="options">
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

        <div class="option">
          <div class="header">
            <h3>Add-ons</h3>

            <div class="detail">
              <!-- text here -->
            </div>
          </div>
          <div class="addOnContain">
            <div class="addOnChannels">
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
                
            </div>
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

    <div id="benefits" class="section section--benefits">
      <div class="frame">
        <div class="message">
          <h1>
            How is fubotV <span class="noWrap">better than cable&nbsp;TV?</span>
          </h1> 
         
        </div>

        <div class="features">
          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-save.svg" alt="">
            </div>
            <div class="copy-box">
              <h3>Big savings</h3>
              <p>
                fuboTV has the live sports and TV you love for half the cost of similar cable packages.
              </p>
            </div>
          </div>

          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-nocontract.png" alt="">
            </div>
            <div class="copy-box">
              <h3>No contracts, <span class="noWrap">no hidden fees</span></h3>
              <p>
                What you see is what you pay. Want to cancel or take a break? No problem. 
              </p>
            </div>
          </div>

          <div class="features-item">
            <div class="icon-box">
              <img src="../assets/icon-clouddvr.svg" alt="">
            </div>
            <div class="copy-box">
              <h3>Cloud DVR included free</h3>
              <p>
                Get 30 hours free. Record what you want and watch it on all your devices. 
              </p>
            </div>
          </div>
        </div>

        <div class="actions">
          <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free trial</a>
        </div>
        <h4 class="subCTA"> No contract. Cancel any time.</h4>
      </div>
    </div>

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

    <div id="devices" class="section section--devices">
      <div class="message">
        <h1>YOUR&nbsp;SCREENS. <span class="hideMob"><br></span>YOUR&nbsp;TERMS. 
          
        </h1>
        <p>
          Download the free fuboTV apps for all your devices. Watch what you want, when you want.
        </p>
        <div class="deviceIcons">
          <img src="../assets/devices1.png">
          <img src="../assets/devices2.png">
        </div>

        <div class="actions">
        <a href="https://fubo.tv/signup" class="btn btn--cta-white">Start your free&nbsp;trial</a>
        <h4 class="subCTA"> No contract. Cancel any time.</h4>

        </div>
      </div>


      <div class="visual">
        <img src="../assets/devices.png" alt="">
      </div>
    </div>
    
    <div id="quote" class="section section--quote">
      <div class="message">
        <h3>
          <img class="quote-open" src="../assets/quote-open.svg" alt="">
          fuboTV offers an impressive lineup of 75+ sports and entertainment channels, multiplatform support, and dead-simple DVR functionality.
          <img class="quote-close" src="../assets/quote-close.svg" alt="">
        </h3>

        <p>
          -PC Magazine, 2018
        </p>

        <button href="https://fubo.tv/signup" class="btn btn--cta">Start your free trial</button>
        <h4 class="subCTA"> No contract. Cancel any time.</h4>

        
      </div>
    </div>

    <div id="faq" class="section section--faq">
      <div class="message">
        <h1>
          Frequently Asked questions
        </h1>
      </div>

      <div class="questions">
        <div class="question question--what">
          <h3>What is fuboTV? What do I need to get started?</h3>
          <p>
            fuboTV is a service that broadcasts live TV to your computer, phone or connected TV device (Roku, AppleTV, FireTV). No contracts or cable required. Watch your favorite teams, network shows, news and movies on 100+ channels. All you need is an internet connection with a minimum connection speed of at least 5Mb/s
          </p>
        </div>

        <div class="question question--entertainment">
          <h3>Does fuboTV have entertainment channels like FOX, CBS and NBC?</h3>
          <p>
            Yes, fuboTV has FOX*, CBS*, NBC*, Regional Sports Networks* as well as AMC, CNN, FOX News, MSNBC, beIN, Univision, FX, HGTV, SYFY, USA, Bravo, A&E, Food Network, E!, National Geographic, and History Channel among 100+ other channels. *Regional restrictions apply.
          </p>
        </div>

        <div class="question question--record">
          <h3>Can I record games &amp; shows?</h3>
          <p>
            Yes, every fuboTV account includes 30 hours of Cloud DVR space at no extra charge so you can record your favorite programs. You can hit record from one device, then start watching on another, and finish in another.
          </p>
        </div>

        <div class="question question--contract">
          <h3>Do I have to sign a contract? How can I cancel?</h3>
          <p>
            Unlike cable, fuboTV does not have contracts. You can cancel anytime. There are no fees for cancelling or equipment to return as fuboTV is streamed through the internet.
          </p>
        </div>

        <div class="question question--cost">
          <h3>How much does fuboTV cost? Is there a free trial?</h3>
          <p>
            All new users receive 7 days of free access to fuboTV (unless you opt into a discounted prepay promotional plan). After your trial has ended, your card will be charged a  discounted rate for your first month. Prices vary based on package and selected add-ons.
          </p>
        </div>

        <div class="question question--devices">
          <h3>What devices can I watch fuboTV on?</h3>
          <p>
            You can watch fuboTV on your
          </p>

          <ul>
            <li>
              Your desktop or laptop computer
            </li>
            <li>
              Apple iPhone and iPad
            </li>
            <li>
              Android phone and tablet
            </li>
            <li>
              Roku
            </li>
            <li>
              Amazon FireTV
            </li>
            <li>
              Apple TV
            </li>
            <li>
              Chromecast
            </li>
            <li>
              More devices coming soon
            </li>
          </ul>
        </div>
      </div>
    </div>

    <Footer />
  </div>
</template>

<script>
import Footer from '../components/Footer'
import Carousel from '../components/Carousel'
import Segments from '../components/Segments'

var imgixChannelLogosRoute = 'https://fubotv-v3-dev-custom-assets.imgix.net/station_logos/';
var imgixChannelLogoParams = '?w=100&h=63&fit=fill&fill=solid&auto=format,compress';

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
          category: 'Popular Shows'
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
      // console.log('scrolling...' + window.scrollY)
    }, 
    resizeHandler (e) {
      var scrollTimeout;
      var throttle = 250;
      if (!scrollTimeout) {
          scrollTimeout = setTimeout(function () {
              setTimeout( function(){
                  resizeHero(this)
              }, 50);
              scrollTimeout = null;
          }, throttle);
      }

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
            let sectionTwo = channelCount.getBoundingClientRect().bottom
            return innerHeight - sectionTwo
          }

          function tightenMiddleBottom(pixelsToRemove){
            let spaceBetween = bottomElement.getBoundingClientRect().top - middleElement.getBoundingClientRect().bottom
            pixelsToRemove = pixelsToRemove * -1
            let maxReduction = spaceBetween + 10
            if (pixelsToRemove > maxReduction) {
              if ( middleElement.getBoundingClientRect().width > 500 ) {
                console.log(middleElement.getBoundingClientRect().width);
                middleElement.style.width = middleElement.getBoundingClientRect().width - (pixelsToRemove - maxReduction) + 'px';
                  middleElement.style.maxWidth = '90%';
                bottomSpacer.style.height = bottomSpacer.getBoundingClientRect().height - maxReduction * .9 + 'px';
              }
            } else {
              bottomSpacer.style.height = bottomSpacer.getBoundingClientRect().height - pixelsToRemove + 'px';
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
            console.log(pixelsAboveFold);
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
    // console.log('listening for scroll')
  },
  beforeDestroy () {
    window.removeEventListener('scroll', this.scrollHandler)
    // console.log('stopped listening')
  }
}
</script>

<style lang="scss">
@import '../scss/app';


#home {
  position: relative;
  height: 100vh;
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

  &--intro {
    min-height: auto;
    padding-top: 100px;
    background-color: #14101D;
    @media only screen and (max-width: 710px) {
        padding-top: 125px;
      }

    h1 {
      font-size: 62px;
      line-height: 1;
      

      @media only screen and (max-width: 1024px) {
        font-size: 42px;
        line-height: 52px;
        margin-bottom: -8px;
        font-weight: 800;
      }
      @media only screen and (max-width: 710px) {
        font-size: 32px;
        line-height: 41px;
        margin-bottom: 0;
      }

    }

    .frame {
      overflow: hidden;
    }

    .actions {
      // position: absolute;
      // z-index: 500;
      // bottom: 100px;
      // left: 50%;
      // transform: translate(-50%);
      position: relative;
      z-index: 500;
      transform: none;
      margin-bottom: 20px;
      margin-top: 0;
      transition: all .15s $ease-in-quad;
      // bottom: 150px;
        @media only screen and (max-width: 1024px) {
          margin-top: -15px;
        }
        @media only screen and (max-width: 710px) {
          margin-top: -30px;

        }

      .check-channels {
        padding: 20px 40px;
        border-radius: 4px;
        border: 2px solid white;
        text-transform: uppercase;
        font-weight: 700;
        cursor: pointer;
        transition: all .15s $ease-out-quad;

        &:hover {
          background: white;
          color: $color-site-bg;
        }
      }
    }

    .message {
      margin-bottom: 20px;
      padding: 0 5%;
        @media only screen and (max-width: 710px) {
          margin-bottom: 15px;
        }
    }

    .reflection {
      width: 180%;
      height: 150px;
      margin-top: -100px;
        @media only screen and (max-width: 1024px) {
          width: 250%;
          margin-top: -100px
        }
        @media only screen and (max-width: 710px) {
          margin-top: -100px;
          width: 350%;
        }

      > img {
        display: block;
        width: 100%;
      }
    }

    .visual {
      display: flex;
      flex-direction: column;
      align-items: center;
      justify-content: center;
    }

    .tv {
      position: relative;
      margin: 0 auto;
      max-width: 80vh;
      width: 90%;
      min-width: 100px;
      @media only screen and (max-width: 1024px) {
        max-width: 75vh;
      }
      @media only screen and (max-width: 710px) {
        max-width: 70vh !important;
      }
      @media only screen and (max-width: 440px) {
        max-width: 100% !important;
        width: 300px !important;
      }

      &:after {
        content: "";
        position: absolute;
        width: 92%;
        height: 80%;
        left: 50%;
        top: 50%;
        box-shadow: 0 0 120px #171F60, 0 0 180px 10px #2e3cb6;
        transform: translateX(-50%) translateY(-60%);
      }
      
      .device {
        position: relative;
        z-index: 1;
        display: block;
        width: 100%;
      }

      .video {
        position: absolute;
        z-index: 10;
        left: 50%;
        top: 50%;
        width: 94%;
        transform: translateX(-50%) translateY(-58%);
      }
    }
  }

  &--benefits {
    position: relative;
    align-items: center;
    justify-content: center;
    background: $gradient-blue-purple-light;
    padding: 50px 5%;
     @media only screen and (max-width: 1024px) {
        padding: 20px 0;
      }

    // &:after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background-position: center center;
    //   background-image: url('../assets/bg-benefits.jpg');
    //   background-size: cover;
    //   mix-blend-mode: overlay;
    //   opacity: .3;
    // }

    .message {
      @media only screen and (max-width: 710px) {
          margin-top: 30px;
          padding: 0 5%;
      }

      p {
        @media only screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 23px;
        }
        @media only screen and (max-width: 710px) {
          max-width: 80%;
          margin: 20px auto;
          display: block;
        }

      }
    }
    h1 {
        @media only screen and (max-width: 1024px) {
          font-size: 42px;
          line-height: 52px;
        }
        @media only screen and (max-width: 710px) {
          margin-top: 30px;
          font-size: 36px;
          line-height: 38px;
        }
      }


    .features {
      display: flex;
      padding-top: 50px;
      justify-content: center;
        @media only screen and (max-width: 710px) {
          display: block;
          padding-top: 0px;
        }

      p {
        @media only screen and (max-width: 1024px) {
          font-size: 16px;
          line-height: 23px;
        }
        @media only screen and (max-width: 710px) {
          font-size: 14px;
          line-height: 23px;
        }
      }

      h3 {
        font-size: 21px;
        color: #FFF680;

        @media only screen and (max-width: 1024px) {
          font-size: 18px;
          line-height: 23px;
        }
        @media only screen and (max-width: 710px) {
          font-size: 16px;
          line-height: 21px;
        }
      }
    }

    .features-item {
      max-width: 360px;
      padding: 0 20px;
      text-align: center;
        @media only screen and (max-width: 710px) {
          display: flex;
          flex-direction: row;
          justify-content: center;
          align-items: center; 
          text-align: left;
          max-width: 100%;
          margin: 30px 0;
        }

      img {
        margin-bottom: 20px;
        @media only screen and (max-width: 710px) {
          width: 70%;
          margin-right: auto;
          margin-left: auto;
        }
      }
      &:nth-child(2) img {
        @media only screen and (max-width: 710px) {
          width: 100%;
          max-width: 147px;
        }
      }
      

      p {

        @media only screen and (max-width: 1024px) {
          max-width: 100%
        }

      }
    }

    .actions {
      margin: 30px auto 10px auto;
    }

    .icon-box {
      display: flex;
      align-items: center;
      justify-content: center;
      height: 100px;

      @media only screen and (max-width: 710px) {
          display: flex;
          width: 33%;
          margin-right: 10px;
      }
    }

    .copy-box {
      @media only screen and (max-width: 710px) {
          display: inline-block;
          width: 66%;
        }
    }

  }

  &--livenow {
    position: relative;
    align-items: center;
    justify-content: start;
    flex-direction: column;
    background: $gradient-blue-purple-dark;
    overflow: hidden;

    // &:after {
    //   content: '';
    //   position: absolute;
    //   top: 0;
    //   left: 0;
    //   width: 100%;
    //   height: 100%;
    //   background-position: center center;
    //   background-size: cover;
    //   background-image: url('../assets/bg-live-shows.jpg');
    //   mix-blend-mode: multiply;
    //   opacity: .8;
    // }

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

  &--zip {
    display: block;
    // position: relative;
    // align-items: center;
    // justify-content: space-between;
    padding: 50px;
    background: $color-site-bg;
    @media only screen and (max-width: 1024px) {
      display: block;
      padding: 25px 5%;
    }
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
          margin-top: 30px;
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
      min-height: 74px;

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
              margin: 10px 0;
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

  &--quote {
    position: relative;
    align-items: center;
    justify-content: center;
    min-height: 300px;
    padding: 50px 0;
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

