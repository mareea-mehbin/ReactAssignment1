import { MouseEvent } from "react";
function Menu() {
  let menuItems = ["Home", "Categories", "About", "Contact"];
  // menuItems = [];
  const handleClick = (event: MouseEvent) => console.log(event);
  return (
    <>
      <h4>Dynamic Menu</h4>
      {menuItems.length === 0 && <p>No items found in the Menu</p>}
      <ul className="list-group">
        {menuItems.map((item, index) => (
          <li className="list-group-item" key={index} onClick={handleClick}>
            {item}
          </li>
        ))}
      </ul>
    </>
  );
}

export default Menu;
