<template>
  <div>
    <home-sub-nav/>
    <home-header-image/>
    <home-about/>
    <home-card-container/>
    <home-media-container/>
  </div>
</template>

<script>
import HomeSubNav from "./home/HomeSubNav.vue";
import HomeHeaderImage from "./home/HomeHeaderImage.vue";
import HomeAbout from "./home/HomeAbout.vue";
import HomeCardContainer from "./home/HomeCardContainer.vue";
import HomeMediaContainer from "./home/HomeMediaContainer.vue";
export default {
  name: "AppHome",
  components: {
    HomeSubNav,
    HomeHeaderImage,
    HomeAbout,
    HomeCardContainer,
    HomeMediaContainer
  }
};
</script>

<style>

</style>