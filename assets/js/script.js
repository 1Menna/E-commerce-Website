// categories drop down list
const cat = document.getElementById('cat');
const categories = document.getElementById('sub-menu-wrap');

cat.addEventListener('mouseover',ShowCategories);

function ShowCategories(){
    categories.classList.toggle('active');
}
//_____________________________________________________________________
// ===== Add to shop page ==============
document.querySelectorAll(".add-to-cart").forEach(button => {button.addEventListener("click",add);});
function add() {
    let itemHTML = this.closest(".item").outerHTML; // Get full item HTML
    let cartItems = localStorage.getItem("cart") || ""; // Get existing items (string)
    
    cartItems += itemHTML; // Append new item
    localStorage.setItem("cart", cartItems); // Store updated items
    alert("Item added to cart!");
};
//______________________________________________________________________
document.addEventListener("DOMContentLoaded", function () {
    let cartItems = localStorage.getItem("cart"); // Get stored items
    let cartContainer = document.getElementById("cart-items");

        cartContainer.innerHTML = cartItems; // Display items

        // Add delete buttons dynamically
        document.querySelectorAll(".item").forEach(item => {
            let deleteBtn = document.createElement("i");
            deleteBtn.classList.add("fa-solid", "fa-trash", "delete-icon"); // Font Awesome icon
            deleteBtn.classList.add("remove-item");
            item.appendChild(deleteBtn); // Add button to each item

            // Click event to remove item
            deleteBtn.addEventListener("click", function () {
                item.remove(); // Remove from the page
                updateLocalStorage(); // Update storage
            });
        });
    
});

function updateLocalStorage() {
    let remainingItems = document.getElementById("cart-items").innerHTML;
    localStorage.setItem("cart", remainingItems); // Save updated cart
}
//______________________________________________________________________


