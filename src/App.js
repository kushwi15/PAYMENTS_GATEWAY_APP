import './App.css';
import React, { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';

function App() {
  const [amount, setAmount] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (amount === "") {
      alert("Please enter an amount");
    } else {
      var options = {
        key: "rzp_test_d4pLXa7gyQuEX9",
        key_secret: "qjlkJruOyIz689EqqqMK2pNn",
        amount: amount * 100,
        currency: "INR",
        name: "KUSHWINTH",
        description: "For testing purpose",
        handler: function (response) {
          alert(response.razorpay_payment_id);
        },
        prefill: {
          name: "Kushwinth",
          email: "testmail@gmail.com",
          contact: "9876543210"
        },
        notes: {
          address: "Razorpay Corporate Office"
        },
        theme: {
          color: "#3399cc"
        }
      };
      var pay = new window.Razorpay(options);
      pay.open();
    }
  };

  return (
    <div className="App">
      <div className="container mt-5">
        <div className="row justify-content-center">
          <div className="col-md-6">
            <div className="card shadow p-4">
              <h2 className="text-center mb-4">Razorpay Payment Integration</h2>
              <form onSubmit={handleSubmit}>
                <div className="form-group">
                  <label htmlFor="amount">Enter Amount</label>
                  <input
                    type="number"
                    className="form-control"
                    id="amount"
                    placeholder="Enter Amount"
                    value={amount}
                    onChange={(e) => setAmount(e.target.value)}
                  />
                </div>
                <button type="submit" className="btn btn-primary btn-block mt-3">
                  Submit Payment
                </button>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default App;
