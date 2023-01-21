import { Form } from "react-bootstrap"

export const UserInput = ({ data, setInput }) => {
  return (
    <div className="user-input">
      <Form >
        <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Control
            as="textarea"
            placeholder="Start typing ..."
            value={data}
            onChange={(event) => {
              setInput(event.target.value)
            }} />
        </Form.Group>
      </Form>
    </div>
  )
}

export default UserInput
