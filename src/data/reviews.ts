export interface Review {
    id: string | number;
    name: string;
    location?: string;
    rating: number;
    text: string;
}

export const reviews: Review[] = [
    {
        id: "1",
        name: "Rohan Chatterjee",
        location: "Kolkata, WB",
        rating: 5,
        text: "The perfect escape from city life. Waking up to the view of the Kalimpong hills from the wooden rooms was surreal. The organic Gorkhali thali they served for lunch is something I'll remember for a long time.",
    },
    {
        id: "2",
        name: "Nisha Sharma",
        location: "Delhi",
        rating: 5,
        text: "Absolutely loved the hospitality! The family makes you feel like one of their own. We stayed in the Four Bed room and it was incredibly spacious. The mint tea in the evening while watching the sunset was magical.",
    },
    {
        id: "3",
        name: "Aditya Desai",
        location: "Mumbai, MH",
        rating: 5,
        text: "If you want an authentic mountain homestay experience without the commercialized feel, this is it. Kaffer Gaon is peaceful, and Rigsel Homestay sits right in the best spot. The wood-fire meals were outstanding.",
    },
    {
        id: "4",
        name: "Priyanka Das",
        location: "Siliguri, WB",
        rating: 5,
        text: "A beautiful property with even more beautiful hosts. The highlight was sitting by the fire at night, eating freshly made momos and listening to local stories. The rooms are cozy, beds are warm, and the bathroom was spotless.",
    },
    {
        id: "5",
        name: "Vikram Singh",
        location: "Bengaluru, KA",
        rating: 5,
        text: "Remote but entirely worth the journey. The lack of crowd makes it so peaceful. Sourced entirely from their farm, the food is incredible. They arranged a cab for us from NJP seamlessly. Truly a 5-star experience.",
    },
];
