function ajax(src, callback) {
  //step 1. create new AJAX object
  const xhr = new XMLHttpRequest();

  //step 2. define callback function
  xhr.onreadystatechange = function () {
    if (xhr.readyState === 4) {
      callback(xhr.responseText);
    }
  };
  //step 3. open xhr request - method & url setting
  xhr.open("GET", src);

  //step 4. send xhr request
  xhr.send();
}

function render(data) {
  const contentBox = document.getElementById("content-box");
  const products = JSON.parse(data);

  const productsHTML = products
    .map((product) => {
      return `
        <div class="product">
          <p class="product-name">${product.name}</p>
          <p class="product-price">Price: ${product.price}</p>
          <p class="product-desc">${product.description}</p>
        </div>`;
    })
    .join("");

  contentBox.innerHTML = productsHTML;
}

ajax(
  "https://appworks-school.github.io/Remote-Aassigiment-Data/products",
  function (response) {
    render(response);
  }
);
