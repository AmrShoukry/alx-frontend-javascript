/* eslint-disable valid-typeof */
function checkVariable(variable, text, type) {
  if (variable === undefined || typeof variable !== type) {
    throw new TypeError(`${text} must be a ${type}`);
  }
  if (type === 'object' && Array.isArray(variable)) {
    for (const student of variable) {
      if (typeof student !== 'string') {
        throw new TypeError('Each student must be a string');
      }
    }
  }
}

export default class HolbertonCourse {
  constructor(name, length, students) {
    checkVariable(name, 'Name', 'string');
    checkVariable(length, 'Length', 'number');
    checkVariable(students, 'Students', 'object');

    this._name = name;
    this._length = length;
    this._students = students;
  }

  get name() {
    return this._name;
  }

  get length() {
    return this._length;
  }

  get students() {
    return this._students;
  }

  set name(value) {
    checkVariable(value, 'Name', 'string');
    this._name = value;
  }

  set length(value) {
    checkVariable(value, 'Length', 'number');
    this._length = value;
  }

  set students(value) {
    checkVariable(value, 'Students', 'object');
    this._students = value;
  }
}
