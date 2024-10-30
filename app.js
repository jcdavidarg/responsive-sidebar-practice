const toggleButton = document.querySelector("#toggle-btn");
const sidebar = document.querySelector("#sidebar");

const toggleSideBar = () => {
    sidebar.classList.toggle("close");
    toggleButton.classList.toggle("rotate");
}

const toggleSubMenu = (button) => {
    button.nextElementSibling.classList.toggle("show");
    button.classList.toggle("rotate");
}