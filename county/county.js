const commissioners = [
    {
        name: "Chairwoman Diane M. Ellis-Marseglia",
        bio: "Diane M. Ellis-Marseglia has been a dedicated Bucks County Commissioner since 2007, currently serving as the Commissioner Chair for 2024. With a strong background in social work, she champions transparency and advocates for community programs, focusing on mental health and public safety to improve the lives of residents across the county.",
        image: "../graphics/dmem.jfif"
    },
    {
        name: "Vice Chairman Robert J. Harvie Jr.",
        bio: "Robert J. Harvie Jr., a lifelong resident of Bucks County, was elected to the Board of Commissioners in 2019 and currently serves as Vice Chair. With a strong background in education and local governance, he has dedicated himself to improving community infrastructure and fostering a collaborative government environment during his tenure.",
        image: "../graphics/rjhjr.jfif"
    },
    {
        name: "Secretary Gene DiGirolamo",
        bio: "Gene DiGirolamo has been a Bucks County Commissioner since 2020, bringing decades of legislative experience to the role after serving in Pennsylvania's House of Representatives. A passionate advocate for community health and welfare, he focuses on substance abuse prevention and rehabilitation, working tirelessly to enhance services for individuals with special needs.",
        image: "../graphics/gd.jfif"
    },
    {
        name: "Representative Perry S. Warren",
        bio: "Gene DiGirolamo has been a Bucks County Commissioner since 2020, bringing decades of legislative experience to the role after serving in Pennsylvania's House of Representatives. A passionate advocate for community health and welfare, he focuses on substance abuse prevention and rehabilitation, working tirelessly to enhance services for individuals with special needs.",
        image: "../graphics/psw.jpg"
    },
    {
        name: "Senator Steven J. Santarsiero",
        bio: "Gene DiGirolamo has been a Bucks County Commissioner since 2020, bringing decades of legislative experience to the role after serving in Pennsylvania's House of Representatives. A passionate advocate for community health and welfare, he focuses on substance abuse prevention and rehabilitation, working tirelessly to enhance services for individuals with special needs.",
        image: "../graphics/sjs.jpg"
    }
];

function showPopup(index) {
    const popup = document.getElementById('commissioner-popup');
    const title = document.getElementById('popup-title');
    const bio = document.getElementById('popup-bio');
    const image = document.getElementById('popup-image');

    title.innerText = commissioners[index - 1].name;
    bio.innerText = commissioners[index - 1].bio;
    image.src = commissioners[index - 1].image;

    popup.style.display = "block"; // Show the popup
}

function closePopup() {
    const popup = document.getElementById('commissioner-popup');
    popup.style.display = "none"; // Hide the popup
}

// Close the popup when clicking outside of the content
window.onclick = function(event) {
    const popup = document.getElementById('commissioner-popup');
    if (event.target === popup) {
        popup.style.display = "none";
    }
}