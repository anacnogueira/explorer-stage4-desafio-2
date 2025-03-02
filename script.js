let students = [
  {
    name: "Maria",
    firstGrade: 7,
    secondGrade: 8,
  },
  {
    name: "João",
    firstGrade: 5,
    secondGrade: 10,
  },
  {
    name: "Gabriela",
    firstGrade: 1,
    secondGrade: 7,
  },
  {
    name: "Pedro",
    firstGrade: 2,
    secondGrade: 5,
  },
];

for (let student of students) {
  let average = calculateAverage(student.firstGrade, student.secondGrade);
  let message = "";
  if (average >= 7) {
    message = `Parabéns ${student.name}, você foi aprovado(a)!`;
  } else {
    message = `Não foi dessa vez ${student.name}, tente novamente!`;
  }
  alert(`
    A média do  do(a) aluno(a) ${student.name} é ${average}
    ${message}`);
}

function calculateAverage(firstGrade, secondGrade) {
  return ((firstGrade + secondGrade) / 2).toFixed(2);
}
