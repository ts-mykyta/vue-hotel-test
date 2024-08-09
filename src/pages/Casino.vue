<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjCasinos = [
    {
        "imgUrl": "/casino/auckland.jpg",
        "elemTitle": "SkyCity Auckland",
        "elemText": "SkyCity Auckland is the largest casino in Australia and is located in the heart of Auckland. The casino offers over 1,600 gaming machines and more than 100 table games, as well as a range of restaurants, bars, and entertainment venues. The casino also has a luxury hotel and spa."
    },
    {
        "imgUrl": "/casino/chris.jpg",
        "elemTitle": "Christchurch Casino",
        "elemText": "Christchurch Casino is located in the heart of Christchurch and offers a range of gaming options, including more than 500 gaming machines and 36 table games. The casino also has a range of bars and restaurants, as well as a VIP gaming room."
    },
    {
        "imgUrl": "/casino/dunedin.jpg",
        "elemTitle": "Dunedin Casino",
        "elemText": "Dunedin Casino is located in the historic Grand Hotel in Dunedin and offers a range of gaming options, including more than 180 gaming machines and 12 table games. The casino also has a range of bars and restaurants, as well as a VIP gaming room."
    },
    {
        "imgUrl": "/casino/hamilton.jpg",
        "elemTitle": "SkyCity Hamilton",
        "elemText": "SkyCity Hamilton is located in the heart of Hamilton and offers a range of gaming options, including more than 350 gaming machines and 23 table games. The casino also has a range of bars and restaurants, as well as a VIP gaming room."
    },
    {
        "imgUrl": "/casino/skycity.jpg",
        "elemTitle": "SkyCity Queenstown",
        "elemText": "SkyCity Queenstown is located in the heart of Queenstown and offers a range of gaming options, including more than 86 gaming machines and 12 table games. The casino also has a range of bars and restaurants, as well as a VIP gaming room."
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome Australia Casino Hotels" 
            text="Australia offers several land-based casinos that provide a thrilling gaming experience and a range of other amenities. Gambling is not everyone’s cup of tea, but if you do like to spend some time on the pokies, then we have the best casinos listed below."
            imgUrl="/casino_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjCasinos"
            title="Best Casino Hotels"
        />

        <Prefooter
            text="Whether you're looking for a luxurious gaming experience or a more casual night out, there is something for everyone to enjoy in Australia's casinos. Entry to the casinos is strictly 20+, and suitable dress attire must be worn. Never gamble more than you can afford to lose. Gambling can be addictive and should only be played as entertainment."
        />
    </main>
    <Footer />
</template>

<style scoped></style>