var Students = function (id,name,teacher,fees){
    this.id =id;
         this.name=name;
         this.teacher = teacher;
         this.fees=fees;
     
    
     }
     var students =new Array();
    
    
         function AddStudents(){
             
             var name=_("name").value;
             var teacher=_("teacher").value;
             var fees =_("fees").value;
             
              var id= students.length+1;
              var student =new Students(id, name, teacher,fees);
              students.push(student);
              BindStudents(students)
              _("frm").reset()
    
    
         }
         function BindStudents(students){
     var temp =``
     students.forEach(function(students,index){
        temp+=`<tr><td>${students.id}</td><td>${students.name}</td><td>${students.teacher}</td><td>${students.fees}</td><td><a><i class="fa fa-edit"></i></a><a onclick=DeleteStudents(${index})><i class="fa fa-trash"></i></a></td></tr>`
     })
    
     var tbl=_("tbl");
     tbl.children[1].innerHTML=temp;
         }
         function _(pp_id){
             return document.getElementById(pp_id)
         }
        
     function DeleteStudents(index){
         if(confirm("are you sure want to delt")){
             students.splice(index,1);
             BindStudents(students)
         }
     }
     _("btn_add").addEventListener("click",AddStudents);
    