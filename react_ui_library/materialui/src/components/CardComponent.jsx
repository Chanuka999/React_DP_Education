import {
  Card,
  CardContent,
  CardActions,
  Typography,
  Button,
  Avatar,
} from "@mui/material";
const CardComponent = () => {
  return (
    <Card style={{ padding: "16px", width: "18rem" }}>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          marginBottom: "16px",
        }}
      >
        <Avatar
          alt="user"
          src="https://randomuser.me/api/portraits/men/58.jpg"
          style={{ width: 100, height: 100 }}
        />
      </div>

      <CardContent>
        <Typography variant="h6" component="div">
          chanuaka Randitha
        </Typography>

        <Typography variant="body-2" component="text.secondary">
          sample text for the class
        </Typography>

        <CardActions>
          <Button variant="contained" color="primary">
            Click me
          </Button>
        </CardActions>
      </CardContent>
    </Card>
  );
};

export default CardComponent;
