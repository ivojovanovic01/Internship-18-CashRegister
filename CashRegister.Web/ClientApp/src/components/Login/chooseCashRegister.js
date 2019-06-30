import React, { Component } from "react";
import {withRouter} from 'react-router-dom';

class ChooseCashRegister extends Component {
  handleClick = cashRegisterId => {
    localStorage.setItem(this.props.cashier.id, cashRegisterId);
    this.props.history.push("home");
  };

  render() {
    const { isLogged, cashier } = this.props;
    if (!isLogged) return false;
    return (
      <div className="choose-cashRegister">
        {cashier.cashRegisterCashiers.map(crs => (
          <p
            key={crs.cashRegisterId}
            onClick={() => this.handleClick(crs.cashRegisterId)}
          >
            {crs.cashRegister.name}
          </p>
        ))}
      </div>
    );
  }
}

export default withRouter(ChooseCashRegister);
