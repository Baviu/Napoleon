function toggleSidebar() {
    const sidebar = document.getElementById("sidebar");
    const body = document.body;

    sidebar.classList.toggle("hidden");
    body.classList.toggle("sidebar-hidden");

}

document.addEventListener("DOMContentLoaded", () => {
    const langToggle = document.getElementById("lang-toggle");

    // Current filename: "page1.html" or "page1en.html"
    let currentFile = window.location.pathname.split("/").pop();

    // Detect if file ends with "en.html" EXACTLY
    // This prevents false matches like "rendevous.html"
    let isEnglish = currentFile.endsWith("en.html");

    // Set switch state (checked = EN)
    if (langToggle) {
        langToggle.checked = isEnglish;
    }

    // Language switching logic
    langToggle.addEventListener("change", () => {
        let targetFile;

        if (isEnglish) {
            // EN → RO
            // "page1en.html" → "page1.html"
            targetFile = currentFile.replace("en.html", ".html");
        } else {
            // RO → EN
            // "page1.html" → "page1en.html"
            targetFile = currentFile.replace(".html", "en.html");
        }

        window.location.href = targetFile;
    });
});
