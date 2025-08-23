import ProductARCard from "./components/ProductARCard";

const PRODUCTS = [
  {
    id: 1,
    name: "Modern Sofa",
    price: 120000,
    glbSrc: "/Couch Medium.glb",
    usdzSrc: "/models/sofa.usdz",
    poster: "/posters/sofa.jpg",
  },
  {
    id: 2,
    name: "Coffee Table",
    price: 35000,
    glbSrc: "/models/table.glb",
    usdzSrc: "/models/table.usdz",
    poster: "/posters/table.jpg",
  },
];

export default function App() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-2xl font-bold mb-4">FurniAR Demo Shop</h1>
      <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {PRODUCTS.map((p) => (
          <ProductARCard key={p.id} {...p} />
        ))}
      </div>
    </div>
  );
}
