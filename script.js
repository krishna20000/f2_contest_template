/** @format */

let arr = [
  { id: 1, name: "john", age: "18", profession: "developer" },
  { id: 2, name: "jack", age: "20", profession: "developer" },
  { id: 3, name: "karen", age: "19", profession: "admin" },
];

function PrintDeveloperbyMap() {
  arr.map(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function PrintDeveloperbyForEach() {
  arr.forEach(person => {
    if (person.profession === "developer") {
      console.log(person);
    }
  });
}

function addData() {
  const newData = {id:4,name:"susan",age:"20",profession:"intern"};
  arr.push(newData);
  console.log(arr);
}

function removeAdmin() {
  arr = arr.filter(person => person.profession !== "admin");
  console.log(arr);
}

function concatenateArray() {
  
  ];

  
}
