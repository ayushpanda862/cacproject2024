const stateOfficials = [
    {
        name: "Governor Josh Shapiro",
        bio: "Josh Shapiro is the 48th Governor of Pennsylvania, having taken office in January 2023. He is committed to creating opportunities for all Pennsylvanians and has made significant strides in education, public safety, and economic development. A former Attorney General, he has a history of advocating for voter rights and holding powerful entities accountable. Raised in Pennsylvania, Josh is inspired by his parents' dedication to service and is a proud family man with four children.",
        image: "../graphics/js.jfif" // Update with actual image path
    },
    {
        name: "Lieutenant Governor Austin A. Davis",
        bio: "Austin A. Davis is the youngest and first Black lieutenant governor in Pennsylvania's history. Growing up in McKeesport, he was motivated by his parents' hard work to engage in community service from a young age. As lieutenant governor, he focuses on tackling gun violence, supporting minority-owned businesses, and advocating for underrepresented communities. Austin lives in Allegheny County with his wife and daughter",
        image: "../graphics/aad.jfif" // Update with actual image path
    },
    {
        name: "Representative Perry S. Warren",
        bio: "Perry S. Warren has been a dedicated representative for Bucks County since 2015, focusing on issues like education and public safety. With a strong commitment to serving his community, he works tirelessly to ensure that the voices of his constituents are heard in Harrisburg.",
        image: "../graphics/psw.jpg"
    },
    {
        name: "Senator Steven J. Santarsiero",
        bio: "Steve Santarsiero believes in the power of public service, inspired by his experiences as a teacher and community activist. Since being elected to the Pennsylvania Senate, he has championed education reform, environmental protection, and responsible governance, always striving to make a positive impact in his community.",
        image: "../graphics/sjs.jpg"
    }
];

function showPopup(index) {
    const popup = document.getElementById('official-popup');
    const title = document.getElementById('popup-title');
    const bio = document.getElementById('popup-bio');
    const image = document.getElementById('popup-image');

    const official = stateOfficials[index - 1]; // Adjust index for the correct official
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
