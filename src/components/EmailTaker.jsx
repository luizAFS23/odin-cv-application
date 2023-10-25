export default function EmailTaker(props) {
    return(
      <div>
        <p>Please enter your email.</p>
        <form onSubmit={props.onSubmit}>
          <label>
            Email:
            <input type='email' name='email' value={props.value} />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }