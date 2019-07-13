import React, { Component } from "react";
import { withRouter } from "react-router-dom";

class ChooseCashRegister extends Component {
  handleClick = cashRegisterId => {
    const { cashier, history } = this.props;

    localStorage.setItem(
      "authToken",
      JSON.stringify({ cashierId: cashier.id, cashRegisterId: cashRegisterId })
    );
    history.push("home");
  };

  render() {
    const { isLogged, cashier } = this.props;
    if (!isLogged) return false;
    return (
      <div className="choose-cash-register">
        {cashier.cashRegisters.map(cashRegister => (
          <div
            className="cash-register-btn"
            key={cashRegister.id}
            onClick={() => this.handleClick(cashRegister.id)}
          >
            {cashRegister.name}
          </div>
        ))}
      </div>
    );
  }
}

export default withRouter(ChooseCashRegister);
