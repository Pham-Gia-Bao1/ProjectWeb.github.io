
        // JavaScript code
        const urlParams = new URLSearchParams(window.location.search);
        const productId = urlParams.get('id');
        // console.log(urlParams)
        // console.log(productId)
        fetch("/database/db.json")
            .then((res) => res.json())
            .then((data) => {
                var product = false;
                const productList = data.product;
                data.product.forEach(element => {
                    if (productId == element.id) {
                        product = true;
                        var productDetailHTML = '';
        
                        if (product) {
                            document.getElementById('product__name').innerHTML = element.name;
                            document.getElementById('main__img').src = element.image;
                            document.getElementById('secondary__img__item1').src = element.image;
                            document.getElementById('secondary__img__item2').src = element.image;
                            document.getElementById('secondary__img__item3').src = element.image;
                            document.getElementById('description').innerHTML = element.description;
        
                            // productDetailHTML = `
                            
                            //      <div class="product">
                            //          <h2>${element.name}</h2>
                            //          <p>Description: ${element.description}</p>
                            //          <p>Old Price: ${element.oldPrice}</p>
                            //          <p>New Price: ${element.newPrice}</p>
                            //          <p>Quantity: ${element.quantity}</p>
                            //          <img src="${element.image}" alt="${element.name}">
                            //          <img src="${element.image}" alt="${element.name}">
                            //          <img src="${element.image}" alt="${element.name}">
                            //          <img src="${element.image}" alt="${element.name}">
        
                            //      </div>
                            //  `;
                             
        
                            // document.getElementById("product-detail").innerHTML = productDetailHTML;
                        } else {
                            document.getElementById("product-detail").innerHTML = "Product not found.";
                        }
                    }
        
                });
            });