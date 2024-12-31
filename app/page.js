"use client";

import { Responsive, WidthProvider } from "react-grid-layout";

const ResponsiveGridLayout = WidthProvider(Responsive);

function FeatureGrid() {
  const layouts = {
    lg:[
      { i: "1", x: 0, y: 0, w: 1, h: 2},
      { i: "2", x: 1, y: 0, w: 3, h: 2 },
      { i: "3", x: 4, y: 0, w: 1, h: 2 }
    ],
  }
  return (
    <ResponsiveGridLayout
      className="layout"
      layouts={layouts}
      breakpoints={{ lg: 1536, md: 1280, sm: 1024, xs: 768, xxs: 640 }}
      cols={{ lg: 8, md: 6, sm: 4, xs: 2, xxs: 1 }}
    >
      <div key="1" data-grid={{ x: 0, y: 0, w: 2, h: 2 }} className=" flex justify-center items-center font-bold text-3xl bg-green-50">1</div>
      <div key="2" data-grid={{ x: 2, y: 0, w: 3, h: 1 }} className=" flex justify-center items-center font-bold text-3xl bg-blue-50">2</div>
      <div key="3" data-grid={{ x: 2, y: 1, w: 3, h: 1 }} className=" flex justify-center items-center font-bold text-3xl bg-red-50">3</div>
      <div key="4" data-grid={{ x: 5, y: 0, w: 1, h: 1 }} className=" flex justify-center items-center font-bold text-3xl bg-yellow-50">4</div>
      <div key="5" data-grid={{ x: 0, y: 2, w: 2, h: 1 }} className=" flex justify-center items-center font-bold text-3xl bg-slate-50">5</div>
      <div key="6" data-grid={{ x: 2, y: 2, w: 3, h: 1 }} className=" flex justify-center items-center font-bold text-3xl bg-orange-50">6</div>
    </ResponsiveGridLayout>
  );
}

export default function Home() {
  return (
    <div className="container mx-auto px-4 py-24 min-h-screen">
      <FeatureGrid></FeatureGrid>
    </div>
  );
}