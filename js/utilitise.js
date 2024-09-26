function getInputFiledValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputNumber = parseFloat(inputValue);
    return inputNumber;

}

function getTextFiledValueById(id){
    const TextValue = document.getElementById(id).innerText;
    const TextNumber = parseFloat(TextValue);
    return TextNumber;

}

function showSectionById(id){
    document.getElementById("Donate-section").classList.add('hidden');
    document.getElementById("History Section").classList.add('hidden');
    document.getElementById(id).classList.remove('hidden');

}

