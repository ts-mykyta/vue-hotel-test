<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';
import ContactForm from '../components/blocks/ContactForm.vue';

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Contact Us"
            imgUrl="/contact_promo.jpg"
        />

        <Prefooter
            text="Mokies aims to bring you the best option for hotels and accommodation in Australia. If you wish to be listed or want to ask us anything feel free to reach out to us below."
        />

        <ContactForm />


    </main>
    <Footer />
</template>

<style scoped></style>