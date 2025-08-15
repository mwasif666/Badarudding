import Login from "../src/pages/Login";
import Signup from "../src/pages/Signup";
import PswForget from "../src/pages/PswForget";
import Layout7 from "../src/pages/Layout7/Layout7";

const routes = [
  { path: "/password-forget", component: <PswForget /> },
  { path: "/sign-up", component: <Signup /> },
  { path: "/login", component: <Login /> },

  { path: "/", component: <Layout7 /> },
];

export default routes;
