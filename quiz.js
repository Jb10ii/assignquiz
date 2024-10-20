// Question 1 
const mathHead = university.departments.find(dept => dept.name === "Mathematics").head;
console.log(mathHead); 

// Question 2
const csCourses = university.departments.find(dept => dept.name === "Computer Science").courses;

for (let i = 0; i < csCourses.length; i++) {
  console.log(csCourses[i].courseCode);
}

// Question 3

const mathDept = university.departments.find(dept => dept.name === "Mathematics");
const linearAlgebraCourse = mathDept.courses.find(course => course.courseName === "Linear Algebra");
const bob = linearAlgebraCourse.enrolledStudents.find(student => student.name === "Bob Green");
bob.grade = "A+";

// Question 4

university.students.push({
    studentId: 1008,
    name: "Hannah Yellow",
    major: "Mathematics",
    year: 2
  });
  console.log(university.students);
  
// Question 5

const findInstructor = (courseCode) => {
    for (const dept of university.departments) {
      const course = dept.courses.find(course => course.courseCode === courseCode);
      if (course) return course.instructor.name;
    }
    return "Course not found";
  }
  console.log(findInstructor("CS201")); 

// Question 6

const calculusCourse = university.departments
  .find(dept => dept.name === "Mathematics")
  .courses.find(course => course.courseCode === "MATH101");

calculusCourse.enrolledStudents.push({
  studentId: 1008,
  name: "Hannah Yellow",
  grade: "B"
});
console.log(calculusCourse.enrolledStudents);

// Question 7

const mathMajors = () => {
    return university.students.filter(student => student.major === "Mathematics");
  }
console.log(mathMajors());

// Question 8

const getCoursesAndGrades = (studentId) => {
    let coursesAndGrades = [];
    for (const dept of university.departments) {
      for (const course of dept.courses) {
        const student = course.enrolledStudents.find(s => s.studentId === studentId);
        if (student) {
          coursesAndGrades.push({ courseName: course.courseName, grade: student.grade });
        }
      }
    }
    return coursesAndGrades;
  }
  console.log(getCoursesAndGrades(1002));
  

// Question 9 

const isEnrolledInCS = (studentId) => {
    const csDepartment = university.departments.find(dept => dept.name === "Computer Science");
    return csDepartment.courses.some(course => 
      course.enrolledStudents.some(student => student.studentId === studentId)
    );
  }
  console.log(isEnrolledInCS(1002)); 

// Question 10

const introToProgramming = university.departments
  .find(dept => dept.name === "Computer Science")
  .courses.find(course => course.courseCode === "CS101");

console.log(introToProgramming.instructor.office); 

// Question 11

const dataStructures = university.departments
  .find(dept => dept.name === "Computer Science")
  .courses.find(course => course.courseCode === "CS201");

const topStudent = dataStructures.enrolledStudents.reduce((max, student) => {
  return student.grade > max.grade ? student : max;
}, dataStructures.enrolledStudents[0]);

console.log(topStudent);


// Question 12

const calculusI = university.departments
  .find(dept => dept.name === "Mathematics")
  .courses.find(course => course.courseCode === "MATH101");

calculusI.instructor = { name: "Prof. Albert Einstein", office: "Room 320" };
console.log(calculusI.instructor);

// Question 13

const totalCredits = (studentId) => {
    let credits = 0;
    for (const dept of university.departments) {
      for (const course of dept.courses) {
        if (course.enrolledStudents.some(s => s.studentId === studentId)) {
          credits += course.credits;
        }
      }
    }
    return credits;
  }
  console.log(totalCredits(1003)); 
  
// Question 14

const sortedStudents = university.students.sort((a, b) => a.year - b.year);
console.log(sortedStudents);

// Question 15

const eveBlue = university.students.find(student => student.studentId === 1005);
eveBlue.year = 2;
eveBlue.major = "Computer Science";
console.log(eveBlue);






  


