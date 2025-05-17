import {
  RouterProvider,
  createBrowserRouter,
  createRoutesFromElements,
  Route,
} from "react-router-dom";

import { AppLayout } from "./Layout.jsx";
import { About, Home, User, Youtube, YoutubePage } from "./components/index.js";

// import YoutubeApi from "./youtubeApi.js";

function App() {
  const router = createBrowserRouter(
    createRoutesFromElements(
      <Route path="/" element={<AppLayout />}>
        <Route path="" element={<Home />} />
        <Route path="About" element={<About />} />
        <Route path="User/:userId" element={<User />} />
        <Route path="Youtube" element={<YoutubePage />}></Route>
        <Route path="Youtube/:channelId" element={<Youtube />} />
      </Route>
    )
  );

  return (
    <>
      <RouterProvider router={router} />
    </>
  );
}

export default App;
