const allBtn = document.getElementsByClassName("add-btn");
let count = 0;

for (const btn of allBtn){
    btn.addEventListener("click", function(event){
        count = count + 1;
        document.getElementById("cart-count").innerText = count;
    });
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


