//ดึงข้อมูลจากไฟล์ JSON มาใช้ด้วย async await
let list = document.getElementById("list");
let output = "";

async function getUsers() {
  const res = await fetch("users.json");
  const json = await res.json();
  json.users.forEach((item) => {
    output += "<li>" + item.name + "</li>";
  });
  list.innerHTML=output;
}
getUsers();