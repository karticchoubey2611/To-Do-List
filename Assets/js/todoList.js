// Check off specific todos by clicking
$("ul").on("click", "li", function() {
    $(this).toggleClass("completed");

});

//click on K to delete todo
$("ul").on("click", "span", function(e) {
    $(this).parent().fadeOut(500, function() {
        $(this).remove();
    });
    e.stopPropagation();
});

$("input[type='text']").keypress(function(e) {
    if (e.which === 13) {
        // grabbing new todo text from input & clear the input space
        var text = $(this).val();
        $(this).val("");
        //create a new li and add to ul
        //append takes the string of html and add to our html
        $("ul").append("<li><span><i class='fa fa-trash'></i></span> " + text + "</li>");


    }
});

$(".fa-plus").on("click", function() {
    $("input[type='text']").fadeToggle();
});