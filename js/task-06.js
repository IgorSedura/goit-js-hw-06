// Напиши скрипт, который при потере фокуса на инпуте(событие blur),
//     проверяет его содержимое на правильное
//  количество введённых символов.

// Сколько символов должно быть в инпуте, указывается в его атрибуте data-length.
// Если введено подходящее количество символов, то border инпута становится зелёным,
//     если неправильное - красным.
// Для добавления стилей, используй CSS - классы valid и invalid,
//     которые мы уже добавили в исходные файлы задания.

const inputRef = document.querySelector("#validation-input");

const onInputBlur = (event) => {
  const { dataset, value } = event.target;
  const requiredLength = Number(dataset.length);
  if (value.length === requiredLength) {
    event.target.className = "valid";
  } else {
    event.target.className = "invalid";
  }
};
inputRef.addEventListener("blur", onInputBlur);
