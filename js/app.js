console.log('This is js');
setInterval(() => {
    if ($("div .navbar-collapse").hasClass("show")) {
        $("main").css({ "position": "absolute", "top": "220px" });

    } else {
        $("main").css("top", "0px")

    }
}, 100);