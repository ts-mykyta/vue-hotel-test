<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjBudget = [
    {
        "imgUrl": "/budget/yha.jpg",
        "elemTitle": "YHA Australia",
        "elemText": "YHA Australia is a network of budget-friendly hostels located throughout the country. The hostels offer a range of room types, from dormitories to private rooms, and feature communal kitchens and common areas. YHA Australia hostels are known for their clean and comfortable accommodations and friendly staff."
    },
    {
        "imgUrl": "/budget/jucy.jpg",
        "elemTitle": "JUCY Snooze",
        "elemText": "JUCY Snooze is a budget hotel chain located in Auckland, Queenstown, and Christchurch. The hotels offer a range of room types, from private rooms to shared dormitories, and feature communal kitchens and common areas. JUCY Snooze hotels are known for their quirky design and affordable prices."
    },
    {
        "imgUrl": "/budget/kiwi.jpg",
        "elemTitle": "Kiwi International Hotel",
        "elemText": "The Kiwi International Hotel is a budget hotel located in Auckland that offers clean and comfortable accommodations at an affordable price. The hotel features a range of room types, from budget singles to family rooms, and offers basic amenities such as free Wi-Fi and a communal kitchen."
    },
    {
        "imgUrl": "/budget/base.jpg",
        "elemTitle": "Base Backpackers",
        "elemText": "Base Backpackers is a budget hostel chain located throughout Australia. The hostels offer a range of room types, from dormitories to private rooms, and feature communal kitchens and common areas. Base Backpackers hostels are known for their social atmosphere and affordable prices."
    },
    {
        "imgUrl": "/budget/nomads.jpg",
        "elemTitle": "Nomads Hostels",
        "elemText": "Nomads Hostels is a budget hostel chain located throughout Australia. The hostels offer a range of room types, from dormitories to private rooms, and feature communal kitchens and common areas. Nomads Hostels are known for their central locations and affordable prices."
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome Australia Budget Friendly" 
            text="Australia offers a range of budget-friendly accommodation options for travelers on a budget. You don’t need to break the bank to enjoy comfort."
            imgUrl="/budget_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjBudget"
            title="Best Budget Hotels"
        />

        <Prefooter
            text="Australia offers a range of budget-friendly accommodation options for travelers on a budget. Whether you're looking for a hostel or a budget hotel, there is something for everyone to enjoy in New Zealand's cheap accommodation options."
        />
    </main>
    <Footer />
</template>

<style scoped></style>