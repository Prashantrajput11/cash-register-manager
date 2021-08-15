// data getters
let bill_amount = document.querySelector("#bill-amount");
let cash_given = document.querySelector("#cash-given");
let btn_check = document.querySelector("#btn-check");

let error_message_bill = document.querySelector(".error-message-bill");
let error_message_cash = document.querySelector(".error-message-cash");
let change_table = document.querySelector(".change-table");
let no_of_notes = document.querySelectorAll(".no-of-notes");

let available_denominations = [2000, 500, 100, 50, 10, 5, 1];

// event listeners
bill_amount.addEventListener("input", function () {
  showErrorMessagesBill();
});

cash_given.addEventListener("input", function () {
  showErrorMessagesCash();
});

btn_check.addEventListener("click", function () {
  if (cash_given.value >= bill_amount.value) {
    let amount_to_return = cash_given.value - bill_amount.value;
    calculateChange(amount_to_return);
  }
});

//validation functions start
function showErrorMessagesBill() {
  if (bill_amount.value <= 0) {
    error_message_bill.innerText = "not a valid bill amount😢";
    error_message_bill.style.color = "#e03131";
  } else {
    error_message_bill.innerText = "Perfect";
  }
}

function showErrorMessagesCash() {
  if (cash_given.value <= 0 || cash_given.value < bill_amount.value) {
    error_message_cash.innerText = "Security! Make Him Do The Dishes🍜";
    error_message_cash.style.color = "#e03131";
    // change_table.style.display = "none";
  } else {
    error_message_cash.innerText = "Perfect😁";
    error_message_cash.style.color = "green";
  }
}

//validation function ends

// Core Logic Starts

function calculateChange(amount_to_return) {
  // amount to return - 350
  for (let i = 0; i < available_denominations.length; i++) {
    let notes_return = Math.trunc(
      amount_to_return / available_denominations[i]
    );
    amount_to_return = amount_to_return % available_denominations[i];
    no_of_notes[i] = notes_return;
    no_of_notes[i].innerText = notes_return;
    //350/2000 = 0 means 0 notes of 2000
    // check next currency 500 350/500
  }
}
