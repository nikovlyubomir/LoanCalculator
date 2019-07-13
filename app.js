// изчаква събмит
document.getElementById('loan-form').addEventListener('submit', calculateResults);
// фунция за калкулиране на резултата
function calculateResults(e){
  console.log('Calculating...');
  // инициализиране на UI варс
  const amount = document.getElementById('amount');
  const interest = document.getElementById('interest');
  const years = document.getElementById('years');
  const monthlyPayment = document.getElementById('monthly-payment');
  const totalPayment = document.getElementById('total-payment');
  const totalInterest = document.getElementById('total-interest');

  const principal = parseFloat(amount.value);
  const calculatedInterest = parseFloat(interest.value) / 100 / 12;
  const calculatedPayments = parseFloat(years.value) * 12;

  // смятане на месечното плащане
  const x = Math.pow(1 + calculatedInterest, calculatedPayments);
  const monthly = (principal*x*calculatedInterest)/(x-1);

  if(isFinite(monthly)) {
    monthlyPayment.value = monthly.toFixed(2);
    totalPayment.value = (monthly * calculatedPayments).toFixed(2);
    totalInterest.value = ((monthly * calculatedPayments)-principal).toFixed(2);
  } else {
    showError('Please check your numbers');
  }

  e.preventDefault();
}

// показва грешката
function showError(error){
    // създаваме див
    const errorDiv = document.createElement('div');
  
    // взимаме елементите
    const card = document.querySelector('.card');
    const heading = document.querySelector('.heading');
  
    // добавяме клас
    errorDiv.className = 'alert alert-danger';
  
    //създаваме ноде
    errorDiv.appendChild(document.createTextNode(error));
  
    // поставяме грешката
    card.insertBefore(errorDiv, heading);
  
    // правиме таймаут
    setTimeout(clearError, 3000);
  }
  
  // чистиме грешката
  function clearError(){
    document.querySelector('.alert').remove();
  }