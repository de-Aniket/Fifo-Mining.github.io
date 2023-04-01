
    // <!-- script for navigtion  -->

        function openNav() {
            document.getElementById("myNav").style.height = "60%";
        }

        function closeNav() {
            document.getElementById("myNav").style.height = "0%";
        }


// slider on large screen 
    
        $(document).ready(function () {
            $("#toggle").click(function () {
                $("#slider").slideToggle("fast");
            });
        });
    
        // <!-- script for navigtion ends here -->



    // <!-- script for dropdown  -->
    
        var commonValues = {
            Company: ["Ozminerals", "BHP Group", "Newcrest Mining", "Ozminerals"],
            Site: ["Rio tinto", "South32", "North32", "East32", "West32"]

        }
        function company(s1, s2) {
            var s1 = document.getElementById(s1);
            var s2 = document.getElementById(s2);

            s2.innerHTML = "";

            if (s1.value == "company") {
                var optionArray = ['select/-- Select Company&#47;Site --', 'ozminerals/Ozminerals', 'bhp/BHP Group', 'newcrest/Newcrest Mining', 'ozminerals/Ozminerals'];
            }

            else if (s1.value == "site") {
                var optionArray = ['select/-- Select Company&#47;Site --', 'rio/Rio tinto', 'south/South32', 'north/North32', 'east/East32', 'west/West32'];
            }

            for (var option in optionArray) {
                var pair = optionArray[option].split("/");
                var newoption = document.createElement("option");

                newoption.value = pair[0];
                newoption.innerHTML = pair[1];
                s2.options.add(newoption);
            }

        }
    // <!-- script for dropdown ends here -->

// <!-- script for pagination starts here  -->

    $(document).ready(function () {
        $('input[type="radio"]').click(function () {
            var inputValue = $(this).attr("value");
            var targetBox = $("." + inputValue);
            $(".box").not(targetBox).hide();
            $(targetBox).show();
            // $(targetBox).css("color","red");

        });
    });

    // <!-- script for pagination ends here  -->


    // <!-- script for star ratings starts here  -->

    // <!-- star ratings for about you  -->

        $(document).ready(function () {
            $("#s1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#s1").css("color", "#fbb040");
            });
            $("#s2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#s1,#s2").css("color", "#fbb040");
            });
            $("#s3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#s1,#s2,#s3").css("color", "#fbb040");
            });
            $("#s4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#s1,#s2,#s3,#s4").css("color", "#fbb040");
            });
            $("#s5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#s1,#s2,#s3,#s4,#s5").css("color", "#fbb040");
            });
        });


    
        $(document).ready(function () {
            $("#ss1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#ss1").css("color", "#fbb040");
            });

            $("#ss2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#ss1,#ss2").css("color", "#fbb040");
            });

            $("#ss3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#ss1,#ss2,#ss3").css("color", "#fbb040");
            });

            $("#ss4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#ss1,#ss2,#ss3,#ss4").css("color", "#fbb040");
            });

            $("#ss5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#ss1,#ss2,#ss3,#ss4,#ss5").css("color", "#fbb040");
            });


        });

    // <!-- star ratings for employee culture -->

    

        $(document).ready(function () {
            $("#a1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#a1").css("color", "#fbb040");
            });
            $("#a2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#a1,#a2").css("color", "#fbb040");
            });
            $("#a3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#a1,#a2,#a3").css("color", "#fbb040");
            });
            $("#a4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#a1,#a2,#a3,#a4").css("color", "#fbb040");
            });
            $("#a5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#a1,#a2,#a3,#a4,#a5").css("color", "#fbb040");
            });
        });

    


        $(document).ready(function () {
            $("#aa1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#aa1").css("color", "#fbb040");
            });
            $("#aa2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#aa1,#aa2").css("color", "#fbb040");
            });
            $("#aa3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#aa1,#aa2,#aa3").css("color", "#fbb040");
            });
            $("#aa4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#aa1,#aa2,#aa3,#aa4").css("color", "#fbb040");
            });
            $("#aa5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#aa1,#aa2,#aa3,#aa4,#aa5").css("color", "#fbb040");
            });
        });

    

    // <!-- star ratings for Lifestyle camp  -->

    

        $(document).ready(function () {
            $("#b1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#b1").css("color", "#fbb040");
            });
            $("#b2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#b1,#b2").css("color", "#fbb040");
            });
            $("#b3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#b1,#b2,#b3").css("color", "#fbb040");
            });
            $("#b4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#b1,#b2,#b3,#b4").css("color", "#fbb040");
            });
            $("#b5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#b1,#b2,#b3,#b4,#b5").css("color", "#fbb040");
            });
        });

 


        $(document).ready(function () {
            $("#bb1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#bb1").css("color", "#fbb040");
            });
            $("#bb2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#bb1,#bb2").css("color", "#fbb040");
            });
            $("#bb3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#bb1,#bb2,#bb3").css("color", "#fbb040");
            });
            $("#bb4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#bb1,#bb2,#bb3,#bb4").css("color", "#fbb040");
            });
            $("#bb5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#bb1,#bb2,#bb3,#bb4,#bb5").css("color", "#fbb040");
            });
        });

    

    // <!-- star ratings for feedback  -->

   

        $(document).ready(function () {
            $("#c1").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#c1").css("color", "#fbb040");
            });
            $("#c2").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#c1,#c2").css("color", "#fbb040");
            });
            $("#c3").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#c1,#c2,#c3").css("color", "#fbb040");
            });
            $("#c4").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#c1,#c2,#c3,#c4").css("color", "#fbb040");
            });
            $("#c5").click(function () {
                $(".fa-star").css("color", "#000000");
                $("#c1,#c2,#c3,#c4,#c5").css("color", "#fbb040");
            });
        });

   

    // <!-- star ratings script ends here  -->
