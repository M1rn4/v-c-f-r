import React from 'react';

interface FormButtonProps {
  buttonText: string;
  isLoading: boolean;
  className?: string; // <- Definimos className como opcional
}

function FormButton(props: FormButtonProps) {
  const { buttonText, isLoading, className } = props;
  return (
    <button
      type='submit'
      disabled={isLoading}
      className={className}
    >
      {isLoading ? 'Cargando...' : buttonText}
    </button>
  );
}

export default FormButton;
