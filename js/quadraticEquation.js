function quadraticEquation() {
  const inputTermA = document.querySelector('#term-a');
  const inputTermB = document.querySelector('#term-b');
  const inputTermC = document.querySelector('#term-c');
  const inputRoot1 = document.querySelector('#root-2');
  const inputRoot2 = document.querySelector('#root-1');
  const inputDelta = document.querySelector('#delta');
  const inputVertex = document.querySelector('#vertex');

  let termA = inputTermA.value;
  let termB = inputTermB.value;
  let termC = inputTermC.value;

  if (termA == 0) {
    alert(`'A' nonzero`);

    inputTermA.style.color = '#c23616';
    inputRoot1.value = '';
    inputRoot2.value = '';
    delta.value = '';
    inputVertex.value = '';
  } else {
    inputTermA.style.color = '#576574';
    let vertexX;
    let vertexY;
    let x1;
    let x2;
    let termDelta = termB ** 2 - 4 * (termA * termC);
    vertexX = -termB / (2 * termA);
    vertexY = -delta.value / (4 * termA);

    if (termDelta == 0) {
      x1 = -termB / (2 * termA);
      x2 = x1;
      inputDelta.value = termDelta;
      inputRoot1.value = x1.toFixed(2);
      inputRoot2.value = x2.toFixed(2);
      inputVertex.value = `${x1.toFixed(2)}; 0`;
    }
    if (termDelta > 0) {
      x1 = (-termB + Math.sqrt(termDelta)) / (2 * termA);
      x2 = (-termB - Math.sqrt(termDelta)) / (2 * termA);
      inputRoot1.value = x1.toFixed(2);
      inputRoot2.value = x2.toFixed(2);
      inputDelta.value = termDelta.toFixed(2);
      inputVertex.value = `${vertexX.toFixed(2)} , ${vertexY.toFixed(2)}`;
    }
    if (termDelta < 0) {
      let part1root = -termB / (2 * termA);
      let part2root = Math.sqrt(Math.abs(termDelta)) / (2 * termA);

      inputDelta.value = termDelta.toFixed(2);
      inputVertex.value = `${vertexX.toFixed(2)} , ${vertexY.toFixed(2)}`;

      if (part2root >= 0) {
        inputRoot1.value = `${part1root.toFixed(2)} - ${part2root.toFixed(2)}i`;
        inputRoot2.value = `${part1root.toFixed(2)} + ${part2root.toFixed(2)}i`;
      }
      if (part2root < 0) {
        inputRoot1.value = `${part1root.toFixed(2)} ${part2root.toFixed(2)}i`;
        inputRoot2.value = `${part1root.toFixed(2)} + ${Math.abs(
          part2root.toFixed(2)
        )}i`;
      }
    }
  }
}
