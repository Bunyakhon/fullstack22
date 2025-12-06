let number = [10.5, 20.0, 30.25, 15.75, 25.5];

function calculate_sum_and_average(numbers) {
  if (numbers.length === 0) {
    // ส่งกลับ { sum: 0, average: 0 } เมื่ออาร์เรย์ว่างเปล่า
    return { sum: 0, average: 0 };
  }

  let sum = 0;
  for (let i = 0; i < numbers.length; i++) {
    sum += numbers[i];
  }

  let average = sum / numbers.length;

  // ส่งกลับค่าเฉลี่ยและผลรวมเป็น Object
  return { sum: sum, average: average };
}

// การเรียกใช้ที่ถูกต้อง (ใช้ Destructuring เพื่อรับค่า Sum และ Average แยกกัน)
const results = calculate_sum_and_average(number);

console.log("Sum: " + results.sum);
console.log("Average: " + results.average);
