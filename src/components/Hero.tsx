export default function Hero() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 md:grid-rows-2 gap-1">
      <div className="bg-red-500 md:row-span-2 md:col-span-2">3</div>
      <div className="bg-red-500 md:row-span-2">1</div>
      <div className="bg-red-500">2</div>
      <div className="bg-red-500">4</div>
    </div>
  );
}
