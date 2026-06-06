"use client";

export default function Error({
  error,
  reset,
}: {
  error: Error;
  reset: () => void;
}) {
  return (
    <main
      className="
      flex
      min-h-screen
      items-center
      justify-center
      bg-zinc-950
      px-6
      "
    >
      <div
        className="
        w-full
        max-w-md
        rounded-3xl
        border
        border-zinc-800
        bg-zinc-900
        p-8
        text-center
        "
      >
        <div
          className="
          mx-auto
          mb-4
          flex
          h-12
          w-12
          items-center
          justify-center
          rounded-full
          bg-red-500/10
          text-red-400
          "
        >
          !
        </div>

        <h2
          className="
          text-2xl
          font-bold
          text-white
          "
        >
          Failed to load dashboard
        </h2>

        <p
          className="
          mt-3
          text-sm
          text-zinc-400
          "
        >
          Something went wrong while fetching
          your dashboard data.
        </p>

        <button
          onClick={() => reset()}
          className="
          mt-6
          rounded-xl
          bg-violet-600
          px-4
          py-2
          text-white
          transition
          hover:bg-violet-500
          "
        >
          Try Again
        </button>
      </div>
    </main>
  );
}