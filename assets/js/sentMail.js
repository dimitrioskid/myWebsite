$(function() {
    $('button[type=submit]').click(function() {
        if ($("#name").val() == "" || $("#email").val() == "" || $("#content").val() == "") {

            $("#message").html('<p><strong>Error: </strong>All fields are requred!</p>');
            return false;
        } else {
            $.ajax({
                type: "POST",
                url: "model/post.php",
                data: $("#myform").serialize(),
                success: function(data) {
                    $('#message').html(data);
                }
            });
        }
    });
})