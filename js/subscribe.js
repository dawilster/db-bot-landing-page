$(function() {
  $('#submit-form').click(function() {

    $.post( 'https://upscri.be/wp-admin/admin-ajax.php', {
        action: 'add_list_signup',
        post_id: 14051,
        email: $('#email').val(),
        source: 'https%3A%2F%2Fupscri.be%2F3368df%2F'
      }, function( data ) {
      $('#submit-form').text('Success!');
    }).fail(function() {
      $('#submit-form').text('Please try again');
    });

  });
});
