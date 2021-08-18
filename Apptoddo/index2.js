// var Details= function(id, task, day, time, deadline)
// { 
// this.id =id;
// this.task=task;
// this.day=day;
// this.time=time;
// this.deadline=deadline;
// }
// var details= new Array();


// function AddDetails(){

//     var task =_("task").value;
//     var day =_("day").value;
//     var time =_("time").value;
    
//     var id= details.length+1;
   
//     // if(index=="")
//     // {
//     //     var detail = new Details(id,task,day,time,deadline)
//     //     details.push(detail);
//     // }
//     // else {
//     //     var detail =new Details(index,task,day,time,deadline)
//     //     details.splice(index-1, 1, detail)
//     // }
//     BindDetails(details)
//     _("form").reset()

//     function BindDetails(details){
//         var temp=``
//         details.forEach(function(details, index){
//             temp+=`<tr><td>${details.id}</td><td>${details.task}</td><td>${details.day}</td><td>${details.time}</td><td>${details.deadline}</td><td><a onclick="editDetails(${index})"><i class="fa fa-edit"></i></a><a onclick=DeleteDetails(${index})><i class="fa fa-trash"></i></a></td></tr>`
//     })
//     var tbl=_("tbl");
//     tbl.children[1].innerHTML=temp;
            
//         }
//         function pp(dd){
//             return document.getElementById(dd)
//         }
        
//             function DeleteDetails(index){
//                 if(confirm("are you sure want to delt this ?"))
//                 {
//                     details.splice(index,1);
//                     BindDetails(details)
//                 }
//             }
//             // pp("btn_add").addEventListner("click", "AddDetails")
//             // function editDetails(index)
//             // {
//             //     var detail=details[index]
//             //     _("task").value=detail.task;
//             //     _("day").value=detail.day;
//             //     _("time").value=detail.time;
//             //     _("deadline").value=detail.deadline;
//             //     _("index").value= detail.id;
//             }
//             pp("btn_add").addEventListener("click", AddDetails);
       
// // window.addEventListener("load",function(){
// //     BindDetails(details)
// // })


var Details=function(id,task,day,time,deadline){
    this.id=id;
    this.task=task;
    this.day=day;
    this.time=time;
    this.deadline=deadline;
}

var details=new Array();
var b1=new Details(1,"angular list",500,2,"14 march")
var b2=new Details(2,"reactjs api",700,3,"13 march")
var b3=new Details(3,"mongodb backend",590,3,"12 march")
details.push(b1)
details.push(b2)
details.push(b3)

function AddDetails(){
    var task=_("task").value;
    var day=_("day").value;
    var time=_("time").value;
    var deadline=_("deadline").value;
    var index=_("index").value;
    var id=details.length+1;
   // console.log(index)
    if(index=="")
    {
    var detail=new Details(id,task,day,time,deadline);
   details.push(detail);
    }
    else{
        var detail=new Details(index,task,day,time,deadline)
        details.splice(index-1,1,detail)
    }
    BindDetails(details)
    _("frm").reset()

}



function BindDetails(details){

    var temp=``
    details.forEach(function(detail,index){
     
        temp+=`<tr><td>${detail.id}</td><td>${detail.task}</td><td>${detail.day}</td><td>${detail.time}</td><td>${detail.deadline}</td><td><a onclick="editDetails(${index})"><i class="fa fa-edit"></i></a><a onclick=DeleteDetails(${index})><i class="fa fa-trash"></i></a></td></tr>`
    })
    var tbl=_("tbl");

    
    tbl.children[1].innerHTML=temp;
}
function _(ele_id){
    return document.getElementById(ele_id)
}
function DeleteDetails(index){
    if(confirm("Are you sure to delete this book ?"))
    {
    details.splice(index,1);
    BindDetails(details)
    }
}
_("btn_add").addEventListener("click", AddDetails);
function editDetails(index)
{
    var detail=details[index]

    _("task").value=detail.task;
    _("day").value=detail.day;
   _("time").value=detail.time;
   _("deadline").value=detail.deadline;
   _("index").value=detail.id;
}
_("btn_add").addEventListener("click", AddDetails);








window.addEventListener("load",function(){
    BindDetails(details)
})

