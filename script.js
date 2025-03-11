



let currentIndex = 0;
const items = document.querySelectorAll('.list-item');
const totalItems = items.length; // Get the total number of items in the list
const list = document.getElementById('list');

function showItem(index) {
    // Hide all items first
    items.forEach(item => item.style.display = 'none');
    // Show the item at the given index
    items[index].style.display = 'block';
}

// Function to go to the next item
function nextItem() {
    currentIndex = (currentIndex + 1) % totalItems; // Move to next item, loop back to 0 after reaching end
    showItem(currentIndex);
}

// Function to go to the previous item
function prevItem() {
    currentIndex = (currentIndex - 1 + totalItems) % totalItems; // Move to previous item, loop back to end after reaching start
    showItem(currentIndex);
}