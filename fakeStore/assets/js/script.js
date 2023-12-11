const API_URL = 'https://fakestoreapi.com'

const productsContainer = document.querySelector('.products')

const fetchAllProducts = () => {
    const res = fetch(`${API_URL}/products`)
        .then(res => res.json())
        .then(data => {
            data.forEach(product => {
                const productItem = document.createElement('div')
                productItem.setAttribute('data-id', product.id)
                productItem.classList = 'products-item'
                productItem.innerHTML = `
                    <div class="products-item_img" data-id=${product.id}>
                        <img src=${product.image} alt=${product.title} data-id=${product.id}>
                    </div>

                    <p data-id=${product.id}>${product.title}</p>

                    <div class="products-item_bottom" data-id=${product.id}>
                        <span data-id=${product.id}>${product.category}</span>
                        <span data-id=${product.id}>${product.price} AZN</span>
                    </div>
                `
                productsContainer.appendChild(productItem)

                productItem.addEventListener('click', function(e) {
                    console.log(e.target)
                    const productId = e.target.getAttribute('data-id')

                    const res = fetch(`${API_URL}/products/${productId}`)
                        
                })
        })
    })
}

fetchAllProducts()