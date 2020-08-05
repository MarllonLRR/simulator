$(document).ready(function() {
    $("#radios").radiosToSlider();

    item = "#" + $("input[name='options']:checked").val();
	size_hair = $(item).attr('size-hair');

	$(item + " img").addClass('active');
	$("#display-size span").text(size_hair)


    $("input[name='options']").on("change",function(event) {

    	id_item = "#" + $(this).val();

    	$('.active').removeClass('active')
    	$(id_item + " img").addClass('active')

		size_hair = $(id_item).attr('size-hair');
		$("#display-size span").text(size_hair)

    });

    var dict = {
        "famele": {"1": 4,"2": 8,"3": 13},
        "male": {"1": 4,"2": 8,"3": 13}
        // ,"4": 17,"5": 21,"6": 26},
        // ,"4": 17,"5": 21,"6": 26}
    };


    $("input[name='gender']").on("change", function(){

        gender = $(this).val();

        current_theme = $("#wrapper-simulator").attr("theme");
        class_theme = "theme-" + gender;

        $("#wrapper-simulator").removeClass(current_theme).addClass(class_theme);
        $("#wrapper-simulator").attr("theme", class_theme);

        div = ""

        for (var key in dict[gender]){
            div += "<div class=\"item\" id=\""+key+"-months\" size-hair=\""+dict[gender][key]+"\"><img src=\"assets/img/"+ gender +"/Cabelo-n"+key+".png\"></div>"
        }

        $("#items").html(div);

        item = "#" + $("input[name='options']:checked").val();
        size_hair = $(item).attr('size-hair');

        $(item + " img").addClass('active');
        $("#display-size span").text(size_hair);

    });

});