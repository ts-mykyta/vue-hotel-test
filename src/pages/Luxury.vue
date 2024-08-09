<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjHotels = [
    {
        "imgUrl": "/luxury/lodge.jpg",
        "elemTitle": "The Lodge at Kauri Cliffs",
        "elemText": "This luxurious lodge is located in Northland and offers breathtaking views of the Bay of Islands. Guests can enjoy world-class golf, spa treatments, and farm-to-table dining."
    },
    {
        "imgUrl": "/luxury/huka.jpg",
        "elemTitle": "Huka Lodge",
        "elemText": "Nestled on the banks of the Waikato River, Huka Lodge offers luxury accommodations in a serene setting. Guests can enjoy activities such as fly fishing, golfing, and helicopter tours."
    },
    {
        "imgUrl": "/luxury/kidnapper.jpg",
        "elemTitle": "The Farm at Cape Kidnappers",
        "elemText": "The Farm at Cape Kidnappers - This boutique hotel offers stunning views of Hawke's Bay and is set on a 6,000-acre working farm. Guests can enjoy activities such as hiking, wine tasting, and golfing."
    },
    {
        "imgUrl": "/luxury/eichard.jpg",
        "elemTitle": "Eichardt's Private Hotel",
        "elemText": "Located in the heart of Queenstown, Eichardt's Private Hotel offers guests a luxurious and intimate stay. The hotel features stunning lake views and is close to many of the city's attractions."
    },
    {
        "imgUrl": "/luxury/rees.jpg",
        "elemTitle": "The Rees Hotel",
        "elemText": "This elegant hotel is situated in Queenstown and offers guests breathtaking views of Lake Wakatipu and the surrounding mountains. It's a great place to stay for those who want to explore the city's many attractions."
    },
    {
        "imgUrl": "/luxury/hap.jpg",
        "elemTitle": "Hapuku Lodge + Tree Houses",
        "elemText": "Located in Kaikoura, this luxurious lodge offers stunning views of the surrounding mountains and sea. Guests can stay in one of the treehouses for a unique experience."
    },
    {
        "imgUrl": "/luxury/langhum.jpg",
        "elemTitle": "The Langham Auckland",
        "elemText": "Situated in the heart of Auckland, this hotel offers guests a luxurious and comfortable stay. It's also within walking distance of many of the city's top attractions."
    },
    {
        "imgUrl": "/luxury/george.jpg",
        "elemTitle": "The George",
        "elemText": "Located in Christchurch, The George is a five-star boutique hotel that offers guests luxurious accommodations and award-winning cuisine. It's also close to many of the city's cultural attractions."
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome Australia Luxury Hotels" 
            text="Australia offers some of the world’s most luxurious and picturesque hotels. From charming boutique hotels to five-star resorts, there are options for every traveler. We bring you the best hotels with great offers below."
            imgUrl="/luxury_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjHotels"
            title="Best Luxury Hotels Australia"
        />

        <Prefooter
            text="Australia has an impressive selection of luxurious hotels that offer guests stunning views, world-class amenities, and exceptional service. Whether you're looking for a romantic getaway or an adventurous vacation, a hotel in New Zealand will meet your needs."
        />
    </main>
    <Footer />
</template>

<style scoped></style>