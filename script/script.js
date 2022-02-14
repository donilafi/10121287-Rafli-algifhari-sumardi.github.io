const links = document.querySelectorAll('.main_menu_list_link'),
    tab = document.querySelectorAll('.main_restauranst_menu');
    function tabs(first, second) {

        first.classList.add('active')
        second.classList.add('active')
    }
    for (let i = 0; i < links.length; i++) {
        
        links[i].addEventListener('click', function Click(e) {
            
            e.preventDefault();
            for (let ix = 0; ix < tab.length; ix++) {
                links[ix].classList.remove("active");
                tab[ix].classList.remove("active");
            }
            tabs(this, tab[i]);
        })    
    } .
    
    
    
    
//     const links = document.querySelectorAll('.tabsItem'),
//     tab = document.querySelectorAll('.tabsContentItem');
// for (let i = 0; i < links.length; i++) {
//     links[i].addEventListener('click', function (e) {
//         e.preventDefault();
//         for (let ix = 0; ix < tab.length; ix++) {
//             links[ix].classList.remove('active');
//             tab[ix].classList.remove('active');
//         }
//         tabs(links[i], tab[i])
//     })
// }

// function tabs(el, arr) {

//     el.classList.add('active');
//     arr.classList.add('active');
// }