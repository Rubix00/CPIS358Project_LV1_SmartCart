let total = 0;
    let barcode = null
    function additem() {
        let barcode = document.getElementById("barcode").value;
        let div_C = document.querySelector(".cart");

        let itemName = "";
        let itemPrice = 0;

        if (barcode == "111") {
            itemName = "Milk";
            itemPrice = 2;
        }
        else if (barcode == "222") {
            itemName = "Bread";
            itemPrice = 1;
        }
        else if (barcode == null) {

        }

        total += itemPrice;





        let itemdiv = document.createElement("div");

        itemdiv.innerHTML = ` <p>  ${itemName} -  ${itemPrice} SAR 
    
    <button onclick="removeItem(this , ${itemPrice})"> Remove </button> </p>
    `;
        div_C.appendChild(itemdiv);

        let totalbox = document.getElementById("totalBox")
        totalbox.innerHTML = "<strong> Total: " + total + " SAR </strong>"

        document.getElementById("barcode").value = ""
    }



    function removeItem(button, price) {
        button.parentElement.remove();
        total = total - price;

        let totalbox = document.getElementById("totalBox")
        totalbox.innerHTML = "<strong> Total: " + total + " SAR </strong>"
    }
