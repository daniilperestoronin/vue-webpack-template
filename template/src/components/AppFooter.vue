<template>
<b-container fluid style="height:145px" class="mt-5 text-light text-center bg-info">
    <b-container style="height:145px" class="mt-5 text-light text-center bg-info">
       <b-row align-v="start" class="text-center">
            <b-col>
                Home:  
                <br>
                <b-link href="">Image</b-link>
                <br>
                <b-link href="">Card's</b-link>
                <br>
                <b-link href="">Media</b-link> 
            </b-col>
            <b-col>
                Technologies: 
                <br>
                <b-link href="">Webpack</b-link>
                <br>
                <b-link href="">Vue</b-link>
                <br>
                <b-link href="">Vue-Bootstrap</b-link> 
            </b-col>
            <b-col>
                Contacts
                <br>
                <i class="fa fa-github"></i>
                <i class="fa fa-linkedin"></i>
                <i class="fa fa-twitter"></i>
                <i class="fa fa-cc-paypal"></i>
            </b-col>
        </b-row>
        <b-row align-v="start" class="text-center">
            <b-col>
                <br>vue-webpack-template © Copyright 2018 Daniil Perestoronin
            </b-col>
        </b-row>
    </b-container>
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
