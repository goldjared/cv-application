import { useState } from "react";

function Input({ labelName, inputType = "text", insertFunc = false }) {
  const [isText, setIsText] = useState("");

  const handleInputChange = (e) => {
    setIsText(e.target.value);
  };

  return (
    <label>
      {labelName}:
      {insertFunc ? (
        <div>{isText}</div>
      ) : (
        <input type={inputType} onChange={handleInputChange} />
      )}
    </label>
  );
}

function Form() {
  const [isSubmitted, setIsSubmitted] = useState(false);

  function HandleFormSubmit(e) {
    e.preventDefault();
    setIsSubmitted(true);
    console.log(e.target.form.length - 1);
  }
  return (
    <>
      <form>
        <div className="section">
          <Input labelName={"First Name"} insertFunc={isSubmitted} />
          <Input labelName={"Last Name"} insertFunc={isSubmitted} />
          <Input
            labelName={"Email"}
            inputType={"mail"}
            insertFunc={isSubmitted}
          />
          <Input
            labelName={"Telephone"}
            inputType={"tel"}
            insertFunc={isSubmitted}
          />
        </div>
        <div className="section">
          <Input labelName={"School"} insertFunc={isSubmitted} />
          <Input labelName={"Degree Type"} insertFunc={isSubmitted} />
          <div className="education-dates">
            <Input
              labelName={"Start Date"}
              inputType={"date"}
              insertFunc={isSubmitted}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertFunc={isSubmitted}
            />
          </div>
        </div>
        <div className="section">
          <Input labelName={"Company"} insertFunc={isSubmitted} />
          <Input labelName={"Position"} insertFunc={isSubmitted} />
          <Input
            labelName={"Major Responsiblities"}
            inputType="textarea"
            insertFunc={isSubmitted}
          />
          <div className="job-dates">
            <Input
              labelName={"Start Date"}
              inputType={"date"}
              insertFunc={isSubmitted}
            />
            <Input
              labelName={"End Date"}
              inputType={"date"}
              insertFunc={isSubmitted}
            />
          </div>
        </div>
        <button onClick={HandleFormSubmit}>submit</button>
      </form>
    </>
  );
}

export { Form };
