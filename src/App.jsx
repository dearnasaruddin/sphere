import Banner from "./components/Banner"
import Navbar from "./components/Navbar"
import Categories from "./components/Categories"
import NewArrival from "./components/NewArrival"
import OfferSection from "./components/OfferSection"
import FlashSale from "./components/FlashSale"
import Footer from "./components/footer/Footer"

function App() {

  return (
    <>
      <Navbar />
      <Banner />
      <Categories />
      <NewArrival />
      <OfferSection />
      {/* <FlashSale /> */}
      <Footer />
    </>
  )
}

export default App
