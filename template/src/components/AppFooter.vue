<template>
<b-container fluid style="height:85px" class="mt-5 text-light text-center bg-info">
    <b-row align-v="start" class="text-center">
        <b-col>
            About
        </b-col>
        <b-col>
            <h5> vue-webpack-template</h5>
            <br>© Copyright 2018 Daniil Perestoronin
        </b-col>
        <b-col>Contacts<br>
            <i class="fa fa-github"></i>
            <i class="fa fa-linkedin"></i>
            <i class="fa fa-twitter"></i>
            <i class="fa fa-cc-paypal"></i>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
export default {
    name: 'AppFooter'
}
</script>

<style scope>
.fa {
    font-size: 1.5em;
    width: 1.5em;
    height: 1em;
    text-align: center;
  }
</style>
