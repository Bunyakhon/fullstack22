function calculateStatistics(numbers) {
    // 1. Calculate Squares: สร้าง Array ใหม่ที่เป็นเลขยกกำลังสอง
    const squares = numbers.map(n => n * n);

    // 2. Compute Statistics: หาค่าต่างๆ จาก Array ของเลขยกกำลังสอง
    const max = Math.max(...squares);
    const min = Math.min(...squares);
    const sum = squares.reduce((acc, curr) => acc + curr, 0);
    const average = sum / squares.length;

    // ส่งค่ากลับในรูปแบบ Array (ตามโจทย์ที่ต้องการ Output เป็นกลุ่มก้อนเดียวกัน)
    return [squares, max, min, sum, average];
}

// --- ทดสอบการใช้งานตามตัวอย่างในรูป ---
const input = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
const [squaredValues, maximum, minimum, totalSum, avg] = calculateStatistics(input);

console.log("Squared Values:", squaredValues);
console.log("Maximum Value:", maximum);
console.log("Minimum Value:", minimum);
console.log("Sum:", totalSum);
console.log("Average:", avg);

// แสดงผลลัพธ์รวมแบบในโจทย์
console.log("Output:", [squaredValues, maximum, minimum, totalSum, avg]);