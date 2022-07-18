import Form from 'react-bootstrap/Form';

function Input(props) {
    return (
        <Form.Group className={props.class} controlId={props.id}>
        <Form.Label>{props.label}</Form.Label>
            <Form.Control onChange={props.function} type={props.type} placeholder={props.holder} />
        <Form.Text className="text-muted">
            {props.text}
        </Form.Text>
        </Form.Group>
    );
}

export default Input;