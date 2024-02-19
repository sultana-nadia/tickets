const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn){
    btn.addEventListener("click", function(event){
        count = count + 1;

        const ticketName = event.target.childNodes[0].textContent;
        const ticketPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[9].childNodes[3].childNodes[0].textContent;

        const selectedContainer = document.getElementById("selected-place-container");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = ticketName;
        const p2 = document.createElement("p");
        p2.innerText = ticketPrice;

        event.target.style.backgroundColor = "lightgreen";

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);


        totalPrice("total-price", parseInt(ticketPrice));

        grandTotalPrice("grand-total-price", parseInt(ticketPrice));

        setInnerText("cart-count", count);
    });
}

function grandTotalPrice(category){
    const totalPrice = document.getElementById("total-Price").innerText;
    const convertedTotalCost = parseInt(totalPrice.innerText);

    if(category === "NEW15"){
        setInnerText("grand-total-price", convertedTotalCost * 0.85);
    }
    else if(category === "Couple 20"){
        setInnerText("grand-total-price", convertedTotalCost * 0.80);
    }
    else{
        setInnerText("grand-total-price", convertedTotalCost);
    }
}


function totalPrice(id, value){
    const totalPrice = document.getElementById(id).innerText;
    const convertedTotalCost = parseInt(totalPrice);
    const sum = convertedTotalCost + parseInt(value);
    setInnerText(id, sum);
}

// grand total price
function grandTotalPrice(){
    const updatePrice = document.getElementById("total-price").innerText;
    const convertedTotalCost = parseInt(updatePrice);

    setInnerText("grand-total-price", convertedTotalCost);
}


function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}


// available seat
const addButtons = document.querySelectorAll(".add-btn")

for(let i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', function() {
        let currentSeats = parseInt(document.getElementById('current-seat').innerText);
        
        if(currentSeats > 0){
            currentSeats--;
            document.getElementById('current-seat').innerText = currentSeats;
        } 

    });
}



let selectedButtonCount = 0;

for (let i = 0; i < addButtons.length; i++) {
    addButtons[i].addEventListener('click', function() {
        if (!this.disabled) {
            let currentSeats = parseInt(document.getElementById('current-seat').innerText);
            
            if(currentSeats > 0 && selectedButtonCount < 5) {
                selectedButtonCount++;
                this.disabled = true;

                if (selectedButtonCount === 4) {
                    alert("You have selected 4 seats");
                    for (let j = 0; j < addButtons.length; j++) {
                        if (!addButtons[j].disabled) {
                            addButtons[j].disabled = true;
                        }
                    }
                }
            }
        }
    });
}






