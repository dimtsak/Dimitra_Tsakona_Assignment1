$(document).ready(function(){
    $("form[name='form']").validate({
        rules: {
            title: "required",
            description: "required",
            submission: "required"            
        },
        messages: {
            title: "Please enter title",
            description: "Please enter description",
            submission: "Please enter submission date"
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
