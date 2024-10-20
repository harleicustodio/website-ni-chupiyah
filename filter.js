let list = document.getElementById('list');
    let filter = document.querySelector('.filter');
    let count = document.getElementById('count');

    let listProducts = [
        {
            id: 1,
            name: 'Iphone 16 Pro',
            price: 78190.80,
            quantity: 5,
            image: 'pic1.png',
            nature: {
                promo: ['5-10%'],
                type: 'Phone'
            }
        },
        {
            id: 2,
            name: 'Iphone 14',
            price: 37300.90,
            quantiy: 30,
            image: 'pic2.png',
            nature: {
                promo: ['5-10%'],
                type: 'Phone'
            }
        },
        {
            id: 3,
            name: 'Iphone SE',
            price: 28371.40,
            quantiy: 30,
            image: 'pic3.png',
            nature: {
                promo: ['10% above'],
                type: 'Phone'
            }
        },
        {
            id: 4,
            name: 'Vivo Y19s',
            price: 10449.05,
            quantiy: 30,
            image: 'image4.png',
            nature: {
                promo: ['1-5%'],
                type: 'Phone'
            }
        },
        {
            id: 5,
            name: 'Ipad Mini',
            price: 31340.50,
            quantiy: 23,
            image: 'pic4.png',
            nature: {
                color: ['brown'],
                size: ['S', 'M', 'L'],
                type: 'Tablet'
            }
        },
        {
            id: 6,
            name: 'Apple Air Tag',
            price: 1852.20,
            quantiy: 0,
            image: 'pic5.png',
            nature: {
                color: ['1-5%'],
                type: 'Accessories'
            }
        },
        {
            id: 7,
            name: 'Xiaomi 13T Pro',
            price: 34199.10,
            quantiy: 18,
            image: 'image7.png',
            nature: {
                promo: ['10% above'],
                type: 'Phone'
            }
        },
        {
            id: 8,
            name: 'Oppo A60',
            price: 8999.10,
            quantiy: 24,
            image: 'pic6.png',
            nature: {
                promo: ['10% above'],
                type: 'Phone'
            }
        },
        {
            id: 9,
            name: 'Samsung A24',
            price: 17590.50,
            quantiy: 7,
            image: 'pic8.png',
            nature: {
                promo: ['1-5%'],
                type: 'Phone'
            }
        },
        {
            id: 10,
            name: 'Iphone 16',
            price: 56479.08,
            quantiy: 20,
            image: 'pic7.png',
            nature: {
                promo: ['1-5%'],
                type: 'Phone'
            }
        },
    
    ];

    let productFilter = listProducts;
    showProduct(productFilter);
    function showProduct(productFilter){
        count.innerText = productFilter.length;
        list.innerHTML = '';
        productFilter.forEach(item => {
            let newItem = document.createElement('div');
            newItem.classList.add('item');
    
            // create image
            let newImage = new Image();
            newImage.src = item.image;
            newItem.appendChild(newImage);
            // create name product
            let newTitle = document.createElement('div');
            newTitle.classList.add('title');
            newTitle.innerText = item.name;
            newItem.appendChild(newTitle);
            // create price
            let newPrice = document.createElement('div');
            newPrice.classList.add('price');
            newPrice.innerText = '₱ ' + item.price.toLocaleString();
            newItem.appendChild(newPrice);
    
            list.appendChild(newItem);
        });
    }
    
    
    filter.addEventListener('submit', function(event){
        event.preventDefault();
        let valueFilter = event.target.elements;
        productFilter = listProducts.filter(item => {
            // check category
            if(valueFilter.category.value != ''){
                if(item.nature.type != valueFilter.category.value){
                    return false;
                }
            }
            // check color
            if(valueFilter.promo.value != ''){
                if(!item.nature.color.includes(valueFilter.color.value)){
                    return false;
                }
            }
            // check name
            if(valueFilter.name.value != ''){
                if(!item.name.includes(valueFilter.name.value)){
                    return false;
                }
            }
            // check min price
            if(valueFilter.minPrice.value != ''){
                if(item.price < valueFilter.minPrice.value){
                    return false;
                }
            }
            //  check max price
            if(valueFilter.maxPrice.value != ''){
                if(item.price > valueFilter.maxPrice.value){
                    return false;
                }
            }
    
    
            return true;
        })
        showProduct(productFilter);
    })
    