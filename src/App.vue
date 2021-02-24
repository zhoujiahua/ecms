<template>
  <div class="wrapper" id="app">
    <Header />
    <Main />
    <Footer />
  </div>
</template>

<script>
import "./assets/style/reset.css";
import "./assets/style/layout.scss";
import Header from "./components/Header";
import Main from "./components/Main";
import Footer from "./components/Footer";
export default {
  name: "App",
  components: {
    Header,
    Main,
    Footer
  },
};
</script>

<style lang="scss">
</style>
