'use client'

import { FormatSensorType } from "@/utils/format-sensor-type";
import { useGlobalStore } from "../stores/global";
import { AssetImageHandler } from "./AssetImageHandler";
import InfoCard from "./InfoCard";
import { Separator } from "./Separator";
import { StatusBadge } from "./StatusBadge";
import React from "react";

export function AssetInspectPanel() {
  const { viewComponent } = useGlobalStore();

  const assetResponsible = viewComponent?.name.split(' - ')[1] === 'vibration' 
    ? 'Mecânica' 
    : 'Elétrica';

  return (
    <main
      className="flex flex-col w-full rounded border border-[#D8DFE6]"
    >
      {
        !viewComponent
          ? (
            <div
              className="flex items-center justify-center text-2xl text-center max-w-64s text-blue-600 h-full"
            >
              Selecione um componente na lista ao lado para obter detalhes
            </div>
          ) 
          : (
            <React.Fragment>
              <header
                className="px-4 py-[0.875rem] flex items-center gap-2 w-full max-h-[56px] border-b border-[#D8DFE6]"
              >
                <h3 className="text-lg text-gray-950 font-semibold">
                  {FormatSensorType(viewComponent.name)}
                </h3>

                <StatusBadge status={viewComponent.status} type="COMPONENT" />
              </header>

              <div className="flex flex-col p-6">
                <div className="flex gap-6">
                  <AssetImageHandler />

                  <div className="w-full flex flex-col items-start justify-center py-8">
                    <InfoCard title="Tipo de Equipamento" onlyText>
                      {FormatSensorType(viewComponent.name)}
                    </InfoCard>

                    <Separator className="my-6" />

                    <InfoCard title="Responsáveis" >
                      {assetResponsible}
                    </InfoCard>
                  </div>
                </div>

                <Separator className="my-6" />

                <div
                  className="py-6 grid grid-cols-asset-panel gap-6"
                >
                  <InfoCard title="Sensor" iconUrl="/sensor.svg">
                    {viewComponent.sensorId as string}
                  </InfoCard>

                  <InfoCard title="Receptor" iconUrl="/receptor.svg">
                    {viewComponent.gatewayId as string}
                  </InfoCard>
                </div>
              </div>
            </React.Fragment>
          )
      }
    </main>
  )
}