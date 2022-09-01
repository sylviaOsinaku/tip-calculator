const BillInputDiv = document.getElementById('BillInput')
const TipInputDiv = document.getElementById('TipInput')
const numberOfPeopleDiv = document.getElementById('numberOfPeople')
const TipAmountDiv = document.getElementById('TipAmount')
const TotalPerPersonDiv = document.getElementById('Totalperperson')
const warning = document.getElementById('warning')

const calculateBill= ()=>{
  const bill = Number(BillInputDiv.value)
  const tip = Number(TipInputDiv.value)
  const TipPercentage = (tip) / 100
  const Tip_Amount = bill*TipPercentage
}
let number = 0 
const increasePeople = () =>{
  number ++
  overall()
  numberOfPeopleDiv.innerText = number
  const bill = Number(BillInputDiv.value)
  const tip = Number(TipInputDiv.value)
  const TipPercentage = (tip) / 100
  const Tip_Amount = bill*TipPercentage.toFixed(2)
  const Totalperperson = (bill + Tip_Amount)/number
  TotalPerPersonDiv.innerText = Totalperperson.toFixed(2)
}
const decreasePeople = () =>{
  if (number <= 1){
    alert("Hey! Number of people can't be less than 1!")
    return 
    }
  number -- 
  overall()
  numberOfPeopleDiv.innerText = number
  }
TipInputDiv.addEventListener('input',() => {
  
  const bill = Number(BillInputDiv.value)
  const tip = Number(TipInputDiv.value)
  const TipPercentage = (tip) / 100
  const Tip_Amount = bill*TipPercentage
  TipAmountDiv.innerText = Tip_Amount.toFixed(2)
  const Totalperperson = (bill + Tip_Amount)/number
  TotalPerPersonDiv.innerText = Totalperperson.toFixed(2)
})
const overall = () =>{
  numberOfPeopleDiv.innerText = number
  const bill = Number(BillInputDiv.value)
  const tip = Number(TipInputDiv.value)
  const TipPercentage = (tip) / 100
  const Tip_Amount = bill*TipPercentage
  const Totalperperson = (bill + Tip_Amount)/number
  TotalPerPersonDiv.innerText = Totalperperson.toFixed(2)
  
}

const Bill_reset = () =>{
  const BillInputDiv = document.getElementById('BillInput')
  const TipInputDiv = document.getElementById('TipInput')
  const numberOfPeopleDiv = document.getElementById('numberOfPeople')
  const TipAmountDiv = document.getElementById('TipAmount')
  const TotalPerPersonDiv = document.getElementById('Totalperperson')
  BillInputDiv.value = ''
  TipInputDiv.value = ''
  TipAmountDiv.innerText = '$0.00'
  TotalPerPersonDiv.innerText = '$0.00'
  let number = 0
  numberOfPeopleDiv.innerText = number
}
