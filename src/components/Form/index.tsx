import React from "react";
import Input from "../Input";

const Form = ({ onSubmit }) => {
  const safeSubmit = (event) => {
    event.preventDefault();
    event.stopPropagation();

    const name = event.target[0].value;

    const email = event.target[1].value;

    onSubmit({ name, email });
  };

  return (
    <form
      onSubmit={safeSubmit}
      className="flex flex-col items-center justify-center h-full -mt-20 gap-10"
    >
      <Input
        type="text"
        placeholder="Insira seu nome..."
        name="name"
        label="Nome:"
      />
      <Input
        type="email"
        placeholder="Insira seu e-mail..."
        name="email"
        label="E-mail:"
      />
      <button
        type="submit"
        className="bg-alura-100 py-1 px-5 hover:bg-alura-200 transition-all
                   text-gray-200 uppercase rounded-md hover:-translate-y-1 hover:delay-200"
      >
        Seguir
      </button>
    </form>
  );
};

export default Form;
