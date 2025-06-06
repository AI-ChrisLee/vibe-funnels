/*  src/app/page.tsx  */

import { supabase } from '@/lib/supabase';   // ✅ 1) import FIRST
import Image from 'next/image';

/**
 * TEMP PAGE – just to sanity-check Supabase
 * (we’ll replace this with your hero section next)
 */
export default async function Home() {
  // ✅ 2) test query INSIDE the async component
  const { data, error } = await supabase.from('leads').select('*');
  console.log('Leads:', data, error);       // prints in the TERMINAL

  return (
    <div className="grid grid-rows-[20px_1fr_20px] items-center justify-items-center min-h-screen p-8 pb-2">
      <main className="flex flex-col gap-[32px] row-start-2 items-center sm:items-start">
        <Image
          className="dark:invert"
          src="/next.svg"
          alt="Next.js logo"
          width={180}
          height={38}
          priority
        />
        <ol className="list-inside list-decimal text-sm/6 text-center sm:text-left">
          <li className="mb-2 tracking-[-.01em]">
            Get started by editing{' '}
            <code className="bg-black/[.05] dark:bg-white/[.06] px-1 py-0.5 rounded font-mono">
              src/app/page.tsx
            </code>
          </li>
          <li className="tracking-[-.01em]">
            Save and see your changes instantly.
          </li>
        </ol>
      </main>

      <div className="flex gap-4 items-center flex-col sm:flex-row">
        <a
          className="rounded-full border border-solid border-transparent transition-colors flex items-center gap-2 px-4 py-2 font-medium text-sm no-underline hover:text-purple-500"
          href="https://vercel.com/new?utm_source=create-next-app&utm_medium=appdir-template-tw&utm_campaign=create-next-app"
          target="_blank"
          rel="noopener noreferrer"
        >
          ▲ Deploy now
        </a>
        <a
          className="rounded-full border border-solid border-current transition-colors flex items-center gap-2 px-4 py-2 font-medium text-sm no-underline hover:text-purple-500"
          href="https://nextjs.org/docs"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read our docs
        </a>
      </div>
    </div>
  );
}
