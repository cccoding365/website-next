"use client";

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function FeatureGrid() {
  const layouts = {
    lg:[
      { i: "1", x: 0, y: 0, w: 2, h: 2 },
      { i: "2", x: 2, y: 0, w: 2, h: 2 },
      { i: "3", x: 4, y: 0, w: 2, h: 2 },
      { i: "4", x: 0, y: 2, w: 3, h: 2 },
      { i: "5", x: 3, y: 2, w: 3, h: 2 }
    ],
  }
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1536, md: 1280, sm: 1024, xs: 768, xxs: 640 }}
      cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
    >
      <div key="1" className=" flex justify-center items-center font-bold text-3xl bg-green-50">1</div>
      <div key="2" className=" flex justify-center items-center font-bold text-3xl bg-blue-50">2</div>
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