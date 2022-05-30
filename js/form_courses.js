$(document).ready(function(){
    $("form[name='forma']").validate({
        rules: {
            title: "required",
            stream: "required",
            pf: "required",
            startDate: "required",
            endDate: "required"
        },
        messages: {
            title: "Please enter title",
            stream: "Please enter stream",
            pf: "Please choose type",
            startDate: "Please enter start date",
            endDate: "Please enter end date"
        },
        errorElement: "div",
            errorPlacement: function(error, element) {
                if ( element.is(":radio") ) {
                    error.prependTo(element);
                }
                else { // This is the default behavior of the script
                    error.insertAfter( element );
                }
            },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
