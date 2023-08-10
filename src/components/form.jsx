import { useState } from "react";

function Input({ labelName, inputType = "text", insertState }) {
  const [isText, setIsText] = useState("");

  const handleInputChange = (e) => {
    setIsText(e.target.value);
  };

  return (
    <label>
      {labelName}:
      {insertState ? (
        <div className="submitted-text">{isText}</div>
      ) : (
        <input type={inputType} onChange={handleInputChange} value={isText} />
      )}
    </label>
  );
}

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormToggle(e) {
    e.preventDefault();
    isSubmitted === false
      ? setIsSubmitted(true)
      : setIsSubmitted(false);
  }

  return (
    <>
      <form>
        <div className="section">
          <Input labelName={"First Name"} insertState={isSubmitted} />
          <Input labelName={"Last Name"} insertState={isSubmitted} />
          <Input
            labelName={"Email"}
            inputType={"mail"}
            insertState={isSubmitted}
          />
          <Input
            labelName={"Telephone"}
            inputType={"tel"}
            insertState={isSubmitted}
          />
        </div>
        <div className="section">
          <Input labelName={"School"} insertState={isSubmitted} />
          <Input labelName={"Degree Type"} insertState={isSubmitted} />
          <div className="education-dates">
            <Input
              labelName={"Start Date"}
              inputType={"date"}
              insertState={isSubmitted}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertState={isSubmitted}
            />
          </div>
        </div>
        <div className="section">
          <Input labelName={"Company"} insertState={isSubmitted} />
          <Input labelName={"Position"} insertState={isSubmitted} />
          <Input
            labelName={"Major Responsiblities"}
            inputType="textarea"
            insertState={isSubmitted}
          />
          <div className="job-dates">
            <Input
              labelName={"Start Date"}
              inputType={"date"}
              insertState={isSubmitted}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertState={isSubmitted}
            />
          </div>
        </div>
        <button onClick={handleFormToggle}>{isSubmitted ? 'Edit' : 'Submit'}</button>
      </form>
    </>
  );
}

export { Form };
