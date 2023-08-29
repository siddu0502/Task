// This example uses vanilla JavaScript to add dynamic data
document.addEventListener("DOMContentLoaded", function () {
    // Your dynamic data
    const myData = [
        "Item 1",
        "Item 2",
        "Item 3"
    ];

    const dynamicContentDiv = document.getElementById("dynamic-content");

    // Add dynamic data to the HTML page
    myData.forEach(data => {
        const paragraph = document.createElement("p");
        paragraph.textContent = data;
        dynamicContentDiv.appendChild(paragraph);
    });
});
