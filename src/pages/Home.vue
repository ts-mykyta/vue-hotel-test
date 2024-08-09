<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjAU = [
    {
        "imgUrl": "/home/hapuk.jpg",
        "elemTitle": "Hapuku Lodge + Tree Houses",
        "elemText": "This luxurious lodge is situated in the heart of Kaikoura and offers stunning views of the surrounding mountains and sea. Guests can stay in one of the treehouses for a unique experience."
    },
    {
        "imgUrl": "/home/best_hotel.jpg",
        "elemTitle": "The Rees Hotel",
        "elemText": "This elegant hotel is located in Queenstown and offers guests breathtaking views of Lake Wakatipu and the surrounding mountains. It's a great place to stay for those who want to explore the city'smany attractions."
    },
    {
        "imgUrl": "/home/cordis.jpg",
        "elemTitle": "The Langham Auckland",
        "elemText": "Located in the heart of Auckland, this hotel offers guests a luxurious and comfortable stay. It's also within walking distance of many of the city's top attractions."
    },
]

const dataObjEat = [
    {
        "imgUrl": "/home/depot.jpg",
        "elemTitle": "Depot Eatery & Oyster Bar",
        "elemText": "This Auckland restaurant offers a menu that focuses on fresh, locally-sourced ingredients. Their oysters are a must-try!"
    },
    {
        "imgUrl": "/home/botswana.jpg",
        "elemTitle": "Botswana Butchery",
        "elemText": "This Queenstown restaurant offers a range of delicious dishes, including steaks and seafood. Their wine list is also extensive and features some of Australia's best wines."
    },
    {
        "imgUrl": "/home/fleur.jpg",
        "elemTitle": "Fleur's Place",
        "elemText": "Situated in the small coastal town of Moeraki, this restaurant is known for its seafood dishes, which are caught fresh each day."
    },
]


const dataObjVisit = [
    {
        "imgUrl": "/home/visit1.jpg",
        "elemTitle": "Milford Sound",
        "elemText": "Located in the Fiordland National Park, Milford Sound is a must-visit destination for nature lovers. The stunning scenery and waterfalls are truly breathtaking."
    },
    {
        "imgUrl": "/home/visit2.jpg",
        "elemTitle": "Hobbiton",
        "elemText": "This movie set in Matamata is a popular tourist attraction for fans of the Lord of the Rings and The Hobbit movies."
    },
    {
        "imgUrl": "/home/visit3.jpg",
        "elemTitle": "Waitomo Glowworm Caves",
        "elemText": "Located in the North Island, these caves are home to thousands of glowworms that create a magical, twinkling effect."
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome Australia" 
            text="Australia is a stunningly beautiful country that offers an array of exciting things to do and see. From its breathtaking natural wonders to its vibrant cities, there is something for everyone to enjoy. At Zokies we bring you the best hotels, attractions and places to visit. We are your one-stop shop for everything you need to know about your Australia holiday."
            imgUrl="/home_promo.jpg"
            specialClasses="promo--home"
        />

        <Catalog
            :elementsData="dataObjAU"
            title="Best Australia Hotels"
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
            text="Australia is a beautiful country that offers a range of exciting things to see and do. Whether you're interested in outdoor activities, food and wine, or cultural attractions, there is something for everyone to enjoy."
        />
    </main>
    <Footer />
</template>

<style scoped></style>