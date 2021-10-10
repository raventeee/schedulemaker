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