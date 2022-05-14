<template>
    <div class="containier backImg">
        <div class="row">
            <div class="col-8 text-center align-items-center d-flex">
                <h2 class="textYellow"><strong>Get My Exclusive Investing <br> Book just fot $ 19.50</strong></h2>
                <p class="text-white"><strong>Vestibulum imentum eu vel cursum. Aenean <br> vehicula quam quam, vitae pellenteque urna <br> elementum cursus</strong></p>
                <img src="@/images/amazon.png" alt="" class="amzImg">
            </div>
            <div class="col-4">
                <img src="@/images/book.png" alt="" class="book">
            </div>
        </div>
    </div>
    
</template>


<script>
export default {
    
}
</script>


<style lang="scss" scoped>
    .backImg{
        background-image: url('@/images/slider_1-1917x607-1914x606.jpg');
        height: 503px;
        width: 1440px;
    }

    .book{
        height: 100%;
        width: 100%;
        padding-top: 96px;
        padding-right: 50px;
        margin-left: -150px; 
    }

    .textYellow{
        color: #f2b71d;
        font-size: 42px;
        padding-left: 200px;
        padding-top: 110px;
        padding-bottom: 2rem;
    }

    p{
        padding-left: 185px;
        font-size: 23px;
    }

    .col-8{
        flex-direction: column;
    }

    .amzImg{
        width: 35%;
        padding-left: 170px;
    }

    .amzImg:hover{
        cursor: pointer;
    }
</style>