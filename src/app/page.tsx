export default function Home() {
  return (
    <section className="flex flex-col gap-8 justify-center items-center min-h-[80vh]">
      <h1 className="text-4xl lg:text-6xl font-bold capitalize">
        <span className="text-blue-500">my box</span> a drive clone
      </h1>
      <p className="text-lg text-stone-400 max-w-[65ch] text-center">
        Built for teams that move fast. Experience instant uploads, seamless
        collaboration, and zero-latency syncing on the world’s most advanced
        file infrastructure.
      </p>

      <button className="text-xl bg-blue-500 text-white px-8 py-3 rounded cursor-pointer capitalize active:scale-95 transition-transform duration-100">
        get started
      </button>
    </section>
  );
}
