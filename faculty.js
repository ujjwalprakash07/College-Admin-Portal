function showForm(){
document.getElementById("facultyForm").style.display="block"
}

function addFaculty(){

let id=document.getElementById("faculty_id").value
let name=document.getElementById("faculty_name").value
let dept=document.getElementById("department").value
let deptid=document.getElementById("department_id").value

let table=document.getElementById("facultyTable")

let row=table.insertRow()

row.innerHTML=`
<td>${id}</td>
<td>${name}</td>
<td>${dept}</td>
<td>${deptid}</td>
<td><button onclick="deleteRow(this)">Delete</button></td>
`

}

function deleteRow(btn){
let row=btn.parentNode.parentNode
row.remove()
}