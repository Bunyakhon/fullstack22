//ดึงข้อมูลจากไฟล์ JSON มาใช้ด้วย then และ catch (function callback)
let list = document.getElementById("list");
let output="";

fetch("users.json")
.then(res=>res.json())
.then(json=>{
    json.users.forEach(item=>{
        output+="<li>"+item.name+"</li>"
    })
    list.innerHTML=output;
    // console.log(json)
}).catch(err=>{
    console.log(err)
})