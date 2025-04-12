// import ListItem from "./ListItem";

import Listitem from "./ListItem";

// const OrderdListItem = ({ itemList }) => {
//   return (
//     <ol>
//       <ListItem items={itemList} />
//     </ol>
//   );
// };

// export default OrderdListItem;

const OrderdListItem = ({ itemList }) => {
  return (
    <ol>
      <Listitem items={itemList} />
    </ol>
  );
};
export default OrderdListItem;
