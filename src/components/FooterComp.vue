<template>
    <div class="container-fluid yellow d-flex">
        <div class="row">
            <div class="about">
                <a href="#" class="text-uppercase">About</a>
            </div>
            <div class="contacts">
                <a href="#" class="text-uppercase">contacts</a>
            </div>
            <div class="pages">
                <a href="#" class="text-uppercase">pages</a>
            </div>
            <div class="blog">
                <a href="#" class="text-uppercase">blog</a>
            </div>
        </div>
    </div>
    
</template>

<script>
export default {
    name: 'FooterComp'
}
</script>

<style lang="scss" scoped>
.yellow{
    background-color: #f2b71b;
}
a{
    text-decoration: none;
    color: black;
}
</style>