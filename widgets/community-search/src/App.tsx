import { Banner } from "./components/Banner/Banner";
import { Promo } from "./components/Promo/Promo";
import { Search } from "./components/Search/Search";


export function App() {
  return (
    <section className="react-widget-section">
      <Banner />
      <Promo />
      <Search />
    </section>
  );
}