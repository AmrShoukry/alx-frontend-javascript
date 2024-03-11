function setStudent(student, newGrades) {
  const studentGrade = newGrades.find(
    (grade) => student.id === grade.studentId,
  );
  if (studentGrade) {
    student.grade = studentGrade.grade;
  } else {
    student.grade = 'N/A';
  }
  return student;
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => setStudent(student, newGrades));
}
