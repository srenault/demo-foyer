// Contact Form Scripts

$(function() {
    $('#contactFrmSuccess').hide();

    $('#contactForm').on('submit', function(e) {
        e.preventDefault();

        //Can ?
        var canSend = true;
        var cannotEmpty = [
            'demande',
            'firstname',
            'lastname',
            'birthdate_d',
            'birthdate_m',
            'birthdate_y',
            'email',
            'postalcode'
        ];

        for (i = 0; i < cannotEmpty.length; i++) {
            if ($('#' + cannotEmpty[i]).val() == '') {
                canSend = false;
                $('#' + cannotEmpty[i]).addClass('todo');
            } else {
                $('#' + cannotEmpty[i]).removeClass('todo');
            }
        }

        //GA reCaptcha
        if (grecaptcha.getResponse() === "") {
            canSend = false;
            $('.g-recaptcha > div').addClass('todo');
        } else {
            $('.g-recaptcha > div').removeClass('todo');
        }

        //Call back for gio
        if (canSend) {
            $.ajax({
                url: $(this).prop('action'),
                type: "POST",
                data: {
                    demande: $("#demande").val(),
                    firstname: $("#firstname").val(),
                    lastname: $("#lastname").val(),
                    bdd: $("#birthdate_d").val(),
                    bdm: $("#birthdate_m").val(),
                    bdy: $("#birthdate_y").val(),
                    email: $("#email").val(),
                    postalcode: $("#postalcode").val(),
                    comment: $("#comment").val(),
                    'g-recaptcha-response': grecaptcha.getResponse()
                },
                cache: false,
                success: function (data) {
                    if (data.success) {
                        $('#contactFrm').slideUp('fast', function(){
                            $('#contactFrmSuccess').slideDown(400, function() {
                                $('html, body').stop().animate({
                                    scrollTop: ($('#contact').offset().top - 50)
                                }, 1250, 'easeInOutExpo');
                            });
                        });
                        dataLayer.push({'event' : 'formSubmitted'});
                    }
                }
            });
        }
        return false;
    });

    $('#contactForm').find('input, select, textarea').change(function(e){
        $(this).removeClass('todo');
    });
});