
function StartEndDate() {
  return (
    <div className='dates'>
    <label>
      Start Date:
      <input type="date" name="" id="start" />
    </label>
    <label>
      End Date:
      <input type="date" name="" id="end" />
    </label>
    </div>
  )
}
function GeneralForm() {
  return (
    <div className='general'>
    <label>
      First Name:
      <input type="text" />
    </label>
    <label>
      Last Name:
      <input type="text" />
    </label>
    <label>
      Email:
      <input type="email" name="" id="" />
    </label>
    <label>
      Phone Number:
      <input type="tel" name="" id="" />
    </label>
    </div>
  )
}

function Education() {
  return (
    <div className='education'>
    <label>
      School:
      <input type="text" />
    </label>
    <label>
      Degree/Major:
      <input type="text" />
    </label>
    <StartEndDate/>
    <label>
      Phone Number:
      <input type="tel" name="" id="" />
    </label>
    </div>
  )
}

function Experience() {
  return (
    <div className='experience'>
    <label>
      Company:
      <input type="text" />
    </label>
    <label>
      Position:
      <input type="text" />
    </label>
    <label>
      Major Responsibilities:
      <input type="area" name="" id="" />
    </label>
    <label>
      Phone Number:
      <input type="tel" name="" id="" />
    </label>
    <StartEndDate/>
    </div>
  )
}
export { GeneralForm, Education, Experience }