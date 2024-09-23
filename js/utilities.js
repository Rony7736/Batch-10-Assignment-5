

// Calculate function for donate Amount

function getInputFieldValueById(id){
    const inputValue = document.getElementById(id).value;
    const inputValueNumber = Number(inputValue);
    return inputValueNumber;
}

function getFixedAmountValueById(id){
    const fixedValue = document.getElementById(id).innerText
    const fixedValueNumber = Number(fixedValue);
    return fixedValueNumber;
}
