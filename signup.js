const modal = document.getElementById("myModal");
const span = document.getElementsByClassName("close")[0];
const errorMessage = document.getElementById("error-message");

// Function to show the modal with error message
const showModalErrorMessage = (message) => {
 errorMessage.textContent = message;
 modal.style.display = "block";
};

// Event listener for closing the modal
span.onclick = function() {
 modal.style.display = "none";
};

window.onclick = function(event) {
 if (event.target == modal) {
   modal.style.display = "none";
 }
};

const form = document.getElementById("create-visitor-form");

function createNewVisitor(event) {
 event.preventDefault();
 const name = event.target.elements["user-name"].value.trim();
 const coins = event.target.elements["user-coins"].value;

 // Validate form inputs
 if (name === "") {
   showModalErrorMessage("Please enter a valid name.");
   return;
 }

 // Check if visitor exists
 const visitor = visitors.find(visitor => visitor.name === name);
 if (visitor) {
   showModalErrorMessage("User already exists");
   return;
 }

  const user = {
    name: name.value,
    coins: coins.value,
  };

  visitors.push(user);
  localStorage.setItem("visitors", JSON.stringify(visitors));//שמירה בלוקאל סטורג'
  window.location.href="login.html";//מעביר לדף מבקרים 

 }


  /**
  צרו אורח חדש כאן 👇
  ניתן לפצל את הלוגיקה למספר בלתי מוגבל של פונקציות.
  כמו שיותר מפוצל וטהור - פונקציות עם מטרה יחידה ושם משמעותי שמסביר מה הפונקציה עושה ומחזירה
  דוגמא:

  const validateFormInputs = () => {
    בודק האם האינפוטים קיימים ויש בהם ערך
    מחזיר האם תקין או לא (בוליאני)
  }

  const visitorExists = (name) => {
    מקבל שם ומחזיר תשובה האם השם האורח קיים
  }

  const makeVisitor = (name) => {
    מקבל שם, בודק שאין אותו כבר במערך האורחים ומחזיר אובייקט אורח
  }
  **/


/**************************************
  מימשתי עבורכם את ההאזנה לאירוע שליחת טופס
  שימו לב כי האיידי של createForm
  זהה לאיידי של הטופס בעמוד signup.html
  אין לשנות אותו */
const createForm = document.getElementById("create-visitor-form");
if (createForm) {
  createForm.addEventListener("submit", createNewVisitor);
}