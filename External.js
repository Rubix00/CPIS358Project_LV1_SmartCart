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
