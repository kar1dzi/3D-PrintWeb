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
        last.remove(); // видаляємо, якщо
    }
}
// Обробник через атрибут
function showContactInfo() {
    alert("Телефонуйте нам: +38 (050) 123-45-67 або пишіть на email: contact@3dprint.com");
}
//обробник через властивість
document.addEventListener("DOMContentLoaded", function() {
    const slaButton = document.getElementById("more-info-button");
    slaButton.onclick = function() {
        alert("SLA друк — це точність і якість. Ідеально для ювелірних виробів, стоматології та макетів.");
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const slaBtn = document.getElementById("sla-details-button");

    if (slaBtn) { // Перевіряємо, чи кнопка існує
        // Перший обробник - показує інформацію
        function showSLADetails() {
            alert("SLA друк — висока деталізація та ідеальна гладкість.");
        }

        // Другий обробник - змінює стиль кнопки
        function highlightButton() {
            slaBtn.style.backgroundColor = "#ffe599";
            slaBtn.textContent = "SLA обрано!";
        }

        // Призначаємо обидва обробники події click
        slaBtn.addEventListener("click", showSLADetails);
        slaBtn.addEventListener("click", highlightButton);
    } else {
        console.error("Кнопка SLA не знайдена.");
    }
});

// Створюємо об'єкт-обробник з методом handleEvent для кнопки FDM
const fdmHandler = {
    handleEvent(event) {
        // Гармонійне повідомлення для користувача
        alert("Ви обрали FDM друк!\nFDM — ідеально підходить для швидкого прототипування та недорогих деталей.");

        // Зміна вигляду кнопки після кліку
        event.currentTarget.style.backgroundColor = "#d9ead3";
        event.currentTarget.textContent = "FDM обрано!";
    }
};

// Призначаємо обробник події для кнопки з id "fdm-info-button"
document.addEventListener("DOMContentLoaded", function() {
    const fdmBtn = document.getElementById("fdm-info-button");
    if (fdmBtn) {
        fdmBtn.addEventListener("click", fdmHandler);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const metalBtn = document.getElementById("metal-info-button");

    function showMetalInfo() {
        alert("Металевий друк обрано!\nSLM, DMLS — ідеальні для промислового та медичного використання.");
        // Після першого кліку обробник видаляється
        metalBtn.removeEventListener("click", showMetalInfo);
        metalBtn.textContent = "Деталі показано!";
        metalBtn.style.backgroundColor = "#e6b8af";
    }

    if (metalBtn) {
        metalBtn.addEventListener("click", showMetalInfo);
    }
});

document.addEventListener("DOMContentLoaded", function() {
    const printList = document.getElementById("print-list");

    printList.onclick = function(event) {
        // Перевіряємо, чи клікнули саме на <li>, а не на сам <ul>
        if (event.target.tagName === "LI") {
            // Прибираємо підсвічування з усіх елементів
            const items = printList.querySelectorAll("li");
            items.forEach(item => item.style.backgroundColor = "");

            // Підсвічуємо клікнутий елемент
            event.target.style.backgroundColor = "#b6d7a8";
        }
    };
});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("print-menu");

    menu.addEventListener("click", function(event) {
        // Перевіряємо чи натиснуто саме кнопку
        if (event.target.tagName === 'BUTTON') {
            const action = event.target.dataset.action;
            switch (action) {
                case 'fdm':
                    alert("FDM — Друк з пластику. Підходить для прототипів.");
                    break;
                case 'sla':
                    alert("SLA — Фотополімерний друк для високої деталізації.");
                    break;
                case 'slm':
                    alert("SLM — Друк з металу для найміцніших деталей.");
                    break;
                default:
                    alert("Оберіть тип друку.");
            }
        }
    });
});

document.addEventListener("DOMContentLoaded", function() {
    const menu = document.getElementById("behavior-menu");

    menu.addEventListener("click", function(event) {
        if (event.target.tagName === 'BUTTON') {
            const behavior = event.target.dataset.behavior;

            // Мапа поведінок
            const behaviors = {
                fdm: function() {
                    alert("FDM — швидкий та доступний 3D-друк з пластику.");
                },
                sla: function() {
                    alert("SLA — ідеальний для високої деталізації та гладких поверхонь.");
                },
                slm: function() {
                    alert("SLM — друк з металу для складних та міцних деталей.");
                }
            };

            if (behaviors[behavior]) {
                behaviors[behavior]();
            } else {
                console.warn("Невідома поведінка");
            }
        }
    });
});
