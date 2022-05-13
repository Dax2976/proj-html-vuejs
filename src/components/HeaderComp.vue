<template>
   <div class="d-flex p-3 align-items-center container">
       <div class="">
           <img src="@/images/MasterStudy-1.svg" alt="">
       </div>
        <div class="d-flex align-items-end" v-for="(element, index) in link" :key="index">
            <a href="# + element.link" class="text-black m-3">{{element.title}}</a>
        </div>
        <div class="social">
           qui icone social
        </div>
    </div>
</template>

<script>
export default {
    name:'HeaderComp',

    props:{
        link: Array
    }
}
</script>

<style lang="scss" scoped>
 .Master{
    width: 60%;
 }

a{
     text-decoration: none;
 }

 a:hover{
     border-bottom: 2px solid #f2b71d;
 }
</style>