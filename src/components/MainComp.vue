<template>
   <main>
       <section class="jumbo">
           <h1 class="title">Start your Human <span style="color:#f2b71d"> <br> Revolution</span> today</h1>
           <p class="title2">A wonderfull serenity has taken possession of my entire soul,like <br> these sweet morning of spring which i enjoy with my whole heart</p>
           <div class="container d-flex">
               <div class="row">
                    <div class="proposal col-6">
                            <h1 class="text-white padding-top">Limited Sale: <span class="text-black">All courses with 55%</span></h1>
                        <div class="from-group">
                            <input type="text" placeholder="Enter yuour E-mail" class="form-control stm_subscribe_email">
                        </div>
                        <button class="btn">
                            <span class="text-uppercase text-white">subscribe</span>
                        </button>
                    </div>
                    <div class="col-6 proposal2 d-flex align-items-center">
                        <div class="col-3">
                            <h1 class="text-white p-1">26</h1>
                            <p class="text-uppercase text-black m-2">days</p>
                        </div>
                        <div class="col-3">
                            <h1 class="text-white p-1">01</h1>
                            <p class="text-uppercase text-black m-2">hours</p>
                        </div>
                        <div class="col-3">
                            <h1 class="text-white p-1">43</h1>
                            <p class="text-uppercase text-black m-2">minutes</p>
                        </div>
                        <div class="col-3">
                            <h1 class="text-white p-1">33</h1>
                            <p class="text-uppercase text-black m-2">seconds</p>
                        </div>
                    </div>
               </div>
           </div>
       </section>
        <section class="signature">
           <SignatureComp/>
       </section>
       <section class="cardComp">
           <CardCompPrice/>
       </section>
       <section class="bookComp">
           <BookComp/>
       </section>
       <section class="whyCourse">
           <MyCourse/>
       </section>
       <section class="Stats">
           <StatsComp/>
       </section>
   </main>
  
</template>

<script>

import SignatureComp from '@/components/SignatureComp.vue'
import CardCompPrice from '@/components/CardCompPrice.vue'
import StatsComp from '@/components/StatsComp.vue'
import BookComp from '@/components/BookComp.vue'
import MyCourse from '@/components/MyCourse.vue'
export default {
    name:'MainComp',
    components:{
        SignatureComp,
        CardCompPrice,
        BookComp,
        MyCourse,
        StatsComp,
    }
}
</script>

<style lang="scss" scoped>
    .jumbo{
        background-image: url('@/images/slide-1.jpg');
        width: 100%;
        position: relative;
        height: 825px;
        background-position: 50% 0 !important;
    }

    .title{
        position: absolute;
        left: 50%;
        top: 30%;
        font-size: 60px;
    }

    .title2{
        position: absolute;
        left: 50%;
        top: 50%;
        font-size: 15px;
    }

    .proposal{
        width: 50%;
        background-color: #f2b71d;
        position: absolute;
        top:92%;
        left: 10%;
        margin-bottom: 20px;
        height: 195px;
    }

    .smt_subscribe_email{
        height: 60px;
        border-radius: 30px;
        box-shadow: 0 5px 10px 0 rgba(0,0,0,.1)!important;
        padding-left: 2rem;
    }

    .btn{
        background-color:#252525 ;
        position: absolute;
        border-radius: 30px;
        right: 0%;
        bottom: 19%;
        height: 50px;
    }

    .padding-top{
        padding-top: 2.5rem;
        padding-left: 2rem;
        margin-bottom: 20px;
    }

    .proposal2{
       width: 30%;
        background-color: #f2b71d;
        position: absolute;
        top: 92%;
        left: 60%;
        display: flex;
        margin-bottom: 20px;
        height: 195px;
    }

    .container{
        width: 70%;
    }

    .form-control{
        border-radius: 30px !important;
        height: 50px !important;
    }

    .signature{
        margin-top: 300px;
        width: 100%;
    }
</style>