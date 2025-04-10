function countProps(obj) {
    let count = 0;
    for(let key in obj) {
        count++;
    }
    return count;
}
const cat = {
    name: "Мурчик",
    age: 3,
    isCute: true
  };

console.log(countProps(cat))
