import { StrictMode } from 'react';
import { createRoot } from 'react-dom/client';
import { BrowserRouter, Routes, Route } from "react-router";
import './index.css';
import App from './App.tsx';
import GameDesign from './routes/GameDesign.tsx';
import Writing from './routes/Writing.tsx';
import VisualArt from './routes/VisualArt.tsx';
import PhotoClue from "./routes/ItemPages/PhotoClue.tsx";
import DnDAdventure from "./routes/ItemPages/DnDAdventure.tsx";
import MobyDick from "./routes/ItemPages/MobyDick.tsx";
import StoryPage from "./routes/ItemPages/StoryPage.tsx";
import Drawing from "./routes/ItemPages/Drawing.tsx";
import MinecraftBuilds from "./routes/ItemPages/MinecraftBuilds.tsx";
import DigitalPainting from "./routes/ItemPages/DigitalPainting.tsx";


createRoot(document.getElementById('root')!).render(
  <StrictMode>
      <BrowserRouter>
          <Routes>
              <Route path="/" element={<App />} />
              <Route path={"/gamedesign"} element={<GameDesign/>} />
              <Route path={"/gamedesign/photoclue"} element={<PhotoClue/>} />
              <Route path={"/writing"} element={<Writing/>} />
              <Route path={"/writing/dndadventure"} element={<DnDAdventure/>} />
              <Route path={"/writing/mobydick"} element={<MobyDick/>} />
              <Route path={"/writing/stories"} element={<StoryPage/>} />
              <Route path={"/visualart"} element={<VisualArt/>}/>
              <Route path={"/visualart/digitalpainting"} element={<DigitalPainting/>}/>
              <Route path={"/visualart/drawing"} element={<Drawing/>}/>
              <Route path={"/visualart/minecraft"} element={<MinecraftBuilds/>}/>
          </Routes>
      </BrowserRouter>
  </StrictMode>,
)
