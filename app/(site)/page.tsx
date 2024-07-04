import Hero from "../components/sections/Hero";
import Navbar from "../components/shared/Navbar";

export default function Home() {
  return (
    <main className="bg-gradient-to-b from-blue-100 via-white to-blue-100">
      <div className="max-w-7xl mx-auto">
        <Navbar />
        <Hero />
      </div>
    </main>
  );
}
