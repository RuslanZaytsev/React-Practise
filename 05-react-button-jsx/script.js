const Button = ({ initialText, initialClass }) => {
  const [state, setState] = React.useState(initialText);
  const [butClass, setButClass] = React.useState(initialClass);
  const currentDate = new Date(Date.now());
  const formattedDate = currentDate.toLocaleString();
  const formattedTime = currentDate.toLocaleTimeString();

  const handleButtonClick = () => {
    setState(`date & time: ${formattedDate}${formattedTime}`);
    setButClass("newBtn");
  };

  const handleBlur = () => {
    setState(initialText);
    setButClass(initialClass);
  };

  return (
    <div className={butClass}>
      <button
        className={butClass}
        onClick={handleButtonClick}
        onBlur={handleBlur}
      >
        {state}
      </button>
    </div>
  );
};

const container = document.getElementById("app");
const root = ReactDOM.createRoot(container);
root.render(<Button initialText="props text" initialClass="btn" />);
