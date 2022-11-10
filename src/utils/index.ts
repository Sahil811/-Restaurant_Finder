// import { debounceType } from "./types";

let timer: ReturnType<typeof setTimeout>;
export const debounceHandler = (fn: () => void, ms = 300): any => {
  return (() => {
    clearTimeout(timer);
    timer = setTimeout(() => fn(), ms);
  })();
};
