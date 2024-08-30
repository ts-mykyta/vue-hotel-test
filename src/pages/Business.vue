<script setup>
import Header from '../components/HeaderLayout.vue';
import Footer from '../components/FooterLayout.vue';
import Promo from '../components/blocks/PromoLayout.vue';
import Catalog from '../components/blocks/CatalogLayout.vue';
import Prefooter from '../components/blocks/PrefooterLayout.vue';

const dataObjHotels = [
    {
        "imgUrl": "/business/royal-suite-lounge.jpg",
        "elemTitle": "Four Seasons Hotel Sydney",
        "elemText": "Stunningly situated overlooking Sydney Harbour in the historic Rocks district, a short walk from the city's shopping and business centres, Four Seasons Hotel Sydney is vibrant and elegant, with dramatic harbourfront views and a luxurious day spa featuring exclusive skincare and aromatherapy treatments.",
        "elemLink": "https://www.fourseasons.com/sydney/"
    },
    {
        "imgUrl": "/business/adina-apartment-hotel.jpg",
        "elemTitle": "Adina Apartment Hotel Brisbane",
        "elemText": "Immerse yourself in this grand historic building suitably in the center of Brisbane. The Adina Apartment Hotel Brisbane is heritage-listed and artfully restored with a classic yet contemporary design. Located on George Street, the ground floor lobby space celebrates the building’s Art Deco origins. A stone’s throw from Queen Street Mall and Queen’s Wharf, or a brief stroll will find you in amongst buzzing Southbank’s cool bars, restaurants and parklands.",
        "elemLink": "https://www.adinahotels.com/en/apartments/brisbane/"
    },
    {
        "imgUrl": "/business/little-national-hotel.jpg",
        "elemTitle": "Little National Hotel Sydney",
        "elemText": "Comprising of 230 rooms over 12-storeys, this luxurious hotel offers affordable luxury to all in an efficient space that requires no compromises. Guest rooms are compact yet use efficient spatial planning and generously proportioned sleeping spaces to ensure each guest is wrapped in comfort. Little National Hotel is conceived for the business, conference and leisure guest.",
        "elemLink": "https://littlenationalhotel.com.au/sydney/"
    },
    {
        "imgUrl": "/business/sherton-grand-sydney.jpg",
        "elemTitle": "Sheraton Grand Sydney Hyde Park",
        "elemText": "Enjoy a warm welcome at the five-star Sheraton Grand Sydney Hyde Park (formerly Sheraton on the Park). Located directly opposite Hyde Park, the tree-lined oasis in the heart of Sydney, our hotel is a great destination to connect with friends, family, and colleagues. From the moment you walk through our grand entrance, you will enjoy all that our Sydney hotel has to offer.",
        "elemLink": "https://www.marriott.com/en-us/hotels/sydsi-sheraton-grand-sydney-hyde-park/overview/"
    },
    {
        "imgUrl": "/business/rydges-melbourne-meeting.jpg",
        "elemTitle": "Rydges Melbourne",
        "elemText": "Experience the new Rydges Melbourne. Located in the heart of Melbourne's CBD, with the vibrant theatre district, iconic Melbourne dining, Chinatown, and boutique shopping at its doorstep including Collins Street, Bourke Street Mall, Emporium and Melbourne Central. More on every level and refreshingly local in design, the newly refurbished Rydges Melbourne boasts 370 king rooms, suites, and apartments and a seamless check-in experience.",
        "elemLink": "https://www.rydges.com/"
    },
    {
        "imgUrl": "/business/the-savoy-hotel-on-little.jpg",
        "elemTitle": "The Savoy Hotel On Little Collins Melbourne",
        "elemText": "The Savoy Hotel on Little Collins offers a timelessly elegant space to escape. Located in the heart of Melbourne, you won’t have to travel far to enjoy all this lively city has to offer. Bursting with a fascinating history, The Savoy Hotel on Little Collins has been home to some world-famous guests and celebrities. Many of Australia’s best started their careers on its very doorstep. From the moment you step inside, you will be captivated by the hotel’s charm and inspired by its stories. Built in 1866, the building is well into its second century.",
        "elemLink": "https://savoyhotelmelbourne.com"
    },
    {
        "imgUrl": "/business/emporium-hotel-south.jpg",
        "elemTitle": "Emporium Hotel South Bank",
        "elemText": "A spectacular new standard in exquisite boutique luxury accommodation and award-winning service. 143 luxuriously appointed suites feature all the comforts you could ask for, while an abundance of premium food and beverage options will leave you spoilt for choice. On level 21 you will find a spectacular, 23m infinity edge pool and bar with magnificent views over South Bank Parklands, the Brisbane River, to the city and beyond.",
        "elemLink": "https://www.emporiumhotels.com.au/"
    },
    {
        "imgUrl": "/business/hotel-exterior-featuring.jpg",
        "elemTitle": "The Langham, Melbourne",
        "elemText": "See why so many travellers make The Langham, Melbourne their hotel of choice when visiting Melbourne. Providing an ideal mix of value, comfort and convenience, it offers a family-friendly setting with an array of amenities designed for travellers like you. Nearby landmarks such as Degraves Street (0.2 mi) and Block Arcade (0.3 mi) make The Langham, Melbourne a great place to stay when visiting Melbourne.",
        "elemLink": "https://www.langhamhotels.com/en/the-langham/melbourne/"
    },
]

</script>

<template>
    <Header />
    <main class="main">
        <Promo 
            title="Welcome To Business Hotels In Australia" 
            text="Australia offers some of the most luxurious business hotels in the world. We bring you the best hotels with great deals."
            imgUrl="/luxury_promo.jpg"
        />

        <Catalog
            :elementsData="dataObjHotels"
            title="Best Business Hotels In Australia"
        />

        <Prefooter
            text="Australia has an impressive selection of luxurious hotels that offer guests stunning views, world-class amenities, and exceptional service. Whether you're looking for a romantic getaway or an adventurous vacation, a hotel in New Zealand will meet your needs."
        />
    </main>
    <Footer />
</template>

<style scoped></style>