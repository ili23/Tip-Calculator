const tipForm = document.getElementById("#tip-form");

tipForm.addEventListener("submit", function(e){
    e.preventDefault();
    const billAmount = Number(document.querySelector("#bill-amount").value);
    const tipPercentage = Number(document.querySelector("#tip-amount").value);
    const tipAmount = document.querySelector("#final-tip");


    let bill = Number(billAmount).value;
    let tipPercent = Number(tipPercentage).value / 100;
    let final = (bill*tipPercent);

    tipAmount.innerHTML = `${tipPercent}`;
    tipAmount.getElementsByClassName.display = "block";
    console.log(final);

});
