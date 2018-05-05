<template>
  <b-navbar toggleable="md" type="dark" variant="info">

  <b-navbar-toggle target="nav_collapse"></b-navbar-toggle>

  <b-navbar-brand href="#">vue-webpack-template</b-navbar-brand>

  <b-collapse is-nav id="nav_collapse">

    <b-navbar-nav>
      <b-nav-item href="#">Home</b-nav-item>
      <b-nav-item href="#">Technologies</b-nav-item>
    </b-navbar-nav>

    <!-- Right aligned nav items -->
    <b-navbar-nav class="ml-auto">

      <b-nav-form>
        <b-nav-item href="#">
          <i class="fa fa-search"></i>
          Search
        </b-nav-item>
      </b-nav-form>
      <b-nav-form>
        <b-nav-item href="#">Sing in</b-nav-item>
      </b-nav-form>

    </b-navbar-nav>
  </b-collapse>
</b-navbar>
</template>

<script>
export default {
  name: 'NavBar'
};
</script>

<style scope>
</style>
