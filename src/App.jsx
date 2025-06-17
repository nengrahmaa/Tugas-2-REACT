import Header from './components/Header';
import Banner from './components/Banner';
import CategorySection from './components/CategorySection';
import FeatureSection from './components/FeatureSection';
import Footer from './components/Footer';

const categories = [
  { id: 1, name: "Lips Gloss", harga: 29000, img: "https://i.pinimg.com/736x/48/d4/86/48d486801897439dd2565f198499c7e1.jpg" },
  { id: 2, name: "Moisturizer", harga: 45000, img: "https://i.pinimg.com/736x/a1/e8/a2/a1e8a2a79c1726e7683dad9168fed954.jpg" },
  { id: 3, name: "Eyeliner", harga: 32000, img: "https://i.pinimg.com/736x/0b/f9/46/0bf94676f04e3210625233daae0bf07b.jpg" },
  { id: 4, name: "Serum", harga: 89000, img: "https://i.pinimg.com/736x/b4/f7/d2/b4f7d2d00e1959e7032f6907f664cce8.jpg" },
  { id: 5, name: "Cleanser", harga: 57000, img: "https://i.pinimg.com/736x/af/e7/a8/afe7a808e7b39fe3283540e40d93459c.jpg" },
  { id: 6, name: "Perfume", harga: 110000, img: "https://i.pinimg.com/736x/9a/df/4e/9adf4e2e23e8406c0db3d7a06b994338.jpg" },
];
function App() {
  return (
    <div className="font-sans">
      <Header />
      <Banner />
      <CategorySection title="Somethinc New" products={categories} />
      <Footer />
    </div>
  );
}

export default App;