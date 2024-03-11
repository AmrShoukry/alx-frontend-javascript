export default function getStudentIdsSum(students) {
  return students.reduce((sum, el) => {
    return sum + el.id;
  }, 0);
}
