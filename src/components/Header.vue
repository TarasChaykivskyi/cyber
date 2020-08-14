<template>
    <header id="header">
        <div class="container header">
            <router-link to="/" class="btn">
                <img :src="logo" alt="logo" class="logo">
            </router-link>
            <div class="title-container">
                <span>ВІТАЄМО НА ОФІЦІЙНОМУ САЙТІ</span>
                <h1>КІБЕРПОЛІЦІЇ УКРАЇНИ</h1>
                <div class="social-icons">
                    <div><a href="https://t.me/CyberpolUA" target="_blank"><img :src="twitter" alt="twitter"></a></div>
                    <div><a href="https://twitter.com/cyberpoliceua" target="_blank"><img :src="telegram" alt="telegram"></a></div>
                    <div><a href="https://www.facebook.com/cyberpoliceua" target="_blank"><img :src="facebook" alt="facebook"></a></div>
                </div>
            </div>
        </div>
        <Nav />
    </header>
</template>

<script>
    import logo from '../assets/images/logo.png'
    import twitter from '../assets/images/twitter.png'
    import telegram from '../assets/images/telegram.png'
    import facebook from '../assets/images/facebook.png'
    import Nav from "./Nav";

    export default {
        name: "Header",
        components: {Nav},
        data () {
            return {
                logo,
                twitter,
                telegram,
                facebook,
                Nav
            }
         }
    }
</script>

<style lang="scss" scoped>

    header {
        background: #233342;
        color: #ffffff;

        .header {
            display: flex;
            justify-content: space-between;

            .logo {
                width: 360px;
                padding: 20px;
            }

            .title-container {
                text-align: center;
                padding-top: 50px;
                color: #FCAF17;
                font-family: "Proba Pro Light";

                .social-icons {
                    padding-top: 30px;
                    display: flex;
                    justify-content: flex-end;

                    > div {
                        margin: 0 10px;

                        img {
                            height: 40px;
                            width: auto;
                        }
                    }
                }
            }
        }
    }


    @media screen and (max-width: 767px){

        header {
            padding-bottom: 10px;

            .header {

                .logo {
                    width: 220px;
                    padding: 20px 20px 0;
                }

                .title-container {
                    padding-top: 25px;

                    span {
                        font-size: 10px;
                    }

                    h1 {
                        font-size: 20px;
                    }

                    .social-icons {
                        padding-top: 15px;

                        > div {
                            margin: 0 5px;

                            img {
                                height: 20px;
                                width: auto;
                            }
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 480px){

        header {
            padding-bottom: 10px;

            .header {

                .logo {
                    width: 180px;
                    padding: 10px 20px 0;
                }

                .title-container {
                    padding-top: 15px;

                    span {
                        font-size: 8px;
                    }

                    h1 {
                        font-size: 15px;
                    }

                    .social-icons {
                        padding-top: 8px;

                        > div {

                            img {
                                height: 17px;
                            }
                        }
                    }
                }
            }
        }
    }

</style>