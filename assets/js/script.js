const inElem = document.getElementById("in-data");
const firstNameElem = document.getElementById("first-name");
const patronymicElem = document.getElementById("patronymic");
const lastNameElem = document.getElementById("last-name");

const button = document.querySelector(".button");

const errElem = document.querySelector(".err-block");
// для начала блок с ошибками скроем
hideElem(errElem);

button.addEventListener( 'click', (event) => {
    const inData = inElem.value;
    if (!checkInData(inData) ) {
        errElem.textContent = "Вы ввели не корректную строку!";
        showElem(errElem);
    } else {
        clearElem(errElem);
        hideElem(errElem);
        let parsedInData = inData.split(/\s+/);
        
        lastNameElem.value = corrStr(parsedInData[0]);
        firstNameElem.value = corrStr(parsedInData[1]);
        patronymicElem.value = corrStr(parsedInData[2]);

    }
});

function corrStr( str ) {
    return str.toLowerCase().replace( /^[а-яА-Я]/, letter => letter.toUpperCase() );
}

function clearElem( elem ) {
    elem.textContent = "";
}
function showElem( elem ) {
    elem.style.display = "";
}
function hideElem( elem ) {
    elem.style.display = "none";
}

// проверка того, что введены 3 слова 
function checkInData( str ) {
    return /^[а-яА-Я]+\s+[а-яА-Я]+\s+[а-яА-Я]+$/.test(str.trim());
}