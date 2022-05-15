<template>
    <div class="ImgBack w-100">
        <div class="row d-flex">
            <div class="Stats col-3 ">
                <div class="people">
                    <font-awesome-icon icon="fa-solid fa-user-group" />
                </div>
                <div class="status">
                3195
                </div>
                <div class="online text-white">
                    Online Learner
                </div>
            </div>
            <div class="Stats col-3">
                <div class="people align-items-center">
                    <font-awesome-icon icon="fa-solid fa-photo-film" />
                </div>
                <div class="status">
                23
                </div>
                <div class="online text-white">
                    Video Course
                </div>
            </div>
            <div class="Stats   col-3">
                <div class="people align-items-center">
                   <font-awesome-icon icon="fa-solid fa-image" />
                </div>
                <div class="status">
                437
                </div>
                <div class="online text-white">
                    Slider e Images
                </div>
            </div>
            <div class="Stats  col-3">
                <div class="people align-items-center">
                   <font-awesome-icon icon="fa-regular fa-thumbs-up" />
                </div>
                <div class="status">
                1440
                </div>
                <div class="online text-white">
                    Excellent Reviews
                </div>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    name:'StasComp'
}
</script>


<style lang="scss" scoped>
    .ImgBack{
        background-image: url('@/images/counter-1919x1101.jpg');
        width: 100%;
        height: 570px;
        position: relative;
    }

    .status{
        color: #f2b71d;
        font-size: 42px;

    }

    .people{
        color: white;
        font-size: 30px;
        display: flex        
        
    }

    .Stats{
        padding-top: 300px;
        padding-left: 230px;
        margin: -25px;
    }

    .online{
        font-size: 22px;
    }

</style>