<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjAU = [
    {
        "imgUrl": "/home/elements-of-byron.jpg",
        "elemTitle": "Elements of Byron",
        "elemText": "Elements of Byron Resort & Spa features 193 private villas dotted amidst 50 acres of absolute beachfront paradise. The modern Australian beach architecture and interiors are inspired by Mother Nature and this exceptional Byron Bay beachside location, where every luxury awaits. There are four different accommodation types, each with unique and defining features and décor. Colour schemes and textures have been chosen to reflect the varying native ecologies outside your villa: Dunal, Rainforest, Eucalypt and Wetlands.",
        "elemLink": "https://elementsofbyron.com.au",
    },
    {
        "imgUrl": "/home/the-langham-gold-coast.jpg",
        "elemTitle": "The Langham, Gold Coast",
        "elemText": "Bringing serene sophistication and coastal charm to the Gold Coast, The Langham is the newest, absolute beachfront luxury hotel to arrive in Australia’s holiday capital in more than 30 years. Three breathtaking, statuesque towers located between Surfer's Paradise and Broadbeach, are home to the first Langham hotel in Queensland, The Langham Gold Coast and Jewel Residences, managed by Langham. With over 330 rooms available, each present a stunning panorama view of the Pacific Ocean or the Gold Coast Hinterland. Enjoy some of Australia's finest seafood, meats and poultry in a buffet dining experience you won't forget at Akoya.",
        "elemLink": "https://www.langhamhotels.com/en/the-langham/gold-coast/",
    },
    {
        "imgUrl": "/home/mayfair-hotel-exterior.jpg",
        "elemTitle": "Mayfair Hotel",
        "elemText": "Since 2015, the Mayfair Hotel has set a new standard for luxury accommodation in Adelaide, offering a five-star bespoke experience like no other. The Mayfair boasts an unmatched location in the heart of the city, breathing new life into the iconic heritage-listed Colonial Mutual Life (CML) Building. The Mayfair’s 170 elegant rooms feature hand-crafted South Australian furnishings, custom-made beds and premium hotel facilities. The Mayfair has quickly become Adelaide’s favourite place to meet, stay, entertain and be entertained.",
        "elemLink": "https://www.mayfairhotel.com.au/",
    },
]

const dataObjEat = [
    {
        "imgUrl": "/home/eureka-89.jpg",
        "elemTitle": "Eureka 89",
        "elemText": "Combining sleek design with glorious unparalleled views spanning 360 degrees across Melbourne, guests can enjoy seasonal degustation menu's with the option of matched wines. Eureka 89 chefs are inspired by seasonal produce and create delicious menus that allow the flavours to stand on their own.",
        "elemLink": "https://eureka89.com.au/",
    },
    {
        "imgUrl": "/home/waterfront.jpg",
        "elemTitle": "Waterfront",
        "elemText": "A prestigious seafood restaurant with river view and heated alfresco area. Waterfront, would satisfy every guest that seeks either a relaxed romantic dinner or an aged chargrilled steak with glass of wine from Waterfront's extensive wine selection.",
        "elemLink": "https://waterfrontsouthgate.com.au/",
    },
    {
        "imgUrl": "/home/longrain-melbourne-interior.jpg",
        "elemTitle": "Longrain",
        "elemText": "Welcome to Longrain, Melbourne. Our menu brings together South East Asian influences with the best Victorian produce. Inspired by the communal eating philosophy of the Asian table, our menu is made up of dishes created for sharing. Large servings and communal tables encourage the spirit of eating together, so you can try each dish as part of a full tasting experience, just as it was intended.",
        "elemLink": "https://longrainmelbourne.com/",
    },
]


const dataObjVisit = [
    {
        "imgUrl": "/home/sydney-opera-house.jpg",
        "elemTitle": "Sydney Opera House",
        "elemText": "One of the most iconic buildings in the world – the Sydney Opera House is an architectural masterpiece and vibrant performance space. It's a place where the past shapes the future, where conventions are challenged and cultures are celebrated.",
        "elemLink": "https://www.sydneyoperahouse.com/",
    },
    {
        "imgUrl": "/home/royal-botanic-gardens-victoria.jpg",
        "elemTitle": "Royal Botanic Gardens Victoria",
        "elemText": "Visit Melbourne's inner-city oasis. Over 10,000 plant species from around the world are presented in a kaleidoscope of colour and texture. Sweeping lawns, tranquil lakes and majestic trees are home to an amazing range of wildlife.",
        "elemLink": "https://www.rbg.vic.gov.au/melbourne-gardens/",
    },
    {
        "imgUrl": "/home/cradle-mountain.jpg",
        "elemTitle": "Cradle Mountain",
        "elemText": "Iconic Cradle Mountain. A place for all seasons, discover deep snowdrifts in winter, spectacular displays of yellows, oranges and reds across the mountain slopes in autumn as Tasmania’s deciduous Fagus turns colour, playful young joeys and hungry echidnas emerging in spring, and the fragrance of wildflowers filling the air as you dip your toe into a crystal-clear lake on a summer’s day.",
        "elemLink": "https://parks.tas.gov.au/explore-our-parks/cradle-mountain",
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Discover Australia!" 
            text="Welcome to Australia! This incredible country is full of breathtaking natural wonders, vibrant cities, and exciting experiences just waiting to be discovered. At Zokies, we’re here to help you make the most of your Australian adventure. From the best hotels to must-see attractions and hidden gems, we provide all the information you need for an unforgettable holiday. Let us be your guide to exploring the beauty and excitement of Australia!"
            imgUrl="/home_promo.jpg"
            specialClasses="promo--home"
        />

        <Catalog
            :elementsData="dataObjAU"
            title="Top Hotels in Australia"
        />

        <Catalog
            :elementsData="dataObjEat"
            title="Best Places to eat"
        />

        <Catalog
            :elementsData="dataObjVisit"
            title="Places to visit:"
        />

        <Prefooter
            text="Australia is a stunning destination that offers a variety of exciting experiences. Whether you're drawn to outdoor adventures, culinary delights, or cultural attractions, there’s something for everyone to enjoy in this diverse and vibrant country."
        />
    </main>
    <Footer />
</template>

<style scoped></style>