<template>
    <div style="position: relative;">
        <router-link @click.native="goToBack" :to="'/news/'" class="btn-pagination button-to-back">&#8592;</router-link>
        <div v-for="value in dataNews.news" :key="value.id">
            <div class="news-post" v-if="value.id == id">
                <h2>{{value.title}}</h2>
                <p>{{value.description}}</p>
                <img :src="value.image" alt="image">
                <span>{{value.date}}</span>
            </div>
        </div>
    </div>
</template>

<script>
    import dataNews from '../../public/news.json'

    export default {
        name: "News-post",
        data() {
            return {
                id: this.$route.params['id'],
                dataNews
            }
        },
        methods: {
            goToBack() {
                window.scrollTo(0, document.getElementById('header').offsetHeight);
            }
        }
    }
</script>

<style lang="scss" scoped>

    a {
        position: absolute;
        top: 30px;
        color: #FCAF17;
        font-size: 50px;
        font-weight: bold;
        text-decoration: none;
    }

    .news-post {
        padding-bottom: 30px;

        h2 {
            text-align: center;
            margin-top: 0;
            padding: 25px 100px;
            font-size: 30px;
            font-family: "Proba Pro Bold";
            color: #233342;
        }

        p {
            font-size: 20px;
            margin: 20px 20px 40px;
        }

        span {
            display: block;
            text-align: center;
            font-family: "Proba Pro Bold";
            color: #FCAF17;
            font-size: 22px;
            margin-top: 20px;
        }
    }

    @media screen and (max-width: 767px){

        a {
            font-size: 40px;
        }

        .news-post {
            padding-bottom: 30px;

            h2 {
                padding: 10px 10px 10px 60px;
                font-size: 22px;
            }

            span {
                font-size: 18px;
            }
        }
    }

    @media screen and (max-width: 480px){

        .news-post {

            h2 {
                padding: 10px 10px 0px 50px;
                font-size: 18px;
                text-align: left;
            }
        }
    }

</style>