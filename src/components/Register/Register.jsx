import { Link } from "react-router-dom";


function Register() {

  return (
    <>
      <h1>Hola estas en la Register</h1>
      <div>
        <Link to={`/login`}>Register</Link>
      </div>
    </>
  )
}

export default Register;