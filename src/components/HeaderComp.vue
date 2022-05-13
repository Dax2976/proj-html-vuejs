<template>
   <div class="d-flex p-3 align-items-center container">
       <div class="col-3">
           <img src="@/images/MasterStudy-1.svg" alt="">
       </div>
        <div class="d-flex align-items-end m-0" v-for="(element, index) in link" :key="index">
            <a href="# + element.link" class="text-black m-3"><strong>{{element.title}}</strong></a>
        </div>
        <div class="social m-3">
           <font-awesome-icon icon="fa-brands fa-linkedin" class="m-1 linke" />
           <font-awesome-icon icon="fa-brands fa-instagram" class="m-1 insta"/>
           <font-awesome-icon icon="fa-brands fa-facebook" class="m-1 face"/>
           <font-awesome-icon icon="fa-brands fa-twitter" class="m-1 twi"/>
        </div>
    </div>
</template>

<script>
export default {
    name:'HeaderComp',

    components:{

    },

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

 .social{
     padding: 4px;
 }

 .linke:hover , .insta:hover , .face:hover, .twi:hover{
     color: #f2b71d;
 }
 
</style>