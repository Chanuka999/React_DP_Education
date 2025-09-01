import { useState } from "react";
import { Button, Modal } from "react-bootstrap";
import ToastComponent from "./ToastComponent";

const ModalComponents = () => {
  const [show, setShow] = useState(false);
  const [toast, setToast] = useState(false);

  const showHanddler = () => {
    setShow(true);
  };

  const closeHanddler = () => {
    setShow(false);
  };

  const saveHanddler = () => {
    setShow(false);
    setToast(true);
  };
  return (
    <>
      <Button onClick={showHanddler}>click to show modal</Button>
      <Modal show={show} onHide={closeHanddler}>
        <Modal.Header closeButton>
          <Modal.Title>Model title</Modal.Title>
        </Modal.Header>
        <Modal.Body>Do you want to save this file</Modal.Body>
        <Modal.Footer>
          <Button onClick={closeHanddler}>Close</Button>
          <Button onClick={saveHanddler}>Save Changes</Button>
        </Modal.Footer>
      </Modal>
      <ToastComponent show={toast} setToast={setToast} />
    </>
  );
};

export default ModalComponents;
