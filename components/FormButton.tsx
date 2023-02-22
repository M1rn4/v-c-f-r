type FormButtonProps = {
  isLoading?: boolean;
  buttonText: string;
  onClick?: () => void;
};

const FormButton = ({ buttonText, isLoading, onClick }: FormButtonProps) => {
  return (
    <div style={{ marginTop: '1rem' }}>
      <button type="submit" disabled={isLoading} onClick={onClick} style={{ backgroundColor: '#319795', color: 'white', padding: '0.5rem 1rem', borderRadius: '4px', border: 'none', cursor: isLoading ? 'not-allowed' : 'pointer' }}>
        {isLoading ? 'Enviando...' : buttonText}
      </button>
    </div>
  );
};

export default FormButton;
