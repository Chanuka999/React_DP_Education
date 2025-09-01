import { Card, Image, Button } from "react-bootstrap";

const CardComponent = () => {
  return (
    <Card className="p-4">
      <Image
        src="https://randomuser.me/api/portraits/men/86.jpg"
        roundedCircle
      />
      {/* <Card.Img
        variant="bottom"
        src="https://randomuser.me/api/portraits/men/86.jpg"
      /> */}
      <Card.Body>
        <Card.Title>Chanuka</Card.Title>
        <Card.Text>sample card page</Card.Text>
      </Card.Body>
      <Button>Click </Button>
    </Card>
  );
};

export default CardComponent;
