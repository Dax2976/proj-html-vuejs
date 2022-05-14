<template>
    <section class="CardComp">
        <div class="container-fluid">
            <h1 class="text-black center p-5">New Courses</h1>
            <div class="row">
                <div class="col-3">
                    <div class="card" style="32rem;">
                        <img src="@/images/12345-1-740x400.png" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-center p-4">Nvidia and UE4 Technologies Pratice</h5>
                            <p class="card-text text-center">Nvidia</p>
                            <p class="br p-2"></p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="32rem;">
                        <img src="@/images/12345-1-370x200.png" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-center p-4">Nvidia and UE4 Technologies Pratice</h5>
                            <p class="card-text text-center">Nvidia</p>
                            <p class="br p-2"></p>
                        </div>
                    </div>
                </div>
                <div class="col-3">
                    <div class="card" style="32rem;">
                        <img src="@/images/12345-1-370x200.png" alt="" class="card-img-top">
                        <div class="card-body">
                            <h5 class="card-title text-center p-4">Nvidia and UE4 Technologies Pratice</h5>
                            <p class="card-text text-center">Nvidia</p>
                            <p class="br p-2"></p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </section>
</template>



<script>
export default {
    name:'CardCompPrice'
}
</script>


<style lang="scss" scoped>
    .CardComp{
        width: 1440px;
        background-color: #EDF2F5;
    }

    .center{
        text-align: center;
    }

    img{
        height: 100%;
        width: 100%;
    }

    .card-text{
        color: #AAB2C8;
    }

    .br{
        border-bottom:1px solid #AAB2C8 ;
    }

    .row{
        padding-left: 300px;
        position: relative;
        
    }
</style>