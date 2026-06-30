# LoanEMICalculator
Saiket Systems Task 1(Loan EMI Calculator)

Loan EMI Calculator
Overview

The Loan EMI Calculator is a simple web application developed using HTML, CSS, and JavaScript. It allows users to calculate their Equated Monthly Installment (EMI) by entering the loan amount, annual interest rate, and loan tenure.

This project demonstrates the use of JavaScript for mathematical calculations, user input validation, and dynamic content updates in a web application.

Features:
Welcome page with a modern user interface
User-friendly EMI calculator
Calculates monthly EMI using the standard EMI formula
Input validation to prevent invalid entries
Displays the calculated monthly installment
Responsive design for desktop and mobile devices

Technologies Used:
 - HTML5
 - CSS3
 - JavaScript
   
Project Structure:
Loan-EMI-Calculator/
│
├── index.html          # Welcome page
├── calculator.html     # EMI calculator page
├── style.css           # Stylesheet
├── script.js           # JavaScript logic
└── README.md           # Project documentation

EMI Formula:

The calculator uses the standard Equated Monthly Installment (EMI) formula:

EMI = (P * R * Math.pow((1 + R), N)) / (Math.pow((1 + R), N) - 1);

Where:
P = Principal (Loan Amount)
R = Monthly Interest Rate (Annual Interest Rate ÷ 12 ÷ 100)
N = Loan Tenure in Months
