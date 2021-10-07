$(document).ready(function() {
    var activeCourse = null; // saves the id of the entered class name
    var activeProfSec = null; // saves the id of the entered prof and section

    const datedict = {"M" : 0,"T" : 1,"W" : 2,"H" : 3,"F" : 4,"S" : 5};
    const timedict = {"7:00" : 0,"7:15" : 1,"7:30" : 2,"7:45" : 3,"8:00" : 4,"8:15" : 5,"8:30" : 6,"8:45" : 7,"9:00" : 8,"9:15" : 9,"9:30" : 10,"9:45" : 11,"10:00" : 12,"10:15" : 13, "10:30" : 14, "10:45" : 15,"11:00" : 16,"11:15" : 17,"11:30" : 18,"11:45" : 19,"12:00" : 20,"12:15" : 21,"12:30" : 22,"12:45" : 23,"13:00" : 24,"13:15" : 25,"13:30" : 26,"13:45" : 27,"14:00" : 28,"14:15" : 29,"14:30" : 30,"14:45" : 31,"15:00" : 32,"15:15" : 33,"15:30" : 34,"15:45" : 35,"16:00" : 36,"16:15" : 37,"16:30" : 38,"16:45" : 39,"17:00" : 40,"17:15" : 41,"17:30" : 42,"17:45" : 43,"18:00" : 44,"18:15" : 45,"18:30" : 46,"18:45" : 47,"19:00" : 48,"19:15" : 49,"19:30" : 50,"19:45" : 51,"20:00" : 52,"20:15" : 53,"20:30" : 54,"20:45" : 55,"21:00" : 56};

    class schedule 
    {
        constructor()
        {
        this.schedule  =  ["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"];
        }
        addone(classcode,starttime,length)
        {

        }
    }

    const wew = new schedule();
    $("#putsched").submit(function(e) {
        e.preventDefault();
        var timeslots = [[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1],[-1,-1]];
        var values = Array.from(document.querySelectorAll('input[type=checkbox]:checked')).map(item => item.value);
        for (let i = 0; i < values.length; i++)
        {
            start = document.getElementById('start'+values[i]).value;
            end = document.getElementById('end'+values[i]).value;
            timeslots[values[i]][0] = timedict[String(start)];
            timeslots[values[i]][1] = timedict[String(end)];
        }
        const classcode = document.getElementById('classname').value;
        console.log(timeslots);
    });

    $("#add_class").click(function() {
        if ($("#add_section_div").is(":visible")) {
            $("#add_section_div").show();
        } else if ($("#add_section_div").is(":hidden")) {
            $("#add_section_div").show();
        }
    });

    $("#add_section").click(function() {
        if ($("#classname").val() !== "") {
            activeCourse = $("<div></div>");
            activeCourse.attr("id", $("#classname").val().toString());
            activeCourse.html($("#classname").val().toString());

            $("#classname_error").text("");
            $("#add_prof_div").show();
        } else {
            $("#classname_error").text("Please input class name (e.g. CCPROG1, CCPROG2)");
        }
    });

    $("#confirm_sectionprof").click(function() {
        var isProfEmpty = $("#input_prof").val() === "";
        var isSectionEmpty = $("#input_section").val() === "";

        if (isProfEmpty) {
            $("#prof_error").text("Prof's name cannot be empty!");
        } else {
            $("#prof_error").text("");
        }

        if (isSectionEmpty) {
            $("#section_error").text("Section cannot be empty!");
        } else {
            $("#section_error").text("");
        }

        // if both are not empty
        if (isProfEmpty === false && isSectionEmpty == false) {
            var prof = $("#input_prof").val().toString();
            var section = $("#input_section").val().toString();

            activeProfSec = $("<div></div>");
            activeProfSec.attr("id", section + "_" + prof);
            activeProfSec.attr("class", "list-group");
            activeProfSec.html(section + " - " + prof);

            $("#sched_items").append(activeCourse);
            activeCourse.append(activeProfSec);

            $("#reset_form").show();
            $("#time_div").show();
        }
    });

    $("#add_item").click(function() {
        var day = $("#input_day").val().toString();
        var start = $("#input_start").val().toString();
        var end = $("#input_end").val().toString();

        var parag = $("<p></p>");
        parag.attr("class", "list-group-item");
        parag.text(day + " " + start + " " + end);

        activeProfSec.append(parag);

        // set to defaults
        $("#input_day option[value='M']").attr("selected", true);
        $("#input_start option[value='7:30']").attr("selected", true);
        $("#input_end option[value='7:30']").attr("selected", true);
    });

    $("#reset_form").click(function() {
        $("#input_day option[value='M']").attr("selected", true);
        $("#input_start option[value='7:30']").attr("selected", true);
        $("#input_end option[value='7:30']").attr("selected", true);


        $("#input_prof").val("");
        $("#input_section").val("");
        $("#classname").val("");

        $("#reset_form").hide();
        $("#time_div").hide();
        $("#add_prof_div").hide();
    });
});
