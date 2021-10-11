<template>
<div style="text-align: center">
  <hr>
  <router-link to="MachineAnnotionImages">
    <img src="../assets/images/indexIamges/image1.jpg">
  </router-link>
  <router-link to="HumanAnnotionImages">
    <img src="../assets/images/indexIamges/image2.jpg">
  </router-link><router-link to="AutoAnnotion">
  <img src="../assets/images/indexIamges/image3.jpg">
</router-link>

</div>

</template>

<script>
export default {
  name: "Index",



}

</script>

<style scoped>
      .announce{
        text-align:justify;
        text-justify:inter-ideograph;
        font-size:27px;
        text-indent:2em;

/*        min-width: 400px;
        max-width: 900px;*/
      }
      @media screen and (min-width:1000px){
        .announce {
          margin-left: 25%;
          margin-right: 25%;
        }
      }
      h1{
        font-size:34px;
        text-align: center;
        text-indent:0em;
      }
      img{
        margin: 70px;
      }

</style>