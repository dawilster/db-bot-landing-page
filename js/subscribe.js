$(function() {
  $('#submit-form').click(function() {
    $.ajax({
      url: 'https://upscri.be/wp-admin/admin-ajax.php',
      beforeSend: function (request) {
        request.setRequestHeader("Authorization", "Negotiate");
      },
      crossDomain: true,
      data: {
        action: 'add_list_signup',
        post_id: 14051,
        email: $('#email').val(),
        source: 'https%3A%2F%2Fupscri.be%2F3368df%2F'
      },
      async: true,
      success: function (data) {
        $('#submit-form').text('Success!');
      },
      error: function (xhr, textStatus, errorMessage) {
        console.log(textStatus);
        $('#submit-form').text('Please try again');
      }
    });

  });
});
