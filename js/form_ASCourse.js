
  $(document).ready(function(){
  $("select.course").change(function(){
    var selectedCourse = $(this).children("option:selected").val();
    if (selectedCourse=="C#") {
        $("#students_P").fadeOut();
        $("#students_J").fadeOut();
    }
    else if (selectedCourse=="Python") {
        $("#students_C").fadeOut();
        $("#students_J").fadeOut();
    }
    else if (selectedCourse=="JavaScript"){
        $("#students_C").fadeOut();
        $("#students_P").fadeOut();
    }
  });
});
$(document).ready(function(){
    $("form[name='form']").validate({
        rules: {
            title: "required",
            description: "required",
            submission: "required",
            title2: "required",
            description2: "required",
            submission2: "required"             
        },
        messages: {
            title: "Please enter title",
            description: "Please enter description",
            submission: "Please enter submission date",
            title2: "Please enter title",
            description2: "Please enter description",
            submission2: "Please enter submission date"
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

