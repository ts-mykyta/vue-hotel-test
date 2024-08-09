<script setup>
import { useRoute } from 'vue-router';


function toggleMenu() {
    const header = document.querySelector('.header')
    const body = document.querySelector('body')

    header.classList.toggle('header--active');
    body.classList.toggle('body--hidden')
}
</script>

<template>
    <header class="header">
        <div class="container">
            <div class="header__wrapper">
                <nav class="header__menu">
                    <ul>
                        <li class="header__menu-link">
                            <router-link to="/" exact-active-class="header__menu-link--active">
                                <span>Home</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/luxury" exact-active-class="header__menu-link--active">
                                <span>Luxury</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/casino" exact-active-class="header__menu-link--active">
                                <span>Casino</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/budget" exact-active-class="header__menu-link--active">
                                <span>Budget</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/boutique" exact-active-class="header__menu-link--active">
                                <span>Boutique</span>
                            </router-link>
                        </li>
                        <li class="header__menu-link">
                            <router-link to="/contact" exact-active-class="header__menu-link--active">
                                <span>Contact us</span>
                            </router-link>
                        </li>
                    </ul>
                </nav>

                <div class="header__burger" @click="toggleMenu">
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
        </div>
    </header>
</template>

<style scoped lang="sass">
@import '../assets/styles/main'

.header
    background: $black
    padding: 15px 0

    &__burger
        display: none

    &__menu
        font-size: 16px
        line-height: 14px
        font-weight: 600

        &-link
            color: #fff

            &--active
                color: $primary

        ul
            display: flex
            justify-content: end
            gap: 30px
        
        li
            position: relative
            &:before
                content: ""
                position: absolute
                left: 0
                bottom: -10px
                width: 0
                height: 3px
                background-color: $primary
                transition: $transition
            
            &:hover
                &:before
                    width: 100%
    
@media (max-width: 768px)
    .header
        &__burger
            display: flex
            flex-direction: column
            gap: 5px
            width: 20px
            height: 20px
            z-index: 99
            cursor: pointer

            span
                width: 100%
                height: 2px
                background: #fff
                transition: $transition

        &__wrapper
            display: flex
            justify-content: end

        &__menu
            position: absolute
            background: $black
            width: 100%
            height: 100%
            left: -100vh
            top: 0
            font-size: 24px
            transition: $transition
            

            ul
                flex-direction: column
                justify-content: center
                align-items: center
                height: 100%

    
    .header--active
        .header__menu
            left: 0
        
        .header__burger
            span:nth-child(1)
                transform: translateY(7px) rotate(-60deg)

            span:nth-child(2)
                opacity: 0

            span:nth-child(3)
                transform: translateY(-7px) rotate(60deg)       


</style>