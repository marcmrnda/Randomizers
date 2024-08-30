$(document).ready(function(){

$("button").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).text(random)

    if($(this).text(random) === $(this).text(random)) {
        $(this).hide()
    }
})


})