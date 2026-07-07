import PropTypes from "prop-types";
function List(props) {
  /* local list 
  const fruits = [
    { id: 1, name: "apple", calories: 95 },
    { id: 2, name: "orange", calories: 45 },
    { id: 3, name: "banana", calories: 105 },
    { id: 5, name: "cocunut", calories: 105 },
    { id: 6, name: "pineapple", calories: 37 },
  ]; */

  //fruits.sort((a, b) => a.name.localeCompare(b.name)); sort alphabeicals
  //fruits.sort((a, b) => b.name.localeCompare(a.name)); sort reversealphabeicals
  //fruits.sort((a, b) => a.calories - b.calories); sort by  numeric order

  //const lowCalFruits = fruits.filter((fruit) => fruit.calories < 100); filter for lowcalaries
  //const highCalFruits = fruits.filter((fruit) => fruit.calories >= 100); filter for highcalories

  const ItemList = props.items;
  const category = props.category;

  const ListIems = ItemList.map((item) => (
    <li key={item.id}>
      {item.name}: &nbsp; <b>{item.calories}</b>
    </li>
  ));
  return (
    <>
      <h3 className="list-category">{category}</h3>
      <ul className="list-items">{ListIems}</ul>
    </>
  );
}

List.protoType = {
  category: PropTypes.string,
  items: PropTypes.arrayOf(
    PropTypes.shape({
      id: PropTypes.number,
      name: PropTypes.string,
      calories: PropTypes.number,
    })
  ),
};
List.defaultProps = {
  category: "Category",
  items: [],
};

export default List;
