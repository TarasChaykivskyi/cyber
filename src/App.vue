<template>
  <div id="app" class="app">
    <Header />
    <router-view class="container main-container"></router-view>
    <button @click="goToTop" class="scrollToTop">&#8593;</button>
    <Footer />
  </div>
</template>

<script>
  import Header from "./components/Header";
  import Footer from "./components/Footer";

export default {
  name: 'App',
  methods: {
    clickToTop() {
      let buttons = document.getElementsByClassName('btn');

      for(let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener('click', function () {
          window.scrollTo(0, 0);
        })
      }
    },
    scrollToTop() {
      let button = document.getElementsByClassName('scrollToTop')[0];

      window.onscroll = function () {

        if(window.pageYOffset > 600) {
          button.classList.add('active');
        }else {
          button.classList.remove('active');
        }
      }
    },
    goToTop() {
      window.scrollTo(0, 0);
    }
  },
  components: {
    Footer,
    Header
  },
  mounted() {
    this.clickToTop();
    this.scrollToTop();
  }
}
</script>

<style lang="scss">

  @font-face {
    font-family: 'Proba Pro Medium';
    src: url('assets/fonts/ProbaPro-Medium.eot');
    src: url('assets/fonts/ProbaPro-Medium.eot?#iefix') format('embedded-opentype'),
    url('assets/fonts/ProbaPro-Medium.woff') format('woff'),
    url('assets/fonts/ProbaPro-Medium.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proba Pro Bold';
    src: url('assets/fonts/ProbaPro-Bold.eot');
    src: url('assets/fonts/ProbaPro-Bold.eot?#iefix') format('opentype'),
    url('assets/fonts/ProbaPro-Bold.woff') format('woff'),
    url('assets/fonts/ProbaPro-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proba Pro Bold';
    src: url('assets/fonts/ProbaPro-Bold.eot');
    src: url('assets/fonts/ProbaPro-Bold.eot?#iefix') format('opentype'),
    url('assets/fonts/ProbaPro-Bold.woff') format('woff'),
    url('assets/fonts/ProbaPro-Bold.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  @font-face {
    font-family: 'Proba Pro Light';
    src: url('assets/fonts/ProbaPro-Light.eot');
    src: url('assets/fonts/ProbaPro-Light.eot?#iefix') format('opentype'),
    url('assets/fonts/ProbaPro-Light.woff') format('woff'),
    url('assets/fonts/ProbaPro-Light.ttf') format('truetype');
    font-weight: normal;
    font-style: normal;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: "Proba Pro Medium";
    background-image: url("/images/bg.png");
    background-size: auto 100%;
  }

  .app {
    overflow: hidden;
    position: relative;
  }

  .container {
    max-width: 1200px;
    margin: auto;
    padding: 0 15px;
  }

  img {
    width: 100%;
  }

  .main-container {
    padding: 20px 15px;
  }

  a {
    color: #FCAF17;
    text-decoration: none;
  }

  button {
    border: none;
    outline: none;
  }

  .scrollToTop {
    display: none;
    position: fixed;
    right: 20px;
    bottom: 20px;
    z-index: 999;
    background: #233342;
    font-size: 25px;
    padding: 5px;
    color: #fff;
    border: none;
    border-radius: 2px;
    cursor: pointer;

    &.active {
      display: block;
    }
  }

</style>
