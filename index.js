import Home from "./pages/Home/Home.js";
import About from "./pages/About/About.js";
import Register from "./pages/Register/Register.js";
import User from "./pages/User/User.js";
import UserID from "./pages/User/UserID.js";

document.addEventListener("DOMContentLoaded", async function () {
  const home = await axios.get("./pages/Home/Home.html");
  const about = await axios.get("./pages/About/About.html");
  const register = await axios.get("./pages/Register/Register.html");
  const userId = await axios.get("./pages/User/UserID.html");
  const user = await axios.get("./pages/User/User.html");

  Home.template = home.data;
  About.template = about.data;
  Register.template = register.data;
  User.template = user.data;
  UserID.template = userId.data;

  const routes = [
    { path: "/", component: Home },
    { path: "/about", component: About },
    { path: "/register", component: Register },
    { path: "/users", component: User },
    { path: "/users/:id", component: UserID },
  ];

  const router = VueRouter.createRouter({
    history: VueRouter.createWebHashHistory(),
    routes, // short for `routes: routes`
  });

  const app = Vue.createApp({});
  app.use(router);
  app.mount("#app");
});
