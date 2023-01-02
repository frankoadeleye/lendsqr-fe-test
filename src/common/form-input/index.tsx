import "./styled.scss";

type FIProps = {
  type?: string;
  placeHolder?: string;
  errorText?: string;
  showError?: boolean;
  name?: string;
  onChange?: React.ChangeEventHandler;
  onKeyUp?: any;
  children?: React.ReactNode;
  disabled?: boolean;
};

function FormInput({
  type,
  onChange,
  placeHolder,
  showError,
  errorText,
  onKeyUp,
  name,
  disabled,
  children,
}: FIProps) {
  return (
    <div className="input-cover">
      <input
        disabled={disabled}
        type={type}
        name={name}
        onChange={onChange}
        placeholder={placeHolder}
        onKeyUp={onKeyUp}
      />
      {showError ? <div className="error">{errorText}</div> : ""}
      {children}
    </div>
  );
}

export default FormInput;
