const ListItem = ({ items }) => {
  return (
    <>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </>
  );
};

export default ListItem;
