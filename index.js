const form = document.querySelector(".form");
const sum = document.querySelector(".total-sum");

form.addEventListener("submit", handleSubmit);

function handleSubmit(evt) {
  evt.preventDefault();

  const {
    elements: { first, second, third, bonus, rate },
  } = evt.currentTarget;

  sum.innerHTML = salary(
    +first.value,
    +second.value,
    +third.value,
    +bonus.value,
    +rate.value
  );

  //   evt.currentTarget.reset();
}

function salary(first, second, third, bonus, rate) {
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

  const totalSum = sum + totalBonus + loyaltyBonus;
  const totalTax = totalSum * tax;

  const pureSum = totalSum - totalTax;
  console.log(pureSum);
  return pureSum;
}
