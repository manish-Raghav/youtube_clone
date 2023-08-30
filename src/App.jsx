// import { useState } from 'react'

import React from "react"
import { AppContext, Context } from "./context/contextApi"
import { BrowserRouter as Router, Routes ,Route } from "react-router-dom"
import Header from "./Component/Header"
import Feed from "./Component/Feed"
import SearchResult from "./Component/SearchResult"
import VideoDetails from "./Component/VideoDetails"





// import { BrowserRouter as Router,Route, Routes } from 'react-router-dom'
// import { Box } from '@mui/material'
// import './App.css'
// import Navbar from './Components/Navbar'
// import Feed from './Components/Feed'
// import Search from './Components/Search'
// import VideoDetail from './Components/VideoDetail'
// import ChannelDetail from './Components/ChannelDetail'






function App() {
  

  return(
    <AppContext>
    <Router>
    <div className="flex flex-col h-full">
                    <Header />
                    <Routes>
                        <Route path="/" exact element={<Feed />} />
                        <Route
                            path="/searchResult/:searchQuery"
                            element={<SearchResult />}
                        />
                        <Route path="/video/:id" element={<VideoDetails />} />
                    </Routes>
                </div>
      </Router>
    </AppContext>
  )
}

export default App
