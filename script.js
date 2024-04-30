
// --------------- This function is responsible for hiding and unhiding the side bar ---------------
const sideBar = document.getElementById('sideBar');
function toggleSideBar() {
    if (sideBar.style.left === "0px") {
        sideBar.style.left = "-100%"
    }
    else {
        sideBar.style.left = "0px"
    }
}
