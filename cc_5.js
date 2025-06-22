const employees = [
  { name: "Alice", hourlyRate: 20, hoursWorked: 42 },
  { name: "Bob", hourlyRate: 18, hoursWorked: 38 },
  { name: "Cara", hourlyRate: 22, hoursWorked: 45 }
];
function calculateBasePay(rate, hours) {
  return rate * Math.min(hours, 40);
}
function calculateOvertimePay(rate, hours) {
  return hours > 40 ? (hours - 40) * rate * 1.5 : 0;
}
function calculateTaxes(grossPay) {
  return grossPay * 0.15;
}
function processPayroll(employee) {
  const basePay = calculateBasePay(employee.hourlyRate, employee.hoursWorked);
  const overtimePay = calculateOvertimePay(employee.hourlyRate, employee.hoursWorked);
  const grossPay = basePay + overtimePay;
  const netPay = grossPay - calculateTaxes(grossPay);

  return {
    name: employee.name,
    basePay,
    overtimePay,
    grossPay,
    netPay
  };
}
employees.forEach(emp => {
  console.log(processPayroll(emp));
});
