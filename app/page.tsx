import Hero from "@/components/Hero";
import CharacterCard from "@/components/CharacterCard";
import AbilityBars from "@/components/AbilityBars";
import TaskList from "@/components/TaskList";

export default function HomePage() {
  return (
    <>
      <Hero />

      <section className="mx-auto max-w-6xl px-6 py-20 lg:px-8">
        <div className="grid gap-6 lg:grid-cols-2">
          <CharacterCard />
          <AbilityBars />
        </div>
      </section>

      <section className="border-t border-white/10 py-20">
        <TaskList />
      </section>

      <footer className="border-t border-white/10 py-12 text-center">
        <p className="text-xs text-vibe-subtle">AI Evolution Space</p>
      </footer>
    </>
  );
}
