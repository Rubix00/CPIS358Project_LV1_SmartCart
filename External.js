let total = 0;

var itemsMap = {
    "111": { name: "Milk", price: 2 },
    "222": { name: "Bread", price: 1 }
};

function additem() {
    var barcode = document.getElementById("barcode").value;
    var div_C = document.querySelector(".cart");

    var item = itemsMap[barcode];
    if (!item) {
        alert("No item found for barcode: " + barcode);
        return;
    }

    total += item.price;

    var itemdiv = document.createElement("div");
    itemdiv.innerHTML = `
            <p>${item.name} - ${item.price} SAR 
            <button onclick="removeItem(this, ${item.price})">Remove</button></p>
        `;
    div_C.appendChild(itemdiv);

    var totalbox = document.getElementById("totalBox");
    totalbox.innerHTML = "<strong>Total: " + total + " SAR</strong>";

    document.getElementById("barcode").value = "";
}

function removeItem(button, price) {
    button.parentElement.remove();
    total -= price;

    var totalbox = document.getElementById("totalBox");
    totalbox.innerHTML = "<strong>Total: " + total + " SAR</strong>";
}

function addItemToList() {
    var name = prompt("Enter item name:");
    if (!name) return;

    var barcode = prompt("Enter item barcode (numbers only):");
    if (!barcode || isNaN(barcode)) {
        alert("Invalid barcode. Please enter numbers only.");
        return;
    }

    var price = prompt("Enter item price (numbers only):");
    if (!price || isNaN(price)) {
        alert("Invalid price. Please enter numbers only.");
        return;
    }

    itemsMap[barcode] = { name: name, price: Number(price) };


    var div = document.createElement("div");
    div.className = "itemsdis";
    div.innerHTML = `
            <label><u>${name}</u></label>
            <fieldset class="barcode">Barcode: ${barcode}</fieldset>
            <p>Price: ${price} SAR</p>
        `;

    document.getElementById("items").appendChild(div);
}
