import { useEffect } from "react";
import { useState } from "react"

const FormComponent = () => {

    const [loanAmount, setLoanAmount] = useState("");
    const [loanTerm, setLoanTerm] = useState("");
    const [annualInterest, setAnnualInterest] = useState("");
    const[monthlyPayment, setMonthlyPayment] = useState("")

    const calculateLoan = (p, annual, loanTerm) => {
        const principal = parseFloat(p);
        const annualRate = parseFloat(annual) / 100;
        const termMonths = parseInt(loanTerm) * 12;
        const monthlyRate = annualRate / 12;

        if (monthlyRate === 0) {
            const mortgage = principal / termMonths;
            setMonthlyPayment(mortgage.toFixed(2));
        } else {
            const mortgage = (principal * monthlyRate * Math.pow(1 + monthlyRate, termMonths)) / (Math.pow(1 + monthlyRate, termMonths) - 1);
            setMonthlyPayment(mortgage.toFixed(2));
        }
    }

    const handleLoanAmount = (e) =>{
     
        const val = e.target.value;
        setLoanAmount(val)
        //console.log("loan amount: ", loanAmount)
        if(Number.isNaN(Number(val))){
            if(val.trim()!== ""){
                alert("Enter a valid number");
            }
        }
    }

    const handleAnnualInterest = (e) =>{

        const val = e.target.value;
        setAnnualInterest(val);
        if(Number.isNaN(Number(val))){
            if(val.trim()!== ""){
                alert("Enter a valid number");
            }
        }
    }

    const handleLoanTerm = (e) =>{
        const val = e.target.value
        setLoanTerm(val);
        if(Number.isNaN(Number(val))){
            if(val.trim()!== ""){
                alert("Enter a valid number");
            }
        }
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        if (loanAmount && annualInterest && loanTerm) {
            calculateLoan(loanAmount, annualInterest, loanTerm);
        } else {
            alert("Please fill out all fields with valid numbers.");
        }
    }

    useEffect(() => {
        if (monthlyPayment) {
            alert("Monthly mortgage payment is: $" + monthlyPayment);
        }
    }, [monthlyPayment]);

    return(
        <div className="mt-8 sm:mx-auto sm:w-full sm:max-w-md">
            <div className="bg-white py-8 px-4 shadow sm:rounded-lg sm:px-10">
                <form className="space-y-6" action="#" method="POST" onSubmit={handleSubmit}>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                            Loan Amount
                        </label>
                    </div>
                    <div className="mt-1">
                        <input
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter loan amount in $"
                            onChange={handleLoanAmount}
                        />
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                            Annual Interest Rate (%)
                        </label>
                    </div>
                    <div className="mt-1">
                        <input
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter interest rate"
                            onChange={handleAnnualInterest}
                        />
                    </div>
                    <div>
                        <label htmlFor="text" className="block text-sm font-medium text-gray-700">
                            Loan Term
                        </label>
                    </div>
                    <div className="mt-1">
                        <input
                            required
                            className="appearance-none rounded-md relative block w-full px-3 py-2 border border-gray-300 placeholder-gray-500 text-gray-900 focus:outline-none focus:ring-indigo-500 focus:border-indigo-500 focus:z-10 sm:text-sm"
                            placeholder="Enter loan term"
                            onChange={handleLoanTerm}
                        />
                    </div>
                    <div>
                    <button type="submit"
                        className="
                            group 
                            relative 
                            w-full 
                            flex 
                            justify-center 
                            py-2 px-4 border 
                            border-transparent 
                            text-sm 
                            font-medium 
                            rounded-md
                            text-white 
                            bg-indigo-600 
                            hover:bg-indigo-700 
                            focus:outline-none 
                            focus:ring-2 
                            focus:ring-offset-2 
                            focus:ring-indigo-500">
                        Submit
                    </button>
                </div>
                </form>
            </div>
        </div>
    )
}

export default FormComponent