const allproduct = {
    Beefburger:{
        name: "Beef burger",
        price: 11000,
        amount: 0,
        src: "imges/mini_burger.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Chicken:{
        name: "Double beef burger",
        price: 13000,
        amount: 0,
        src: "imges/chicken_burger.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Cheese:{
        name: "Chicken Burger",
        price: 12500,
        amount: 0,
        src: "imges/cheese_burger.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Middle:{
        name: "Regular Burger",
        price: 6500,
        amount: 0,
        src: "imges/middle_burger.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Street:{
        name: "Triple cheese burger",
        price: 18500,
        amount: 0,
        src: "imges/Street Cheese.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    StreetCh:{
        name: "Boss burger",
        price: 20500,
        amount: 0,
        str: "imges/STREET BURGER.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Royal:{
        name: "Hotdog Royal",
        price: 13500,
        amount: 0,
        src: "imges/HotDog.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Classical:{
        name: "Classical Hotdog",
        price: 7000,
        amount: 0,
        src: "imges/png-transparent-hot-dog-bun-hamburger-toast-hot-dog-food-beef-ketchup-thumbnail-removebg-preview.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Hotdog:{
        name: "Hotdog",
        price: 9000,
        amount: 0,
        src: "imges/Hotdog_O-removebg-preview.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Big:{
        name: "Big HotDog",
        price: 8500,
        amount: 0,
        src: "imges/Big HotDog.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    CheeseH:{
        name: "Cheese Hotdog",
        price: 10000,
        amount: 0,
        src: "imges/CheeseH.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    MiddleH:{
        name: "Middle HotDog",
        price: 6500,
        amount: 0,
        src: "imges/HotDog.png",
        Summ: function () {
            return this.price * this.amount
        }
    },    
    Pepperoni:{
        name: "Pepperoni",
        price: 60000,
        amount: 0,
        src: "imges/peperoni.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Combined:{
        name: "Combined Pizza",
        price: 61000,
        amount: 0,
        src: "imges/Комбинированная.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Caesar:{
        name: "Caesar Pizza",
        price: 63000,
        amount: 0,
        src: "imges/cesar.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Four:{
        name: "Four Seasons",
        price: 63000,
        amount: 0,
        src: "imges/chetire-sezona.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    FourCh:{
        name: "Foue Cheese",
        price: 63000,
        amount: 0,
        src: "imges/chetire-sira.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Mushroom:{
        name: "Mushroom Pizza",
        price: 54000,
        amount: 0,
        src: "imges/gribnaya-1.jpg",
        Summ: function () {
            return this.price * this.amount
        }
    },
    BunSandwichca:{
        name: "Bun sandwich",
        price: 7000,
        amount: 0,
        src: "imges/кока-кола_0_5-removebg-preview.png",
        Summ: function () {
            return this.price * this.amount
        }
    },
    Chickensandwich:{
        name: "Chicken Sandwich",
        price: 2500,
        amount: 0,
        src: "imges/ВлдаСГазом-removebg-preview.png",
        Summ: function () {
            return this.price * this.amount
        }
    },

}
let OrderMass = [];
let btn = document.querySelectorAll('.card_content_add');
let allSum = 0;
let sss = 0;

const out = document.querySelector('.ThisPrice span');
for (let i = 0; i < btn.length; i++) {
    btn[i].addEventListener('click', function button(e) {
        e.preventDefault(); 
        const parent = this.closest('.card');
        const parentId = parent.getAttribute('id');
        allproduct[parentId].amount++;
        sss += allproduct[parentId].price;
        out.innerHTML = sss;
        let order_Title = document.querySelector('.Orders_Card_title'),
              order_Description = document.querySelector('.Orders_Card_description'),
              order_Img = document.querySelector('.Orders_Card_img'),
              order_ImgSrc = order_Img.getAttribute('src'),
              CardParent = this.closest('.card'),
              CardClickImg = CardParent.querySelector('.card_img_').getAttribute('src'),
            //   CardClickImgSrc = CardClickImg.getAttribute('src').innerHTML,
              CardClickDescr = CardParent.querySelector('.card_description'),
              CardClickPrice = allproduct[parentId].price,
              CardClickTitle = allproduct[parentId].name,
              order_CardContent = document.querySelector('.Orders_Card_content');
            // console.log(this.closest('card'));
        // console.log(CardClickDescr);       
        order_Title.innerHTML = allproduct[parentId].name;
        order_Description.innerHTML = CardClickDescr.innerHTML,
        // order_Img. = allproduct[parentId].src;
        // === === ===
        // order_Img.removeAttribute('src');
        SendToOrderImg = order_Img.setAttribute('src', `${CardClickImg}`);
        // SendToOrderImg.innerHTML= CardClickImgSrc;
        
        let OrederLi = document.querySelector(".OrederListLi"),
            OrderPriceLi = document.querySelectorAll(".OrederListPriceLi"),
            OrderUl = document.querySelector('.OrederListUl'); 
            if (OrderPriceLi.innerHTML) {
                console.log("15000");
                OrderMass += OrderUl.innerHTML[0] = '';
                OrderUl.innerHTML ='<li class="OrederListLi">' + CardClickTitle + '<span class="OrederListPriceLi">' + CardClickPrice + '</span><a href="#!" class="OrederListButtonLi">Удалить </a></li>';
            }else{
                OrderMass += OrderUl.innerHTML = '<li class="OrederListLi">' + CardClickTitle + '<span class="OrederListPriceLi">' + CardClickPrice + '</span><a href="#!" class="OrederListButtonLi">Удалить </a></li>';
                console.log("Warning");
            }
            OrderUl.innerHTML = OrderUl.innerHTML + OrderMass;
            // console.log(OrderMass);
            // console.log(OrderPriceLi);

            // OrderUl.innerHTML.push(orderUlContentFunction());
    })
}
document.querySelector('.Global_buy_bottom').addEventListener('click',function (e) {
    e.preventDefault(); 
    Products()
    for (const key in allproduct) {
        allproduct[key].amount = 0;
        allSum = 0;
    }
    sss = 0;
    out.innerHTML = 0;
    // console.log(allproduct);
    document.querySelector('.Orders_Card_description').innerHTML
    document.querySelector('.Orders_Card_title').innerHTML 
    document.querySelector('.Orders_Card_img').setAttribute('src', 'imges/photo.png');
})
let DeleteOrderBtn = document.querySelectorAll('.OrederListButtonLi');
// console.log(DeleteOrderBtn.innerHTML);
for (let ix = 0; ix < DeleteOrderBtn.length; ix++) {
    DeleteOrderBtn[ix].addEventListener('click', function (e) {
        e.preventDefault();
        delete OrderMass[DeleteOrderBtn[ix]]; 
    })
}
function Products() {
    for (const key in allproduct) {
        if(allproduct[key].amount > 0){
            allSum = allSum + allproduct[key].Summ();
        }
    }
    // console.log(allSum);
}

