import Navbar from "../components/Navbar/Navbar";
import Header from "../components/Header/Header";
import ExploreMenu from "../components/ExploreMenu/ExploreMenu";
import FoodDisplay from "../components/FoodDisplay/FoodDisplay";

function Home({ setShowLogin }) {
  return (
    <>
      <Navbar setShowLogin={setShowLogin} />
      <Header />
      <ExploreMenu />
      <FoodDisplay />
    </>
  );
}``

export default Home;