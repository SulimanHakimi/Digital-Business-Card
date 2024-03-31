import { BrowserRouter, Routes, Route } from "react-router-dom";
import Card from "./components/card";
import CreateCard from "./components/createCard";

export default function App() {
  return (
    <div className="h-fit flex-col  select-none bg-[#23252C] flex justify-center items-center">
      <BrowserRouter>
      <Routes>
        <Route>
          <Route index element={<Card />} />
          <Route path="Create-Card" element={<CreateCard />} />
        </Route>
      </Routes>
    </BrowserRouter>
      
    </div>
    
  );
}
