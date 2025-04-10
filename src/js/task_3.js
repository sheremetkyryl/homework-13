function findBestEmployee(employees) {
    let mostProductiveEmployee = '';
    let maxTasks = 0;
  
    for (const name in employees) {
      const tasks = employees[name];
      if(tasks >= maxTasks) {
        maxTasks = tasks;
        mostProductiveEmployee = name;
      }
    }
  
    return mostProductiveEmployee;
}

const team = {
    Ann: 29,
    David: 35,
    Helen: 1,
    Lorence: 99
};
console.log(findBestEmployee(team));