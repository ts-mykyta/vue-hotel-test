<script setup>
const props = defineProps({
    elementData: {
        type: Object,
        required: true
    }
})
</script>

<template>
<div class="catalog__element">
    <a href="#" class="catalog__element-img">
        <img :src="props.elementData.imgUrl" alt="img">
    </a>
    <div class="catalog__element-content">
        <div class="catalog__element-title">{{ elementData.elemTitle }}</div>
        <div class="catalog__element-text">{{ elementData.elemText }}</div>
        <a :href="elementData.elemLink ? elementData.elemLink : '#'" target="_blank" class="catalog__element-btn">Read More</a>
    </div>
</div>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.catalog__element
    height: 100%
    box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px
    background: #fff
    position: relative
    transition: $transition

    &:hover
        transform: translateY(-20px)


    &-img
        display: block
        height: 398px
        position: relative

        &:before
            content: ""
            position: absolute
            left: 50%
            top: 50%
            transform: translate(-50%, -50%)
            width: 0
            height: 0
            background: $primary
            opacity: .4
            transition: $transition

        &:hover
            &:before
                width: 100%
                height: 100%

        img
            width: 100%
            height: 100%
            object-fit: cover
    
    &-content
        padding: 30px

    &-title
        font-weight: 700
        color: $primary
        font-size: 26px
        margin: 14px 0

    &-text
        color: $black
        font-size: 16px
        font-weight: 400
        line-height: 30px
        margin-bottom: 80px

    &-btn
        position: absolute
        bottom: 30px
        left: 30px
        display: flex
        justify-content: center
        align-items: center
        max-width: 170px
        margin-top: 20px
        background: $primary
        color: #fff
        padding: 14px 40px
        font-size: 16px
        border-radius: 6px
        border: 1px solid $primary

        &:hover
            background: #fff
            color: $primary


</style>