import { useState } from "react";

const useForm = () => {
  const [values, setValues] = useState({
    cardName: "",
    cardNumber: "4*** **** **** ****",
    cardType: "",
    cardExpiration: "",
    cardSecurityCode: "",
    cardPostalCode: "",
    focus: "",
  });

  const handleFocus = (e) => {
    setValues({
      ...values,
      focus: e.target.name === "cardSecurityCode" ? "cvc" : e.target.name,
    });
  };

  const handleChange = (e) => {
    const { name, value } = e.target;
    setValues({
      ...values,
      [name]: value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
  };

  return { handleChange, handleFocus, handleSubmit, values };
};

export default useForm;
