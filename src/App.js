import "./App.css";
import {
  Route,
  createBrowserRouter,
  createRoutesFromElements,
  RouterProvider,
} from "react-router-dom";
import RootLayout from "./layouts/RootLayout";
import Home from "./pages/Home/Home";
import About from "./pages/About/About";
import Fleet from "./pages/Fleet/Fleet";
import Contact, { contactAction } from "./pages/Contact/Contact";
import All from "./pages/AllFleets/All";
import FiveSeater from "./pages/FiveSeater/FiveSeater";
import SevenSeater from "./pages/SevenSeater/SevenSeater";
import CardDetails, { carDetailsLoader } from "./pages/CardDetails/CardDetails";

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path="/" element={<RootLayout />}>
      <Route index element={<Home />} />
      <Route path="about" element={<About />} />
      <Route path="fleet" element={<Fleet />}>
        <Route index path="all" element={<All />} />
        <Route
          path="all/:id"
          element={<CardDetails />}
          loader={carDetailsLoader}
        />
        <Route
          path="five-seater/:id"
          element={<CardDetails />}
          loader={carDetailsLoader}
        />
        <Route
          path="seven-seater/:id"
          element={<CardDetails />}
          loader={carDetailsLoader}
        />
        <Route path="five-seater" element={<FiveSeater />} />
        <Route path="seven-seater" element={<SevenSeater />} />
      </Route>
      <Route path="contact" element={<Contact />} action={contactAction} />
    </Route>
  )
);

function App() {
  return <RouterProvider router={router} />;
}

export default App;
