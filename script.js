
$(document).ready(function () {
    //Full Screen sliding webpage
    $('#fullpage').fullpage({
        sectionsColor: ['#f4f4f4', '#fff', '#ddd', '#6a6868'],
        anchors: ['home', 'about', 'hobbies', 'contact'],
        menu: '#menu',
        scrollBar: true,
        responsiveSlides: true,       
    });

    //To make the contact form functional
    document.getElementById('sendMessage').addEventListener('click', function () {
        var name = document.getElementById('name').value;
        var email = document.getElementById('email').value;
        var message = document.getElementById('message').value;

       

    
        if (!name || !email || !message) {
            alert('Please fill in all fields.');
            return;
        }

        // Create a mailto link to open the user's email client
        var mailtoLink = 'mailto:rakshak.uavs@gmail.com' +
            '?subject=' + encodeURIComponent('New Contact Form Submission') +
            '&body=' + encodeURIComponent('Name: ' + name + '\nEmail: ' + email + '\n\nMessage:\n' + message);

        // Open the default email client with the pre-filled fields
        window.location.href = mailtoLink;
    });
});
