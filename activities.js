$(document).ready(function() {
    let currentSlide = 0;
    const slides = $('#slideshow .slide');
    const numSlides = slides.length;

    const cycleSlides = () => {
        slides.eq(currentSlide).fadeOut(1000);
        currentSlide = (currentSlide + 1) % numSlides;
        slides.eq(currentSlide).fadeIn(1000);
    };

    slides.hide().eq(0).show();
    setInterval(cycleSlides, 5000); 

    $('#activityDate').datepicker();

    $('#scheduleForm').submit(function(event) {
        event.preventDefault();

        // Retrieve the selected activity and date
        var selectedActivity = $('#activitySelect option:selected').text();
        var selectedDate = $('#activityDate').val();

        // Check if the date is selected
        if (!selectedDate) {
            alert("Please select a date for the activity.");
            return;
        }

        // Display a confirmation message
        alert("You have scheduled " + selectedActivity + " on " + selectedDate + ".");
        
        // Optionally, clear the form fields after submission
        $(this).find('input[type="text"]').val('');
        $(this).find('select').prop('selectedIndex', 0);
    });
    
});
