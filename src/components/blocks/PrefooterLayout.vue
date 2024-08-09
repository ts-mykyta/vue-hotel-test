<script setup>
const props = defineProps({
    text: {
        type: String,
        required: true
    }
})
</script>

<template>
<section class="prefooter">
    <div class="container">
        <p class="prefooter__text">{{ text }}</p>
    </div>
</section>
</template>

<style scoped lang="sass">
@import "../../assets/styles/main"

.prefooter
    margin-top: 80px
    
    &__text
        color: $black
        font-size: 17px
        margin-right: auto
        font-weight: 400
        line-height: 30px
        width: 100%
        max-width: 832px
        margin-left: auto
        text-align: center
        margin-top: 80px

</style>