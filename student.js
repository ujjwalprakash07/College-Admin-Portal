function showForm(){
document.getElementById("studentForm").style.display="block"
}

function addStudent(){

let id=document.getElementById("registration_id").value
let name=document.getElementById("student_name").value
let email=document.getElementById("Email").value
let dept=document.getElementById("department").value
let contact=document.getElementById("contact").value

let table=document.getElementById("studentTable")

let row=table.insertRow()

row.innerHTML=`
<td>${id}</td>
<td>${name}</td>
<td>${email}</td>
<td>${dept}</td>
<td>${contact}</td>
<td><button onclick="deleteRow(this)">Delete</button></td>
`

}

function deleteRow(btn){
let row=btn.parentNode.parentNode
row.remove()
}