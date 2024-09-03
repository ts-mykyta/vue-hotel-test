<script setup></script>

<template>
<section class="contact">
    <div class="container">
        <div class="contact__wrapper">
            <form action="" class="contact__form">
                <h2>Contact Form</h2>
                <input type="text" id="name" placeholder="Your Name">
                <div>
                    <input type="email" id="email" placeholder="Your Email">
                    <input type="text" id="subject" placeholder="Subject">
                </div>
                <textarea name="message" id="message" placeholder="Message"></textarea>

                <button type="submit">submit</button>
            </form>

            <div class="contact__touch">
                <h2>Get in touch with us</h2>
                <a href="mailto:auhotelsbest@company.com" class="contact__touch-link">
                    <div class="contact__touch-icon">
                        <img src="/icons/mail.png" alt="mail">
                    </div>
                    <span>auhotelsbest@company.com</span>
                </a>
            </div>
        </div>
    </div>
</section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.contact
    &__wrapper
        display: flex
        justify-content: space-between
        align-items: center
        gap: 10px

    &__form
        margin-top: 80px
        box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px
        background: #fff
        padding: 50px
        width: 50%

        h2
            font-size: 37px
            line-height: 29px
            font-weight: 700
            margin-bottom: 50px
            color: $primary

        input
            width: 100%
            padding: 16px
            margin-bottom: 28px
            outline: none

        div
            display: flex
            justify-content: space-between
            gap: 10px

        textarea
            width: 100%
            height: 130px
            padding: 16px
            resize: none
            outline: none
            font-family: sans-serif
        
        button
            padding: 14px 50px
            background-color: $primary
            border: 1px solid $primary
            color: #fff
            margin-top: 40px
            font-size: 16px
            cursor: pointer
            transition: $transition

            &:hover
                color: $primary
                background: #fff
    
    &__touch
        width: 50%
        h2
            font-size: 43px
            font-weight: 700
            color: #333333
            text-align: center

        &-link
            display: flex
            align-items: center
            justify-content: center
            gap: 10px

        &-icon 
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



@media(max-width: 768px)
    .contact
        &__wrapper
            flex-direction: column
            gap: 30px

        &__form, &__touch
            width: 100%

        &__form
            padding: 20px

</style>