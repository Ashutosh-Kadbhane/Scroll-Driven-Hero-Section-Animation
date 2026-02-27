import HeroSection from "./components/HeroSection";

function App() {
  return (
    <div>
      <HeroSection />

      {/* Extra content so user can scroll */}
      <div className="min-h-screen bg-gray-900 flex items-center justify-center">
        <div className="text-center text-white px-6">
          <h3 className="text-4xl font-bold mb-4">Our Story</h3>
          <p className="text-green-400 max-w-md mx-auto text-2xl">
            ItzFizz was made for people who want energy without the nonsense.
            Clean ingredients. Real taste. Zero compromise.
          </p>
        </div>
      </div>
    </div>
  );
}

export default App;
