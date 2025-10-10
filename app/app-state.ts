import { defineStore } from "pinia";

type AppState = "portal" | "payment";

export const useAppState = defineStore("APP-STATE", () => {
  const appState = ref<AppState>("portal");

  const setAppState = (_state: AppState) => {
    appState.value = _state;
    window?.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  return {
    appState,
    setAppState,
  };
});
