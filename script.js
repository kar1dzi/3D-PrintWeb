function userDialog() {
    alert("Привіт! Це діалог з користувачем."); // простий alert

    const name = prompt("Як вас звати?", "Анонім"); // prompt з дефолтним значенням

    const isSure = confirm("Ви впевнені, що хочете продовжити?"); // confirm

    if (isSure) {
        alert("Дякуємо, " + name + "! Особу підтверджено.");
    } else {
        alert("Ви скасували дію.");
    }
}
function showDeveloperInfo(surname, name, position = "Верстальник") {
    alert(`Розробник: ${surname} ${name}\nПосада: ${position}`);
}
function compareByLength() {
    const str1 = prompt("Введіть перший рядок:");
    const str2 = prompt("Введіть другий рядок:");

    if (str1.length > str2.length) {
        alert(`Довший рядок: ${str1}`);
    } else if (str2.length > str1.length) {
        alert(`Довший рядок: ${str2}`);
    } else {
        alert("Рядки однакової довжини");
    }
}
setTimeout(() => {
    document.body.style.backgroundColor = "lightblue";
}, 30000); // 30 секунд = 30000 мілісекунд
function redirectToPage() {
    window.location.href = "https://github.com/kar1dzi/3D-PrintWeb";
}

function showPrinterDetails() {
    const info = document.getElementById("printer-info");
    info.textContent = "FDM – це метод 3D-друку з пластику (PLA, ABS). Ідеально для прототипів!";
}
function highlightTechnologies() {
    const techs = document.querySelectorAll(".tech");
    techs.forEach(item => {
        item.style.backgroundColor = "#d1e7dd";
        item.style.fontWeight = "bold";
    });
}
function addHTML() {
    document.getElementById("printer-details").innerHTML = "FDM: <b>Принтер використовує пластик PLA або ABS.</b>";
}
function replaceElement() {
    const p = document.getElementById("replace-me");
    p.outerHTML = "<h3 style='color:crimson;'>3д-друк не має меж</h3>";
}

function editText() {
    document.getElementById("info-text").textContent = "SLA використовує фотополімерну смолу.";
}
function changeNode() {
    let node = document.getElementById("node-example").firstChild;
    node.nodeValue = "Друк будь-яким металом(титан,алюміній,мідь)";
}
function showTechnology() {
    const block = document.getElementById("dynamic-block");

    // Створюємо новий елемент
    const newPara = document.createElement("p");
    const text = document.createTextNode("Нова технологія: Binder Jetting для металів!");

    newPara.appendChild(text); // додаємо текст в елемент

    // додаємо елемент після кнопок
    block.appendChild(newPara);
}

function removeTechnology() {
    const block = document.getElementById("dynamic-block");
    const last = block.querySelector("p");
    if (last) {
        last.remove(); // видаляємо, якщо є
    }
}
