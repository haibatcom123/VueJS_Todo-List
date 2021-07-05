<template>

  <div class="container">
    <div style="padding-left:10px">
      {{ $t("Language")}}<language />
    </div>
    
    <h1>{{ $t("Enter a new task")}}</h1>
    
    <div id="app">
      <div style="padding: 1rem">
        <TodoNew />
        <h1>{{ $t("TodoList")}}</h1>
        <TodoList />
      </div>
    </div>
    <img src="@/assets/logo.png" class="vue-logo" alt="Vue.js Logo" />
  </div>
</template>

<script>
import TodoNew from "@/components/TodoNew.vue";
import TodoList from "@/components/TodoList.vue";
import Language from '@/components/Language.vue';

export default {
  components: {
    Language,
    TodoNew,
    TodoList

  }
};
</script>

<style>
@import url("https://fonts.googleapis.com/css?family=Open+Sans");

html {
  font-family: "Open Sans", sans-serif;
  background: linear-gradient(45deg, #5189c1 25%, #41b883);
  height: 100%;
  color: #333;
}

body {
  display: flex;
  height: 100%;
  margin: 0;
}

.container {

  width: 24rem;
  margin: auto;
  background-color: white;
  border-radius: 1rem;
  box-shadow: 0 0 1rem rgba(0, 0, 0, 0.5);
}

h1 {
  text-align: center;

}

.vue-logo {
  display: block;
  width: 50px;
  margin: 0 auto;
}

lang{
  color: red;
}
</style>
