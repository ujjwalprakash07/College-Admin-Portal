function showForm(){
document.getElementById("courseForm").style.display="block"
}

function addCourse(){

let id=document.getElementById("course_id").value
let name=document.getElementById("course_name").value
let credits=document.getElementById("credits").value
let dept=document.getElementById("department_id").value

let table=document.getElementById("courseTable")

let row=table.insertRow()

row.innerHTML=`
<td>${id}</td>
<td>${name}</td>
<td>${credits}</td>
<td>${dept}</td>
<td><button onclick="deleteRow(this)">Delete</button></td>
`

}

function deleteRow(btn){
let row=btn.parentNode.parentNode
row.remove()
}