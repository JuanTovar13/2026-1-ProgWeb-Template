import { useState } from 'react';

export const Card = ({ title }) => {
  const [sumTotal, setSumTotal] = useState(0);

  const sumar = () => {
    setSumTotal(sumTotal + 1);
    console.log(sumTotal)
  };
  return (
    <>
      <h1>{title}</h1>
      <p>{sumTotal}</p>
      <button onClick={sumar}>Sumar</button>
    </>
  );
};
