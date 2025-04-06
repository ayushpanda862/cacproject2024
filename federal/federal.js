const federalOfficials = [
    {
        name: "President Donald Trump",
        bio: "Donald Trump was re-elected as the 47th President of the United States in 2024, after previously serving as the 45th President from 2017 to 2021. His presidency is focused on policies of economic growth, deregulation, immigration reform, and strengthening American influence on the global stage.",
        image: "../graphics/djt.png" // Update with actual image path
    },
    {
        name: "Vice President J.D. Vance",
        bio: "J.D. Vance serves as Vice President of the United States under President Trump, having been selected as Trump’s running mate in the 2024 election. Prior to becoming VP, Vance was a U.S. Senator for Ohio, bringing his background in law, business, and advocacy for the working class to his new role.",
        image: "../graphics/jdv.png" // Update with actual image path
    },
    {
        name: "Representative Brian Fitzpatrick",
        bio: "Brian Fitzpatrick has served as a U.S. Representative for Pennsylvania since 2017, focusing on bipartisan solutions in healthcare, the economy, and public safety.",
        image: "../graphics/bf.jpg"
    },
    {
        name: "Senior Senator John Fetterman",
        bio: "John Fetterman has been serving as Pennsylvania's U.S. Senator since 2023, focusing on issues such as economic opportunity, healthcare access, and social justice, while fighting for the people of his home state.",
        image: "../graphics/jf.jpg"
    },
    {
        name: "Junior Senator Dave McCormick",
        bio: "Dave McCormick has been serving as Pennsylvania’s U.S. Senator since 2025, bringing his expertise in business and economic policy to the Senate. Focused on creating jobs, lowering taxes, and strengthening national security, McCormick is committed to advancing the interests of Pennsylvania’s families and communities.",
        image: "../graphics/dmc.jpg"
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
