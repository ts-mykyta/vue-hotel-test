<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjCasinos = [
    {
        "imgUrl": "/casino/country-club-tasmania.jpg",
        "elemTitle": "Country Club Tasmania",
        "elemText": "Country Club Tasmania is celebrated for its luxurious and tranquil ambiance, as well as its spacious, well-appointed rooms that, although some guests find outdated, generally meet the mark for comfort. The hotel's raft of amenities, from diverse dining options to vibrant entertainment, garners appreciation, despite occasional inconveniences.",
        "elemLink": "https://countryclubtasmania.com.au"
    },
    {
        "imgUrl": "/casino/the-fullerton-hotel-sydney.jpg",
        "elemTitle": "The Fullerton Hotel Sydney",
        "elemText": "Steeped in character and elegance, The Fullerton Hotel Sydney is a luxury five-star hotel offering spacious and stylish rooms and suites. Located in the heart of Sydney's financial and fashion district, and housed in the historic former General Post Office building. Feel the pulse of the city and enjoy the proximity to iconic landmarks such as Darling Harbour, the Royal Botanic Garden, Barangaroo, the Sydney Opera House and the Museum of Contemporary Art, as well as theatres and noteworthy restaurants.",
        "elemLink": "https://www.fullertonhotels.com/fullerton-hotel-sydney",
    },
    {
        "imgUrl": "/casino/the-point-brisbane-hotel.jpg",
        "elemTitle": "The Point Brisbane Hotel",
        "elemText": "From the moment you enter the elegant marble foyer and smell the perfume of the fresh flowers on display, you’ll feel completely at home at a leading Brisbane independent deluxe hotel. The Point Brisbane is conveniently situated in the exclusive inner city village of Kangaroo Point. Embraced by the Brisbane CBD and New Farm reaches of the Brisbane River, a brief ferry ride from the city heart. Its 202 deluxe rooms and suites enjoy stunning views.",
        "elemLink": "https://gettothepoint.com.au/",
    },
    {
        "imgUrl": "/casino/quest-melbourne-airport.jpg",
        "elemTitle": "Quest Melbourne Airport",
        "elemText": "Quest Apartment Hotels is a member of the largest serviced apartment network in the world, The Ascott Limited, and operates under it's local entity, Ascott Australia. Across its 35-year lifespan, Quest has amassed over 160 metropolitan, regional and suburban locations throughout Australia.",
        "elemLink": "https://www.questapartments.com.au/",
    },
    {
        "imgUrl": "/casino/the-branksome-hotel-residences.jpg",
        "elemTitle": "The Branksome Hotel & Residences",
        "elemText": "The Branksome Hotel & Residences garners mixed feedback on value, with some guests commending its reasonable pricing and others pointing out extra charges. Its proximity to the airport is lauded, though its distance from downtown attractions is noted. The hotel's amenities, including spacious rooms with kitchenettes and laundry facilities, as well as pools and gyms, receive consistent praise.",
        "elemLink": "http://www.thebranksome.com.au/Homepage/Index",
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Casino Hotels In Australia" 
            text="Australia is home to numerous land-based casinos that deliver a vibrant gaming experience and a host of other amenities. Gambling may not be for everyone, but if you enjoy playing the pokies , we've put together a list of the best casinos for you to explore."
            imgUrl="/casino_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjCasinos"
            title="Top Casino Hotels"
        />

        <Prefooter
            text="Whether you're in the mood for a luxurious gaming experience or a laid-back evening, Australia's casinos have something for everyone. Entry is restricted to those aged 20 and over, and appropriate dress is required. Always gamble within your means and remember that gambling can be addictive. It should be treated as a form of entertainment, not a way to make money."
        />
    </main>
    <Footer />
</template>

<style scoped></style>