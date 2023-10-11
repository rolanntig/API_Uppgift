
async function Product() {
    let resp = await fetch("https://dummyjson.com/products")
    let data = await resp.json();


    await data.products.map((item) => {
        console.log(item);
            let carContainer = document.createElement("div");
            carContainer.style.display = "flex";
            carContainer.style.flexDirection = "column";
            carContainer.style.justifyContent = "center";
            carContainer.style.alignItems = "center";

            //CarName
            let carName = document.createElement("h1");
            carName.textContent = item.brand;

            //carImg
            let carImg = document.createElement("img");
            carImg.src = item.thumbnail;
            carImg.style.width = "50%";

            //carModel
            let carModel = document.createElement("h1");
            carModel.textContent = item.category;

            //carColor
            let carColor = document.createElement("h1");
            carColor.textContent = item.description;

            //carYear
            let carYear = document.createElement("h1");
            carYear.textContent = `${item.stock} left in stock`;

            //carPrice
            let carPrice = document.createElement("h1");
            carPrice.textContent = `₽${item.price}`;

            carContainer.appendChild(carName);
            carContainer.appendChild(carImg);
            carContainer.appendChild(carModel);
            carContainer.appendChild(carColor);
            carContainer.appendChild(carYear);
            carContainer.appendChild(carPrice);
            document.body.appendChild(carContainer);
    

    })

            
}


Product();

