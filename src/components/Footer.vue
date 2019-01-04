<template>
  <div class="footer">
    <div class="main">
      <div class="links">
        <div class="nav">
          <router-link to="/">Advertise</router-link>
          <router-link to="/">Careers</router-link>
          <router-link to="/">Become an Affiliate</router-link>
          <router-link to="/">Press Inqiuries</router-link>
          <router-link to="/">Help Center</router-link>
        </div>

        <p class="description">
          fuboTV is a sports-centric Internet TV streaming service with the world's most popular live sports and entertainment content. The service offers access to national and regional networks via TVs, tablets, mobile devices, and desktop computers.
        </p>
      </div>

      <div class="social">
        <div class="social-link">
          <img src="../assets/icon-facebook.svg" alt="">
        </div>
        <div class="social-link">
          <img src="../assets/icon-twitter.svg" alt="">
        </div>
        <div class="social-link">
          <img src="../assets/icon-instagram.svg" alt="">
        </div>
      </div>
    </div>

    <div class="secondary">
      <p class="copyright">
        © 2018 fuboTV Inc.
      </p>
      
      <div class="legal">
        <router-link to="/">Terms</router-link>
        <router-link to="/">Privacy</router-link>
        <router-link to="/">Cookie Policy</router-link>
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
  }

  .nav {
    a {
      margin-right: 20px;
      font-weight: 700;
      font-size: 14px;
      text-decoration: none;
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