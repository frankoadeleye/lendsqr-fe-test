import "./styled.scss";

type SubmitProps = {
  isLoading: boolean;
  text: string;
  disabled: boolean;
};

function SubmitButton({ isLoading, text, disabled }: SubmitProps) {
  return (
    <button type="submit" disabled={disabled}>
      {isLoading ? "Working . . ." : text}
    </button>
  );
}

type ActionBtnProps = {
  generalColor: string;
  text: string;
};

function ActionButton({ generalColor, text }: ActionBtnProps) {
  return (
    <div
      className="action-button"
      style={{ color: generalColor, border: `1px solid ${generalColor}` }}>
      {text}
    </div>
  );
}

export { SubmitButton, ActionButton };
