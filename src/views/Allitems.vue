<template>
  <div class="about" >
<table class="table table-bordered">
  <thead>
    <tr>
      <th>#</th>
      <th>Name</th>
      <th>Action</th>
    </tr>
  </thead>
 
    <tbody>
    <tr v-bind:key="post.id" v-for="post in posts">
      <td>{{post.id}}</td>
      <td>{{post.name}}</td>
      <td><button v-on:click="greet(post.id)" class="btn btn-danger btn-primary">Delete</button></td>

    </tr>
    </tbody>
    
  
</table>
  </div>
</template>

<style scoped>
.about{
  padding: 20px 20px;
}
</style>



<script>
import axios from 'axios';
export default {
        data(){
            return{
                posts:[],
                 }
                },
  methods: {
    greet: function (id) {
  
            axios.get('http://13.126.237.21/clinic/delete_product?product_id='+id)
           .then( function(res){
             location.reload();
           })
           .catch( function(error){
           })
    }
  },
        mounted() {
          var self = this;
            axios.get('http://13.126.237.21/clinic/getproduct')
           .then( function(res){
             self.posts = res.data.data;
             console.log(res);
           })
           .catch( function(error){
           })
          
           
        }
    }
   
</script>

