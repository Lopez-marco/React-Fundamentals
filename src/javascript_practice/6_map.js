const instructors = [
  { name: "Quincy", specility: "Quantum Mechanics" },
  { name: "Kenn", specility: "Norse Mythology" },
  { name: "Paul", specility: "Tuvan throat singing" },
  { name: "Aaron", specility: "Entomology" },
  { name: "Carolyn", specility: "Kung Fu" },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
  instructor_names.push(instructors[i].name);
}
console.log(instructor_names);

const instructorNames = instructors.map((instructor) => instructor.name);
console.log(instructorNames);

//Exact same thing different parameter name

const instructorNamestwo = instructors.map((i) => i.name);
console.log(instructorNamestwo);

const instructorInfo = instructors.map(
  (instructor) => `${instructor.name}` + ": " + `${instructor.specility}`
);
console.log(instructorInfo);

var kvArray = [
  { key: 1, value: 10 },
  { key: 2, value: 20 },
  { key: 3, value: 30 },
];
console.log(kvArray);

var reformattedArray = kvArray.map((obj) => {
  var rObj = {};
  rObj[obj.key] = obj.value;
  console.log(rObj);
  return rObj;
});
