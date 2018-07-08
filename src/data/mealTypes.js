import React from 'react';


const ALL_MEALS = [
    {
        id: 1,
        meals: [
            {
                id: 101,
                name: "Spicy Paneer Meal",
                url: "/images/categories/all_in_one/Spicy_Paneer_Meal.jpg",
                price: "Rs. 120"
            },
            {
                id: 102,
                name: "Mushrooms & Spinach Meal",
                url: "/images/categories/all_in_one/Mushrooms_and_Spinach_Meal.jpg",
                price: "Rs. 120"
            },
            {
                id: 103,
                name: "Chole Tikki Meal",
                url: "/images/categories/all_in_one/Chole_Tikki_Meal.jpg",
                price: "Rs. 120"
            },
            {
                id: 104,
                name: "Palak Paneer Meal",
                url: "/images/categories/all_in_one/Palak_Paneer_Meal.jpg",
                price: "Rs. 120"
            },
            {
                id: 105,
                name: "Paneer Makhni Meal",
                url: "/images/categories/all_in_one/Paneer_Makhni_Meal.jpg",
                price: "Rs. 120"
            },
            {
                id: 106,
                name: "Bhuna Kebab Meal",
                url: "/images/categories/all_in_one/Bhuna_Kebab_Meal.jpg",
                price: "Rs. 120"
            }
        ]
    },
    {
        id: 2,
        meals: [
            {
                id: 201,
                name: "Dal Makhni Rice Box",
                url: "/images/categories/fusion/Dal_Makhni_Rice_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 202,
                name: "Amritsari Chole Chawal Box",
                url: "/images/categories/fusion/Amritsari_Chole_Chawal_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 203,
                name: "Grilled Tikki Box",
                url: "/images/categories/fusion/Grilled_Tikki_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 204,
                name: "Palak Paneer Box",
                url: "/images/categories/fusion/Palak_Paneer_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 205,
                name: "Paneer Masala Box",
                url: "/images/categories/fusion/Paneer_Masala_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 206,
                name: "Corn & Mushroom Box",
                url: "/images/categories/fusion/Corn_and_Mushroom_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 207,
                name: "Dilli Wale Rajma Chawal Box",
                url: "/images/categories/fusion/Dilli Wale_Rajma_Chawal_Box.jpg",
                price: "Rs. 120"
            },
            {
                id: 208,
                name: "Grilled Tikki Box",
                url: "/images/categories/fusion/Grilled_Tikki_Box.jpg",
                price: "Rs. 120"
            }
        ],
    },
    {
        id: 3,
        meals: [
            {
                id: 301,
                name: "Chicken Mughlai",
                url: "/images/categories/curries/Chicken_Mughlai.jpg",
                price: "Rs. 120"
            },
            {
                id: 302,
                name: "Palak Paneer",
                url: "/images/categories/curries/Palak_Paneer.jpg",
                price: "Rs. 120"
            },
            {
                id: 303,
                name: "Kadhai Paneer",
                url: "/images/categories/curries/Kadhai_Paneer.jpg",
                price: "Rs. 120"
            },
            {
                id: 303,
                name: "Subz Saag Handi",
                url: "/images/categories/curries/Subz_Saag_Handi.jpg",
                price: "Rs. 120"
            }
        ],
    },
    {
        id: 4,
        meals: [
            {
                id: 401,
                name: "Murg Dum Biryani",
                url: "/images/categories/briyani/Murg_Dum_Biryani.jpg",
                price: "Rs. 120"
            },
            {
                id: 402,
                name: "Shahi Paneer Biryani",
                url: "/images/categories/briyani/Shahi_Paneer_Biryani.jpg",
                price: "Rs. 120"
            },
            {
                id: 403,
                name: "Chicken Tikka Biryani",
                url: "/images/categories/briyani/Chicken_Tikka_Biryani.jpg",
                price: "Rs. 120"
            },
            {
                id: 404,
                name: "Firangi Subz Biryani",
                url: "/images/categories/briyani/Firangi_Subz_Biryani.jpg",
                price: "Rs. 120"
            }
        ],
    },
    {
        id: 5,
        meals: [
            {
                id: 501,
                name: "Amritsari Chole",
                url: "/images/categories/meals_for_two/Amritsari_Chole.jpg",
                price: "Rs. 120"
            },
            {
                id: 502,
                name: "Butter Chicken",
                url: "/images/categories/meals_for_two/Butter_Chicken.jpg",
                price: "Rs. 120"
            },
            {
                id: 503,
                name: "Dal Makhni",
                url: "/images/categories/meals_for_two/Dal_Makhni.jpg",
                price: "Rs. 120"
            },
            {
                id: 504,
                name: "Dilli Rajma",
                url: "/images/categories/meals_for_two/Dilli_Rajma.jpg",
                price: "Rs. 120"
            },
            {
                id: 505,
                name: "Paneer Makhni",
                url: "/images/categories/meals_for_two/Paneer-Makhni.jpg",
                price: "Rs. 120"
            }
        ],
    },
    {
        id: 6,
        meals: [
            {
                id: 601,
                name: "Chefs Paneer Special Wrap",
                url: "/images/categories/wraps/Chefs-Paneer-Special-Wrap.jpg",
                price: "Rs. 120"
            },
            {
                id: 602,
                name: "Chicken Mayo Wrap",
                url: "/images/categories/wraps/Chicken-Mayo-Wrap.jpg",
                price: "Rs. 120"
            },
            {
                id: 603,
                name: "Chicken Tikka Wrap",
                url: "/images/categories/wraps/Chicken-Tikka-Wrap.jpg",
                price: "Rs. 120"
            },
            {
                id: 604,
                name: "Kathi Style Chicken Wrap",
                url: "/images/categories/wraps/Kathi_Style_Chicken_Wrap.jpg",
                price: "Rs. 120"
            },
            {
                id: 605,
                name: "Paneer Housefull Wrap",
                url: "/images/categories/wraps/Paneer-Housefull-Wrap.jpg",
                price: "Rs. 120"
            },
            {
                id: 605,
                name: "Seekh Kebab Wrap",
                url: "/images/categories/wraps/Seekh-Kebab-Wrap.jpg",
                price: "Rs. 120"
            }
        ],
    }
]

export default ALL_MEALS;