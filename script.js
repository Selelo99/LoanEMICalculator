function calculateEMI() {

    let principal = parseFloat(document.getElementById("principal").value);

    let annualInterest = parseFloat(document.getElementById("interest").value);

    let months = parseInt(document.getElementById("months").value);

    if (
        isNaN(principal) ||
        isNaN(annualInterest) ||
        isNaN(months) ||
        principal <= 0 ||
        annualInterest <= 0 ||
        months <= 0
    ) {

        alert("Please enter valid values.");

        return;
    }


    // Convert annual interest rate to monthly decimal

    let R = annualInterest / 12 / 100;

    let EMI = (principal * R * Math.pow((1 + R), months)) / (Math.pow((1 + R), months) - 1);

    EMI = Math.round(EMI * 100) / 100;

    document.getElementById("emi").innerHTML = "R " + EMI;
}

function goBack(){
    window.location.href = "index.html";
}