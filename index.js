$(() => {
    $("#photos").attr("src", `img/menu1.png`)
    show()
    $(".inputs").click(function() {
        let src = "menu" + ($(this).index() + 1)
        $("#photos")
            .attr("src", `img/${src}.png`)
            .stop(true, true)
            .hide()
            .fadeIn(1500)
        show()
    })
    function show() {
        $("#photos").css({
            width: "80%",
            borderRadius: "10px"
        })
    }
})