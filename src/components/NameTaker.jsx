export default function NameTaker(props) {
    return(
      <div>
        <p>Please enter your name.</p>
        <form onSubmit={props.onSubmit}>
          <label>
            Name:
            <input type='text' name='name' />
          </label>
          <button type='submit'>Submit</button>
        </form>
      </div>
    )
  }