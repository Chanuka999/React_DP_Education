import ListItem from "./ListItem";

const OrderdListItem = ({ itemList }) => {
  return (
    <div>
      <ol>
        <ListItem items={itemList} />
      </ol>
    </div>
  );
};

export default OrderdListItem;
