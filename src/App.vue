<template>
  <div id="app">
    <HeaderComp :link="Headerlink"/>
  </div>
</template>

<script>

import 'bootstrap'
import HeaderComp from '@/components/HeaderComp.vue'
export default {
  name: 'App',
  components: {
    HeaderComp,
  },

  data(){
    return{
      Headerlink:[
        {
          'title':'Courses',
          'link':'Courses'
        },

        {
          'title':'Courses Formats',
          'link':'Courses Formats'
        },

        {
          'title':'Add Course',
          'link':'Add Course'
        },
        {
          'title':'Pages',
          'link':'Pages'
        },
        {
          'title':'Demos',
          'link':'Demos'
        }
      ]
    }
  }
}
</script>

<style lang="scss">


@import "bootstrap/dist/css/bootstrap.min.css";
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  
}
</style>
