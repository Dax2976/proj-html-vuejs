<template>
    <div class="container d-flex">
        <div class="row">
            <h1 class="text-center my-5"><strong>Why My course?</strong></h1>
            <div class="col-5">
                <div class="col align-items-start">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-briefcase" />
                    </div>
                </div>
                <div class="col-4 left align-items-end">
                    <h3 class="text-center"><strong>Entrepreneurship</strong></h3>
                    <p class="textLow">Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                </div>
            </div>
            <div class="col-5">
                    <div class="icon">
                        <font-awesome-icon icon="fa-solid fa-rocket"  />
                    </div>
                <div class="col-4 left align-items-end">
                    <h3 class="text-center"><strong>Accelerated learning</strong></h3>
                    <p class="textLow">Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                </div>
            </div>
            <div class="col-5">
                    <div class="icon">
                        <font-awesome-icon icon="fa-regular fa-thumbs-up"  />
                    </div>
                <div class="col-4 left align-items-end">
                    <h3 class="text-center"><strong>Productivity</strong></h3>
                    <p class="textLow">Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                </div>
            </div>
            <div class="col-5">
                <div class="icon">
                    <font-awesome-icon icon="fa-solid fa-gear" />
                </div>
                <div class="col-4 left align-items-end">
                    <h3 class="text-center"><strong>Life Coaching</strong></h3>
                    <p class="textLow">Vestibulum vitae aliquam nunc. Suspendisse mollis metus ac tellus egestas pharetra. Suspendisse at viverra purus. Pellentesque nec posuere ligula, eu congue leo. Integer vulputate tempor arcu. Vestibulum vulputate</p>
                </div>
            </div>
        </div>

    </div>
</template>


<script>
export default {
    name: 'MyCourse'
}
</script>



<style lang="scss" scoped>

    .textLow{
        color: #888888;
        font-size: 15px;
        line-height: 28px;
    }

    .icon{
        font-size:  63px;
        padding: 50px;
        color: #f2b71d;
       
        
    }

    .col-4{
        left: 250px;
        position: relative;
        bottom: 120px;
    }

    .col-5{
        height: 35%;
        border-left: 6px solid #f2b71d;
        box-shadow: 0 6px 20px 0 rgb(0 0 0 / 14%);;
        margin: 40px;
        
    }

    .col-5:hover{
        background-color: #f2b71d;
    }

    .icon:hover{
        color: white;
    }
    

</style>