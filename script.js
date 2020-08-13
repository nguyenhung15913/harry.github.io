/* Add any JavaScript you need to this file. */


let products = [
  {
    name: 'Men T-shirt 1',
    tag: 'ao1',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Men T-shirt 2',
    tag: 'ao1-1',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Men T-shirt 3',
    tag: 'ao2',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Men T-shirt 4',
    tag: 'ao2-1',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Men T-shirt 5',
    tag: 'ao3',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Men T-shirt 6',
    tag: 'ao3-1',
    category: 'Men',
    price: 15,
    inCart: 0
  },
  {
    name: 'Women T-shirt 1',
    tag: 'ao4',
    category: 'Women',
    price: 15,
    inCart: 0
  },
  {
    name: 'Women T-shirt 2',
    tag: 'ao4-1',
    category: 'Women',
    price: 15,
    inCart: 0
  },
  {
    name: 'Women T-shirt 3',
    tag: 'ao5',
    category: 'Women',
    price: 15,
    inCart: 0
  },
  {
    name: 'Women T-shirt 4',
    tag: 'ao5-1',
    category: 'Women',
    price: 15,
    inCart: 0
  },
  {
    name: 'Women T-shirt 5',
    tag: 'ao6-1',
    category: 'Women',
    price: 15,
    inCart: 0
  },
  {
    name: 'Kid T-shirt 1',
    tag: 'ao7',
    category: 'Kid',
    price: 15,
    inCart: 0
  },
  {
    name: 'Kid T-shirt 2',
    tag: 'ao7-1',
    category: 'Kid',
    price: 15,
    inCart: 0
  },
  {
    name: 'Kid T-shirt 3',
    tag: 'ao8',
    category: 'Kid',
    price: 15,
    inCart: 0
  },
  {
    name: 'Kid T-shirt 4',
    tag: 'ao8-1',
    category: 'Kid',
    price: 15,
    inCart: 0
  },
  {
    name: 'Kid T-shirt 5',
    tag: 'ao9',
    category: 'Kid',
    price: 15,
    inCart: 0
  }
];

// cart number of local storage
function cartNumber(product) {
  let productNumbers = localStorage.getItem('cartNumbers');

  productNumbers = parseInt(productNumbers);

  if (productNumbers) {
    localStorage.setItem('cartNumbers', productNumbers + 1);
    document.querySelector('.shopping-cart span').textContent = productNumbers + 1;
  } else {
    localStorage.setItem('cartNumbers', 1);
    document.querySelector('.shopping-cart span').textContent = 1;
  }

  setItems(product);
}

// set Item

function setItems(product) {
  let cartItems = localStorage.getItem('productsInCart');

  cartItems = JSON.parse(cartItems);

  if (cartItems !== null) {
    if (cartItems[product.tag] === undefined) {
      cartItems = {
        ...cartItems,
        [product.tag]: product
      };
    }
    cartItems[product.tag].inCart += 1;
  } else {
    product.inCart = 1;
    cartItems = {
      [product.tag]: product
    };
  }

  localStorage.setItem('productsInCart', JSON.stringify(cartItems));
}

// Calculate Total cost of the cart

function totalCost(product) {
  let cartCost = localStorage.getItem('totalCost');

  if (cartCost !== null) {
    cartCost = parseInt(cartCost);
    localStorage.setItem('totalCost', cartCost + product.price);
  } else {
    localStorage.setItem('totalCost', product.price);
  }
}

// on load cart number
function onLoadCartNumbers() {
  let productNumbers = localStorage.getItem('cartNumbers');
  if (productNumbers) {
    document.querySelector('.shopping-cart span').textContent = productNumbers;
  }
}

