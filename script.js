/* ------------------------------ TASK 2 ----------------------------
Parašykite JS kodą, kuris skaičiuos kiek kartų buvo paspaustas mygtukas
su tekstu "CLICK ME". Paspaudimų rezultatas turi būti matomas dešinėje
pusėje esančiame "state" skaičiavimo bloke (<div id="btn__state">0</div>)
------------------------------------------------------------------- */
const cntValue = document.getElementById("btn__state");

let cnt = 0;

function addCnt() {
  cntValue.innerText = cnt++;
}

document.getElementById("btn__element").addEventListener("click", addCnt);
