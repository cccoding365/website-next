"use client";

import { Responsive, WidthProvider } from "react-grid-layout";
import PersonalInfoCard from "./components/personal-info-card";
import ClockCard from "./components/clock-card";

const ResponsiveGridLayout = WidthProvider(Responsive);

function FeatureGrid() {
  const layouts = {
    xxs: [
      { i: "1", x: 0, y: 0, w: 2, h: 2 },
      { i: "2", x: 0, y: 2, w: 1, h: 1 },
      { i: "3", x: 2, y: 2, w: 1, h: 1 },
      { i: "4", x: 0, y: 4, w: 2, h: 1 },
      { i: "5", x: 0, y: 5, w: 2, h: 1 }
    ],
    xs: [
      { i: "1", x: 0, y: 0, w: 4, h: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 1 },
      { i: "3", x: 4, y: 2, w: 4, h: 1 },
      { i: "4", x: 0, y: 2, w: 4, h: 2 },
      { i: "5", x: 4, y: 2, w: 4, h: 2 }
    ],
    sm: [
      { i: "1", x: 0, y: 0, w: 4, h: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 2 },
      { i: "3", x: 8, y: 0, w: 4, h: 2 },
      { i: "4", x: 0, y: 2, w: 6, h: 2 },
      { i: "5", x: 6, y: 2, w: 6, h: 2 }
    ],
    md: [
      { i: "1", x: 0, y: 0, w: 4, h: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 2 },
      { i: "3", x: 8, y: 0, w: 4, h: 2 },
      { i: "4", x: 0, y: 2, w: 6, h: 2 },
      { i: "5", x: 6, y: 2, w: 6, h: 2 }
    ],
    lg: [
      { i: "1", x: 0, y: 0, w: 4, h: 2 },
      { i: "2", x: 4, y: 0, w: 4, h: 2 },
      { i: "3", x: 8, y: 0, w: 4, h: 2 },
      { i: "4", x: 0, y: 2, w: 6, h: 2 },
      { i: "5", x: 6, y: 2, w: 6, h: 2 }
    ]
  }
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      isResizable={false}
      isDraggable={false}
      breakpoints={{ lg: 1536, md: 1280, sm: 1024, xs: 768, xxs: 0 }}
      cols={{ lg: 12, md: 12, sm: 12, xs: 8, xxs: 2 }}
    >
      <div key="1">
        <PersonalInfoCard />
      </div>
      <div key="2">
        <ClockCard />
      </div>
      <div key="3" className=" flex justify-center items-center font-bold text-3xl bg-yellow-50">3</div>
      <div key="4" className=" flex justify-center items-center font-bold text-3xl bg-slate-50">4</div>
      <div key="5" className=" flex justify-center items-center font-bold text-3xl bg-orange-50">5</div>
    </ResponsiveGridLayout>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 pt-20 min-h-screen">
      <FeatureGrid></FeatureGrid>
    </div>
  );
}