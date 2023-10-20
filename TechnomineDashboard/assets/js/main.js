// add hovered class to selected list item
let navigation = document.querySelector(".navigation");
let list = document.querySelectorAll(".navigation li");

function activeLink(event) {
    if (event.target.tagName === 'LI') {
        list.forEach((item) => {
            item.classList.remove("hovered");
        });
        event.target.classList.add("hovered");
    }
}

navigation.addEventListener("mouseover", activeLink);

// Menu Toggle
let toggle = document.querySelector(".toggle");
let main = document.querySelector(".main");

toggle.onclick = function () {
    navigation.classList.toggle("active");
    main.classList.toggle("active");
};

// Dropdown Toggle
let user = document.querySelector(".user");
let dropdownContent = document.querySelector(".dropdown-content");

user.onclick = function () {
    dropdownContent.classList.toggle("active");
};

