
$(document).ready(function(){
    let k = 0

    $("#1Btn").click(function(){
        let random = Math.floor(Math.random() * 6) + 1
        $(this).val(random)
        k++
        console.log(`First Button: ${$(this).val()}`)
        if($(this).val() === $("#2Btn").val()) {
            $(this).hide()
            $("#2Btn").hide()
            $(this).val("")
            $("#2Btn").val("")
        }
        else if($(this).val() === $("#3Btn").val()) {
            $(this).hide()
            $("#3Btn").hide()
            $(this).val("")
            $("#3Btn").val("")
        }
        else if($(this).val() === $("#4Btn").val()) {
            $(this).hide()
            $("#4Btn").hide()
            $(this).val("")
            $("#4Btn").val("")
        }
        else if($(this).val() === $("#5Btn").val()) {
            $(this).hide()
            $("#5Btn").hide()
            $(this).val("")
            $("#5Btn").val("")
        }
        else if($(this).val() === $("#6Btn").val()) {
            $(this).hide()
            $("#6Btn").hide()
            $(this).val("")
            $("#6Btn").val("")
        }
        $("#counter").text("Click Counter: " + k)
    })
    

$("#2Btn").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).val(random)
    k++
    console.log(`Second Button: ${$(this).val()}`)
    if($(this).val() === $("#1Btn").val()) {
        $(this).hide()
        $("#1Btn").hide()
        $(this).val("")
        $("#1Btn").val("")
    }
    else if($(this).val() === $("#3Btn").val()) {
        $(this).hide()
        $("#3Btn").hide()
        $(this).val("")
        $("#3Btn").val("")
    }
    else if($(this).val() === $("#4Btn").val()) {
        $(this).hide()
        $("#4Btn").hide()
        $(this).val("")
        $("#4Btn").val("")

    }
    else if($(this).val() === $("#5Btn").val()) {
        $(this).hide()
        $("#5Btn").hide()
        $(this).val("")
        $("#5Btn").val("")
    }
    else if($(this).val() === $("#6Btn").val()) {
        $(this).hide()
        $("#6Btn").hide()
        $(this).val("")
        $("#6Btn").val("")
    }
    $("#counter").text("Click Counter: " + k)

})

$("#3Btn").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).val(random)
    k++
    console.log(`Third Button: ${$(this).val()}`)
    if($(this).val() === $("#1Btn").val()) {
        $(this).hide()
        $("#1Btn").hide()
        $(this).val("")
        $("#1Btn").val("")
    }
    else if($(this).val() === $("#2Btn").val()) {
        $(this).hide()
        $("#2Btn").hide()
        $(this).val("")
        $("#2Btn").val("")
    }
    else if($(this).val() === $("#4Btn").val()) {
        $(this).hide()
        $("#4Btn").hide()
        $(this).val("")
        $("#4Btn").val("")
    }
    else if($(this).val() === $("#5Btn").val()) {
        $(this).hide()
        $("#5Btn").hide()
        $(this).val("")
        $("#5Btn").val("")
    }
    else if($(this).val() === $("#6Btn").val()) {
        $(this).hide()
        $("#6Btn").hide()
        $(this).val("")
        $("#6Btn").val("")
    }
    $("#counter").text("Click Counter: " + k)

})

$("#4Btn").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).val(random)
    k++
    console.log(`Fourth Button: ${$(this).val()}`)
    if($(this).val() === $("#1Btn").val()) {
        $(this).hide()
        $("#1Btn").hide()
        $(this).val("")
        $("#1Btn").val("")
    }
    else if($(this).val() === $("#3Btn").val()) {
        $(this).hide()
        $("#3Btn").hide()
        $(this).val("")
        $("#3Btn").val("")
    }
    else if($(this).val() === $("#2Btn").val()) {
        $(this).hide()
        $("#2Btn").hide()
        $(this).val("")
        $("#2Btn").val("")
    }
    else if($(this).val() === $("#5Btn").val()) {
        $(this).hide()
        $("#5Btn").hide()
        $(this).val("")
        $("#5Btn").val("")
    }
    else if($(this).val() === $("#6Btn").val()) {
        $(this).hide()
        $("#6Btn").hide()
        $(this).val("")
        $("#6Btn").val("")
    }
    $("#counter").text("Click Counter: " + k)
})

$("#5Btn").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).val(random)
    k++
    console.log(`Fifth Button: ${$(this).val()}`)
    if($(this).val() === $("#1Btn").val()) {
        $(this).hide()
        $("#1Btn").hide()
        $(this).val("")
        $("#1Btn").val("")
    }
    else if($(this).val() === $("#3Btn").val()) {
        $(this).hide()
        $("#3Btn").hide()
        $(this).val("")
        $("#3Btn").val("")
    }
    else if($(this).val() === $("#4Btn").val()) {
        $(this).hide()
        $("#4Btn").hide()
        $(this).val("")
        $("#4Btn").val("")
    }
    else if($(this).val() === $("#2Btn").val()) {
        $(this).hide()
        $("#2Btn").hide()
        $(this).val("")
        $("#2Btn").val("")
    }
    else if($(this).val() === $("#6Btn").val()) {
        $(this).hide()
        $("#6Btn").hide()
        $(this).val("")
        $("#6Btn").val("")
    }
    $("#counter").text("Click Counter: " + k)
})

$("#6Btn").click(function(){
    let random = Math.floor(Math.random() * 6) + 1
    $(this).val(random)
    k++
    console.log(`Sixth Button: ${$(this).val()}`)
    if($(this).val() === $("#1Btn").val()) {
        $(this).hide()
        $("#1Btn").hide()
        $(this).val("")
        $("#1Btn").val("")
    }
    else if($(this).val() === $("#3Btn").val()) {
        $(this).hide()
        $("#3Btn").hide()
        $(this).val("")
        $("#3Btn").val("")
    }
    else if($(this).val() === $("#4Btn").val()) {
        $(this).hide()
        $("#4Btn").hide()
        $(this).val("")
        $("#4Btn").val("")
    }
    else if($(this).val() === $("#5Btn").val()) {
        $(this).hide()
        $("#5Btn").hide()
        $(this).val("")
        $("#5Btn").val("")
    }
    else if($(this).val() === $("#2Btn").val()) {
        $(this).hide()
        $("#2Btn").hide()
        $(this).val("")
        $("#2Btn").val("")
    }
    $("#counter").text("Click Counter: " + k)
})
    
$('#reset').click(function () {
    $('input').show()
    $('input').val("")
    k = 0
    $("#counter").text("Click Counter: " + k)
}); 



})