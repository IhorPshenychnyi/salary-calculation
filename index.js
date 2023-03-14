const form = document.querySelector('.form');
const sum = document.querySelector('.total-sum');

form.addEventListener('submit', handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { first, second, third, bonus, rate, imprest },
  } = evt.currentTarget;

  sum.innerHTML = salary(
    +first.value,
    +second.value,
    +third.value,
    +rate.value,
    +bonus.value,
    imprest.checked,
  );
  //   evt.currentTarget.reset();
}

function salary(first, second, third, rate, bonus, imprest) {
  const wh = 8;
  const tax = 0.195;
  const eveningPercentage = 0.2;
  const nightPercentage = 0.35;

  const totalDays = first + second + third;

  const loyaltyBonus = totalDays * 100;
  //   const qualificationBonus = totalDays * 21;

  const fs = wh * rate;

  const ss = wh * rate + 4 * rate * eveningPercentage + rate * nightPercentage;

  const ns = wh * rate + 7 * rate * nightPercentage;

  const sum = fs * first + ss * second + ns * third;
  const totalBonus = totalDays * bonus;

  const imprestSum = sum - sum * tax;

  const totalSum = sum + totalBonus + loyaltyBonus;
  const totalTax = totalSum * tax;

  const pureSum = totalSum - totalTax;

  if (imprest) {
    return `Аванс: ${imprestSum.toFixed(2)}`;
  }
  return `Зарплатня: ${pureSum.toFixed(2)}`;
}
