import {
  Drawer,
  Box,
  List,
  Button,
  ListItem,
  ListItemButton,
  ListItemIcon,
  ListItemText,
} from "@mui/material";
import InboxIcon from "@mui/icons-material/MoveToInbox";
import MailIcon from "@mui/icons-material/Mail";
import { useState } from "react";

const DrawerComponent = () => {
  const [open, setOpen] = useState(false);

  const toggleDrawer = (stat) => () => {
    setOpen(stat);
  };

  return (
    <div>
      <Button variant="outlined" onClick={toggleDrawer(true)}>
        Open Drawer
      </Button>
      <Drawer open={open} onClose={toggleDrawer(false)}>
        <Box
          display={"flex"}
          flexDirection={"column"}
          onClose={toggleDrawer(false)}
        >
          <List>
            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <InboxIcon />
                </ListItemIcon>
                <ListItemText primary="inbox" />
              </ListItemButton>
            </ListItem>

            <ListItem>
              <ListItemButton>
                <ListItemIcon>
                  <MailIcon />
                </ListItemIcon>
                <ListItemText primary="mail" />
              </ListItemButton>
            </ListItem>
          </List>
        </Box>
      </Drawer>
    </div>
  );
};

export default DrawerComponent;
