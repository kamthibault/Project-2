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
