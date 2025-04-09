import React from "https://esm.sh/react";
import ReactDOM from "https://esm.sh/react-dom/client";


// 코드를 여기에 복사해 넣는 것이 일반적이지만, 샘플 문자열로 대체함
function WildfireLogApp() {
  return React.createElement("div", null, "산불 기록 앱이 로딩되었습니다.");
}


const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(React.createElement(WildfireLogApp));

if ('serviceWorker' in navigator) {
  navigator.serviceWorker.register('/wildfire-log/service-worker.js');
}