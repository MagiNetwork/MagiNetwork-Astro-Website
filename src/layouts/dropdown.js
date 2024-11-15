function changeLanguage() {
    console.log("[DEBUG] changeLanguage()");
    const dropdown = document.querySelector(".language-dropdown");
    
    if (dropdown.classList.contains("lang-active")) {
        dropdown.classList.remove("lang-active");
        dropdown.classList.add("lang-non-active");
    } else {
        dropdown.classList.add("lang-active");
        dropdown.classList.remove("lang-non-active");
    }
}