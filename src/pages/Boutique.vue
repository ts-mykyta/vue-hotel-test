<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjBoutique = [
    {
        "imgUrl": "/boutique/warders-hotel.jpg",
        "elemTitle": "Warders Hotel Fremantle Markets",
        "elemText": "A small boutique hotel in the old limestone cottages that were once the Fremantle Warders’ homes. The cottages offer a little pocket of calm among the vibrant heart of Fremantle.Refined sanctuaries behind a buffer of thick limestone walls, with thoughtful touches that bring our colonial heritage into your space. Cottage rooms brought back to the original timbers and stonework.",
        "elemLink": "https://www.wardershotel.com.au/",
    },
    {
        "imgUrl": "/boutique/treasury-on-collins.jpg",
        "elemTitle": "Treasury On Collins",
        "elemText": "Treasury on Collins (locally known as ToC) is a historic 1876 classical limestone building that has been refurbished and transformed into a stylish boutique apartment hotel. Offering suites as well as apartments, it is rare to find central Melbourne accommodation with so much space. ToC enjoys a prime location in arguably Melbourne's best precinct where free trams, buses and taxis pass by the door. All accommodation features a well-appointed kitchenette, convenient clothes washer/dryer and a relaxation area (separate in the apartments) with large flat screen tv and instant Netflix. Fast business-grade wifi is reliable, unlimited and absolutely free for all guests.",
        "elemLink": "https://treasuryoncollins.com.au/",
    },
    {
        "imgUrl": "/boutique/the-henry-jones-art-hotel.jpg",
        "elemTitle": "The Henry Jones Art Hotel",
        "elemText": "Australia's first dedicated art hotel stands proudly on Hobart's glorious waterfront. A handsome row of historic warehouses dating from the 1820s (the former IXL jam factory) have been creatively transformed into an enthralling multi-award winning first class hotel. The hotel itself is a work of art. Here you'll be fascinated by the unexpected combination of the antique and the ultra modern.",
        "elemLink": "https://www.thehenryjones.com/packages-offers/",
    },
    {
        "imgUrl": "/boutique/il-mondo-boutique-hotel.jpg",
        "elemTitle": "Il Mondo Boutique Hotel",
        "elemText": "Discover Brisbane-based luxury accommodation in Kangaroo Point at IL MONDO Boutique Hotel. Our hotel offers a variety of rooms and Kangaroo Point accommodation apartments that cater to every need, whether you are travelling solo, with family, on a business trip or looking for an extended stay apartment.",
        "elemLink": "https://www.ilmondo.com.au",
    },
    {
        "imgUrl": "/boutique/atlantic-byron-bay.jpg",
        "elemTitle": "Atlantic Byron Bay",
        "elemText": "A stunning new magnesium resort sized pool is at the heart of The Atlantic Byron Bay, set amongst the lush tropical gardens and just waiting for you to dive in. Freshly renovated houses and rooms feature local artisans and a touch of something new. All individually-styled guest rooms offer an en-suite bathroom with toiletries, daily housekeeping services, air-conditioning, a flat-screen TV and a private patio. Luggage storage facilities are available.",
        "elemLink": "https://atlanticbyronbay.com.au",
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Boutique Hotels In Australia" 
            text="Australia features a selection of boutique hotels known for their personalized service and distinctive design. Here are our top recommendations."
            imgUrl="/boutique_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjBoutique"
            title="Top Boutique Hotels"
        />

        <Prefooter
            text="Whether you're seeking a luxurious stay in a beautifully restored Victorian villa or a stylish, contemporary hotel in the city center, Australia's boutique hotels offer something for everyone."
        />
    </main>
    <Footer />
</template>

<style scoped></style>