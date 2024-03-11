export default function updateStudentGradeByCity(students, city, newGrades) {
  return students
    .filter((el) => {
      return el.location === city;
    })
    .map((el) => {
      const studentGrade = newGrades.find((grade) => el.id === grade.studentId);
      if (studentGrade) {
        el.grade = studentGrade.grade;
      } else {
        el.grade = 'N/A';
      }
      return el;
    });
}
