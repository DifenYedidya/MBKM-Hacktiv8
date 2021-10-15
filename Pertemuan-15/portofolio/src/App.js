import React from "react";
import { motion } from "framer-motion"
import Avatar from '@mui/material/Avatar';
import profilePic from './static/images/avatar/profilePic.png'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { About, Awards, Experience, Home, Interest, Skills } from './pages/index'

// Each logical "route" has two components, one for
// the sidebar and one for the main area. We want to
// render both of them in different places when the
// path matches the current URL.

// We are going to use this route config in 2
// spots: once for the sidebar and once in the main
// content section. All routes are in the same
// order they would appear in a <Switch>.
const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div>home!</div>,
    main: () => <Home/>
  },
  {
    path: "/about",
    sidebar: () => <div>about!</div>,
    main: () => <About/>
  },
  {
    path: "/experience",
    sidebar: () => <div>experience!</div>,
    main: () => <Experience/>
  },
  {
    path: "/skills",
    sidebar: () => <div>skills!</div>,
    main: () => <Skills/>
  },
  {
    path: "/interest",
    sidebar: () => <div>interest!</div>,
    main: () => <Interest/>
  },
  {
    path: "/awards",
    sidebar: () => <div>awards!</div>,
    main: () => <Awards/>
  },
];

export default function SidebarExample() {
  return (
    <Router>
      <div style={{ display: "flex", background: "#EEEEEE", height: "100vh", color: "#222831" }}>
        <div
          style={{
            padding: "10px",
            width: "25%",
            background: "#00ADB5"
          }}
        >
          <ul style={{ listStyleType: "none", padding: 10, textAlign: "center" }}>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <Avatar
                alt="Difen Yedidya Sjamsu"
                src={profilePic}
                sx={{ mx: "auto", my: "20px", width: 200, height: 200 }}
                alignItems="center"
              />
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/" style={{textDecoration: "none", color: "black"}}>Home</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/about" style={{textDecoration: "none", color: "black"}}>About</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/experience" style={{textDecoration: "none", color: "black"}}>Experience</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/skills" style={{textDecoration: "none", color: "black"}}>Skills</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/interest" style={{textDecoration: "none", color: "black"}}>Interest</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.2 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/Awards" style={{textDecoration: "none", color: "black"}}>Awards</Link>
              </li>
            </motion.div>
            
          </ul>

          <Switch>
            {routes.map((route, index) => (
              // You can render a <Route> in as many places
              // as you want in your app. It will render along
              // with any other <Route>s that also match the URL.
              // So, a sidebar or breadcrumbs or anything else
              // that requires you to render multiple things
              // in multiple places at the same URL is nothing
              // more than multiple <Route>s.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>
        </div>

        <div style={{ flex: 1, padding: "40px" }}>
          <Switch>
            {routes.map((route, index) => (
              // Render more <Route>s with the same paths as
              // above, but different components this time.
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.main />}
              />
            ))}
          </Switch>
        </div>
      </div>
    </Router>
  );
}
