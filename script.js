document.addEventListener("DOMContentLoaded", () => {
    const tiles = document.querySelectorAll(".tile");
    const popup = document.getElementById("popup");
    const popupTech = document.getElementById("popup-tech");
    const popupInfo = document.getElementById("popup-info");
    const popupProjects = document.getElementById("popup-projects");
    const popupClose = document.getElementById("popup-close");

    tiles.forEach(tile => {
        tile.addEventListener("click", () => {
            const tech = tile.getAttribute("data-tech");
            const info = tile.getAttribute("data-info");
            const projects = tile.getAttribute("data-projects");

            popupTech.textContent = tech;
            popupInfo.textContent = info;
            popupProjects.textContent = projects;

            popup.style.display = "block";
        });
    });

    popupClose.addEventListener("click", () => {
        popup.style.display = "none";
    });

    window.addEventListener("click", (event) => {
        if (event.target === popup) {
            popup.style.display = "none";
        }
    });
});
