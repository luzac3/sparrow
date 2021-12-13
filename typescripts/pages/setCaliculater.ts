import { ControlEventListner } from "../module/controlEventListner";

class SetCaliculater{
  caliculateTimeunit = (
    inHour: number
    , inMinutes: number
    , outHour: number
    , outMinutes: number
    , unitOfMinutes: number
  ) => {
    const totalInMinutes = inHour * 60 + inMinutes;
    const totalOutMinutes = outHour * 60 + outMinutes;

    let totalMinutes: number;

    if (totalOutMinutes < totalInMinutes){
      // 日付をまたいだ場合の処理
      totalMinutes = totalOutMinutes + totalInMinutes;
    } else {
      totalMinutes = totalOutMinutes - totalInMinutes;
    }

    return Math.ceil(totalMinutes / unitOfMinutes);
  }
}

$(document).ready(() => {
  const caliculaterInputElements = document.getElementsByClassName("caliculater")[0].getElementsByTagName("input");
  const caliculaterSelectElements = document.getElementsByClassName("caliculater")[0].getElementsByTagName("select");
  const inHourElement = document.getElementsByClassName("inHour")[0] as HTMLInputElement;
  const inMinutesElement = document.getElementsByClassName("inMinutes")[0] as HTMLInputElement;
  const outHourElement = document.getElementsByClassName("outHour")[0] as HTMLInputElement;
  const outMinutesElement = document.getElementsByClassName("outMinutes")[0] as HTMLInputElement;
  const unitOfMinutesElement = document.getElementsByClassName("unitOfMinutes")[0] as HTMLSelectElement;
  const amountElement = document.getElementsByClassName("amount")[0] as HTMLInputElement;
  const numberOfPeopleElement = document.getElementsByClassName("numberOfPeople")[0] as HTMLSelectElement;
  const showPliceElement = document.getElementsByClassName("showPlice")[0] as HTMLElement;

  let inHour = Number(inHourElement.value);
  let inMinutes = Number(inMinutesElement.value);
  let outHour = Number(outHourElement.value);
  let outMinutes = Number(outMinutesElement.value);
  let unitOfMinutes = Number(unitOfMinutesElement.value);
  let amount = Number(amountElement.value);
  let numberOfPeople = Number(numberOfPeopleElement.value);

  const setCaliculater = new SetCaliculater();

  let allocation = setCaliculater.caliculateTimeunit(inHour, inMinutes, outHour, outMinutes, unitOfMinutes);

  ControlEventListner.keyup(caliculaterInputElements).then(() => {
    inHour = Number(inHourElement.value);
    inMinutes = Number(inMinutesElement.value);
    outHour = Number(outHourElement.value);
    outMinutes = Number(outMinutesElement.value);
    amount = Number(amountElement.value);

    allocation = setCaliculater.caliculateTimeunit(inHour, inMinutes, outHour, outMinutes, unitOfMinutes);

    showPliceElement.innerHTML = String(amount * allocation / numberOfPeople);
  });

  ControlEventListner.change(caliculaterSelectElements).then(() => {
    unitOfMinutes = Number(unitOfMinutesElement.value);
    numberOfPeople = Number(numberOfPeopleElement.value);

    allocation = setCaliculater.caliculateTimeunit(inHour, inMinutes, outHour, outMinutes, unitOfMinutes);

    showPliceElement.innerHTML = String(amount * allocation / numberOfPeople);
  });
});
