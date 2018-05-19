<template>
  <b-container class="mt-5" sm="9">
        <b-jumbotron>
            <template slot="header">
                <b-img width="100" height="100" src="https://ru.vuejs.org/images/logo.png" fluid alt="Fluid image" />
                Vue
            </template>
            <template slot="lead">
                The Progressive JavaScript Framework 
            </template>
            <hr class="my-4">
            <p>               
                Approachable

                Already know HTML, CSS and JavaScript? Read the guide and start building things in no time!

                Versatile

                An incrementally adoptable ecosystem that scales between a library and a full-featured framework.

                Performant

                20KB min+gzip Runtime Blazing Fast Virtual DOM Minimal Optimization Efforts
            </p>
            <b-btn variant="primary" href="#">More info</b-btn>
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

