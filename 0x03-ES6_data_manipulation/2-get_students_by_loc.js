export default function getStudentsByLocation(students, city) {
  return students.filter((el) => {
    return el.location === city;
  });
}
