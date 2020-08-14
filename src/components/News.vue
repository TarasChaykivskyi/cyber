<template>
    <section class="news-container">
        <h2>Новини</h2>
        <div class="news container">
            <div class="news-block" v-for="value in paginatedData" :key="value.id">
                <div class="news-block-image" :style="{backgroundImage: 'url(' + value.image + ')'}"></div>
                <div class="news-block-description">
                    <h3>{{ value.title }}</h3>
                    <router-link @click.native="goToTop" :to="'/news/' + value.id" class="button-detail">Детальніше</router-link>
                </div>
            </div>
        </div>
        <div class="btn-container">
            <button class="btn-pagination" @click="prevPage" :disabled="pageNumber === 0">Попередня</button>
            <button class="btn-pagination" @click="nextPage" :disabled="pageNumber >= pageCount - 1">Наступна</button>
        </div>
    </section>
</template>

<script>
    import dataNews from '../../public/news.json'

    export default {
        name: "News",
        data() {
            return {
                listData: dataNews.news,
                pageNumber: 0,
                sizeNews: 6
            }
        },
        methods: {
            nextPage(){
                this.pageNumber++;
                this.goToTop();
            },
            prevPage(){
                this.pageNumber--;
                this.goToTop();
            },
            goToTop() {
                window.scrollTo(0, document.getElementById('header').offsetHeight);
            }
        },
        computed: {
            pageCount(){
                let l = this.listData.length,
                    s = this.sizeNews;
                return Math.ceil(l/s);
            },
            paginatedData(){
                const start = this.pageNumber * this.sizeNews,
                    end = start + this.sizeNews;
                return this.listData.slice(start, end);
            }
        }
    }
</script>

<style lang="scss" scoped>

    .news-container {

        h2 {
            text-align: center;
            font-size: 60px;
            color: #FCAF17;
        }

        .btn-container {
            display: flex;
            justify-content: center;
            margin-bottom: 30px;

            .btn-pagination {
                background: #FCAF17;
                color: #ffffff;
                border: none;
                padding: 10px 20px;
                margin: 0 20px;
                cursor: pointer;

                &:hover {
                    background: #233342;
                }

                &:disabled {
                    background: #CBD0FC;
                }
            }
        }
    }

    .news {
        padding: 30px 0 0;
        display: flex;
        flex-wrap: wrap;

        .news-block {
            position: relative;
            width: 31%;
            margin: 0 1% 40px 1%;
            padding: 20px 20px 50px;
            box-shadow: 5px 10px 15px rgba(0,0,0,0.5);

            > div {
                text-align: center;

                &.news-block-image {
                    width: 250px;
                    height: 250px;
                    background-size: auto 100%;
                    background-position: center;
                    background-repeat: no-repeat;
                    margin: auto;
                }

                &.news-block-description {

                    h3 {
                        font-size: 20px;
                        font-family: "Proba Pro Bold";
                        margin: 20px 0;
                        color: #233342;
                    }

                    a {
                        position: absolute;
                        bottom: 20px;
                        left: 25%;
                        width: 50%;
                        text-decoration: none;
                        color: #FCAF17;
                        font-size: 18px;
                        padding: 5px 15px;
                        background: #233342;
                        border-radius: 3px;

                        &:hover {
                            color: #ffffff;
                            background: #FCAF17;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 980px){
        .news-container {

            h2 {
                font-size: 40px;
            }
        }

        .news {

            .news-block {
                width: 48%;
            }
        }
    }

    @media screen and (max-width: 650px) {

        .news {

            .news-block {
                width: 100%;
            }
        }
    }

</style>