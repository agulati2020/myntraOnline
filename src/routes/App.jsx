import FetchItems from "../components/fetchItems";
import Footer from "../components/footer";
import Header from "../components/header";
import { Outlet } from "react-router-dom";
import { useSelector } from "react-redux";
import LoadingSpinner from "../components/loadingSpinner";

function App() {
  const fetchStatus = useSelector((store) => store.fetchStatus);
  return (
    <>
      <div>
        <Header />
        <FetchItems />
        {fetchStatus.currentlyFetching ? <LoadingSpinner /> : <Outlet />}
        <Footer />
      </div>
    </>
  );
}

export default App;
