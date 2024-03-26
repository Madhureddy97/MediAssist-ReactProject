// import {BrowserRouter, Route, Switch} from 'react-router-dom'

import './App.css'

import Home from './components/Home'
import Header from './components/Header'
import WhyChooseUs from './components/WhyChooseUs'
import Eligibility from './components/Eligibility'
import ToLearn from './components/ToLearn'
import PlacementAssistance from './components/PlacementAssistance'
import Apply from './components/Apply'

const App = () => (
  <>
    <Header />
    <Home />
    <WhyChooseUs />
    <Eligibility />
    <ToLearn />
    <PlacementAssistance />
    <Apply />
  </>
  // <BrowserRouter>
  //   <Header />
  //   <Switch>
  //     <Route exact path="/whychooseus" component={WhyChooseUs} />
  //     <Route component={Home} />
  //   </Switch>
  // </BrowserRouter>
)

export default App
