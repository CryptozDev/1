const readline = require("readline");

// สร้าง interface เพื่อรับข้อมูลจากผู้ใช้
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout,
});

// ถามผู้ใช้เพื่อรับค่ารัศมี
rl.question("กรุณาใส่รัศมีของวงกลม: ", (radius) => {
  // คำนวณพื้นที่วงกลม
  const area = Math.PI * Math.pow(radius, 2);

  // แสดงผลลัพธ์
  console.log("พื้นที่ของวงกลมคือ: " + area);

  // ปิด interface หลังจากการใช้งาน
  rl.close();
});
