import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    products: [
        {
            id: 1,
            img: "./img/card1.webp",
            alt: "Карточка товара 1",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
        {
            id: 2,
            img: "./img/card2.webp",
            alt: "Карточка товара 2",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
        {
            id: 3,
            img: "./img/card3.webp",
            alt: "Карточка товара 3",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
        {
            id: 4,
            img: "./img/card4.webp",
            alt: "Карточка товара 4",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
        {
            id: 5,
            img: "./img/card5.webp",
            alt: "Карточка товара 5",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
        {
            id: 6,
            img: "./img/card6.webp",
            alt: "Карточка товара 6",
            title: "ELLERY X M' O CAPSULE",
            description: "Known for her sculptural takes on traditional tailoring, Australian arbiter of cool Kym Ellery teams up with Moda Operandi.",
            price: 52.00
        },
    ],
    basket: {
        count: 2,
        items: []
    },
    menu: { visible: false }
};

const slice = createSlice({
    name: 'shop',
    initialState,
    reducers: {
        add: (state, action) => {
            state.basket.count++;
            state.basket.items = [...state.basket.items, state.products.filter(item => item.id == action.payload)];    
        },
        remove: (state, action) => {
            // state.goods = state.goods.filter((item) => item.id != action.payload);
        },
        changeAvailable: (state, action) => {
            // state.goods.filter((item) => item.id == action.payload).forEach((item) => item.available = !item.available);
        },
        change: (state, action) => {
            // state.goods = state.goods.filter((item) => item.id != action.payload[0].id);
            // state.current = {
            //     id: action.payload[0].id,
            //     name: action.payload[0].name,
            //     description: action.payload[0].description,
            //     price: action.payload[0].price,
            //     available: action.payload[0].available
            // };
        },
        switchMenuVisible: (state) => {
            state.menu.visible = !state.menu.visible;
        }
    }
});

export const { add, remove, changeAvailable, change, switchMenuVisible } = slice.actions;
export default slice.reducer; 