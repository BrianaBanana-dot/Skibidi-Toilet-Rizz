$(document).ready(function() {
    $("#darkModeToggle").click(function() {
        $("body").toggleClass("dark-mode");


        if ($("body").hasClass("dark-mode")) {
            $("#darkModeToggle").text("Light Mode");
        } else {
            $("#darkModeToggle").text("Dark Mode");
        }
    });


    $(".navbar a").click(function(event) {
        event.preventDefault(); 

        var targetId = $(this).attr("href");
        var targetOffset = $(targetId).offset().top - 60; 

        $(".navbar a").removeClass("active");
        $(this).addClass("active");

        $("html, body").animate({
            scrollTop: targetOffset
        }, 600);
    });


    $(window).scroll(function() {
        if ($(this).scrollTop() > 300) {  
            $('#backToTop').fadeIn();  
        } else {
            $('#backToTop').fadeOut(); 
        }


        $('section').each(function() {
            var topOfSection = $(this).offset().top;
            var bottomOfSection = topOfSection + $(this).outerHeight();
            var scrollPos = $(window).scrollTop();
            var windowHeight = $(window).height();

 
            if (scrollPos + windowHeight > topOfSection && scrollPos < bottomOfSection) {
                $(this).find('p').addClass('clear');  
            } else {
                $(this).find('p').removeClass('clear'); 
            }
        });
    });


    $(window).trigger('scroll');  


    $('#backToTop').click(function() {
        $('html, body').animate({ scrollTop: 0 }, 600); 
        return false; 
    });


    $('section').each(function() {
        $(this).find('p').addClass('blurred'); 
    });


    (function() {
        emailjs.init("TkZ55LaYqHPMI5Wps"); 
    })();


    document.getElementById('contact-form').addEventListener('submit', function(event) {
        event.preventDefault();

  
        var from_name = document.getElementById('user_name').value; 
        var user_email = document.getElementById('user_email').value; 
        var message = document.getElementById('user_message').value; 

    
        var to_name = "Briana Jacobo";  

  
        emailjs.send("service_10a3ssg", "template_p2vlqeu", { 
            to_name: to_name,      
            from_name: from_name,  
            message: message,      
            user_email: user_email 
        })
        .then(function(response) {
            console.log("Message sent successfully", response);
            alert("Your message has been sent successfully!");
        }, function(error) {
            console.error("Error sending message", error);
            alert("Failed to send message. Please try again.");
        });
    });
});
function toggleLanguage() {
  
    const elements = document.querySelectorAll('[data-en], [data-es]');

 
    const currentLanguage = document.body.getAttribute('data-lang') || 'en';


    const newLanguage = currentLanguage === 'en' ? 'es' : 'en';


    elements.forEach(element => {
        const englishText = element.getAttribute('data-en');
        const spanishText = element.getAttribute('data-es');
        
        if (newLanguage === 'en') {
            element.textContent = englishText || element.textContent; 
        } else {
            element.textContent = spanishText || element.textContent; 
        }
    });


    const toggleButton = document.getElementById('language-toggle');
    toggleButton.textContent = newLanguage === 'en' ? 'Español' : 'English';
    document.body.setAttribute('data-lang', newLanguage);
}