export function findDelimeters(number) {
  const isPrime = (number) => {
    if (number <= 1) {
      return false;
    }
    for (let i = 2; i <= Math.sqrt(number); i++) {
      if (number % i === 0) {
        return false;
      }
    }
    return true;
  };

  if (isPrime(number)) {
    return "NOT";
  }

  const delimeters = [];
  for (let i = 2; i <= number; i++) {
    if (number % i === 0 && isPrime(i)) {
      delimeters.push(i);
    }
  }
  return delimeters;
}

export function countPrimeOccurences(L, R, P) {
  let sum = 0;
  for (let i = L; i <= R; i++) {
    const delimeters = findDelimeters(i);
    if (delimeters.includes(P) && delimeters !== "NOT") {
      let number = i;
      while (number % P === 0) {
        sum++;
        number = number / P;
      }
    }
  }
  return sum;
}
