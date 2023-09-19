$(document).ready(function () {
    // Declare variables
    const background = $(".background");
    const lunar = $(".lunar");
    const moon = $(".moon");
    const earth = $(".earth");
    const myself = $(".myself");
    const myname = $(".name");
    const introduction = $(".introduction");

    const main = $("#main-content");
    const blank = $(".blank");
    const project1 = $("#project1");
    const project2 = $("#project2");
    const contact = $(".contact");
    const detail = $(".detail");

    main.on('scroll', function () {
        const screenHeight = $(window).height();
        const screenWidth = $(window).width();
        const displacement = screenHeight * 3;
        const widthLunar = screenWidth * 0.85;
        const heightLunar = screenHeight * 0.2 * 0.55;
        const radius_moon = moon.width();
        const widthEarth = radius_moon * 0.88;
        const heightEarth = radius_moon * 0.4;
        const gapOfName = 30 - 15;
        const gapOfNameFont = 6-4;


        let y_project1 = project1.offset().top;
        let change_position;

        if (y_project1 >= 0) {
            let change_project1 = y_project1 / (screenHeight * 0.8);
            change_position = 30 - gapOfName * (1 - change_project1);
            let change_font = 6 - gapOfNameFont * (1 - change_project1);
            let location = change_position + "vh";
            let fontSize = change_font + "vw";
            myself.css("top", location);
            myname.css("fontSize", fontSize);
            console.log(fontSize);
        }
       

        if (y_project1 < (screenHeight * 0.8)) {
            introduction.css({
                animation: "fade-out 1s forwards",
                visibility: "hidden"
            });
        } else {
            introduction.css({
                visibility: "visible",
                animation: "appear 1s forwards"
            });
            myname.css('animation', 'bigger 2s ease-in-out');
        }

        let change_blank = Math.abs(blank.offset().top / displacement);
        let x_change_moon = widthLunar * change_blank + screenWidth * 0.001;
        let x_position_moon = x_change_moon + "px";
        moon.css("left", x_position_moon);

        let a = (-4 * heightLunar / widthLunar ** 2);
        let b = (4 * heightLunar / widthLunar);

        let y_change_moon = a * (x_change_moon ** 2) + b * x_change_moon;
        let y_position_moon = y_change_moon + "px";
        moon.css("bottom", y_position_moon);
        
        let x_change_earth = x_change_moon  + 18 + widthEarth * change_blank;
        let x_position_earth = x_change_earth + "px";
        earth.css("left", x_position_earth);
        
        let y_change_earth = y_change_moon - heightEarth * change_blank * 0.75;
        let y_position_earth = y_change_earth + "px";
        earth.css("bottom", y_position_earth);
     

    });
    // $('.detail').on('click', function () {
    //     let eve = $(this);
    //     let firstChild = eve.children().first();
    //     let lastChild = eve.children().last();
    
    //     // Add the flip-forward animation to the element
    //     eve.css({
    //         animation: "flip-forward 0.5s backwards ease-in-out"
    //     });
    
    //     // Hide the firstChild and schedule the appearance of lastChild after 0.5 seconds
    //     firstChild.css("opacity", "0");
    //     lastChild.css("opacity", "100%");
    //     setTimeout(function () {
    //         firstChild.addClass("hidden");
    //         lastChild.removeClass("hidden");
    //         lastChild.css({
    //             animation: "appear 0.5s ease-in-out"
    //         });
    //     }, 500);
    // });
    
    // $('.detail').on('mouseout', function () {
    //     let eve = $(this);
    //     let firstChild = eve.children().first();
    //     let lastChild = eve.children().last();
    //     setTimeout(function () {
    //         // Add the flip-backward animation to the element
    //         eve.css({
    //             animation: "flip-backward 0.5s backwards ease-in-out"
    //         });
    //         firstChild.css("opacity", "100%");
    //         lastChild.css("opacity", "0");
    //         setTimeout(function () {
    //             lastChild.addClass("hidden");
    //             firstChild.removeClass("hidden");
    //             firstChild.css({
    //                 animation: "appear 0.5s ease-in-out"
    //             });
    //         }, 500);
    //     }, 1000);
    // });
    

    $('.expand').on('click', function () {
        let project = $(this).parent();
        
        // Remove the "hidden" class from the specified elements
       
        project.find('.content').removeClass("hidden");
    
        // Apply the transition to the specified elements
        project.find('.content').css('animation', 'expand-left 0.5s linear' );
        project.find('.img').css('animation', 'collapse-left 0.5s linear' );
    
     
        setTimeout(function () {
            project.find('.img').addClass('hidden');
            project.find('.expand').addClass('hidden'); 
            project.find('.collapse').removeClass('hidden');
        }, 500);
    });
    
    $('.collapse').on('click', function () {
        let project = $(this).parent();
       
        project.find('.img').removeClass('hidden');
        
    
        // Apply the transition to the specified elements
        project.find('.content').css('animation', 'collapse-left 0.5s linear' );
        project.find('.img').css('animation', 'expand-left 0.5s linear' );
    
     
        setTimeout(function () {
            project.find('.content').addClass('hidden');
            project.find('.collapse').addClass('hidden'); 
            project.find('.expand').removeClass('hidden');
        }, 500);

    })

    // Display images of project 2
    const image = ["image/tradeX/1.png", "image/tradeX/2.png", "image/tradeX/3.png", "image/tradeX/4.png"];
    let index = 1;
    setInterval(function() {
        const currentIndex = index % image.length;
        $("#img-pj2").addClass('slide-in'); 
        setTimeout(function() {
            $("#img-pj2")
            .css('background-image', `url(${image[currentIndex]})`)
            .removeClass('slide-in'); 
        }, 500); 
        index++;

    }, 2000);


}); 



    


