import { useState } from "react";
import { Container } from "react-bootstrap";
import Category from "./components/Category";
import Header from "./components/Header";
import ItemList from "./components/ItemList";
import NevBar from "./components/NevBar";
import { items } from "./data";
function App() {
  const [dataItem, setDataItem] = useState(items);
  //get  all category unique
  const categori = ["All", ...new Set(items.map((cat) => cat.category))];
  //filter by category name
  const filterByCategory = (cat) => {
    if (cat === "All") {
      setDataItem(items);
    } else {
      const newArr = items.filter((item) => item.category === cat);
      setDataItem(newArr);
    }
  };

  const filterBySearch = (search) => {
    if (search !== "") {
      const newArr = items.filter((item) => item.title === search);
      setDataItem(newArr);
    }
  };
  return (
    <div className="color-body font">
      <NevBar filterBySearch={filterBySearch} />
      <Container>
        <Header />
        <Category filterByCategory={filterByCategory} categori={categori} />
        <ItemList dataItem={dataItem} />
      </Container>
    </div>
  );
}

export default App;
