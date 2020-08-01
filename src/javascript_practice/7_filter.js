const instructors = [
  { name: "Arron", specialty: "Entomology", medals: 7 },
  { name: "Carolyn", specialty: "Fencing", medals: 5 },
  { name: "Kenn", specialty: "Morse Mythology", medals: 8 },
  { name: "Paul", specialty: "Tuvan throat singing", medals: 4 },
  { name: "Quincy", specialty: "Quantum Mechanics", medals: 2 },
  { name: "Tom", specialty: "Chemistry", medals: 3 },
];

let instructor_names = [];

for (let i = 0; i < instructors.length; i++) {
  if (instructors[i].medals >= 5) {
    instructor_names.push(instructors[i].name);
  }
}
// console.log(instructor_names);

const instructorNames = instructors.filter(
  (instructor) => instructor.medals >= 5
);
// console.log(instructorNames);

// Exact same thing different parameter name

const instructorNamestwo = instructors.filter((i) => i.medals >= 5);
// console.log(instructorNamestwo);

// if done correctly, in your terminal you should see after console logging
// intructorInfo -> {name: "aron", speciality: "entomology", medals: 7}

const instructorInfo = instructors.filter(
  (instructor) => instructor.name === "Arron"
);
console.log(instructorInfo);
