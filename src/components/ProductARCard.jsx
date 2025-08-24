export default function ProductARCard({ name, price, glbSrc, usdzSrc, poster }) {
  return (
    <div className="rounded-xl border p-4 bg-white shadow-sm">
     <model-viewer
  src={glbSrc}
  ios-src={usdzSrc}
  poster={poster}
  alt={name}
  ar
  ar-modes="webxr scene-viewer quick-look"
  ar-placement="floor"
  ar-scale="auto"
  camera-controls
  auto-rotate
  scale="0.3 0.3 0.3"   // 👈 size chhota kar do (X Y Z sab)
  style={{ width: "100%", height: "300px", borderRadius: "12px" }}
>
  <button
    slot="ar-button"
    className="px-3 py-2 bg-black text-white rounded-lg text-sm"
  >
    View in your space
  </button>
</model-viewer>


      <h3 className="mt-3 font-semibold">{name}</h3>
      <p className="text-gray-500">₨ {price}</p>
    </div>
  );
}


