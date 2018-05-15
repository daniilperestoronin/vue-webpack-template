<template>
  <div>
    <home-sub-nav/>
    <home-header-image/>
    <home-card-container/>
    <home-media-container/>
  </div>
</template>

<script>
import HomeSubNav from "./home/HomeSubNav.vue";
import HomeHeaderImage from "./home/HomeHeaderImage.vue";
import HomeCardContainer from "./home/HomeCardContainer.vue";
import HomeMediaContainer from "./home/HomeMediaContainer.vue";
export default {
  name: "AppHome",
  components: {
    HomeSubNav,
    HomeHeaderImage,
    HomeCardContainer,
    HomeMediaContainer
  }
};
</script>

<style>

</style>