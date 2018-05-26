<template>
  <b-container class="mt-5" sm="9">
        <b-jumbotron  bg-variant="light">
            <template slot="header">
                <b-img width="100" height="100" src="https://ru.vuejs.org/images/logo.png" fluid alt="Fluid image" />
                Vue
            </template>
            <template slot="lead">
                The Progressive JavaScript Framework 
            </template>
            <hr class="my-4">
                <ul>
                    <li>
                        Approachable
                        <br>
                        Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!
                    </li>
                    <li>
                        Versatile
                        <br>
                        An incrementally adoptable ecosystem that scales between a library and a full-featured framework.
                    </li>
                    <li>
                        Performant
                        <br>
                        20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts
                    </li>
                </ul>
            <b-btn variant="info" href="#">More info</b-btn>
        </b-jumbotron>
        <b-jumbotron  bg-variant="light">
            <template slot="header">
                <b-img width="100" height="100" 
                src="https://bootstrap-vue.js.org/_nuxt/img/icon.f0a8c9e.png" fluid alt="Fluid image" />
                Bootstrap + Vue
            </template>
            <template slot="lead">
                Build responsive, mobile-first projects on the web using Vue.js and the world's most
                 popular front-end CSS library — Bootstrap V4.
            </template>
            <hr class="my-4">
            <p>
                Bootstrap-Vue provides one of the most comprehensive implementations of Bootstrap V4
                components and grid system available for Vue.js 2.4+, complete with extensive and
                automated WAI-ARIA accessibility markup.
            </p>
            <b-btn variant="info" href="#">More info</b-btn>
        </b-jumbotron>
        <b-jumbotron  bg-variant="light">
            <template slot="header">
                <b-img width="100" height="100" 
                src="https://cdn-images-1.medium.com/max/1200/1*Wx82vEGrMfW4AdSLodZXgQ.png" fluid alt="Fluid image" />
                Webpack
            </template>
            <template slot="lead">
                Webpack is a static module bundler for modern JavaScript applications.
            </template>
            <hr class="my-4">
            <p>
                Webpack is a static module bundler for modern JavaScript applications. When webpack
                processes your application, it internally builds a dependency graph which maps every
                module your project needs and generates one or more bundles.
            </p>
            <b-btn variant="info" href="#">More info</b-btn>
        </b-jumbotron>
    </b-container>
</template>

<script>
export default {
  name: "TechnologiesAbout"
};
</script>

<style>
</style>

