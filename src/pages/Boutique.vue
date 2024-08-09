<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjBoutique = [
    {
        "imgUrl": "/boutique/spire.jpg",
        "elemTitle": "The Spire Hotel, Queenstown",
        "elemText": "The Spire Hotel is a boutique hotel located in the heart of Queenstown that offers modern accommodations with a sleek and sophisticated design. The hotel features ten spacious suites, each with a separate lounge area and views of the surrounding mountains."
    },
    {
        "imgUrl": "/boutique/george_chris.jpg",
        "elemTitle": "The George, Christchurch",
        "elemText": "The George is a boutique hotel located in Christchurch that offers elegant accommodations with a classic design. The hotel features fifty-three stylish rooms and suites, each with a unique design and views of the surrounding gardens or the Avon River."
    },
    {
        "imgUrl": "/boutique/matauri.jpg",
        "elemTitle": "The Lodge at Kauri Cliffs, Matauri Bay",
        "elemText": "The Lodge at Kauri Cliffs is a boutique hotel located in Matauri Bay that offers luxurious accommodations with stunning views of the Pacific Ocean. The hotel features twenty- two elegant suites, each with a private porch and outdoor shower."
    },
    {
        "imgUrl": "/boutique/mollies.jpg",
        "elemTitle": "Mollies, Auckland",
        "elemText": "Mollies is a boutique hotel located in Auckland that offers luxurious accommodations with a whimsical and eclectic design. The hotel features ten uniquely decorated rooms and suites, each with a private balcony or terrace and views of the surrounding gardens."
    },
    {
        "imgUrl": "/boutique/hulbet.jpg",
        "elemTitle": "Hulbert House, Queenstown",
        "elemText": "Hulbert House is a boutique hotel located in Queenstown that offers luxurious accommodations in a beautifully restored Victorian villa. The hotel features nine elegant rooms, each with unique design and stunning views of the surrounding mountains and Lake Wakatipu."
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome Australia Boutique" 
            text="Australia offers a range of boutique hotels that offer personalized service and unique design. Here’s our top recommendations"
            imgUrl="/boutique_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjBoutique"
            title="Best Boutique Hotels"
        />

        <Prefooter
            text="Whether you're looking for a luxurious escape in a restored Victorian villa or a modern and sleek hotel in the heart of the city, there is something for everyone to enjoy in Australia's boutique hotels."
        />
    </main>
    <Footer />
</template>

<style scoped></style>