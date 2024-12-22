import ListItem from "./ListItem";

const UnorderdListItem = ({ itemList }) => {
  return <ul>{<ListItem items={itemList} />}</ul>;
};

export default UnorderdListItem;
