// Code your solution in this file.

//let students = ['Mary', 'Joan', 'Eva', 'Frida', 'Taylor', 'Agnes']

function other(students) {
  return students.toLowerCase();
}

function lowerCaseStudentNames(lowerCase) {
  return lowerCase.map(other);
}


function nameToAttributes(fullName) {
  return fullName.map(
    function (celebrity)
    {
      const first =celebrity.split(" ")[0];
      const last = celebrity.split(" ")[1];
    
      return {firstName: first, lastName: last}
    }
  )

}


function attributesToPhrase() {
const 
  return 
}

