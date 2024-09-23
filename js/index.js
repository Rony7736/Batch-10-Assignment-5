

// calculate Donate Amount

document.getElementById('btn-donate-1').addEventListener('click', function(event){
    

    const input1 = getInputFieldValueById('input-1')
    const fixedValue = getFixedAmountValueById('fixed-amount-1') 
    const totalDonate = input1 + fixedValue

    const fixedAmount = document.getElementById('fixed-amount').innerText
    const fixedAmountNumber = Number(fixedAmount)
    const totalDonateAmount = fixedAmountNumber - totalDonate

    // Check Validation
    if(input1 <= 0 || isNaN(input1)){
        alert('Invalid Donation Amount')
        return;
    }


    document.getElementById('fixed-amount-1').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 
})

document.getElementById('btn-donate-2').addEventListener('click', function(event){
    
    const input2 = getInputFieldValueById('input-2')   
    const fixedValue = getFixedAmountValueById('fixed-amount-2')    
    const totalDonate = input2 + fixedValue

    const fixedAmount = document.getElementById('fixed-amount').innerText
    const fixedAmountNumber = Number(fixedAmount)
    const totalDonateAmount = fixedAmountNumber - totalDonate

    // Check Validation

    if(input2 <= 0 || isNaN(input2)){
        alert('Invalid Donation Amount')
        return;
    }


    document.getElementById('fixed-amount-2').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 
    
    
})

document.getElementById('btn-donate-3').addEventListener('click', function(event){
    
    const input3 = getInputFieldValueById('input-3')  
    const fixedValue = getFixedAmountValueById('fixed-amount-3')   
    const totalDonate = input3 + fixedValue

    const fixedAmount = document.getElementById('fixed-amount').innerText
    const fixedAmountNumber = Number(fixedAmount)
    const totalDonateAmount = fixedAmountNumber - totalDonate

    // Check Validation
    if(input3 <= 0 || isNaN(input3)){
        alert('Invalid Donation Amount')
        return;
    }


    document.getElementById('fixed-amount-3').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 
})

