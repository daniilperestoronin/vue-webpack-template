<template>
  <div>
    <div class="home-image-info">
      <h1>Manor we shall merit by chief wound no or would.</h1>
      <h5>The year paid met him does eyes same. Own marianne improved sociable not out. Thing do sight blush mr an. Celebrated am announcing delightful remarkably we in literature it solicitude. </h5>
      <b-button variant="info">More info</b-button>
    </div>
    <b-img class="home-image" src="https://images.pexels.com/photos/317385/pexels-photo-317385.jpeg?auto=compress&cs=tinysrgb&dpr=3&h=750&w=1260" fluid-grow alt="Fluid-Grow image" />
  </div>
</template>

<script>
export default {
  name: 'HomeHeaderImage'
};
</script>

<style scope>
.home-image-info{
  color: white;
  margin-top: 35vh;
  margin-left: 20vh;
  position: absolute;
}

.home-image{
  height: 100vh; 
  object-fit: cover;
}
</style>
