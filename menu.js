
function scrollToSection(id) {
  const section = document.getElementById(id);
  if (section) {
    section.scrollIntoView({ behavior: "smooth" });
  }
}


const menuData = {
  rice: [
    {
      name: "Jollof Rice",
      price: 350,
      img: "jollof-rice-chiken-plantain.jpg",
    },
    {
      name: "Fried Rice ",
      price: 300,
      img: "fried-rice.jpg",
    },
    {
      name: "Coconut Fried Rice",
      price: 400,
      img: "coconut-fried-rice.jpg",
    },
    {
      name: "Native Rice",
      price: 400,
      img: "native-rice.jpg",
    },
    {
      name: "Rice and Stew",
      price: 400,
      img: "images/rice-and-stew.jpg",
    },
    {
      name: "Oriental Rice",
      price: 400,
      img: "images/orientail-fried-rice.jpg",
    },
  ],

  protein: [
    {
      name: "Peppered Chicken",
      price: 350,
      img: "images/chicken.jpg",
    },
    {
      name: "Peppered Beef",
      price: 300,
      img: "images/beef.jpg",
    },
    {
      name: "Turkey wing",
      price: 400,
      img: "images/turkey-wings.jpg",
    },
    {
      name: "Egg",
      price: 400,
      img: "images/eggs.jpg",
    },
  ],

  beans: [
    {
      name: "Ewagoyin",
      price: 6.99,
      img: "images/ewagoyin.jpg",
    },
    {
      name: "beans porridge",
      price: 5.49,
      img: "images/beans-and-plantain.jpg",
    },
    {
      name: "White Beans",
      price: 7.25,
      img: "images/white-beans.jpg",
    },
  ],

  soup: [
    {
      name: "Egusi Soup",
      price: 6.99,
      img: "images/egusi-soup.jpg",
    },
    {
      name: "Okro Soup",
      price: 5.49,
      img: "images/okro-soup.jpg",
    },
    {
      name: "Vegitable Soup",
      price: 7.25,
      img: "images/vegitable-soup.jpg",
    },
  ],

  swallow: [
    {
      name: "Eba",
      price: 350,
      img: "images/eba.jpg",
    },
    {
      name: "Wheat",
      price: 300,
      img: "images/wheat.jpg",
    },
    {
      name: "Starch",
      price: 400,
      img: "images/starch.jpg",
    },
  ],

  pasta: [
    {
      name: "Jollof Spagetti",
      price: 350,
      img: "images/jollof-spagetti.jpg",
    },
    {
      name: "Alfredo",
      price: 400,
      img: "images/alfredo.jpg",
    },
    {
      name: "Spagetti Bolognese",
      price: 400,
      img: "images/spagetti-bolognese.jpg",
    },
    {
      name: "Beefaroni",
      price: 400,
      img: "images/beefaroni.jpg",
    },
    {
      name: "Macaroni Salad",
      price: 400,
      img: "images/macaroni-salad.jpg",
    },
  ],

  sides: [
    {
      name: "Moi-Moi",
      price: 300,
      img: "images/moimoi.jpg",
    },
    {
      name: "Fried Plantain",
      price: 350,
      img: "images/fried-plantain.jpg",
    },
    {
      name: "Puff-puff .6px",
      price: 350,
      img: "images/cake.jpg",
    },
    {
      name: "Egg-roll  .1px",
      price: 300,
      img: "images/egg-roll.jpg",
    },
  ],

  wraps: [
    {
      name: "Beef Shawarma",
      price: 350,
      img: "images/beef-shawama.jpg",
    },
    {
      name: "chicken Shawarma",
      price: 300,
      img: "images/chicken-shawama.jpg",
    },
    {
      name: "Spring-Roll  .6px",
      price: 300,
      img: "images/spring-roll.jpg",
    },
    {
      name: "Samosa  .6px",
      price: 300,
      img: "images/samosa.jpg",
    },
  ],
};

