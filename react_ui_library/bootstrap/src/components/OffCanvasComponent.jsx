import { useState } from "react";
import { Button, Offcanvas } from "react-bootstrap";

const OffCanvasComponent = () => {
  const [show, setShow] = useState(false);

  const handdler = () => {
    setShow(true);
  };

  const closeHanddler = () => {
    setShow(false);
  };
  return (
    <>
      <Button variant="primary" onClick={handdler}>
        Lounch
      </Button>
      <Offcanvas placement="start" show={show} onHide={closeHanddler}>
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>This is the title</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>Tis is body content</Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default OffCanvasComponent;
