fetch('https://fakestoreapi.com/products?limit=10')
.then(response => response.json())

.then(data => {
    cartContainer(data)
})

.catch(error => {
    console.log(`Deu ruim: ${error}`)
})

function cartContainer(products){
    let cartContainer = document.querySelector('#cartContainer')

    products.forEach(product => {
        let divProduct = document.createElement('div')
        divProduct.classList.add('product')

        let img = document.createElement('img')
        img.src = product.image
        img.width = 200
        img.height = 300
        divProduct.appendChild(img)

        let name = document.createElement('p')
        name.textContent = product.title
        divProduct.appendChild(name)

        let cust = document.createElement('p')
        cust.textContent = `R$ ${product.price}`
        divProduct.appendChild(cust)

        cartContainer.appendChild(divProduct)
    })
    

}