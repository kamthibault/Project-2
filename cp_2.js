function fetchProductsThen() {
    fetch(`https://www.course-api.com/javascript-store-products`)
    .then(response => {
        if(!response.ok) {
            throw new Error(`HTTP Error, Status: ${response.status}`)
}
return response.json();
})
.then(data => {
    data.forEach(product => {
        console.log(product.fields.name);
    });
})
.catch(error => {
    console.error (`Fetch error:`, error);
});
}
async function fetchProductsAsync(){
    try {
        const response = await fetch(`https://www.course-api.com/javascript-store-products`)
    if (!response.ok) {
        throw new Error (`http Error, Status: ${response.status}`);
    }
    const products = await response.json();
    displayProducts(products);
    }catch (error){
        handleError(error);
    }
}
function displayProducts(products) {
    const container = document.getElementById(`products-container`);
    container.innerhtml = ``;

    products.slice(0,5).forEach(product =>{
        const {name, price, image}= product.fields;

        const card = document.createElement(`div`);
        card.className = `product-card`;

        const img = document.createElement(`img`);
        img.src = image[0].url;
        img.alt = name;

        const title = document.createElement (`p`);
        cookieStore.textContent = `$${(price/100).toFixed(2)}`;

        card.appendChild(img);
        card.appendChild(title);
        card.appendChild(cost);
        container.appendChild(card);
    });
}
function handleError(error) {
    console.error(`An error occurred: ${error.message}`);
}
