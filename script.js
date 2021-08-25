async function getDetails() {
    const data = await fetch("http://makeup-api.herokuapp.com/api/v1/products.json?brand=maybelline")
    const details = await data.json();
    console.log(details);
    details.forEach((detail) => createDetail(detail));
}
function createDetail(detail) {
    const info = document.createElement("div");
    info.setAttribute("class", "container");

    info.innerHTML = `<img class="mpic" src="${detail.api_featured_image}">
    <br>
    <div class ="about">
    <h1>${detail.brand}<h1>
    <h2>${detail.name}<h2>
    <p class="dis"><br>${detail.description}</p>
    <p class="price"> $ ${detail.price}</p>
    <p><a href="${detail.product_link}">Add To Cart</a></p>
    </div>`;
    document.body.append(info);
    
}
getDetails();
