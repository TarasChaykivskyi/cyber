<template>
    <footer>
        <div class="container usp-gov">
            <a href="https://www.president.gov.ua/" target="_blank" class="usp-gov-block">
                <img :src="govImage1" alt="logo administration">
                <span>АДМІНІСТРАЦІЯ ПРЕЗИДЕНТА УКРАЇНИ</span>
            </a>
            <a href="https://www.kmu.gov.ua/" target="_blank" class="usp-gov-block">
                <img :src="govImage2" alt="logo administration">
                <span>КАБІНЕТ МІНІСТРІВ УКРАЇНИ</span>
            </a>
            <a href="https://www.rada.gov.ua/" target="_blank" class="usp-gov-block">
                <img :src="govImage3" alt="logo administration">
                <span>ВЕРХОВНА РАДА УКРАЇНИ</span>
            </a>
            <a href="http://mvs.gov.ua/" target="_blank" class="usp-gov-block">
                <img :src="govImage4" alt="logo administration">
                <span>МІНІСТЕРСТВО ВНУТРІШНІХ СПРАВ УКРАЇНИ</span>
            </a>
        </div>
        <div class="bottom-footer">
            <div class="container ">
                <router-link class="btn" to="/">
                    <img :src="logo" alt="footer logo" class="logo">
                </router-link>
                <div class="footer-contact">
                    <p>Телефон: <span>0 800 505 170</span></p>
                    <p>Почта: <span>callcenter@cyberpolice.gov.ua</span></p>
                </div>
            </div>
        </div>
    </footer>
</template>

<script>
    import govImage1 from '../assets/images/gov-icon1.png'
    import govImage2 from '../assets/images/gov-icon2.png'
    import govImage3 from '../assets/images/gov-icon3.png'
    import govImage4 from '../assets/images/gov-icon4.png'
    import logo from '../assets/images/footer-logo.png'

    export default {
        name: "Footer",
        data() {
            return {
                govImage1,
                govImage2,
                govImage3,
                govImage4,
                logo
            }
        }
    }
</script>

<style lang="scss" scoped>

    footer {
        width: 100%;
        height: auto;
        background: #233342;

        .usp-gov {
            display: flex;
            justify-content: space-around;
            padding: 30px 0;

            .usp-gov-block {
                display: block;
                width: 21%;
                text-align: center;

                img {
                    width: 150px;
                    border-radius: 50%;
                }

                span {
                    color: #ffffff;
                    font-size: 18px;
                    padding: 15px 10px 0;
                    font-family: "Proba Pro Bold";
                    display: block;

                    &:hover {
                        color: #FCAF17;
                    }
                }
            }
        }

        .bottom-footer {
            background: #000;
            padding: 15px 0;

            .container {
                display: flex;
                justify-content: space-evenly;
                align-items: center;

                .logo {
                    width: 100%;
                }

                .footer-contact {
                    color: #ffffff;
                    font-size: 18px;

                    p {
                        color: #FCAF17;
                        line-height: 30px;

                        span {
                            color: #ffffff;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 767px) {

        footer {

            .usp-gov {
                padding: 15px 0;

                .usp-gov-block {

                    img {
                        width: 85px;
                    }

                    span {
                        font-size: 14px;
                        padding: 10px 5px 0;
                    }
                }
            }

            .bottom-footer {
                padding: 10px 0;

                .container {
                    justify-content: space-between;

                    .router-link-active {
                        width: 40%;
                    }

                    .footer-contact {
                        color: #ffffff;
                        font-size: 14px;

                        p {
                            line-height: 20px;
                        }
                    }
                }
            }
        }
    }

    @media screen and (max-width: 480px) {

        footer {

            .usp-gov {

                .usp-gov-block {

                    img {
                        width: 70px;
                    }

                    span {
                        font-size: 10px;
                    }
                }
            }

            .bottom-footer {

                .container {
                    flex-direction: column;

                    .footer-contact {
                        text-align: center;
                        margin-top: 7px;
                    }
                }
            }
        }
    }

</style>