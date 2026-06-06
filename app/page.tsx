import Sidebar from "@/components/layout/Sidebar";
import HeroTile from "@/components/dashboard/HeroTile";
import ActivityTile from "@/components/dashboard/ActivityTile";
import CourseTile from "@/components/dashboard/CourseTile";

import AnimatedGrid from "@/components/motion/AnimatedGrid";
import AnimatedItem from "@/components/motion/AnimatedItem";

import { getCourses } from "@/lib/supabase/queries";

export default async function Home() {
  const courses = await getCourses();

  return (
    <main className="min-h-screen bg-zinc-950 text-white">
      <div className="flex">
        <Sidebar />

        <section className="flex-1 p-6">
          <AnimatedGrid>
            <AnimatedItem>
              <HeroTile />
            </AnimatedItem>

            {courses.map((course) => (
              <AnimatedItem key={course.id}>
                <CourseTile course={course} />
              </AnimatedItem>
            ))}

            <AnimatedItem>
              <ActivityTile />
            </AnimatedItem>
          </AnimatedGrid>
        </section>
      </div>
    </main>
  );
}