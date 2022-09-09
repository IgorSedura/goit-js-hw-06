// Напиши скрипт который, при наборе текста в инпуте input#name - input(событие input),
// подставляет его текущее значение в span#name - output.Если инпут пустой,
//  в спане должна отображаться строка "Anonymous".

const inputNameRef = document.querySelector("#name-input");
const outputRef = document.querySelector("#name-output");
const handleInputName = (event) => {
  const { value } = event.target;
  outputRef.textContent = value ? value : "Anonymous";
};
inputNameRef.addEventListener("input", handleInputName);
