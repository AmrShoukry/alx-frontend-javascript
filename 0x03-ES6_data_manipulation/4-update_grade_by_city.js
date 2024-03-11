function setStudent(student, newGrades) {
  const studentGrade = newGrades.find(
    (grade) => student.id === grade.studentId,
  );
  let newStudent;
  if (studentGrade) {
    newStudent = { ...student, grade: studentGrade.grade };
  } else {
    newStudent = { ...student, grade: 'N/A' };
  }
  return newStudent;
}

export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((student) => student.location === city)
    .map((student) => setStudent(student, newGrades));
}
