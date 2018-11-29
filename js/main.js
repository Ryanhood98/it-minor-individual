// Wait for the DOM to be ready
$(function() {
  // Initialize form validation on the registration form.
  // It has the name attribute "registration"
  $("form[name='registration']").validate({
    // Specify validation rules
    rules: {
      // The key name on the left side is the name attribute
      // of an input field. Validation rules are defined
      // on the right side
      Name: "required",
      Address: "required",
      Phone: "required",
      email: {
        required: true,
        email: true
      },
      Credit_Card: {
        required: true,
        minlength: 9,
        maxlength:9
      }
    },
    // Specify validation error messages
    messages: {
      Name: "Please enter your name",
      Address: "Please enter your adress",
      Phone: "Please enter your phone number",
      email: "Please enter a valid email address",
      credit_card_number: {
        required: "Please provide a credit card #",
      },
      
    },
    // Make sure the form is submitted to the destination defined
    // in the "action" attribute of the form when valid
    submitHandler: function(form) {
      form.submit();
    }
  });
});