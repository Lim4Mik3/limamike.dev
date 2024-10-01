import { AsideExplorer } from "@/application/components/AsideExplorer";
import { AssetInspectPanel } from "@/application/components/AssetInspectPanel";
import { Header } from "@/application/components/Header/Header";
import { PanelHeader } from "@/application/components/PanelHeader";
import { Fragment } from "react";

import "./globals.css";

export default function Home() {
  return (
    <Fragment>
      <Header />

      <div
        className="flex flex-col h-[calc(100vh-80px)] m-2 border border-[#D8DFE6] rounded p-4 bg-white"
      > 
        <PanelHeader />

        <div
          className="flex h-full overflow-hidden gap-2 mt-3"
        >
          <AsideExplorer />

          <AssetInspectPanel />
        </div>
      </div>
    </Fragment>
  );
}
