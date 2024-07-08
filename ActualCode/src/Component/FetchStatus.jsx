import { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { ItemSliceAction } from "../store/ItemSlice";
import { fetchStatusAction } from "../store/Fetching";
// import fetch

const FetchStatuss = () => {
  const Fetchstatus = useSelector((store) => store.fetchStatus);
  const dispatch = useDispatch();
  // console.log(Fetchstatus.markfetchingStarted());
  console.log(Fetchstatus);
  useEffect(() => {
    if (Fetchstatus.fetchDone) return;
    // console.log(Fetchstatus.fetchDone);
    dispatch(fetchStatusAction.markfetchingStarted());
    fetch("http://localhost:8082/items")
      .then((res) => res.json())
      .then(({ items }) => {
        // console.log(items);
        // dispatch(FetchStatusAction.MarkFetchingStarted());
        dispatch(fetchStatusAction.markfetchDone());
        // this is done because to change the state then we can make a loader before loading the function : or page: before importing the data from the site;

        dispatch(fetchStatusAction.markFetchingFinished());
        dispatch(ItemSliceAction.addInitialItems(items));
      });
  }, [Fetchstatus]);
  return <></>;
};

export default FetchStatuss;
