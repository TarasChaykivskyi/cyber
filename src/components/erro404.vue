<template>
    <div>
        <h1>Сторінка не знайдена<br>Перейти на сторінку з новинами: <router-link @click="goToTop" class="btn" to="/news">силка</router-link></h1>
    </div>
</template>

<script>
    export default {
        name: "error404",
        methods: {
            goToTop() {
                window.scrollTo(0, 0);
            }
        }
    }
</script>

<style scoped>

</style>