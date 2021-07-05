<template>
  <nav class="container">
    <div class="row">
      <div class="col-6"></div>
      <div class="col-2">
        <select class="form-select"  aria-label="Default select example" v-model="lang"  @change="handleChange($event)">
          <option value="en">English</option>
          <option value="vi">Vietnamese</option>
          <option value="ja">Japanese</option>
          <option value="es">Spanish</option>
        </select>
     
      </div>
    </div>
  </nav>
</template>

<script>
export default {
    data: function(){
        const lang = localStorage.getItem('lang') || 'en';
        return{
            lang:lang
        }
    },
    methods:{
        handleChange(event){
            localStorage.setItem('lang',event.target.value);
            window.location.reload();
        }
    }
};
</script>

<style>
select {
  padding-left: 20px ;
  float: left;
}
</style>