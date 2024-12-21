import ListItem from "./ListItem";

const OrderdListItem = ({ itemList }) => {
  return (
    <ol>
      <ListItem items={itemList} />
    </ol>
  );
};

export default OrderdListItem;
