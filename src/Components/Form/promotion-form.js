import React, { Component } from "react";
import FormUserInfo from "./form-user-info";
export class PromotionForm extends Component {
  constructor() {
    super();
    this.state = {
      step: 1,
      firstName: "",
      lastName: ""
    };
  }
  nextStep = () => {
    const { step } = this.state;
    this.setState({
      step: step + 1
    });
  };
  prevStep = () => {
    const { step } = this.state;
    this.setState({
      step: step - 1
    });
  };
  handleChange = input => e => {
    this.setState({
      [input]: e.target.value
    });
  };
  render() {
    const { step } = this.state;
    const { firstName, lastName } = this.state;
    const values = { firstName, lastName };
    switch (step) {
      case 1:
        return (
          <FormUserInfo
            nextStep={this.nextStep}
            handleChange={this.handleChange}
            values={values}
          />
        );
      case 2:
        return <h1>2 Step</h1>;
      case 3:
        return <h1>Step 3</h1>;
    }
    return <div />;
  }
}

export default PromotionForm;
