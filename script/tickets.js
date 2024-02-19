const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn){
    btn.addEventListener("click", function(event){
        count = count + 1;

        const ticketName = event.target.childNodes[0];
        const ticketPrice = event.target.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.parentNode.childNodes[5].childNodes[3].childNodes[1].childNodes[1].childNodes[9].childNodes[3].childNodes[0];

        const selectedContainer = document.getElementById("selected-place-container");

        const li = document.createElement("li");

        const p = document.createElement("p");
        p.innerText = ticketName;
        const p2 = document.createElement("p");
        p2.innerText = ticketPrice;

        li.appendChild(p);
        li.appendChild(p2);
        selectedContainer.appendChild(li);



        setInnerText("cart-count", count);
    });
}
function setInnerText(id, value){
    document.getElementById(id).innerText = value;
}

// availableseat ar price
const addButtons = document.querySelectorAll(".add-btn");

let totalPrice = 0;
let grandTotalPrice = 0;

function updatePrices(){
    document.getElementById('total-price').innerText = 'BDT' + totalPrice;
    document.getElementById('grand-total-price').innerText = 'BDT' + grandTotalPrice;
}

for(let i = 0; i < addButtons.length; i++){
    addButtons[i].addEventListener('click', function() {
        let currentSeats = parseInt(document.getElementById('current-seat').innerText);
        
        if(currentSeats > 0){
            currentSeats--;
            document.getElementById('current-seat').innerText = currentSeats;

            totalPrice += 550;
            grandTotalPrice += 550;

            updatePrices();
        } 
    });
}
// appendchild



// decrease seats
// const addButtons = document.querySelectorAll(".add-btn");

// for (let i = 0; i < addButtons.length; i++) {
//     addButtons[i].addEventListener('click', function() {
//         let currentSeats = parseInt(document.getElementById('current-seat').innerText);

//         if (currentSeats > 0) {
//             currentSeats--;
//             document.getElementById('current-seat').innerText = currentSeats;
//         } 
//         else{
//             alert('No more available seats!');
//         }
//     });
// }


