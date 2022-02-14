// function Burger() {
//     const burger = [{
//          'Burger ': {
//             info: 'mini',
//             price: 11000
//         }, 'Chicken ': {
//             info: 'Burger',
//             price: 13000
//         }}, 
//     {'Cheese ': {
//             info: 'Burger',
//             price: 12500},
//         'Middle ': {
//             info: 'Burger',
//             price: 6500}},
//         {
//         'Street ': {
//             info: 'Burger',
//             price: 18500}},
//         {
//         'Street ': {
//             info: 'Cheese',
//             price: 20500}}]
//     const count = Math.floor(Math.random() * burger.length)
//     return burger[count];
// }
// function HotDogs(params) {
//     const hotdog = [{
//         'Hotdog ': {
//             info: 'royal',
//             price: 13500
//         }, 'Classical ': {
//             info: 'Hotdog',
//             price: 7000
//         }, 'Hot-': {
//             info: 'dog',
//             price: 9000
//         }}, 
//     {'Big ': {
//             info: 'Hotdog',
//             price: 8500},
//         'Cheese ': {
//             info: 'Hotdog',
//             price: 10000
//         }},
//         {
//         'Middle ': {
//             info: ' Hotdog',
//             price: 6500}
//     }]
//     const count = Math.floor(Math.random() * burger.length)
//     return burger[count];
// }
// function Pizza(params) {
//     const pizza = [{
//         'Pepperoni': {
//             info: '',
//             price: 60000
//         }, 'Combined': {
//             info: ' Pizza',
//             price: 61000
//         }, 'Caesar ': {
//             info: 'Pizza',
//             price: 63000
//         }}, {'Four ': {
//             info: 'seasons',
//             price: 56000},
//         'Four ': {
//             info: 'Cheese',
//             price: 63000
//         }},
//         {
//         'Mushroom ': {
//             info: 'Pizza',
//             price: 54000}
//     }]
//     const count = Math.floor(Math.random() * burger.length)
//     return burger[count];
// }
// function drinks() {
//     const drinks = [{
//         'Coca-Cola ': {
//             info: '0.5 L',
//             price: 7000
//         }, 'Vater ': {
//             info: 'with gas',
//             price: 2500
//         }, 'Mojito ': {
//             info: 'classic',
//             price: 15900
//         }}, 
//     {'Juice ': {
//             info: 'valley',
//             price: 10000},
//         'Pepsi ': {
//             info: '1.5 L',
//             price: 9500}},
//         {
//         'Dark ': {
//             info: 'coffe',
//             price: 5000}}]
//     const count = Math.floor(Math.random() * burger.length)
//     return burger[count];
// }
const product = {
    Mini:{
        name: "Mini Burger",
        price: 11000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Chicken:{
        name: "Chicken Burger",
        price: 13000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Cheese:{
        name: "Cheese Burger",
        price: 12500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Middle:{
        name: "Middle Burger",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Street:{
        name: "Street Burger",
        price: 18500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    StreetCh:{
        name: "Street Cheese",
        price: 20500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Royal:{
        name: "Hotdog Royal",
        price: 13500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Classical:{
        name: "Classical Hotdog",
        price: 7000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Hotdog:{
        name: "Hotdog",
        price: 9000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Big:{
        name: "Big HotDog",
        price: 8500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    CheeseH:{
        name: "Cheese Hotdog",
        price: 10000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MiddleH:{
        name: "Middle HotDog",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },    
    Pepperoni:{
        name: "Pepperoni",
        price: 60000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Combined:{
        name: "Combined Pizza",
        price: 61000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Caesar:{
        name: "Caesar Pizza",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Four:{
        name: "Four Seasons",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    FourCh:{
        name: "Foue Cheese",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mushroom:{
        name: "Mushroom Pizza",
        price: 54000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Coca:{
        name: "Coca-Cola",
        price: 7000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Vater:{
        name: "Vater With Gas",
        price: 2500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mojito:{
        name: "Mojito Classic",
        price: 15900,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Juice:{
        name: "Juice Valley",
        price: 10000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Pepsi:{
        name: "Pepsi 1.5 L",
        price: 9500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Dark:{
        name: "Dark Coffe",
        price: 5000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    CHERRY:{
        name: "DENA CHERRY 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    APPLE:{
        name: "DENA APPLE  1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    ORANGE:{
        name: "DENA ORANGE 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MULTIFRUIT:{
        name: "DENA MULTIFRUIT 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    EXOTIC :{
        name: "DENA EXOTIC 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MOJITO:{
        name: "DENA MOJITO 1L",
        price: 9200,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
}
const BurgerProduct = {
    Mini:{
        name: "Mini Burger",
        price: 11000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Chicken:{
        name: "Chicken Burger",
        price: 13000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Cheese:{
        name: "Cheese Burger",
        price: 12500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Middle:{
        name: "Middle Burger",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Street:{
        name: "Street Burger",
        price: 18500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    StreetCh:{
        name: "Street Cheese",
        price: 20500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
}
const HotDogsProduct = {
    Royal:{
        name: "Hotdog Royal",
        price: 13500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Classical:{
        name: "Classical Hotdog",
        price: 7000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Hotdog:{
        name: "Hotdog",
        price: 9000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Big:{
        name: "Big HotDog",
        price: 8500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    CheeseH:{
        name: "Cheese Hotdog",
        price: 10000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    MiddleH:{
        name: "Middle HotDog",
        price: 6500,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
}
const PizzaProduct = {
    Pepperoni:{
        name: "Pepperoni",
        price: 60000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Combined:{
        name: "Combined Pizza",
        price: 61000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Caesar:{
        name: "Caesar Pizza",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Four:{
        name: "Four Seasons",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    FourCh:{
        name: "Foue Cheese",
        price: 63000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mushroom:{
        name: "Mushroom Pizza",
        price: 54000,
        amount: 0,
        Summ: function () {
            return this.price * this.amount
        }
    },
}
