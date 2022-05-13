<template>
    <div class="container">
        <div class="row d-flex bg-img">
            <h1 class="images">Start your Human <span class="color">Revolution</span> today</h1>
        </div>

    </div>
  
</template>

<script>
export default {

}
</script>

<style lang="scss" scoped>
    .bg-img{
        background-image: url('@/images/slide-1.jpg');
        width: auto;
        height: 100%;
        max-width: 1200px;
    }

    .images{
        position: relative;
        left: -120px;
        box-sizing: border-box;
        width: 1440px;
        padding-left: 120px;
        padding-right: 120px;
    }


    .color{
        color: #f2b71d;
    }

    .container{
        margin: 0;
        width: 100%;
        padding: 0;
    }
</style>