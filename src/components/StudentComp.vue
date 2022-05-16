<template>
    <div class="container mb-5">
        <div class="row">
            <nav class="text-center">
                <h1 class="text-center p-5">What Students Say</h1>
                <div class="photo">
                      <font-awesome-icon icon="fa-solid fa-left-long"  class="mx-5 arrow"/>
                    <img src="@/images/1-100x100.jpg" alt="" class="img1 p-1">
                    <img src="@/images/2-100x100.jpg" alt="" class="img2 p-1">
                    <img src="@/images/4-100x100.jpg" alt="" class="img3 p-1">
                    <font-awesome-icon icon="fa-solid fa-right-long" class="mx-5 arrow" />
                </div>
                <h4 class="Future mt-4">Paints of the Future</h4>
                <div class="star">
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                    <font-awesome-icon icon="fa-solid fa-star" />
                </div>
                <span class=""> The response to your MasterStudy has been really overwhelming! Those who participated <br> in the workshop are spreading the word here on campus and the “buzz” is on. The VP of <br> Instruction wants you to come back! Her goal is to have more faculty trained. She also <br> wants to attend a workshop herself. Our President told me Masterstudy needs to be the <br> cornerstone of our success program.”</span>
            </nav>
        </div>
    </div>
    
</template>



<script>
export default {
    name:'StudentComp'
}
</script>


<style lang="scss" scoped>
    img{
        border-radius: 100%;
    }

    .img1,
    .img3{
        width: 80px;
    }

    .arrow{
        color: grey;
    }
    .arrow:hover{
        cursor: pointer;
    }

    .star{
       
       color: #f2b71d;
        
    }

    .Future{
        font-weight: 600;
        font-size: 20px;
    }
</style>