$(document).ready(function(){
    //validate form
    $('#form').validate({
        rules: {
            fname: "required",
            lname: "required",
            subject: "required"
        },
        messages: {
            fname: "Please enter first name",
            lname: "Please enter last name",
            subject: "Please enter subject"
        },
        errorElement: "div",
            errorPlacement: function(error, element) {
                    error.insertAfter(element);
            },
        submitHandler: function(form) {
            form.submit();
        }
    }); 
});
