<template>
  <div class="footer">
    <div class="main">
      <div class="links">
        <div class="nav">
          <a href="mailto:advertising@fubo.tv" target="_blank">Advertise</a>
          <a href="https://boards.greenhouse.io/fubotv" target="_blank">Careers</a>
          <a href="https://www.fubo.tv/lp/affiliate/" target="_blank">Become an Affiliate</a>
          <a href="mailto:press@fubo.tv" target="_blank">Press Inqiuries</a>
          <a href="https://support.fubo.tv/hc" target="_blank">Help Center</a>
        </div>

        <p class="description hideMob">
          fuboTV is a sports-centric Internet TV streaming service with the world's most popular live sports and entertainment content. The service offers access to national and regional networks via TVs, tablets, mobile devices, and desktop computers.
        </p>
      </div>


      <div class="social">
        <div class="social-link">
          <a href="https://www.facebook.com/fuboTV" target="_blank"> <img src="../assets/icon-facebook.svg" alt="Facebook"></a>
        </div>
        <div class="social-link">
          <a href="https://twitter.com/fuboTV" target="_blank"><img src="../assets/icon-twitter.svg" alt="Twitter"></a>
        </div>
        <div class="social-link">
          <a href="https://www.instagram.com/fubotv/" target="_blank"><img src="../assets/icon-instagram.svg" alt="Instagram"></a>
        </div>
      </div>
    </div>
      <p class="description showMob">
          fuboTV is a sports-centric Internet TV streaming service with the world's most popular live sports and entertainment content. The service offers access to national and regional networks via TVs, tablets, mobile devices, and desktop computers.
      </p>

    <div class="secondary">
      <p class="copyright">
        © 2019 fuboTV Inc.
      </p>
      
      <div class="legal">
        <a href="https://www.fubo.tv/documents/USA/terms-of-service" target="_blank">Terms</a>
        <a href="https://www.fubo.tv/documents/USA/privacy-policy" target="_blank">Privacy</a>
        <a href="https://www.fubo.tv/documents/USA/cookie-policy" target="_blank">Cookie Policy</a>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  
}
</script>

<style lang="scss" scoped>
@import '../scss/app';

.footer {
  padding: 30px 20px;
  color: white;
  background: $color-footer;

  .main {
    display: flex;
    align-items: flex-start;
    justify-content: space-between;
    width: 100%;

    .links {
      @media only screen and (max-width: 710px) {   
        width: 66%
      }
      .nav {
        
        a {
          margin-right: 20px;
          font-weight: 700;
          font-size: 14px;
          text-decoration: none;
          @media only screen and (max-width: 710px) {   
            font-size: 18px;
            line-height: 1.25;
            padding: 10px 0;
            display: block;
          }

        }
      }

      .description {
        max-width: 550px;
        margin: 20px 0 40px;
        font-size: 14px;
        opacity: .8;
      }

    }
    
  }

  .description.showMob {
    display: none;
    @media only screen and (max-width: 710px) {   
        display: block;
    }
  }


  .legal {
    text-align: right;
    a {
      margin-left: 20px;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
    }
  }

  .social {
    display: flex;
    align-items: center;
    margin-left: auto;
  }

  .social-link {
    margin-left: 20px;
  }

  .description {
    max-width: 550px;
    margin: 20px 0 40px;
    font-size: 14px;
    opacity: .8;
  }

  .secondary {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 100%;
  }

  .copyright {
    font-size: 12px;
  }
}
</style>