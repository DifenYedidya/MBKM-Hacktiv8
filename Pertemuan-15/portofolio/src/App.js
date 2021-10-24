import React from "react";
import { motion } from "framer-motion"
import Avatar from '@mui/material/Avatar';
import { TransitionGroup, CSSTransition } from 'react-transition-group'
import profilePic from './static/images/avatar/profilePic.png'
import './App.css'
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useLocation
} from "react-router-dom";
import { About, Awards, Experience, Home, Interest, Skills, HireMe } from './pages/index'

const currentPageStyle = {
  fontWeight: '700',
  color: '#EEEEEE', 
  padding: '5vh '
};

const sideBarStyle = {
  listStyleType: "none", 
  padding: 10, 
}

const sideBarListStyle = {
  textDecoration: "none", 
  fontWeight: "500",
  fontSize: "1.2rem",
  color: "#222831"
}

const routes = [
  {
    path: "/",
    exact: true,
    sidebar: () => <div style={currentPageStyle}>Current page: home</div>,
    main: () => <Home/>
  },
  {
    path: "/about",
    sidebar: () => <div style={currentPageStyle}>Current page: about</div>,
    main: () => <About/>
  },
  {
    path: "/experience",
    sidebar: () => <div style={currentPageStyle}>Current page: experience</div>,
    main: () => <Experience/>
  },
  {
    path: "/skills",
    sidebar: () => <div style={currentPageStyle}>Current page: skills</div>,
    main: () => <Skills/>
  },
  {
    path: "/interest",
    sidebar: () => <div style={currentPageStyle}>Current page: interest</div>,
    main: () => <Interest/>
  },
  {
    path: "/awards",
    sidebar: () => <div style={currentPageStyle}>Current page: awards</div>,
    main: () => <Awards/>
  },
];

export default function App() {
  return (
    <Router>
        <Content/>
    </Router>
  );
}

function Content() {
  const location = useLocation()

  return(
    <div style={{ display: "flex", background: "#EEEEEE", height: "100vh", color: "#222831" }}>
      {/* sidebar */}
        <div
          style={{
            padding: "10px",
            width: "25%",
            background: "#00ADB5",
            textAlign: "center" 
          }}
        >
          <ul style={sideBarStyle}>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <Avatar
                alt="Difen Yedidya Sjamsu"
                src={profilePic}
                sx={{ mx: "auto", my: "20px", width: 200, height: 200 }}
                alignitems="center"
              />
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/" style={sideBarListStyle}>Home</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/about" style={sideBarListStyle}>About</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/experience" style={sideBarListStyle}>Experience</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/skills" style={sideBarListStyle}>Skills</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/interest" style={sideBarListStyle}>Interest</Link>
              </li>
            </motion.div>
            <motion.div
              className="animatable"
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.9 }}
            >
              <li style={{paddingBottom: 10}}>
                <Link to="/Awards" style={sideBarListStyle}>Awards</Link>
              </li>
            </motion.div>
            
          </ul>

          <Switch>
            {routes.map((route, index) => (
              <Route
                key={index}
                path={route.path}
                exact={route.exact}
                children={<route.sidebar />}
              />
            ))}
          </Switch>

          <HireMe/>
        </div>
      {/* main content */}
      <div style={{ flex: 1, padding: "3vw" }}>
        <TransitionGroup>
          <CSSTransition
              timeout={300}
              classNames='fade'
              key={location.key}
            >
            <Switch location={location}>
              {routes.map((route, index) => (
                <Route
                  key={index}
                  path={route.path}
                  exact={route.exact}
                  children={<route.main />}
                />
              ))}
            </Switch>
          </CSSTransition>
        </TransitionGroup>
    </div>
    </div>
  )
}