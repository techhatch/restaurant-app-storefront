function Delete(e) {
    const iconShoppingP = document.querySelector('.iconShopping p');
    let items = [];
    JSON.parse(localStorage.getItem('items')).map(data => {
        if (data.id != e.currentTarget.parentElement.parentElement.children[0].textContent) {
            items.push(data);
        }
    });
    localStorage.setItem('items', JSON.stringify(items));
    e.currentTarget.parentElement.parentElement.remove();
    iconShoppingP.innerHTML = items.length;

}
function loadCart() {
    // adding data to shopping cart 
    const iconShoppingP = document.querySelector('.iconShopping p');
    const cartBox = document.querySelector('.cartBox');


    let strItems = localStorage.getItem('items')
    let localitems = [];
    if (strItems) {
        localitems = JSON.parse(strItems);
    }

    iconShoppingP.innerHTML = localitems.length;
    //adding cart-box data in table
    const cardBoxTable = cartBox.querySelector('table');
    let tableData = '';
    tableData += '<tr><th>S no.</th><th>Item Name</th><th>Item No</th><th>item Price</th><th></th></tr>';
    if (JSON.parse(localStorage.getItem('items'))[0] === null) {
        tableData += '<tr><td colspan="5">No items found</td></tr>'
    } else {
        JSON.parse(localStorage.getItem('items')).map(data => {
            tableData += '<tr><th>' + data.id + '</th><th>' + data.name + '</th><th>' + data.no + '</th><th>' + data.price + '</th><th><a href="#" id="cart-btn-delete">Delete</a></th></tr>';
        });
    }
    cardBoxTable.innerHTML = tableData;
    cardBoxTable.querySelectorAll('#cart-btn-delete').forEach(element => {
        element.addEventListener('click', Delete);
    });
}

export default function () {
    //cart box
    const iconShopping = document.querySelector('.iconShopping');
    const cartCloseBtn = document.querySelector('.fa-close');
    const cartBox = document.querySelector('.cartBox');
    iconShopping.addEventListener("click", function () {
        cartBox.classList.add('active');
    });
    cartCloseBtn.addEventListener("click", function () {
        cartBox.classList.remove('active');
    });


    // adding data to local-storage
    const attToCartBtn = document.getElementsByClassName('attToCart');
    let items = [];
    for (let i = 0; i < attToCartBtn.length; i++) {
        attToCartBtn[i].addEventListener("click", function (e) {
            const el = e.target;
            const container = el.parentElement;

            if (typeof (Storage) !== 'undefined') {
                let item = {
                    id: i + 1,
                    name: container.children[0].textContent,
                    price: container.children[1].children[1].textContent,
                    no: 1
                };
                if (JSON.parse(localStorage.getItem('items')) === null) {
                    items.push(item);
                    localStorage.setItem("items", JSON.stringify(items));
                    loadCart();
                } else {
                    const localItems = JSON.parse(localStorage.getItem("items"));
                    localItems.map(data => {
                        if (item.id == data.id) {
                            item.no = data.no + 1;
                        } else {
                            items.push(data);
                        }
                    });
                    items.push(item);
                    localStorage.setItem('items', JSON.stringify(items));
                    loadCart();
                }
            } else {
                alert('local storage is not working on your browser');
            }
        });
    }


    loadCart();

};
