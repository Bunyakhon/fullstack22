function yayOrNay() {
  return new Promise((resolve, reject) => {
    // สุ่มค่า 0 หรือ 1
    const val = Math.round(Math.random() * 1);
    // // 0 or 1, at random
    
    // ถ้า val เป็น 1 ให้ resolve (สำเร็จ) ถ้าเป็น 0 ให้ reject (ล้มเหลว)
    val ? resolve("Lucky!!") : reject("Nope 😠");
  });
}

async function msg() {
  try {
    // รอผลลัพธ์จาก yayOrNay
    const msg = await yayOrNay();
    console.log(msg);
  } catch (err) {
    // ถ้าเกิด Error หรือโดน reject จะมาทำงานที่นี่
    console.log(err);
  }
}

// ทดสอบรันหลายๆ ครั้ง ผลลัพธ์จะสุ่มออกมา
msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Lucky!!
msg(); // Nope 😠
msg(); // Nope 😠