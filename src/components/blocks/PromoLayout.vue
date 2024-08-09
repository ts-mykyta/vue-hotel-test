<script setup>
const props = defineProps({
    imgUrl: {
        type: String,
        required: true
    },
    title: {
        type: String,
        required: true
    },
    text: {
        type: String,
        required: false
    },
    specialClasses: {
        type: String,
        required: false
    }
})
</script>

<template>
    <section class="promo" :class="specialClasses" :style="{ backgroundImage: `url(${props.imgUrl})` }">
        <h1 class="promo__title">{{ title }}</h1>
        <div class="promo__descr">{{ text }}</div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"
    
.promo
    height: 600px
    background-position: center center
    background-size: cover

    display: flex
    flex-direction: column
    justify-content: center
    align-items: center

    &--home
        height: 100vh

    &__title
        color: #fff
        font-size: 52px
        font-weight: 700
        max-width: 800px
        margin-bottom: 20px
        text-align: center
    
    &__descr
        color: #fff
        width: 100%
        max-width: 900px
        font-size: 18px
        font-weight: 400
        line-height: 30px
        text-align: center
        padding: 0 10px


@media (max-width: 420px)
    .promo
        &__title
            font-size: 30px
        
        &__descr
            font-size: 16px

</style>