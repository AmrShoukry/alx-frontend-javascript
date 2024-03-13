interface Student {
  firstName: string;
  lastName: string;
  age: number;
  location: string;
}

const studentsList: Student[] = [
  {
    firstName: 'Amr',
    lastName: 'Shoukry',
    age: 20,
    location: 'Egypt',
  },
  {
    firstName: 'Ahmed',
    lastName: 'Wael',
    age: 24,
    location: 'Saudi Arabia',
  },
];

const body = document.body;
const table = document.createElement('table');

for (const student of studentsList) {
  const tr = document.createElement('tr');
  for (const key in student) {
    const td = document.createElement('td');
    td.textContent = student[key as keyof Student].toString();
    tr.appendChild(td);
    td.style.border = '1px solid black';
  }
  table.appendChild(tr);
}

table.style.border = '1px solid black';
table.style.borderCollapse = 'collapse';

body.appendChild(table);
