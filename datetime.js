document.addEventListener("DOMContentLoaded", function() {
    const displayDateTime = () => {
        const now = new Date();
        const dateTimeString = now.toLocaleString('en-US', { hour12: true });
        document.getElementById('currentDateTime').textContent = `Current Date and Time: ${dateTimeString}`;
    };

    setInterval(displayDateTime, 1000);
});
