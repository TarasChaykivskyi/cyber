<template>
    <div>
        <h1>Пуста сторінка. Перейти на сторінку з новинами:<router-link @click.native="goToTop" to="/news">силка</router-link></h1>
    </div>
</template>

<script>
    export default {
        name: "Pages",
        methods: {
            goToTop(){
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>

</style>