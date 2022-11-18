const youName = prompt("Введите ваше имя")
const youAge = +prompt("Введите ваш возраст")
if(youAge >= 18){
    alert(`Добро пожаловать ${youName}`)
}else if(youAge < 18 && youAge > 1){
    alert(`Простите ${youName} доступ закрыт`)
}else{
    alert(`${youName}, Возраст введён не правильно `)
}