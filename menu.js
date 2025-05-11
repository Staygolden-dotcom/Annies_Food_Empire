
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
      img: "rice-and-stew.jpg",
    },
    {
      name: "Oriental Rice",
      price: 400,
      img: "orientail-fried-rice.jpg",
    },
  ],

  protein: [
    {
      name: "Peppered Chicken",
      price: 350,
      img: "chicken.jpg",
    },
    {
      name: "Peppered Beef",
      price: 300,
      img: "beef.jpg",
    },
    {
      name: "Turkey wing",
      price: 400,
      img: "turkey-wings.jpg",
    },
    {
      name: "Egg",
      price: 400,
      img: "eggs.jpg",
    },
  ],

  beans: [
    {
      name: "Ewagoyin",
      price: 6.99,
      img: "ewagoyin.jpg",
    },
    {
      name: "beans porridge",
      price: 5.49,
      img: "beans-and-plantain.jpg",
    },
    {
      name: "White Beans",
      price: 7.25,
      img: "white-beans.jpg",
    },
  ],

  soup: [
    {
      name: "Egusi Soup",
      price: 6.99,
      img: "egusi-soup.jpg",
    },
    {
      name: "Okro Soup",
      price: 5.49,
      img: "okro-soup.jpg",
    },
    {
      name: "Vegitable Soup",
      price: 7.25,
      img: "vegitable-soup.jpg",
    },
  ],

  swallow: [
    {
      name: "Eba",
      price: 350,
      img: "eba.jpg",
    },
    {
      name: "Wheat",
      price: 300,
      img: "wheat.jpg",
    },
    {
      name: "Starch",
      price: 400,
      img: "starch.jpg",
    },
  ],

  pasta: [
    {
      name: "Jollof Spagetti",
      price: 350,
      img: "jollof-spagetti.jpg",
    },
    {
      name: "Alfredo",
      price: 400,
      img: "spag.jpg",
    },
    {
      name: "Spagetti Bolognese",
      price: 400,
      img: "spagetti-bolognese.jpg",
    },
    {
      name: "Beefaroni",
      price: 400,
      img: "beefaroni.jpg",
    },
    {
      name: "Macaroni Salad",
      price: 400,
      img: "macaroni-salad.jpg",
    },
  ],

  sides: [
    {
      name: "Moi-Moi",
      price: 300,
      img: "moimoi.jpg",
    },
    {
      name: "Fried Plantain",
      price: 350,
      img: "fried-plantain.jpg",
    },
    {
      name: "Puff-puff .6px",
      price: 350,
      img: "cake.jpg",
    },
    {
      name: "Egg-roll  .1px",
      price: 300,
      img: "egg-roll.jpg",
    },
  ],

  wraps: [
    {
      name: "Beef Shawarma",
      price: 350,
      img: "beef-shawama.jpg",
    },
    {
      name: "chicken Shawarma",
      price: 300,
      img: "chicken-shawama.jpg",
    },
    {
      name: "Spring-Roll  .6px",
      price: 300,
      img: "spring-roll.jpg",
    },
    {
      name: "Samosa  .6px",
      price: 300,
      img: "samosa.jpg",
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
    }, 3000);
  });




