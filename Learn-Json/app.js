//ดึงข้อมูลจาก API ไปแสดงผลบนหน้าเว็บ
//https://jsonplaceholder.typicode.com/users
//https://jsonplaceholder.typicode.com/posts
let list = document.getElementById("list");
let output="";

async function getDataFromAPI(){
    const url="https://jsonplaceholder.typicode.com/posts"
    const res = await fetch(url)
    const json = await res.json();
    console.log(json);
    json.forEach(item=>{
        output+="<li>"+item.title+"</li>"
    })
    list.innerHTML=output;
}
getDataFromAPI();