<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjBudget = [
    {
        "imgUrl": "/budget/black-gold-motel.jpg",
        "elemTitle": "Black Gold Motel",
        "elemText": "Nestled in the Seven Valleys, Black Gold was originally the old Wallerawang School, built in 1881. Through a series of imaginative transformations since 1995, Black Gold Motel & The Crib Room Restaurant was created – a clean, comfortable, unique, award-winning experience. Surrounded by world-class attractions such as the Glow Worm Tunnel, Zig Zag Railway, Capertee Valley, Jenolan Caves, and Wolgan Valley. If you are into dirt bikes, off-road 4WD, bushwalking, bird watching, fishing, or anything in the outdoors, you will be surrounded by endless opportunities.",
        "elemLink": "https://blackgoldmotel.com.au"
    },
    {
        "imgUrl": "/budget/bundaberg-spanish-motor.jpg",
        "elemTitle": "Bundaberg Spanish Motor Inn",
        "elemText": "Bundaberg Spanish Motor Inn is situated a block back from the hustle and bustle of the main street of town. We listen to the trees and not the traffic! All our rooms are comfortably appointed with a kitchenette, and either a queen bed and sofa or alternatively a queen and a single bed. FREE high speed WIFI is available to our guests & smart televisions to stream with your own login, Unwind around the pool or enjoy a barbeque in our tranquil surrounds. Come and enjoy the service provided by our friendly hosts Kimberly& Mario . We know you'll enjoy the experience!",
        "elemLink": "https://www.bundabergspanishmotorinn.com/"
    },
    {
        "imgUrl": "/budget/the-darling.jpg",
        "elemTitle": "The Darling",
        "elemText": "The Darling is located at The Star Sydney and is a key feature of Sydney’s leading entertainment destination. The hotel was designed as a stand-alone structure, with its own arrival experience, amenities and alluring personality. Housed in a distinctive inverted glass tower resting on a sandstone podium, the hotel features 171 stylish and spacious rooms, suites and penthouses, a 25-metre outdoor heated swimming pool, world-class cuisine and an indulgent day spa.",
        "elemLink": "https://www.thedarling.com.au/"
    },
    {
        "imgUrl": "/budget/bluegum-dubbo.jpg",
        "elemTitle": "Bluegum Dubbo",
        "elemText": "Bluegum Dubbo caters to the needs of corporate guests and leisure travellers looking for a quiet and contemporary space to relax. Our 4.5-star rooms feature silent split-system air, 50-inch Smart TVs, Commercial pillow-top beds, large desk with ergonomic office chair, USB ports, conveniently located power points, kitchenette with sink, mini-bar fridge, toaster, kettle, microwave and much, much more.",
        "elemLink": "https://www.bluegumdubbo.com.au/"
    },
    {
        "imgUrl": "/budget/best-western-olde-maritime-motor-inn.jpg",
        "elemTitle": "Best Western Olde Maritime Motor Inn",
        "elemText": "Located in Warrnambool,VIC, the Best Western Olde Maritime Motor Inn is sure to provide a peaceful and comforting home away from home for any traveler. Each Best Western hotel provides free internet access, giving guests the opportunity to check emails and surf the web, all from the comforts of their room or the business center. With cleanliness and value being our top priority, we ensure a restful and productive stay. On top of that, our superior customer service will ensure that we meet all your needs and go beyond your expectations.",
        "elemLink": "https://www.bestwestern.co.uk/"
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Cheap Hotels in Australia" 
            text="Australia welcomes budget-conscious travelers with a variety of affordable accommodation options. You can enjoy a comfortable stay without spending a fortune."
            imgUrl="/promo/budget_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjBudget"
            title="Top Budget Hotels"
        />

        <Prefooter
            text="Australia provides a variety of affordable accommodation options for budget-conscious travelers. Whether you’re looking for a hostel or an economical hotel, there’s something for everyone in Australia’s range of budget-friendly places to stay"
        />
    </main>
    <Footer />
</template>

<style scoped></style>