const products = document.getElementById("products");

function getProduct() {
  products.innerHTML = "";
  axios
    .get("https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users")
    .then((res) => {
      db = res.data;
      res.data.map((item) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <img src=${item.avatar} alt="" style="width: 150px; height: auto;">
            <p>${item.name}</p>
            <p>${item.number} MANAT</p>
            <button onclick="addToCart(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Add to cart</button>
            <button onclick="addToWishlist(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Wishlist</button>
            </div>
            `;
        products.appendChild(box);
      });
    });
}

function addToCart(id) {
  let cart = JSON.parse(localStorage.getItem("cart")) || [];
  cart.push(db.find((item) => item.id == id));
  localStorage.setItem("cart", JSON.stringify(cart));
}

function addToWishlist(id) {
  let wishlist = JSON.parse(localStorage.getItem("wishlist")) || [];
  wishlist.push(db.find((item) => item.id == id));
  localStorage.setItem("wishlist", JSON.stringify(wishlist));
}

function sortByNameAZ() {
  products.innerHTML = "";
  axios
    .get("https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users")
    .then((res) => {
      db = res.data;
      let sortedData = db.sort((a, b) => a.name.localeCompare(b.name));
      sortedData.map((item) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <img src=${item.avatar} alt="" style="width: 150px; height: auto;">
            <p>${item.name}</p>
            <p>${item.number} MANAT</p>
            <button onclick="addToCart(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Add to cart</button>
            <button onclick="addToWishlist(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Wishlist</button>
            </div>
            `;
        products.appendChild(box);
      });
    });
}
sortAZ.addEventListener("click", sortByNameAZ);

function sortByNameZA() {
  products.innerHTML = "";
  axios
    .get("https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users")
    .then((res) => {
      db = res.data;
      let sortedData = db.sort((a, b) => b.name.localeCompare(a.name));
      sortedData.map((item) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <img src=${item.avatar} alt="" style="width: 150px; height: auto;">
            <p>${item.name}</p>
            <p>${item.number} MANAT</p>
            <button onclick="addToCart(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Add to cart</button>
            <button onclick="addToWishlist(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Wishlist</button>
            </div>
            `;
        products.appendChild(box);
      });
    });
}

function searchByName() {
  products.innerHTML = "";
  axios
    .get("https://63b29e7e5901da0ab368fe8b.mockapi.io/eproducts/users")
    .then((res) => {
      let filteredData = res.data.filter((item) =>
        item.name.toLowerCase().startsWith(inp.value.toLowerCase())
      );
      filteredData.map((item) => {
        const box = document.createElement("div");
        box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <img src=${item.avatar} alt="" style="width: 150px; height: auto;">
            <p>${item.name}</p>
            <p>${item.number} MANAT</p>
            <button onclick="addToCart(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Add to cart</button>
            <button onclick="addToWishlist(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">Wishlist</button>
            </div>
            `;
        products.appendChild(box);
      });
    });
  inp.value = "";
}

sortZA.addEventListener("click", sortByNameZA);

defaultPro.addEventListener("click", getProduct);

inpBtn.addEventListener("click", searchByName);

getProduct();

function postForm(e) {
  e.preventDefault();
  axios.post("https://northwind.vercel.app/api/categories", {
    name: exampleInputEmail1.value,
    surname: exampleInputPassword1.value,
  });
  myForm.reset();

  setTimeout(() => {
    getFormData();
  }, 1000);

}


myForm.addEventListener("submit", postForm);

function getFormData() {
    formData.innerHTML = "";
    
    axios.get("https://northwind.vercel.app/api/categories").then((res) => {
        res.data.map((item) => {
            const box = document.createElement("div");
            box.innerHTML = `
            <div style="border: 1px solid black; padding:10px; border-radius:10px">
            <p>${item.name}</p>
            <button onclick="deleteFromForm(${item.id})" style="border: none; background-color: orange; color: white; padding: 3px 7px 3px 7px; border-radius: 8px;">sil</button>
            </div>
            `;
            formData.appendChild(box);
        });
    });
}

getFormData();

function deleteFromForm (id) {
    axios.delete(`https://northwind.vercel.app/api/categories/${id}`)
    setTimeout(() => {
        getFormData();
      }, 1000);
}