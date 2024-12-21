const ListItem = ({ items }) => {
  return (
    <div>
      {items.map((item, index) => (
        <li key={index}>{item}</li>
      ))}
    </div>
  );
};

export default ListItem;
