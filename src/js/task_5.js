function getAllPropValues(arr, prop) {
    let values = [];
    for(let i = 0; i < arr.length; i++) {
        const object = arr[i];
        if(prop in object) {
            values.push(object[prop])
        }
    }
    return values;
}

const arr = [
    { name: 'Alice', age: 22, city: 'New York' },
    { name: 'Bob', age: 28, city: 'Los Angeles' },
    { name: 'Charlie', age: 32, city: 'Chicago' }
  ];
  console.log(getAllPropValues(arr, "city"))