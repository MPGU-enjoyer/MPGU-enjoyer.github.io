import { findDelimeters, countPrimeOccurences } from "./task(4.2).js";

function handleClick() {
  console.log(
    `Число 17 и его простые делители ${
      findDelimeters(17) === "NOT" ? "отсутсвуют" : findDelimeters(17)
    }`
  );
  console.log(`Число 121 и его простые делители ${findDelimeters(121)}`);
  console.log(`Число 200 и его простые делители ${findDelimeters(200)}`);
  console.log(
    `l = 2, R = 8, P = 2 и столько раз встречается в разложении P - ${countPrimeOccurences(
      2,
      8,
      2
    )}`
  );
}

window.handleClick = handleClick;
