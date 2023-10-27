submit.addEventListener("click", () => {
    const inputSize = size.value;
    const inputAge = age.value;
    const inputWeight = weight.value;

    if (female.checked) {
        const femBase = 655.1 + (9.6 * inputWeight) + (1.8 * inputSize) - (4.7 * inputAge);
        const femSum = femBase * activitySelection.value;

        kcalResultBase.textContent = femBase.toFixed(2);
        kcalResultSum.textContent = femSum.toFixed(2);
        kJResultBase.textContent = (femBase * 4.184).toFixed(2);
        kJResultSum.textContent = (femSum * 4.184).toFixed(2);
    } else if (male.checked) {
        const maleBase = 66.47 + (13.7 * inputWeight) + (5 * inputSize) - (6.8 * inputAge);
        const maleSum = maleBase * activitySelection.value;

        kcalResultBase.textContent = maleBase.toFixed(2);
        kcalResultSum.textContent = maleSum.toFixed(2);
        kJResultBase.textContent = (maleBase * 4.184).toFixed(2);
        kJResultSum.textContent = (maleSum * 4.184).toFixed(2);
    } else {
        alert("Bitte wählen Sie ein Geschlecht aus!")
    }
})
