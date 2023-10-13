class Student {
  studentName: string;
  studentAge: number;
  studentGrade: string;
  studentMajor: string; // Added major property

  constructor(studentName: string, studentAge: number, studentGrade: string, studentMajor: string) {
    this.studentName = studentName;
    this.studentAge = studentAge;
    this.studentGrade = studentGrade;
    this.studentMajor = studentMajor;
  }

  isPassing(gradeThreshold: string): boolean {
    return this.studentGrade >= gradeThreshold;
  }
}

// Instantiate a new student object and call the methods to test your class
const student1 = new Student("Dusty", 100, "A", "Full Stack");

// Call the methods and test the class
console.log(`studentName: ${student1.studentName}`);
console.log(`studentAge: ${student1.studentAge}`);
console.log(`studentGrade: ${student1.studentGrade}`);

const passingThreshold = "B"; // Example passing threshold

console.log(`Is ${student1.studentName} passing with a grade of ${student1.studentGrade}? ${student1.isPassing(passingThreshold)}`);