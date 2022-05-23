var uid = new ShortUniqueId();
const addBtn = document.querySelector(".add-btn");
const removeBtn = document.querySelector(".remove-btn");
const modalCont = document.querySelector(".modal-cont");
const allPriorityColors = document.querySelectorAll(".priority-color");
let colors = ["pink", "green", "red", "black"];
let modalPriorityColor = colors[colors.length - 1];
let textAreaCont = document.querySelector(".textArea-cont");
const mainCont = document.querySelector(".main-cont");
let toolboxColors = document.querySelectorAll(".color");
let ticketsArr = [];

let lockClass = "fa-lock";
let unlockClass = "fa-lock-open";

let isModalPresent = false;
let isRemoveBtnActive = false;

if (localStorage.getItem("tickets")) {
  // Retreive and display
  ticketsArr = JSON.parse(localStorage.getItem("tickets"));
  ticketsArr.forEach(function (ticketObj) {
    createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
  });
}

for (let i = 0; i < toolboxColors.length; i++) {
  toolboxColors[i].addEventListener("click", function () {
    let currToolboxColor = toolboxColors[i].classList[0];
    let filteredTickets = ticketsArr.filter(function (ticketObj) {
      if (currToolboxColor == ticketObj.ticketColor) return ticketObj;
    });

    // remove all tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    // display filtered tickets
    filteredTickets.forEach(function (ticketObj) {
      createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
    });
  });

  toolboxColors[i].addEventListener("dblclick", function () {
    // remove all filtered tickets
    let allTickets = document.querySelectorAll(".ticket-cont");
    for (let i = 0; i < allTickets.length; i++) {
      allTickets[i].remove();
    }

    ticketsArr.forEach(function (ticketObj, idx) {
      createTicket(ticketObj.ticketColor, ticketObj.data, ticketObj.ticketId);
    });
  });
}

addBtn.addEventListener("click", function () {
  if (!isModalPresent) {
    modalCont.style.display = "flex";
    // isModalPresent = true;
    // console.log("Clicked");
  } else {
    modalCont.style.display = "none";
    // isModalPresent = false;
    // console.log("Unclicked");
  }

  isModalPresent = !isModalPresent;
});

removeBtn.addEventListener("click", function (e) {
  if (isRemoveBtnActive) {
    removeBtn.style.color = "#d1d8e0";
  } else {
    removeBtn.style.color = "red";
  }
  isRemoveBtnActive = !isRemoveBtnActive;
});

allPriorityColors.forEach(function (colorElement, idx) {
  colorElement.addEventListener("click", function () {
    allPriorityColors.forEach(function (priorityColorElement) {
      priorityColorElement.classList.remove("active");
    });
    colorElement.classList.add("active");
    modalPriorityColor = colorElement.classList[0];
  });
});

modalCont.addEventListener("keydown", function (e) {
  let key = e.key;
  if (key === "Shift") {
    createTicket(modalPriorityColor, textAreaCont.value);
    isModalPresent = false;
    setModalToDefault();
  }
});

function createTicket(ticketColor, data, ticketId) {
  let id = ticketId || uid();

  let ticketCont = document.createElement("div");
  ticketCont.setAttribute("class", "ticket-cont");
  ticketCont.innerHTML = `
        <div class="ticket-color ${ticketColor} "></div>
        <div class="ticket-id">#${id}</div>
        <div class="task-area">${data}</div>
        <div class="lock-cont">
          <i class="fa-solid fa-lock"></i>
        </div>
        `;

  mainCont.appendChild(ticketCont);

  if (!ticketId) {
    ticketsArr.push({ ticketColor, data, ticketId: id });
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  }

  handleRemoval(ticketCont, id);

  handleLock(ticketCont, id);

  toggleTicketColor(ticketCont, id);
}

function handleRemoval(ticket, id) {
  // if isTicketPresent is true then remove
  ticket.addEventListener("click", function () {
    if (!isRemoveBtnActive) return;

    let ticketIdx = getTicketIdx(id);
    ticketsArr.splice(ticketIdx, 1);

    // remove the tickets from DB
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));

    // remove tickets form UI
    ticket.remove();
  });
}

function handleLock(ticket, id) {
  let ticketLockElem = ticket.querySelector(".lock-cont");
  let ticketLock = ticketLockElem.children[0];
  let ticketTaskArea = ticket.querySelector(".task-area");

  ticketLock.addEventListener("click", function (e) {
    if (ticketLock.classList.contains(lockClass)) {
      ticketLock.classList.remove(lockClass);
      ticketLock.classList.add(unlockClass);
      ticketTaskArea.setAttribute("contenteditable", "true");
    } else {
      ticketLock.classList.remove(unlockClass);
      ticketLock.classList.add(lockClass);
      ticketTaskArea.setAttribute("contenteditable", "false");
    }

    // update storage after text changed in tickets
    let ticketIdx = getTicketIdx(id);
    ticketsArr[ticketIdx].data = ticketTaskArea.innerText;
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  });
}

function toggleTicketColor(ticket, id) {
  let ticketColor = ticket.querySelector(".ticket-color");
  ticketColor.addEventListener("click", function (e) {
    let currentTicketColor = ticketColor.classList[1];
    // get ticket color Idx
    let currentTicketColorIdx = colors.indexOf(currentTicketColor);
    let newTicketColorIdx = currentTicketColorIdx + 1;
    newTicketColorIdx = newTicketColorIdx % colors.length;
    let newTicketColor = colors[newTicketColorIdx];
    // console.log(newTicketColor, newTicketColorIdx);

    ticketColor.classList.remove(currentTicketColor);
    ticketColor.classList.add(newTicketColor);

    // update storage with toggledColor tickets
    let ticketIdx = getTicketIdx(id);
    ticketsArr[ticketIdx].ticketColor = newTicketColor;
    localStorage.setItem("tickets", JSON.stringify(ticketsArr));
  });
}

function getTicketIdx(id) {
  let ticketIdx = ticketsArr.findIndex(function (ticketObj) {
    return ticketObj.ticketId == id;
  });
  return ticketIdx;
}

function setModalToDefault() {
  modalCont.style.display = "none";
  textAreaCont.value = "";
  allPriorityColors.forEach(function (colorElem) {
    colorElem.classList.remove("active");
  });
  allPriorityColors[allPriorityColors.length - 1].classList.add("active");
}
