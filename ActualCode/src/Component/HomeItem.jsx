// copy the home item from the index.js
//which contain the data of Home

import { useDispatch } from "react-redux";
import { BagSliceAction } from "../store/BagSlice";

// This is the Jsx code but in this we donot need to put the $ sign in our code so remove and correct the code

// And it take item as a prop not items --> item
// we can move image to public folder:in public folder we can acess the image:

const HomeItem = ({ item }) => {
  const dispatch = useDispatch();
  const HandleButton = () => {
    dispatch(BagSliceAction.additemID(item.id));
  };
  return (
    <div className="item-container">
      <img className="item-image" src={item.image} alt="item image" />
      <div className="rating">
        {item.rating.stars} ⭐ | {item.rating.count}
      </div>
      <div className="company-name">{item.company}</div>
      <div className="item-name">{item.item_name}</div>
      <div className="price">
        <span className="current-price">Rs {item.current_price}</span>
        <span className="original-price">Rs {item.original_price}</span>
        <span className="discount">({item.discount_percentage}% OFF)</span>
      </div>
      <button className="btn-add-bag" onClick={HandleButton}>
        Add to Bag
      </button>
    </div>
  );
};

export default HomeItem;
