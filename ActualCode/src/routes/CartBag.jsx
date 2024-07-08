// this is our another html file : Cart Bag.html
// import Header from "./Header";
import { useSelector } from "react-redux";
import BagItem from "../Component/BagItem";
import Bagdetails from "../Component/Bagdetails";
// import Footer from "./Footer";
const CartBag = () => {
  // this will provide the id from the BagSlice
  const BagId = useSelector((store) => store.Bagitems);
  // with this i am filter out the element from the bag: or total number of items
  const FindfromBag = useSelector((store) => store.items);
  const Finalitem = FindfromBag.filter((itemId) => {
    const itemIndex = BagId.indexOf(itemId.id);
    return itemIndex >= 0;
  });
  return (
    <>
      {/* <Header /> */}
      <main>
        <div className="bag-page">
          <div className="bag-items-container">
            {Finalitem.map((item) => (
              <BagItem item={item} key={item.id}></BagItem>
            ))}
          </div>
          <Bagdetails />
        </div>
      </main>
      {/* <Footer /> */}
    </>
  );
};

export default CartBag;
