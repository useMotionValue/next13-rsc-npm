"use client";
import { GeistProvider, CssBaseline, Button, Page, Text } from "@geist-ui/core";
import { useState } from "react";
import { create } from "zustand";

const useBearStore = create((set) => ({
  bears: 0,
  increasePopulation: () => set((state: any) => ({ bears: state.bears + 1 })),
  removeAllBears: () => set({ bears: 0 }),
}));

const GeistPage = () => {
  const [themeType, setThemeType] = useState<"dark" | "light">("light");
  const switchThemes = () => {
    setThemeType((last: "dark" | "light") =>
      last === "dark" ? "light" : "dark"
    );
  };

  const bears = useBearStore((state: any) => state.bears);
  const increasePopulation = useBearStore(
    (state: any) => state.increasePopulation
  );

  return (
    <GeistProvider themeType={themeType}>
      <CssBaseline />
      <Page>
        <Page.Header>
          <Button onClick={switchThemes}>hello</Button>
        </Page.Header>
        <Text>{bears} around here ...</Text>
        <Button onClick={increasePopulation}>one up</Button>
      </Page>
    </GeistProvider>
  );
};
export default GeistPage;
