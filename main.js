let numbers = [1, 2, 3, 4, 5, 6, 7, 8, 9];
let upperAlphabet = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split("");
let lowerAlphabet = upperAlphabet.map((c) => c.toLowerCase());
let specialCharacter = ["!", "@", "#", "$", "%", "^", "&", "*"];
let allArrays = [numbers, upperAlphabet, lowerAlphabet, specialCharacter];
let passwordLength = 12;

function generatePass() {
  let passwordGenerated = "";
  for (let i = 0; i < passwordLength; i++) {
    let randomIndexArray = Math.floor(Math.random() * 4);
    let randomIndex;
    if (randomIndexArray === 0)
      randomIndex = Math.floor(Math.random() * numbers.length);
    else if (randomIndexArray === 1 || randomIndexArray === 2)
      randomIndex = Math.floor(Math.random() * 26);
    else randomIndex = Math.floor(Math.random() * specialCharacter.length);
    passwordGenerated += allArrays[randomIndexArray][randomIndex];
  }
  return passwordGenerated;
}

// DOM elements
let passwordView = document.querySelector(".text-view");
let btnGenerate = document.querySelector(".generate");
let copyIcon = document.querySelector("svg");
let saveBtn = document.querySelector(".save-btn");
let saveForm = document.querySelector(".save-form");
let generateBox = document.querySelector(".generate-box");
let closeBtn = document.querySelector(".icon-close");
let passwordGeneratedSave = document.querySelector(".password-Generated");
let select = document.querySelector(".select-opt");
let confirmeBtn = document.querySelector(".confirme-Btn");
let msg = document.querySelector(".msg-saved");
let msgEmpty = document.querySelector(".msg-empty");
let showPass = document.querySelector(".show-pass");
let delBtn = document.querySelector(".icon-delete");
let deleteAllBtn = document.querySelector(".Delete-All");
let table = document.querySelector(".mytable");
let boxTable = document.querySelector(".box-table");

// Generate password
btnGenerate.addEventListener("click", () => {
  passwordView.value = generatePass();
  passwordTransfer(passwordView.value, passwordGeneratedSave);
});

// Copy password
copyIcon.addEventListener("click", () => {
  passwordView.select();
  document.execCommand("copy");
});

// Show save form
function passwordTransfer(passFrom, passTo) {
  saveBtn.addEventListener("click", () => {
    generateBox.style.display = "none";
    saveForm.style.display = "block";
    passTo.value = passFrom;
  });

  closeBtn.addEventListener("click", () => {
    generateBox.style.display = "block";
    saveForm.style.display = "none";
  });
}

// Store data safely
function storeData() {
  confirmeBtn.addEventListener("click", () => {
    let listPasswords = {
      Type: select.value,
      Password: passwordGeneratedSave.value,
    };

    let arrayJS = JSON.parse(localStorage.getItem("Passwords") || "[]");
    arrayJS.push(listPasswords);
    localStorage.setItem("Passwords", JSON.stringify(arrayJS));

    showPass.innerHTML = passwordGeneratedSave.value;
    msg.style.display = "block";
    setTimeout(() => {
      msg.style.display = "none";
    }, 1500);
  });
}

storeData();

// Show passwords table
function showData() {
  let storedPasswords = localStorage.getItem("Passwords");
  if (!storedPasswords) {
    msgEmpty.style.display = "block";
    setTimeout(() => {
      msgEmpty.style.display = "none";
    }, 1500);
    return;
  }

  let jsArray = JSON.parse(storedPasswords);

  // Clear previous rows
  while (table.rows.length > 1) table.deleteRow(1);

  jsArray.forEach((item) => {
    let row = table.insertRow();
    let cellOne = row.insertCell();
    let cellTwo = row.insertCell();
    let cellThree = row.insertCell();
    cellOne.innerText = item.Type;
    cellTwo.innerText = item.Password;
    cellThree.classList.add("btns-mangs");
    cellThree.innerHTML = `<button class='delete-btn'><i class="fa-solid fa-trash"></i></button>`;
  });

  boxTable.style.display = "block";
  generateBox.style.display = "none";

  // Add delete row functionality
  let deleteBtns = document.querySelectorAll(".delete-btn");
  deleteBtns.forEach((btn, index) => {
    btn.addEventListener("click", () => {
      jsArray.splice(index, 1);
      localStorage.setItem("Passwords", JSON.stringify(jsArray));
      showData(); // refresh table
    });
  });
}

document.querySelector(".manage-btn").addEventListener("click", showData);

// Delete all passwords
deleteAllBtn.addEventListener("click", () => {
  localStorage.removeItem("Passwords");
  while (table.rows.length > 1) table.deleteRow(1);
  boxTable.style.display = "none";
  generateBox.style.display = "block";
});

// Close table view
delBtn.addEventListener("click", () => {
  boxTable.style.display = "none";
  generateBox.style.display = "block";
});

// Print all
document
  .querySelector(".Print-all")
  .addEventListener("click", () => window.print());
