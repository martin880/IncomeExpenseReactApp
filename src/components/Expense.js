import React, {useState, useEffect} from "react";
import axios from 'axios';
import Swal from "sweetalert2";

const Expense = () => {
    const [expenses, setExpenses] = useState([])
    const URL = "http://localhost:3000"


    const getExpenses = () => {
        axios({
            method: "GET",
            url: `${URL}/expense`
        })
        .then(expenses => {
            setExpenses(expenses.data)
        })
        .catch(err => {
            console.log(err)
        })
    }

    const deleteHandler = (id) => {  
        Swal.fire({
            title: 'Are you sure?',
            text: "You won't be able to revert this!",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#3085d6',
            cancelButtonColor: '#d33',
            confirmButtonText: 'Yes, delete it!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios({
                    method: "DELETE",
                    url: `${URL}/expense/${id}`
                })
                .then(result => {
                    console.log(`Delete berhasil ${result}`)
                    getExpenses()
                    Swal.fire(
                        'Deleted!',
                        'Your expense has been deleted.',
                        'success'
                    )
                })
                .catch(err => {
                    console.log(err)
                })
            }
        })
}

    useEffect(() => {
        getExpenses();
    }, [])

    return (
        <div className="expense-list">
            <div className="expense-heading">
                <h4>Expense List</h4>
            </div>
            <div className="expense-items">
                {
                    expenses.length !== 0 ?
                    expenses.map(expense => {
                        return (
                            <div className="card-item">
                                <div className="item-left">
                                    <p>{expense.name}</p>
                                    <p>Rp. {expense.total}</p>
                                </div>
                                <div className="item-right">
                                    <button onClick={() => deleteHandler(+expense.id)}>Delete</button>
                                </div>
                            </div>
                        )
                    }) :
                    <p>There is no Expenses</p>
                }
            </div>
        </div>
    )
}

export default Expense