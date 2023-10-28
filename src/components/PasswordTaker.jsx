export default function PasswordTaker(props) {
    return(
      <div>
        <p>Please enter your password.</p>
        <form onSubmit={props.onSubmit}>
          <label>
            Password:
            <input type='password' name='password' minLength={5}/>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }