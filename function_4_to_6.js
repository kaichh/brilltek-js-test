// Helper function: Convert time string to Date object
const stringToDate = (timeString) => {
  const timeList = timeString.split(":");
  const date = new Date();
  date.setHours(parseInt(timeList[0], 10));
  date.setMinutes(parseInt(timeList[1], 10));
  date.setSeconds(parseInt(timeList[2], 10));
  return date;
};

// Helper function: Get begin and end working hours of an employee type
const beginEndDate = (type) => {
  const eType = employeeType.find((et) => et.id === type);
  const begin = stringToDate(eType.work_begin);
  const end = stringToDate(eType.work_end);
  if (end.getHours() < begin.getHours()) {
    end.setDate(end.getDate() + 1);
  }
  return [begin, end];
};

// 4. Count total working hours worked in 1 day
const workingHoursInOneDay = (employees) => {
  let result = 0;
  employees.forEach((employee) => {
    const begin = beginEndDate(employee.type)[0];
    const end = beginEndDate(employee.type)[1];
    result += Math.round((end.getTime() - begin.getTime()) / 1000 / 60 / 60);
  });
  return result;
};

// 5. Given a time, return the number of employees working at that time
const employeesWorkingAtThisTime = (timeString) => {
  const time = stringToDate(timeString);
  return employees.filter((employee) => {
    const begin = beginEndDate(employee.type)[0];
    const end = beginEndDate(employee.type)[1];
    return time >= begin && time <= end;
  }).length;
};

// 6. Return total days required to finish all the tasks
const daysOfWork = (tasks, employees) => {
  let totalHours = 0;
  tasks.forEach((task) => {
    totalHours += task.duration;
  });
  return Math.ceil(totalHours / 60 / workingHoursInOneDay(employees));
};

const employeeType = [
  { id: 1, name: "FullTime", work_begin: "09:00:00", work_end: "17:00:00" },
  { id: 2, name: "MidTime", work_begin: "12:00:00", work_end: "21:00:00" },
  { id: 3, name: "HalfTime", work_begin: "20:00:00", work_end: "00:00:00" },
];

const employees = [
  { id: 1, name: "Alice", type: 2 },
  { id: 2, name: "Bob", type: 3 },
  { id: 3, name: "John", type: 2 },
  { id: 4, name: "Karen", type: 1 },
  { id: 5, name: "Miles", type: 3 },
  { id: 6, name: "Henry", type: 1 },
];

const tasks = [
  { id: 1, title: "task01", duration: 60 },
  { id: 2, title: "task02", duration: 120 },
  { id: 3, title: "task03", duration: 180 },
  { id: 4, title: "task04", duration: 360 },
  { id: 5, title: "task05", duration: 30 },
  { id: 6, title: "task06", duration: 220 },
  { id: 7, title: "task07", duration: 640 },
  { id: 8, title: "task08", duration: 250 },
  { id: 9, title: "task09", duration: 119 },
  { id: 10, title: "task10", duration: 560 },
  { id: 11, title: "task11", duration: 340 },
  { id: 12, title: "task12", duration: 45 },
  { id: 13, title: "task13", duration: 86 },
  { id: 14, title: "task14", duration: 480 },
  { id: 15, title: "task15", duration: 900 },
];

console.log("4. Count total working hours worked in 1 day // => 20");
console.log(workingHoursInOneDay(employees));
console.log("\n");

console.log(
  "5. Given a time, return the number of employees working at that time // => 2"
);
console.log("Input time: 22:01:00");
console.log(employeesWorkingAtThisTime("22:01:00"));
console.log("\n");

console.log("6. Return total days required to finish all the tasks // => 10");
console.log(daysOfWork(tasks, employees));
console.log("\n");
