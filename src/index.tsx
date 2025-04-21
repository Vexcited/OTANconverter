/* @refresh reload */
import "@unocss/reset/tailwind.css";
import "virtual:uno.css";

import { render } from "solid-js/web";
import MainView from "./views/main";
import { Toaster } from "solid-toast";

render(
  () => <>
    <Toaster />
    <MainView />
  </>,
  document.getElementById('root')!
);
