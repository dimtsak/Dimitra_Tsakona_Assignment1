$(document).ready(function(){
    $("form[name='form']").validate({
        rules: {
            fname: "required",
            lname: "required",
            fees: "required"
        },
        messages: {
            title: "Please enter first name",
            stream: "Please enter last name",
            fees: "Please enter tuition fees"
        },
        errorElement: "div",
            errorPlacement: function(error, element) {
              error.insertAfter( element );
            },
        submitHandler: function(form) {
            form.submit();
        }
    });
});
