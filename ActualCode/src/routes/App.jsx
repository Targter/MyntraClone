// Importing backend from the server and install the dependencies like react-redux bootstrap reduxtoolkit : this is because in this i use a redux
// COPIED actual backend data in the actual backend
// import React-router: for going to the bag page:
// import "./App.css";
// import "ActualCode/src/App.css";
import Header from "../Component/Header";
import Footer from "../Component/Footer";
import FetchStatus from "../Component/FetchStatus";
import { Outlet } from "react-router-dom";

import LoadingSpinner from "../Component/LoadingSpinner";
import { useSelector } from "react-redux";
// import "./App.css";
function App() {
  //
  const FetchStatussss = useSelector((store) => store.fetchStatus);
  // console.log(FetchStatus);
  return (
    <>
      <Header />
      <FetchStatus />
      {FetchStatussss.currentlyfetching ? <LoadingSpinner /> : <Outlet />}
      {/* <LoadingSpinner></LoadingSpinner> */}
      {/* <Outlet></Outlet> */}
      <Footer />
    </>
  );
}

export default App;
