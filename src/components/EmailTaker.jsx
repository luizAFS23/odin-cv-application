export default function EmailTaker(props) {
    return(
      <div>
        <p>Please enter your email.</p>
        <form onSubmit={props.onSubmit}>
          <label>
            Email:
            <input type='email' name='email'/>
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }