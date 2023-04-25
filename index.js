
// window.addEventListener("mousemove", (e) => {
//    cursor.style.top = e.y + "px";
//    cursor.style.left = e.x + "px"
// });
// window.addEventListener("mousemove", (e) => {
//    mouse1.style.top = e.y + "px";
//    mouse1.style.left = e.x + "px"
// });
// window.addEventListener("mousemove", (e) => {
//    mouse2.style.top = e.y + "px";
//    mouse2.style.left = e.x + "px"
// });


// Logique simplifié

// selectionne toutes les query ".mouse"
const mouses = document.querySelectorAll(".mouse");

window.addEventListener("mousemove", (e) => {
    // forEach => pour tous les éléments / mouse => élément
    mouses.forEach((mouse) => {
        mouse.style.top = e.y + "px";
        mouse.style.left = e.x + "px"     
    })
});