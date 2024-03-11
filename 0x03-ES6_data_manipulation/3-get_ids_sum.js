export default function getStudentIdsSum(students) {
  return students.reduce((sum, el) => sum + el.id, 0);
}
