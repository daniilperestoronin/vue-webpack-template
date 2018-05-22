<template>
  <div>
    <app-nav-bar/>
    <router-view></router-view>
    <app-footer/>
  </div>
</template>

<script>
import 'opensans-npm-webfont';
import AppNavBar from "./components/AppNavBar.vue";
import AppFooter from "./components/AppFooter.vue";

export default {
  name: "app",
  components: {
    AppNavBar,
    AppFooter
  }
};
</script>

<style>
body {
  font-family: 'Open Sans', sans-serif;
}
</style>