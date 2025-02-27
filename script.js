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
  
}

function removeAdmin() {
  
}

function concatenateArray() {
  
  ];

  
}
