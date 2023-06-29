const checkboxes = document.querySelectorAll("input");

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('click', () => {
        checkbox.nextElementSibling.classList.toggle("crossed");
    });
});