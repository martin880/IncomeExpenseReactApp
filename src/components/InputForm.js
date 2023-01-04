import React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from 'sweetalert2';

const InputForm = () => {
    const [name, setName] = useState('')
    const [total, setTotal] = useState(0)

    const incomeHandler = () => {
        console.log("income")

        axios({
            method: "POST",
            url: "http://localhost:3000/income",
            data: {
                name, total: +total
            }
        })
        .then(result => {
            console.log(result.data)
            Swal.fire(
                'Good job!',
                'Income has been added!!',
                'success'
              )
        })
        .catch(err => {
            console.log(err)
        })        
    }
    const expenseHandler = () => {
        console.log("expense")
        axios({
            method: "POST",
            url: "http://localhost:3000/expense",
            data: {
                name, total: +total
            }
        })
        .then(result => {
            console.log(result.data)
            Swal.fire(
                'Good job!',
                'Expense has been added!!',
                'success'
              )
        })
        .catch(err => {
            console.log(err)
        })
        // let temp = {
        //     name, total
        // }
        // console.log(temp)
    }

    return (
        <div className="input-form">
            <div className="form-item">
                <label>Transaction Name : </label>
                <input type="text" onChange={(e) => setName(e.target.value)}></input>
            </div>
            <div className="form-item">
                <label>Total : </label>
                <input type="text" onChange={(e) => setTotal(e.target.value)}></input>
            </div>
            <div className="submit-form">
                <button onClick={() => incomeHandler()}>Add Income</button>
                <button onClick={() => expenseHandler()}>Add Expense</button>
            </div>
        </div>
    )
}

export default InputForm