const cart = [];
const cartCount = document.getElementById("cart-count");
const cartItemsContainer = document.getElementById("cart-items");
const cartTotalPrice = document.getElementById("cart-total-price");
const cartPanel = document.getElementById("cart-panel");
const closeCartBtn = document.getElementById("close-cart");
const cartIcon = document.getElementById("cart-icon");
const emptyCartMsg = document.getElementById("empty-cart-msg");

function renderMenu(categoryId, items) {
  const container = document.querySelector(`#${categoryId} .menu-items`);
  items.forEach((item) => {
    const itemDiv = document.createElement("div");
    itemDiv.classList.add("menu-item");
    itemDiv.innerHTML = `
            <img src="${item.img}" alt="${item.name}">
            <div class="menu-item-content">
                <h3>${item.name}</h3>
                <p>₱${item.price.toFixed(2)}</p>
                <button>Add to Cart</button>
            </div>
        `;
    const btn = itemDiv.querySelector("button");
    btn.addEventListener("click", () => addToCart(item));
    container.appendChild(itemDiv);
  });
}

function addToCart(item) {
  cart.push(item);
  updateCartCount();
  updateCartPanel();
  cartIcon.classList.add("shake");
  setTimeout(() => cartIcon.classList.remove("shake"), 500);
}

function removeFromCart(index) {
  cart.splice(index, 1);
  updateCartCount();
  updateCartPanel();
}

function updateCartCount() {
  cartCount.textContent = cart.length;
}

function updateCartPanel() {
  cartItemsContainer.innerHTML = "";
  let total = 0;
  if (cart.length === 0) {
    emptyCartMsg.style.display = "block";
  } else {
    emptyCartMsg.style.display = "none";
  }
  cart.forEach((item, index) => {
    const li = document.createElement("li");
    li.innerHTML = `
            <span>${item.name} - ₱${item.price.toFixed(2)}</span>
            <button class="remove-btn" title="Remove item">&times;</button>
        `;
    const removeBtn = li.querySelector(".remove-btn");
    removeBtn.addEventListener("click", () => removeFromCart(index));
    cartItemsContainer.appendChild(li);
    total += item.price;
  });
  cartTotalPrice.textContent = `₱${total.toFixed(2)}`;
}

cartIcon.addEventListener("click", () => {
  cartPanel.classList.toggle("show");
  cartPanel.setAttribute(
    "aria-hidden",
    cartPanel.classList.contains("show") ? "false" : "true"
  );
});
closeCartBtn.addEventListener("click", () => {
  cartPanel.classList.remove("show");
  cartPanel.setAttribute("aria-hidden", "true");
});

for (const [category, items] of Object.entries(menuData)) {
  renderMenu(category, items);
}

// ✨ cart icon shake animation
const style = document.createElement("style");
style.textContent = `
    .shake { animation: shake 0.4s ease; }
    @keyframes shake { 0%,100% { transform: rotate(0deg); } 25% { transform: rotate(-10deg); } 75% { transform: rotate(10deg); } }
`;
document.head.appendChild(style);



// back to top Button

  let mybutton = document.getElementById("backToTopBtn");

  // When the user scrolls down 20px from the top, show the button
  window.onscroll = function() {scrollFunction()};

  function scrollFunction() {
    if (document.body.scrollTop > 20 || document.documentElement.scrollTop > 20) {
      mybutton.style.display = "block";
    } else {
      mybutton.style.display = "none";
    }
  }

  // When the user clicks the button, scroll to the top
  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE, Opera
  }

  // contact
  const form = document.getElementById("contactForm");
  const confirmationMsg = document.getElementById("confirmationMsg");

  form.addEventListener("submit", function (e) {
    e.preventDefault(); // prevent actual form submission
    confirmationMsg.style.display = "block"; // show message at top
    form.reset(); // optional: clear form fields

    // Optional: hide message after 5 seconds
    setTimeout(() => {
      confirmationMsg.style.display = "none";
    }, 5000);
  });




