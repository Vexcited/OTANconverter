import { createEffect, createSignal, type Component } from "solid-js";
import { utf8ToOTAN } from "../core/converter";
import { importFromSystem } from "../core/importer";
import toast from "solid-toast";
import LucideImport from '~icons/lucide/import'
import { downloadAsTxt } from "../core/downloader";
import LucideDownload from '~icons/lucide/download'

const MainView: Component = () => {
  const [text, setText] = createSignal("");
  const [output, setOutput] = createSignal("");

  createEffect(() => {
    setOutput(utf8ToOTAN(text()));
  })

  return (
    <main class="p-8 bg-base text-text min-h-screen h-full">
      <div class="mb-16">
        <h1 class="text-4xl font-500">Convert any text to OTAN</h1>
        <p class="text-subtext0">
          Input anything in the first text area and the result will be shown in the second area.
        </p>
      </div>

      <div class="flex flex-col md:flex-row gap-6 h-full">
        <section class="w-full h-full">
          <div class="flex items-center gap-4 mb-4">
            <h2 class="text-2xl font-400">Any sentence</h2>
            <button class="bg-mauve rounded-md p-2 text-base hover:opacity-80 transition-all"
              type="button" title="Import from system"
              onClick={async () => {
                try {
                  const content = await importFromSystem();
                  setText(content);
                }
                catch (error) {
                  if (error instanceof Error) {
                    toast.error(error.message)
                  }
                }
              }}
            >
              <LucideImport />
            </button>
          </div>
          <textarea
            class="w-full h-350px border-2 border-transparent focus:border-mauve bg-mantle rounded-lg p-2 outline-none"
            placeholder="Enter anything that goes through your mind..."
            onInput={(e) => setText(e.currentTarget.value)}
            autofocus={true}
            value={text()}
          ></textarea>
        </section>
        <section class="w-full">
          <div class="flex items-center gap-4 mb-4">
            <h2 class="text-2xl font-400">OTAN</h2>
            <button class="bg-mauve rounded-md p-2 text-base hover:opacity-80 transition-all"
              classList={{
                "opacity-0": output().length === 0,
              }}
              type="button" title="Download results"
              onClick={() => {
                downloadAsTxt(output());
                toast.success("Downloaded as results-in-otan.txt")
              }}
            >
              <LucideDownload />
            </button>
          </div>
          <textarea
            class="w-full h-350px border-2 border-transparent focus:border-mauve bg-mantle rounded-lg p-2 outline-none"
            placeholder="Results will be shown here !"
            value={output()}
            readOnly={true}
          ></textarea>
        </section>
      </div>
    </main>
  )
};

export default MainView;
