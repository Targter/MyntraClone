import { useSelector } from "react-redux";

const Bagdetails = () => {
  const BagITems = useSelector((store) => store.Bagitems);
  let TotalItems = BagITems.length;

  // this will provide the total element from the bag;
  const TotalItemsBag = useSelector((store) => store.items);
  const Finalitems = TotalItemsBag.filter((item) => {
    const FindIndex = BagITems.indexOf(item.id);
    return FindIndex >= 0;
  });

  let MRP = 0;
  let Discount = 0;
  const CONVIENCE_FEE = 99;

  Finalitems.forEach((Itemsss) => {
    MRP += Itemsss.original_price;
    console.log(MRP);
    Discount += Itemsss.original_price - Itemsss.current_price;
  });
  let FinalPrice = MRP - Discount + CONVIENCE_FEE;

  // const totalItem = {
  //   totalNumberofItems: 34,
  //   mrp: 3432,
  //   discount: 32,
  //   final_payment: 3434,
  // };
  return (
    <div className="bag-summary">
      <div className="bag-details-container">
        <div className="price-header">PRICE DETAILS ({TotalItems} Items) </div>
        <div className="price-item">
          <span className="price-item-tag">Total MRP</span>
          <span className="price-item-value">₹{MRP}</span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Discount on MRP</span>
          <span className="price-item-value priceDetail-base-discount">
            -₹ {Discount}
          </span>
        </div>
        <div className="price-item">
          <span className="price-item-tag">Convenience Fee</span>
          <span className="price-item-value">₹99</span>
        </div>
        <hr />
        <div className="price-footer">
          <span className="price-item-tag">Total Amount</span>
          <span className="price-item-value">₹{FinalPrice}</span>
        </div>
      </div>
      <button className="btn-place-order">
        <div className="css-xjhrni">PLACE ORDER</div>
      </button>
    </div>
  );
};
export default Bagdetails;
