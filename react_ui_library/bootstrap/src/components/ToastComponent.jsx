import { Toast, ToastContainer } from "react-bootstrap";

const ToastComponent = ({ show, setToast }) => {
  return (
    <ToastContainer position="botton-start" className="mb-3 ms-3">
      <Toast
        onClose={() => setToast(false)}
        show={show}
        bg="success"
        delay={3000}
        autohide
      >
        <Toast.Header>
          <strong className="me-auto">File manager</strong>
        </Toast.Header>
        <small>just now</small>
        <Toast.Body>File saved</Toast.Body>
      </Toast>
    </ToastContainer>
  );
};

export default ToastComponent;
