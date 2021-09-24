import { Component, lazy } from "solid-js";

import { Header } from "./components/Header";
import { TabBar } from "./components/TabBar";

import { Routes, Route } from "solid-app-router";

const ProblemsPage = lazy(() => import("./pages/ProblemsPage"));
const StatusPage = lazy(() => import("./pages/StatusPage"));

const App: Component = () => {
  return (
    <div class='flex flex-col min-h-screen'>
      <Header />
      <Routes>
        <Route path="/" element={<ProblemsPage />} />
        <Route path="/status" element={<StatusPage />} />
      </Routes>
      <TabBar />
    </div>
  );
};

export default App;
