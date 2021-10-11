$(document).ready(function() {
    // classes here
    class student
    {
        constructor(){
            this.classes = []
        }
        addnewclass(classer)
        {
            this.classes.push(classer);
        }
    }
    class schedule 
    {
        constructor(name)
        {
        this.name = name;
        this.schedule  =  [["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"],["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"],["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"],["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"],["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"],["null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null","null"]];
        this.valid = true;
        this.schedclasses = [];
        this.classnames = [];
        }


        newClass(classist)
        {
            
            //if this sched has a class already
            if (this.schedclasses.length == 0)
            {
                for (let i = 0; i<classist.dateandtime.length; i++)//check how many days is the class
                {
                    for(let j = classist.dateandtime[i][1]; j < classist.dateandtime[i][2]+1; j++)//loop through the timeframe of the selected date
                    {
                        this.schedule[classist.dateandtime[i][0]][j] = classist.classname + " " + classist.section;
                    }
                }
                this.schedclasses.push(classist);
                this.classnames.push(classist.classname);
            }
            else
            {
                //sthiux na classes, tapos inaadd ulit sthiux
                if(this.classnames.includes(classist.classname))//checks if the class is already pushed in this schedule
                {
                    valid = false;
                }
                else
                {
                    for (let i = 0; i<classist.dateandtime.length; i++)//check how many days is the class
                    {
                        for(let j = classist.dateandtime[i][1]; j < classist.dateandtime[i][2]+1; j++)//loop through the timeframe of the selected date
                        {
                            if (this.schedule[classist.dateandtime[i][0]][j] != "null") //if it is not null then it is taken
                            {
                                this.valid = false;
                                break;
                            }
                            else
                            {
                                this.schedule[classist.dateandtime[i][0]][j] = classist.classname + " " + classist.section;
                            } 
                        }
                        if (this.valid == false)
                        {
                            break;
                        }
                    }

                    if (this.valid != false)
                    {
                    this.schedclasses.push(classist);
                    this.classnames.push(classist.classname);
                    }
                }
                
            }
            
        }
    }

    class section
    {
        constructor(section,classname)
        {
            this.classname = classname;
            this.section = section;
            this.dateandtime = [];
        }
        addtimeslot(date,starttime,endtime)
        {
            this.dateandtime.push([datedict[date],timedict[starttime],timedict[endtime]]);
        }
    }

    class classes
    {
        constructor(name)
        {
            this.name = name;
            this.sections = [];
        }
        addsection(sections)
        {
            this.sections.push(sections);
        }

    }

    const timedict = {"7:00" : 0,"7:15" : 1,"7:30" : 2,"7:45" : 3,"8:00" : 4,"8:15" : 5,"8:30" : 6,"8:45" : 7,"9:00" : 8,"9:15" : 9,"9:30" : 10,"9:45" : 11,"10:00" : 12,"10:15" : 13, "10:30" : 14, "10:45" : 15,"11:00" : 16,"11:15" : 17,"11:30" : 18,"11:45" : 19,"12:00" : 20,"12:15" : 21,"12:30" : 22,"12:45" : 23,"13:00" : 24,"13:15" : 25,"13:30" : 26,"13:45" : 27,"14:00" : 28,"14:15" : 29,"14:30" : 30,"14:45" : 31,"15:00" : 32,"15:15" : 33,"15:30" : 34,"15:45" : 35,"16:00" : 36,"16:15" : 37,"16:30" : 38,"16:45" : 39,"17:00" : 40,"17:15" : 41,"17:30" : 42,"17:45" : 43,"18:00" : 44,"18:15" : 45,"18:30" : 46,"18:45" : 47,"19:00" : 48,"19:15" : 49,"19:30" : 50,"19:45" : 51,"20:00" : 52,"20:15" : 53,"20:30" : 54,"20:45" : 55,"21:00" : 56};
    const datedict = {"M" : 0,"T" : 1,"W" : 2,"H" : 3,"F" : 4,"S" : 5};
    function combinations(array) {
        if(!array.length) {
        return [];
        }
        array = array.map(function (item) {
        return item instanceof Array ? item : [item];
        }); 
        function combine(list) {
        var prefixes, combinations;
        if(list.length === 1) {
            return list[0];
        } 
        prefixes = list[0];
        combinations = combine(list.slice(1));
        return prefixes.reduce(function (memo, prefix) {
            return memo.concat(combinations.map(function (combination) {
            return [prefix].concat(combination);
            }));
        }, []);
        }
        return combine(array);
    }
    function inverse(obj){
        var retobj = {};
        for(var key in obj){
        retobj[obj[key]] = key;
        }
        return retobj;
    }
    const timedict2 = inverse(timedict);

    function generateclasses(classnames, classinfo)
    {
        let i;
        for (i = 0; i<classnames.length; i++)
        {
            tempclass = new classes(classnames[i]);
            tempsections = classinfo[i];
            for(let i = 0; i<tempsections.length; i++)
            {
                tempsection = new section(tempsections[i][0],tempclass.name);
                for (let j = 0; j < tempsections[i][1].length; j++)
                {
                    tempsection.addtimeslot(tempsections[i][1][j][0],tempsections[i][1][j][1],tempsections[i][1][j][2]);
                }
                tempclass.addsection(tempsection);
            }
            currentStudent.addnewclass(tempclass);
        }

        //get all combinations of the class schedule
        for (let i = 0; i<currentStudent.classes.length; i++)
        {
            temp = [];
            for (let j = 0; j< currentStudent.classes[i].sections.length;j++)
            {
                temp.push(currentStudent.classes[i].sections[j]);
            }
            preprocess.push(temp);
        }
        processed = combinations(preprocess);

        //check if valid sched
        console.log(processed);
        for (let i = 0; i < processed.length; i++)
        {
            let tempsched = new schedule("schedule"+i);
            for (let j = 0; j < processed[i].length; j++)
            {
                tempsched.newClass(processed[i][j]);
                if (tempsched.valid == false)
                {
                    break;
                }
            }
            if (tempsched.valid == true)
            {
                validatedscheds.push(tempsched);
            }
            
        }
        console.log(validatedscheds);
        currentpage = 0;
        printone();
    }
    function printone()
    {
        console.log(currentpage);
        console.log(validatedscheds);
        currentsched = validatedscheds[currentpage];
        let i,j;
        let schedinfo = `<table align = "center" style="width:80%;" >
            <tr>
            <th class = "time">Time</th>
            <th>Monday</th>
            <th>Tuesday</th>
            <th>Wednesday</th>
            <th>Thursday</th>
            <th>Friday</th>
            <th>Saturday</th>
            </tr>`;

            for (j = 2; j<57; j++)
            {
                schedinfo = schedinfo + "<tr><td class = 'time'>";
                schedinfo = schedinfo + timedict2[j] + "</td>"; 
                for (i = 0; i<currentsched.schedule.length; i++)
                {
                    let temp = currentsched.schedule[i][timedict[timedict2[j]]];
                    if (temp == "null")
                    {
                        schedinfo = schedinfo + "<td style='background:white;'>" ;
                        schedinfo = schedinfo + "";
                    }
                    else
                    {
                        if(j == 2)
                        {
                            schedinfo = schedinfo + `<td class = "firstclass">` ;
                        }
                        else if(j == 56)
                        {
                            schedinfo = schedinfo + `<td class = "lastclass">`;
                        }
                        else if (currentsched.schedule[i][timedict[timedict2[j-1]]] != temp)
                        {
                            schedinfo = schedinfo + `<td class = "initialclass">` ;
                        }
                        else if(currentsched.schedule[i][timedict[timedict2[j+1]]] != temp)
                        {
                            schedinfo = schedinfo + `<td class='finishclass'>` ;
                        }
                        else
                        {
                            schedinfo = schedinfo + `<td class='normalclass'>` ;
                        }
                        schedinfo = schedinfo +currentsched.schedule[i][timedict[timedict2[j]]];
                    }
                    
                    schedinfo = schedinfo + "</td>";
                }
                schedinfo = schedinfo + `
                </tr>`;
            }
        container.innerHTML=schedinfo;
    }

    // functions and variables here
    var activeCourse = null; // saves the id of the entered class name
    var activeProfSec = null; // saves the id of the entered prof and section

    let currentStudent = new student();
    let preprocess = [];
    let validatedscheds = [];
    let currentsched;
    const container = document.getElementById("schedview");
    let currentpage;

    var classnames = [];
    var classinfo = [];
    
    // var classnames = ["CCPROG3","CSALGCM"]; 
    // var classinfo = [
    //     [
    //         ["S13 - Nats" , [["M","7:30","9:00"],["W","7:30","9:00"]]  ],
    //         ["S12 - Arren" ,[
    //                 ["M","11:00","12:30"],["W","11:00","12:30"],["F","11:00","12:30"]]],
    //     ],
    //     [
    //         [["S11 - Austin", [["W","14:00","15:30"]]]]
    //     ]
    // ];

    // var classinfo = [
    //     [
    //         [
    //             "S13-NATS", [
    //                 ["M", "7:30", "9:00"],
    //                 ["W", "7:30", "9:00"]
    //             ]
    //         ],
    //         [
    //             "S12 - Arren" ,[
    //                 ["M","11:00","12:30"],["W","11:00","12:30"],["F","11:00","12:30"]
    //             ]
    //         ]
    //     ],
    //     [
    //         [["S11 - Austin", [["W","14:00","15:30"]]]]
    //     ]
    // ];
    

    $("#putsched").click(function() {
        $("#sched_items").children().each(function() {
            $("#schedules").append(this);
        });

        if($("#schedules").children().length > 0) {
            $("#generate").show();
        }

        $("#input_day option[value='M']").attr("selected", true);
        $("#input_start option[value='7:30']").attr("selected", true);
        $("#input_end option[value='7:30']").attr("selected", true);

        $("#input_prof").attr("disabled", false);
        $("#input_section").attr("disabled", false);
        $("#classname").attr("disabled", false);

        $("#add_section").show();
        $("#add_item").show();
        $("#confirm_sectionprof").show();
        $("#another_sectionprof").hide();

        $("#input_prof").val("");
        $("#input_section").val("");
        $("#classname").val("");

        $("#add_another").hide();
        $("#time_div").hide();
        $("#add_prof_div").hide();
        $("#putsched").hide();
    });

    $("#add_class").click(function() {
        $("#add_section_div").show();
        $("#prof_prompt").show();
        $("#input_prof").show();
        $("#input_section").show();
        $("#classname").attr("disabled", false);
        $("#classname").val("");
    });

    $("#add_section").click(function() {
        if ($("#classname").val() !== "") {
            activeCourse = $("<div></div>");
            activeCourse.attr("id", $("#classname").val().toString());
            activeCourse.html($("#classname").val().toString());

            $("#classname_error").text("");
            $("#add_prof_div").show();
            $("#add_section").hide();
            $("#classname").attr("disabled", true);
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

            $("#time_div").show();
            $("#confirm_sectionprof").hide();
            $("#prof_prompt").hide();
            $("#input_prof").attr("disabled", true);
            $("#input_section").attr("disabled", true);
        }
    });

    $("#add_item").click(function() {
        // resetting the form is only allowed if user added at least 1 timeslot
        $("#add_another").show();
        $("#putsched").show();

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

    $("#add_another").click(function() {
        $("#prof_prompt").show();
        $("#input_prof").attr("disabled", false);
        $("#input_prof").val("");
        $("#input_section").attr("disabled", false);
        $("#input_section").val("");
        $("#confirm_sectionprof").hide();
        $("#another_sectionprof").show();
        $("#add_another").hide();
        $("#putsched").hide();
    });

    $("#another_sectionprof").click(function() {
        var prof = $("#input_prof").val().toString();
        var section = $("#input_section").val().toString();

        activeProfSec = $("<div></div>");
        activeProfSec.attr("id", section + "_" + prof);
        activeProfSec.attr("class", "list-group");
        activeProfSec.html(section + " - " + prof);

        $("#sched_items").append(activeCourse);
        activeCourse.append(activeProfSec);
    });

    $("#generate").click(function() {
        var sched_items = document.getElementById("schedules").children;
        
        for(let i = 0; i < sched_items.length; i++) {
            classnames.push(sched_items[i].id);

            let section_list = sched_items[i].children;
            let tempsched = [];
            for(let j = 0; j < section_list.length; j++) {
                let section_prof = section_list[j].id.toString().split("_");
                section_prof = section_prof[0] + " - " + section_prof[1];
                
                let tempsec = [];
                tempsec.push(section_prof);

                let time_slots = section_list[j].children;
                let all_slots = [];
                for(let k = 0; k < time_slots.length; k++) {
                    let info = time_slots[k].innerHTML.split(" ");
                    let slot = [];
                    slot.push(info[0]);
                    slot.push(info[1]);
                    slot.push(info[2]);

                    all_slots.push(slot);
                }
                tempsec.push(all_slots);
                tempsched.push(tempsec);
            }
            classinfo.push(tempsched);
        }
        console.log(classnames);
        console.log(classinfo);

        $("#div_add_form").hide();
        $("#prev").show();
        $("#next").show();
        $("#generated_scheds").show();
        generateclasses(classnames,classinfo);
        $("#generate").hide();
    });

    $("#prev").click(function() {
        if (currentpage == 0)
        {
            currentpage = validatedscheds.length-1;
        }
        else
        {
            currentpage = currentpage - 1;
        }
        console.log(currentpage);
        printone();
    });
    
    $("#next").click(function() {
        if (currentpage == validatedscheds.length-1)
        {
            currentpage = 0;
        }
        else
        {
            currentpage = currentpage + 1;
        }
        console.log(currentpage);
        printone();
    });
});