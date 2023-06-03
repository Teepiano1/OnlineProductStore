// you are required to consume and api, using the response of the api, create a product card that displays the following item...
// the product name, the product image, product price, product description

let productName = ()=> {
    fetch(`https://fakestoreapi.com/products`)
    .then(response => response.json())
    .then(data=> {
        for (let index = 0; index < data.length; index++) {
            const element = data[index];
            let body = document.body
            let maincontainer = document.createElement("div")
            let name = document.createElement("div")
            let amount = document.createElement("div")
            let des = document.createElement("div")
            let img = document.createElement("img")
            img.classList.add("image")
            name.classList.add("name")
            maincontainer.classList.add("maincontainer")
            maincontainer.append(img, name, amount, des)
            body.append(maincontainer)
            name.textContent = element.title
            amount.textContent = element.price
            img.setAttribute("src", element.image)
            des.textContent = element.description
        }
    })
}
productName()