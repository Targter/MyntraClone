// in this the main content of the is stored:
// import "./App.css";
import { useSelector } from "react-redux";
import HomeItem from "../Component/HomeItem";
// import { storeItems } from "../../../ActualBackend/data/items";
const Home = () => {
  // const itemforhome = {
  //   id: "001",
  //   image: "src/images/1.jpg",
  //   company: "Carlton London",
  //   item_name: "Rhodium-Plated CZ Floral Studs",
  //   original_price: 1045,
  //   current_price: 606,
  //   discount_percentage: 42,
  //   return_period: 14,
  //   delivery_date: "10 Oct 2023",
  //   rating: {
  //     stars: 4.5,
  //     count: 1400,
  //   },
  // };

  // use useSelector to access the value :
  const itemforhome = useSelector((store) => store.items);
  // console.log(itemforhome);
  return (
    <main>
      <div className="items-container">
        {itemforhome.map((item) => (
          <HomeItem item={item} key={item.id} />
        ))}
      </div>
    </main>
  );
};

export default Home;
