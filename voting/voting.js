function toggleAccordion(header) {
    const content = header.nextElementSibling;
    content.style.display = content.style.display === "block" ? "none" : "block";
}

function startCountdown() {
    const countdownDate = new Date("November 4, 2025").getTime();

    const interval = setInterval(() => {
        const now = new Date().getTime();
        const distance = countdownDate - now;

        if (distance < 0) {
            clearInterval(interval);
            document.getElementById("countdown-timer").innerHTML = "Election Day has arrived!";
            return;
        }

        // Calculate total days
        const totalDays = Math.floor(distance / (1000 * 60 * 60 * 24));

        // Months are approximately 30 days
        const months = Math.floor(totalDays / 30);
        // Weeks are approximately 7 days
        const weeks = Math.floor((totalDays % 30) / 7);
        const days = totalDays % 7; // Remaining days after full weeks

        const hours = Math.floor((distance % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
        const minutes = Math.floor((distance % (1000 * 60 * 60)) / (1000 * 60));
        const seconds = Math.floor((distance % (1000 * 60)) / 1000);

        // Update DOM with singular/plural text adjustment
        document.getElementById("months").innerText = months;
        document.getElementById("months-label").innerText = months === 1 ? 'Month' : 'Months';

        document.getElementById("Weeks").innerText = weeks;
        document.getElementById("Weeks-label").innerText = weeks === 1 ? 'Week' : 'Weeks';

        document.getElementById("days").innerText = days;
        document.getElementById("days-label").innerText = days === 1 ? 'Day' : 'Days';

        document.getElementById("hours").innerText = hours;
        document.getElementById("hours-label").innerText = hours === 1 ? 'Hour' : 'Hours';

        document.getElementById("minutes").innerText = minutes;
        document.getElementById("minutes-label").innerText = minutes === 1 ? 'Minute' : 'Minutes';

        document.getElementById("seconds").innerText = seconds;
        document.getElementById("seconds-label").innerText = seconds === 1 ? 'Second' : 'Seconds';
    }, 1000);
}

startCountdown();
