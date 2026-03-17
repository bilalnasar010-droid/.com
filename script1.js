$(document).ready(function(){
    $("#signup-form").validate({
        rules:{
       fname:{
        required:true,
        minlength:4
      },
       sname:{
        required:true,
        minlength:4
       },
       Email:{
        required:true,
        email:true
       },
       Password:{
        minlength:6
       },
       Birth:{
        required:true
       },
       Gender:{
        required:true
       }

    },
    messages:{
    fname:{
        required:"Enter first name",
        minlength:"Enter atleast 4 characters"

        }
      }

    })
})
