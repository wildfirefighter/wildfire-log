import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";


import { useState, useEffect } from "react";
import { Card, CardContent } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

/* 생략: 전체 Canvas 코드가 여기에 삽입된다고 가정 */

export default function WildfireLogApp() {
  // ...
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(WildfireLogApp));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('./service-worker.js');
}