<template>
  <div class="col-sm-12  row" align="center">
    <div class="col-sm-4">
      <div class="mydiv">
      <div class="content">
        <h4>Add Items</h4>
      </div>
    </div>
    </div>
    

  <div class="col-sm-4">
     <router-link to="/allcustomer">
    <div class="mydiv">
      <div class="content">
        <h4>All Customer</h4>
      </div>
    </div>
     </router-link> 
  </div>
  
  <div class="col-sm-4">
     <router-link to="/allitems">
    <div class="mydiv">
      <div class="content">
        <h4>All Product</h4>
      </div>
    </div>
    </router-link> 
  </div>
  </div>

 
</template>

<script>
export default {
  name: "home",
  components: {}
};
</script>
<style scoped>
.mydiv {
  background-color: rgb(240, 240, 240);
  height: 150px;
  width: 150px;
}
.content {
  padding: 50px 30px;
}

</style>

