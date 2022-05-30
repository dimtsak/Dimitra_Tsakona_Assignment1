//validation for teachers' form
$(document).ready(function(){
    $("form[name='form1']").validate({
        rules: {
            fname: "required",
            lname: "required",
            email: "required"           
        },
        messages: {
            fname: "Please enter first name",
            lname: "Please enter last name",
            email: "Please enter a valid email"
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

//validation for students' form
$(document).ready(function(){
    $("form[name='form2']").validate({
        rules: {
            fname2: "required",
            lname2: "required",
            email2: "required"           
        },
        messages: {
            fname2: "Please enter first name",
            lname2: "Please enter last name",
            email2: "Please enter a valid email"
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

//validation for assignments' form
$(document).ready(function(){
    $("form[name='form3']").validate({
        rules: {
            fassign: "required",
            fmark: "required",
            sassign: "required",
            smark: "required"            
        },
        messages: {
            fassign: "Please enter first name",
            fmark: "Please enter last name",
            sassign: "Please enter a valid email",
            smark: "Please write your comment"
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