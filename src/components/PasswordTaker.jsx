export default function PasswordTaker(props) {
    return(
      <div>
        <p>Please enter your password.</p>
        <form onSubmit={props.onSubmit}>
          <label>
            Password:
            <input type='password' name='password' value={props.value}/>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }