<template>
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
            <img src="../assets/icon-nocontract.svg" alt="">
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
</template>

<script>
export default {
  
}
</script>

<style scoped lang="scss">
@import '../scss/app';

.section {
  &--benefits {
    position: relative;
    align-items: center;
    justify-content: center;
    // background: $gradient-blue-purple-light;
    padding: 50px 5%;
     @media only screen and (max-width: 1024px) {
        padding: 20px 0;
      }

    &:after {
      content: '';
      position: absolute;
      top: 0;
      left: 0;
      width: 100%;
      height: 100%;
      background-position: center center;
      background-image: url('../assets/bg-benefits.jpg');
      background-size: cover;
      mix-blend-mode: overlay;
      opacity: 1;
    }

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
}
</style>