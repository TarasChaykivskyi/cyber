<template>
    <nav>
        <ul class="container nav">
            <li v-for="value in navigation" :key="value.title">
                <router-link class="btn" :to="value.path">{{ value.title }}</router-link>
            </li>
        </ul>
    </nav>
</template>

<script>
    export default {
        name: "Nav",
        data() {
            return {
                navigation: [
                    {
                        title: 'Зворотний звязок',
                        path: '/'
                    },
                    {
                        title: 'Новини',
                        path: '/news'
                    },
                    {
                        title: 'Рекомендації',
                        path: '/'
                    },
                    {
                        title: 'Стоп фрауд',
                        path: '/'
                    },
                    {
                        title: 'No more ransom',
                        path: '/'
                    },
                    {
                        title: 'Контакти',
                        path: '/'
                    },
                    {
                        title: 'Стратегiя 2020',
                        path: '/'
                    },
                    {
                        title: 'Підсумки року',
                        path: '/'
                    },
                    {
                        title: 'Запобігання корупції',
                        path: '/'
                    }
                ]
            }
        }
    }
</script>

<style lang="scss" scoped>

    .nav {
        display: flex;
        flex-wrap: wrap;
        justify-content: center;
        list-style: none;

        li {
            padding: 0 15px 20px;
            font-size: 15px;
            text-align: center;

            a {
                color: #ffffff;
                text-decoration: none;

                &:hover {
                    color: #FCAF17;
                }
            }
        }
    }

    @media screen and (max-width: 767px){
        .nav {

            li {
                padding: 0 10px 5px;
                font-size: 13px;
            }
        }
    }

    @media screen and (max-width: 480px){
        .nav {

            li {
                padding: 0 8px 5px;
            }
        }
    }

</style>