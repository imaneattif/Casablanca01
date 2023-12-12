$(document).ready(function() {
    $('#contactForm').submit(function(event) {
        event.preventDefault();

        let name = $('#name').val().trim();
        let email = $('#email').val().trim();
        let message = $('#message').val().trim();
        let formMessage = $('#formMessage');

        if (name === '' || email === '' || message === '') {
            formMessage.text('All fields are required.');
            return;
        }

        if (!validateEmail(email)) {
            formMessage.text('Please enter a valid email.');
            return;
        }

        formMessage.text('Message sent successfully!');
        
    });

    function validateEmail(email) {
        var re = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
        return re.test(String(email).toLowerCase());
    }
    $('#appointmentDate').datepicker({
        showOn: "button",
        buttonImageOnly: true,
        buttonText: "Select date"
    });
    });

    $('.datepicker-icon').click(function() {
        $('#appointmentDate').datepicker('show');
    });

