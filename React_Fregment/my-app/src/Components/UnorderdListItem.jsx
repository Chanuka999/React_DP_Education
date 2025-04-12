// import ListItem from "./ListItem";

import Listitem from "./ListItem";

// const UnorderdListItem = ({ itemList }) => {
//   return <ul>{<ListItem items={itemList} />}</ul>;
// };

// export default UnorderdListItem;

const UnorderdListItem = ({ itemList }) => {
  return (
    <ul>
      <Listitem items={itemList} />
    </ul>
  );
};

export default UnorderdListItem;
