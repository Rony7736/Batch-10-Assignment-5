
    const headingNoakhali = document.getElementById('heading-noakhali').innerText
    const headingFeni = document.getElementById('heading-feni').innerText
    const quotaMovement = document.getElementById('quota-movement').innerText
    const modal = document.getElementById('my_modal_1')


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

    if(totalDonate > fixedAmountNumber ){
        alert('You Do Not have sufficient Balance')
        return;
    }

    if(input1 > 0 ){
        modal.showModal()
    }

    document.getElementById('fixed-amount-1').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 

    
    


    // history add 

    const historyItem = document.createElement('div')
    historyItem.className = ("bg-white p-3 rounded-md border pl-8 mb-4")
    
    historyItem.innerHTML = `  
        <p class="text-2xl font-bold text-black py-3">${input1} ${headingNoakhali}</p>        
        <p class="text-lg text-gray-500 py-3">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toTimeString()}</p>    
    `
    const historyList = document.getElementById('history-list')

    historyList.insertBefore( historyItem, historyList.firstChild)
    
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

    if(totalDonate > fixedAmountNumber ){
        alert('You Do Not have sufficient Balance')
        return;
    }

    if(input2 > 0 ){
        modal.showModal()
    }
    
    document.getElementById('fixed-amount-2').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 

     // history add 

     const historyItem = document.createElement('div')
     historyItem.className = ("bg-white p-3 rounded-md border pl-8 mb-4")
     
     historyItem.innerHTML = `  
         <p class="text-2xl font-bold text-black py-3">${input2} ${headingFeni}</p>        
         <p class="text-lg text-gray-500 py-3">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toTimeString()}</p>    
     `
     const historyList = document.getElementById('history-list')
 
     historyList.insertBefore( historyItem, historyList.firstChild)
    
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

    if(totalDonate > fixedAmountNumber ){
        alert('You Do Not have sufficient Balance')
        return;
    }

    if(input3 > 0 ){
        modal.showModal()
    }
    
    document.getElementById('fixed-amount-3').innerText = totalDonate

    document.getElementById('fixed-amount').innerText = totalDonateAmount 

    // history add 

    const historyItem = document.createElement('div')
    historyItem.className = ("bg-white p-3 rounded-md border pl-8 mb-4")
    
    historyItem.innerHTML = `  
        <p class="text-2xl font-bold text-black py-3">${input3} Taka is Donated for ${quotaMovement}, Bangladesh</p>        
        <p class="text-lg text-gray-500 py-3">Date: ${new Date().toLocaleDateString()} Time: ${new Date().toTimeString()}</p>    
    `
    const historyList = document.getElementById('history-list')

    historyList.insertBefore( historyItem, historyList.firstChild)
})



// history Tab functionality

const historyTab = document.getElementById('history-tab')
const donationTab = document.getElementById('donation-tab')
const donationForm = document.getElementById('donation-form')
const historySection = document.getElementById('history-section')

historyTab.addEventListener('click', function(){
    historyTab.classList.add('text-black', 'bg-[#B4F461]')
    historyTab.classList.remove('border')

    donationTab.classList.add('border', 'bg-white')
    donationTab.classList.remove('text-black', 'bg-primary')
    
    donationForm.classList.add('hidden')
    historySection.classList.remove('hidden')

})

donationTab.addEventListener('click', function(){
    donationTab.classList.add('text-black', 'bg-primary')
    donationTab.classList.remove('border','bg-white')

    historyTab.classList.add('border')
    historyTab.classList.remove('text-black', 'bg-[#B4F461]')
    
    donationForm.classList.remove('hidden')
    historySection.classList.add('hidden')

})