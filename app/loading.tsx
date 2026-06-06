export default function Loading() {
  return (
    <main className="min-h-screen bg-zinc-950 p-6">
      <div className="flex">
        {/* Sidebar Skeleton */}
        <aside className="hidden lg:flex w-64 min-h-screen flex-col border-r border-zinc-800 px-6 py-8">
          <div className="h-8 w-32 rounded bg-zinc-800 animate-pulse" />

          <div className="mt-12 space-y-3">
            {[1, 2, 3].map((item) => (
              <div
                key={item}
                className="
                h-12
                rounded-xl
                bg-zinc-800
                animate-pulse
                "
              />
            ))}
          </div>
        </aside>

        {/* Main Content Skeleton */}
        <section className="flex-1 p-6">
          <div className="grid auto-rows-[220px] grid-cols-12 gap-4">
            {/* Hero Tile */}
            <div
              className="
              col-span-12
              lg:col-span-8
              rounded-3xl
              bg-zinc-900
              animate-pulse
              "
            />

            {/* Activity Tile */}
            <div
              className="
              col-span-12
              lg:col-span-4
              rounded-3xl
              bg-zinc-900
              animate-pulse
              "
            />

            {/* Course Tiles */}
            {[1, 2, 3, 4].map((item) => (
              <div
                key={item}
                className="
                col-span-12
                md:col-span-6
                xl:col-span-3
                rounded-3xl
                bg-zinc-900
                animate-pulse
                "
              />
            ))}
          </div>
        </section>
      </div>
    </main>
  );
}