'use client'

import { useContainerStore } from "@/stores/container";

export default function Home() {
  const auth: Auth = { name: 'ManhDV' }
  const count = useContainerStore((state: any) => state.count)
  const increment = useContainerStore((state: any) => state.increment)
  return (
  <main>
    { count} { auth.name }
    <button onClick={increment}>click</button>
  </main>
  );
}
