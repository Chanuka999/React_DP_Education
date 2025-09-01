import { Tabs, Tab, Typography, Button, Box } from "@mui/material";
import { useState } from "react";

const TabPannel = ({ children, value, index }) => {
  return (
    <>
      {value === index && (
        <Box p={3}>
          <Typography>{children}</Typography>
        </Box>
      )}
    </>
  );
};

const TabComponent = () => {
  const [value, setValue] = useState(0);

  const handdleChange = (event, newValue) => {
    setValue(newValue);
  };
  return (
    <div>
      <Tabs value={value} onChange={handdleChange}>
        <Tab label="item1" />
        <Tab label="item2" />
        <Tab label="item3" />
      </Tabs>

      <TabPannel value={value} index={0}>
        content for Item 01
      </TabPannel>

      <TabPannel value={value} index={1}>
        content for Item 02
      </TabPannel>

      <TabPannel value={value} index={2}>
        content for Item 03
      </TabPannel>
    </div>
  );
};

export default TabComponent;
