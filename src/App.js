import './App.css';
import Header from './components/Header';

import { BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import React, {useState} from 'react'
import Choice from './components/Choice';
import Description from './components/description';

function App() {
  const [copydata, setCopydata] = useState(0);
  const question_one = "Which of the following apps you have on your phone?";
    const question_two = "Do you have LinkedIn install edon your phone?";
  return (
    <Router>
      <div class="App">
        
        <Switch>
          <Route path="/" exact component={Header} />
          
          <Route exact path="/choice"><Choice setCopydata={setCopydata} question_one={question_one} question_two={question_two}/></Route>
          <Route eaxct path="/description"><Description question_one={question_one} question_two={question_two} copydata={copydata} /></Route>
     
        </Switch>
        
        
      </div>
    </Router>
  );
}

export default App;