// Check local storage
function displayCart() {
  let cartItems = localStorage.getItem('productsInCart');
  cartItems = JSON.parse(cartItems);

  let productContainer = document.querySelector('.products');
  if (cartItems && productContainer) {
    productContainer.innerHTML = '';
    document.querySelector('.products-container').style.display = 'block';
    document.querySelector('#cart-1').style.display = 'block';
    document.getElementById('no-items').style.display = 'none';
    Object.values(cartItems).map(item => {
      productContainer.innerHTML += `
      <div class="productInCart"> 
        <img src="images/${item.tag}.png">
        <div style="width: 23%; margin-top:38px;" >${item.name}</div>
        <div style="margin-top:38px; width:23%;" >$${item.price},00</div>
        <div style="width: 15%; margin-top: 36px;">     
        <span>${item.inCart}</span>
        </div>
        <div style=" margin-top: 36px;">$${item.inCart * item.price},00</div>
      </div>  
      `;
    });
  }
}

window.onload = function() {
  let proBody = document.getElementById('product-main');
  let cartBody = document.getElementById('cart');
  let helpBody = document.getElementById('help');
  let homeBody = document.getElementById('home');
  let aboutBody = document.querySelector('#about');

  onLoadCartNumbers();
  // Home
 

  let home = document.querySelector('#menu-1');

  home.addEventListener('click', function() {
    if (cartBody.style.display === 'block') {
      cartBody.style.display = 'none';
    }

    if (aboutBody.style.display === 'block') {
      aboutBody.style.display = 'none';
    }

    if (proBody.style.display === 'block') {
      proBody.style.display = 'none';
    }

    if (helpBody.style.display === 'block') {
      helpBody.style.display = 'none';
    }
    homeBody.style.display = 'block';
  });

  // Product
  let product = document.querySelector('#menu-2');

  product.addEventListener('click', function() {
    if (cartBody.style.display === 'block') {
      cartBody.style.display = 'none';
    }

    if (homeBody.style.display === 'block') {
      homeBody.style.display = 'none';
    }

    if (aboutBody.style.display === 'block') {
      aboutBody.style.display = 'none';
    }


    if (helpBody.style.display === 'block') {
      helpBody.style.display = 'none';
    }

    for (let i = 0; i < menProd.length; i++) {
      menProd[i].style.display = 'block';
    }
    for (let i = 0; i < womenProd.length; i++) {
      womenProd[i].style.display = 'block';
    }
    for (let i = 0; i < kidProd.length; i++) {
      kidProd[i].style.display = 'block';
    }
    proBody.style.display = 'block';
  });

  // Cart
  let cart = document.querySelector('#menu-4');
  cart.addEventListener('click', function() {
    if (proBody.style.display === 'block') {
      proBody.style.display = 'none';
    }


    if (aboutBody.style.display === 'block') {
      aboutBody.style.display = 'none';
    }
    if (helpBody.style.display === 'block') {
      helpBody.style.display = 'none';
    }
    if (homeBody.style.display === 'block') {
      homeBody.style.display = 'none';
    }
    cartBody.style.display = 'block';
    document.getElementById('no-items').style.display = 'block';
    displayCart();
  });

  let cartButton = document.querySelector('.shopping-cart');
  cartButton.addEventListener('click', function() {
    if (proBody.style.display === 'block') {
      proBody.style.display = 'none';
    }
  

    if (aboutBody.style.display === 'block') {
      aboutBody.style.display = 'none';
    }
    if (helpBody.style.display === 'block') {
      helpBody.style.display = 'none';
    }
    if (homeBody.style.display === 'block') {
      homeBody.style.display = 'none';
    }
    cartBody.style.display = 'block';
    document.getElementById('no-items').style.display = 'block';
    displayCart();
  });



  //Help
  let help = document.querySelector('#menu-6');
  help.addEventListener('click', function() {
    if (proBody.style.display === 'block') {
      proBody.style.display = 'none';
    }


    if (aboutBody.style.display === 'block') {
      aboutBody.style.display = 'none';
    }
    if (cartBody.style.display === 'block') {
      cartBody.style.display = 'none';
    }
    if (homeBody.style.display === 'block') {
      homeBody.style.display = 'none';
    }
    helpBody.style.display = 'block';
  });

  // About
  let about = document.querySelector('#menu-7');
  about.addEventListener('click', function() {
    document.getElementById('about').style.display = 'block';
    if (proBody.style.display === 'block') {
      proBody.style.display = 'none';
    }

    if (cartBody.style.display === 'block') {
      cartBody.style.display = 'none';
    }
    if (homeBody.style.display === 'block') {
      homeBody.style.display = 'none';
    }
    if (helpBody.style.display === 'block') {
      helpBody.style.display = 'none';
    }
    aboutBody.style.display = 'block';
  });

  // add to cart

  let shopCart = document.querySelectorAll('.addCart');

  for (let i = 0; i < shopCart.length; i++) {
    shopCart[i].addEventListener('click', function() {
      cartNumber(products[i]);
      totalCost(products[i]);
      alert(products[i].name + ' is added to your cart');
    });
  }

  // Category

  let all = document.querySelector('.all');
  let men = document.querySelector('.Men');
  let women = document.querySelector('.Women');
  let kid = document.querySelector('.Kid');
  var menProd = document.querySelectorAll('.men');
  let womenProd = document.querySelectorAll('.women');
  let kidProd = document.querySelectorAll('.kid');

  men.addEventListener('click', function() {
    for (let i = 0; i < menProd.length; i++) {
      menProd[i].style.display = 'block';
    }

    for (let i = 0; i < womenProd.length; i++) {
      if (womenProd[i].style.display === 'block') {
        womenProd[i].style.display = 'none';
      }
    }

    for (let i = 0; i < kidProd.length; i++) {
      if (kidProd[i].style.display === 'block') {
        kidProd[i].style.display = 'none';
      }
    }
  });

  women.addEventListener('click', function() {
    for (let i = 0; i < womenProd.length; i++) {
      womenProd[i].style.display = 'block';
    }

    for (let i = 0; i < menProd.length; i++) {
      if (menProd[i].style.display === 'block') {
        menProd[i].style.display = 'none';
      }
    }

    for (let i = 0; i < kidProd.length; i++) {
      if (kidProd[i].style.display === 'block') {
        kidProd[i].style.display = 'none';
      }
    }
  });

  kid.addEventListener('click', function() {
    for (let i = 0; i < kidProd.length; i++) {
      kidProd[i].style.display = 'block';
    }

    for (let i = 0; i < womenProd.length; i++) {
      if (womenProd[i].style.display === 'block') {
        womenProd[i].style.display = 'none';
      }
    }

    for (let i = 0; i < menProd.length; i++) {
      if (menProd[i].style.display === 'block') {
        menProd[i].style.display = 'none';
      }
    }
  });

  all.addEventListener('click', function() {
    for (let i = 0; i < menProd.length; i++) {
      menProd[i].style.display = 'block';
    }

    for (let i = 0; i < womenProd.length; i++) {
      womenProd[i].style.display = 'block';
    }

    for (let i = 0; i < kidProd.length; i++) {
      kidProd[i].style.display = 'block';
    }
  });

  // Buy and clear cart
  let buy = document.querySelector('#buy');
  let clearCart = document.querySelector('#clear-cart');

  buy.addEventListener('click', function() {
    alert(
      'Thanks! You have succesfully bought our products. We will send the receipt through your email.'
    );
    localStorage.clear();
    document.querySelector('.products-container').style.display = 'none';
    document.querySelector('#cart-1').style.display = 'none';
    document.getElementById('no-items').style.display = 'block';
    document.querySelector('.shopping-cart span').textContent = 0;
  });

  clearCart.addEventListener('click', function() {
    alert('Cart is clear!');
    localStorage.clear();
    document.querySelector('.products-container').style.display = 'none';
    document.querySelector('#cart-1').style.display = 'none';
    document.getElementById('no-items').style.display = 'block';
    document.querySelector('.shopping-cart span').textContent = 0;
  });

  // Menu toggle
  let menuToggle = document.querySelector(".menu-toggle");

  menuToggle.addEventListener('click', function() {
    if(document.querySelector('#navi').style.display === "block") {
      document.querySelector('#navi').style.display = "none";
    }
    else {
      document.querySelector('#navi').style.display = "block";
    }
  });

    
};
