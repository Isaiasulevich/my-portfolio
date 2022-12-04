import React from "react";

export default function Input() {
  return (
    <div class="relative">
      <input
        type="text"
        id="floating_outlined"
        className="block px-2.5 pb-2.5 pt-4 w-full text-sm text-zinc-900 bg-transparent rounded-lg border-1 border-zinc-300 appearance-none dark:text-zinc-50 dark:border-zinc-600 dark:focus:border-indigo-500 focus:outline-none focus:ring-0 focus:border-indigo-600 peer"
        placeholder=" "
      />
      <label
        for="floating_outlined"
        className="absolute text-sm text-zinc-500 dark:text-zinc-400 duration-300 transform -translate-y-4 scale-75 top-2 z-10 origin-[0] bg-zinc-50 dark:bg-zinc-900 px-2 peer-focus:px-2 peer-focus:text-indigo-600 peer-focus:dark:text-indigo-500 peer-placeholder-shown:scale-100 peer-placeholder-shown:-translate-y-1/2 peer-placeholder-shown:top-1/2 peer-focus:top-2 peer-focus:scale-75 peer-focus:-translate-y-4 left-1"
      >
        Floating outlined
      </label>
    </div>
  );
}
