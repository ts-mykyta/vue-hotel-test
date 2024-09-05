<script setup>
function getCurrentYear() {
    return new Date().getFullYear();
}
</script>

<template>
    <footer class="footer">
        <div class="container">
            <div class="footer__wrapper">
                <div class="footer__social">
                    <a href="" class="footer__icon">
                        <img src="/icons/facebook.png" alt="">
                    </a>
                    <a href="" class="footer__icon">
                        <img src="/icons/inst.png" alt="">
                    </a>
                    <a href="" class="footer__icon">
                        <img src="/icons/twitter.png" alt="">
                    </a>
                </div>


                <div class="footer__links">
                    <h3>Useful links</h3>
                    <ul>
                        <li>
                            <router-link to="/">
                                <span class="header__menu-link">Home</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/business">
                                <span class="header__menu-link">Business</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/casino">
                                <span class="header__menu-link">Casino</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/budget">
                                <span class="header__menu-link">Budget</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/boutique">
                                <span class="header__menu-link">Boutique</span>
                            </router-link>
                        </li>
                        <li>
                            <router-link to="/contact">
                                <span class="header__menu-link">Contact us</span>
                            </router-link>
                        </li>
                    </ul>
                </div>

                <div class="footer__contacts">
                    <h3>Company address</h3>
                    <ul>
                        <li>
                            <a href="#">
                                <div class="footer__contacts-icon footer__icon">
                                    <img src="/icons/pin.png" alt="">
                                </div>
                                <p class="footer__contacts-text">150 Exhibition St, Melbourne VIC 3000</p>
                            </a>
                        </li>
                        <li>
                            <a href="tel:+61396505225">
                                <div class="footer__contacts-icon footer__icon">
                                    <img src="/icons/phone.png" alt="">
                                </div>
                                <p class="footer__contacts-text">+6.139.6505.225</p>
                            </a>
                        </li>
                        <li>
                            <a href="mailto:support@auhotelsbest.com">
                                <div class="footer__contacts-icon footer__icon">
                                    <img src="/icons/mail.png" alt="">
                                </div>
                                <p class="footer__contacts-text">support@auhotelsbest.com</p>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>

            <div class="footer__copyright">
                <p>Copyright © 2023-{{ getCurrentYear() }} auhotelsbest.com</p>
                <div>
                    <a href="/terms">Terms and Conditions</a>
                    <a href="/privacy">Privacy Policy</a>
                </div>
            </div>
        </div>
    </footer>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.footer
    background: $black
    padding: 30px 0

    h3
        color: #fff
        font-size: 25px
        margin-bottom: 10px
        font-weight: 500

    &__wrapper
        display: flex
        justify-content: space-between
        padding: 40px 0

    &__social
        display: flex
        gap: 10px
        padding-top: 40px

    &__icon 
        display: flex
        justify-content: center
        align-items: center
        border-radius: 100%
        background: $primary
        width: 40px
        height: 40px
        transition: $transition

        &:hover
            background: #fff

        img 
            max-width: 20px
            max-height: 20px
            width: 100%
            height: 100%
    
    &__links
        ul
            display: flex
            flex-direction: column
            gap: 15px
            color: #fff

            li
                &:hover
                    color: $primary

    &__contacts
        a
            display: flex
            align-items: center
            gap: 10px
            margin-bottom: 20px
            color: #fff

    &__copyright
        display: flex
        justify-content: space-between
        align-items: center
        border-top: 1px solid #3e3d3c
        padding: 20px 0
        color: #fff

        a
            &:first-child
                margin-right: 20px

            &:hover
                color: $primary

    

@media (max-width: 768px)
    .footer
        &__wrapper
            flex-direction: column
            align-items: center
            gap: 30px
        
        &__social
            padding-top: 0
        
        h3
            text-align: center

        &__links
            ul
                align-items: center

        &__contacts           
            p
                max-width: 200px

        &__copyright
            flex-direction: column
            align-items: center
            gap: 20px

            p
                text-align: center

            div
                display: flex
                flex-direction: column
                align-items: center
            
            a
                &:first-child
                    margin: 0


</style>