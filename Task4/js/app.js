const blockName = confirm("Хотите ввести название блока?");
if (blockName) {
  const blockNameConclusion = prompt("Введите название блока");
  const elementName = confirm("Хотите ввести название элемента?");
  if (elementName) {
    const elementNameConclusion = prompt("Введите название элемента");
    const modifieName = confirm("Хотите ввести название модификатора??");
    if (modifieName) {
      const modifieNameConclusion = prompt("Введите название модификатора");
      console.log(
        `${blockNameConclusion}${elementNameConclusion}${modifieNameConclusion}`
      );
    } else {
      console.log(`${blockNameConclusion}${elementNameConclusion}`);
    }
  } else {
    console.log(`${blockNameConclusion}`);
  }
} else {
  console.log("элементу не присвоен класс");
}
