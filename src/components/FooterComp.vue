<template>
    <footer>
        <div class="yellow">
            <div class="container d-flex p-5">
                <div class="row">
                    <div class="col-3" v-for="(content, index) in about" :key="index">
                        <h5 class="">{{content.title}}</h5>
                        <p class="">{{content.p}}</p>
                        <div class="social" style="font-size:22px;">
                            <font-awesome-icon icon="fa-brands fa-facebook" class="m-2" />
                            <font-awesome-icon icon="fa-brands fa-twitter" class="m-2" />
                            <font-awesome-icon icon="fa-brands fa-instagram" class="m-2" />
                        </div>
                    </div>
                    <div class="col-3" v-for="(content, index) in contacts" :key="'a'+ index">
                        <h5 class="">{{content.title}}</h5>
                        <p class="">{{content.p}}</p>
                        <p class="">{{content.p2}}</p>
                        <p class="">{{content.p11}}</p>
                        <p class="">{{content.p3}}</p>
                    </div>
                    <div class="col-3" v-for="(content, index) in pages" :key="'b' + index">
                        <h5 class="">{{content.title}}</h5>
                        <ul>
                            <li>
                                {{content.p}}
                            </li>
                            <li>{{content.p4}}</li>
                            <li>{{content.p5}}</li>
                            <li>{{content.p6}}</li>
                            <li>{{content.p7}}</li>
                            <li>{{content.p8}}</li>
                        </ul>
                    </div>
                    <div class="col-3" v-for="(content, index) in blog" :key="'c' + index">
                        <h5 class="">{{content.title}}</h5>
                        <div class="d-flex">
                            <img src="@/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg" alt="">
                            <h5 class="">{{content.title2}}</h5>
                            <p class="">{{content.p9}}</p>
                        </div>
                        <div class="d-flex">
                            <img src="@/images/photo-1490376840453-5f616fbebe5b-75x75.jpeg" alt="">
                            <h5 class="">{{content.title3}}</h5>
                            <p class="">{{content.p10}}</p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
export default {
    name: 'FooterComp',

    data(){
        return{
                about:[{
                    title:'ABOUT',
                    p:'Masterstudy is Education WordPress theme featured by Learning Management System (LMS) for online education.Developed by StylemixThemes',
                }],
                contacts:[{
                    title:'CONTACTS',
                    p:'USA, Callifornia 20, First Avenue, Callifornia',
                    p2:'Tel.: +1 212 458 300 32',
                    p11:'Fax: +1 212 375 24 14',
                    p3:'info@masterstudy.com'
                }],
                pages:[{
                    title:'PAGES',
                    p:'Blog',
                    p4:'Home',
                    p5:'Shortcodes',
                    p6:'Courses',
                    p7:'Membership A...',
                    p8:'Typography'
                }],
                blog:[{
                    title:'Blog',
                    img1:'@/images/photo-1517520287167-4bbf64a00d66-75x75.jpeg',
                    title2:'"Our main target is to “Developing Yourself as a Leader"',
                    p9:'- August 9, 2018',
                    img2:'photo-1490376840453-5f616fbebe5b-75x75.jpeg',
                    title3:'Those Other College Expenses You Aren`t Thinking About',
                    p10:'- June 3, 2015'
                }]
        }
    }
}
</script>

<style lang="scss" scoped>
.yellow{
    background-color: #f2b71b;
}

img{
    width: 75px;
    height: 75px;
}

h5{
    font-weight: 600;
}

</style>