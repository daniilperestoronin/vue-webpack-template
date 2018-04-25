<template>
<b-container fluid style="height:50px" class="text-light text-center bg-info">
    <b-row align-v="start" class="text-center">
        <b-col>About</b-col>
        <b-col>vue-webpack-template<br>© Copyright 2018 Daniil Perestoronin</b-col>
        <b-col>Contacts
<vue-goodshare></vue-goodshare>
        </b-col>
    </b-row>
</b-container>
</template>

<script>
import VueGoodshare from 'vue-goodshare'

export default {
    name: 'AppFooter',
    components: {
        VueGoodshare
  }
}
</script>

<style>

</style>
