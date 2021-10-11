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
    for (i = 0; i<classname.length; i++)
    {
        tempclass = new classes(classname[i]);
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