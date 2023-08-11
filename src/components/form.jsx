import { useState } from "react";

function Input({
  labelName,
  inputType = "text",
  insertState,
  includeLabel = false,
}) {
  const [isText, setIsText] = useState("");

  const handleInputChange = (e) => {
    setIsText(e.target.value);
  };

  return (
    <>
      {insertState ? (
        <div className="submitted-text">
          {includeLabel ? labelName + ": " + isText : isText}
        </div>
      ) : (
        <label>
          {labelName}
          <input type={inputType} onChange={handleInputChange} value={isText} />
        </label>
      )}
    </>
  );
}

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function handleFormToggle(e) {
    e.preventDefault();
    isSubmitted === false ? setIsSubmitted(true) : setIsSubmitted(false);
  }

  return (
    <>
      <form>
        <h3>CV-App (1st react project!)</h3>
        <div className="section">
          <Input
            labelName={"First Name"}
            insertState={isSubmitted}
          />
          <Input
            labelName={"Last Name"}
            insertState={isSubmitted}
          />
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
              includeLabel={true}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertState={isSubmitted}
              includeLabel={true}
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
              includeLabel={true}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertState={isSubmitted}
              includeLabel={true}
            />
          </div>
        </div>
        <button onClick={handleFormToggle}>
          {isSubmitted ? "Edit" : "Submit"}
        </button>
      </form>
    </>
  );
}

export { Form };
