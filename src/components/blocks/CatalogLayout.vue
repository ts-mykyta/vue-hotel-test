<script setup>
import CatalogElement from './CatalogElement.vue';


const props = defineProps({
    title: {
        type: String,
        required: true
    },

    elementsData: {
        type: Array,
        required: true
    }
    
})
</script>

<template>
    <section class="catalog">
        <div class="container">
            <h1 class="catalog__title">{{ title }}</h1>

            <div class="catalog__wrapper" >
                <CatalogElement
                    v-for="(item, index) in elementsData" :key="index" 
                    :elementData="item"
                />
            </div>
        </div>
    </section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.catalog
    margin-top: 80px

    &__title
        color: $primary
        font-size: 40px
        font-weight: 700
        margin-bottom: 40px
        text-align: center
        margin-left: auto
        margin-right: auto
        width: 100%
        max-width: 550px

    &__wrapper
        display: grid
        gap: 30px
        grid-template-columns: repeat(auto-fill, minmax(auto, 410px))
        justify-content: center
        width: 100%

@media(max-width: 768px)
    .catalog
        &__title
            font-size: 32px


</style>