const federalOfficials = [
    {
        name: "President Joe Biden",
        bio: "Joseph Robinette Biden, Jr. is the 46th President of the United States, previously serving 36 years in the Senate and as Vice President under Barack Obama. He focuses on rebuilding America through infrastructure investments, lowering prescription drug costs, and addressing climate change.",
        image: "../graphics/jrp.png" // Update with actual image path
    },
    {
        name: "Vice President Kamala Harris",
        bio: "Kamala D. Harris is the first woman, first Black American, and first South Asian American Vice President, sworn in on January 20, 2021. She has a history of advocating for civil rights and social justice, and works closely with President Biden on key legislation for women's rights and public health.",
        image: "../graphics/kh.png" // Update with actual image path
    },
    {
        name: "Representative Brian Fitzpatrick",
        bio: "Brian Fitzpatrick has served as a U.S. Representative for Pennsylvania since 2017, focusing on bipartisan solutions in healthcare, the economy, and public safety.",
        image: "../graphics/bf.jpg"
    },
    {
        name: "Senator Bob Casey",
        bio: "Bob Casey has been a U.S. Senator since 2007, advocating for working families, education, and healthcare, and addressing the needs of Pennsylvania residents.",
        image: "../graphics/bc.jpg"
    }
];

function showPopup(index) {
    const popup = document.getElementById('official-popup');
    const title = document.getElementById('popup-title');
    const bio = document.getElementById('popup-bio');
    const image = document.getElementById('popup-image');

    const official = federalOfficials[index - 1]; // Adjust index for the correct official
    title.innerText = official.name;
    bio.innerText = official.bio;
    image.src = official.image;

    popup.style.display = "block"; // Show the popup
}

function closePopup() {
    const popup = document.getElementById('official-popup');
    popup.style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of the content
window.onclick = function(event) {
    const popup = document.getElementById('official-popup');
    if (event.target === popup) {
        popup.style.display = "none";
    }
};
