<template>
  <div>
    <nav-bar/>
    <sub-nav/>
    <header-image/>
    <card-container/>
    <media-container/>
    <app-footer/>
  </div>
</template>

<script>
import NavBar from "./components/NavBar.vue";
import SubNav from "./components/SubNav.vue";
import HeaderImage from "./components/HeaderImage.vue";
import CardContainer from "./components/CardContainer.vue";
import MediaContainer from "./components/MediaContainer.vue";
import AppFooter from "./components/AppFooter.vue";
export default {
  name: "app",
  components: {
    NavBar,
    SubNav,
    HeaderImage,
    CardContainer,
    MediaContainer,
    AppFooter
  }
};
</script>

<style>

</style>