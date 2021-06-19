import './App.css';
import { useState } from 'react';
import { BrowserRouter as Router, Route } from "react-router-dom";
import filterData from './fakedata/fakedata.json';
import Main from './components/Main';
import AuthProvider from './context/AuthContext';
import Home from './components/Home';
import Nav from './components/Nav';

function App() {
  const [items, setItems] = useState({
    data: filterData,
    Name: '',
    Specialty: '',
    Gender: '',
    Country: ''
  })

  const filterItems = (val, type) => {
    switch (type) {
      case 'Name':
        setItems({ ...items, Name: val });
        break;
      case 'Specialty':
        setItems({ ...items, Specialty: val });
        break;
      case 'Gender':
        setItems({ ...items, Gender: val });
        break;
      case 'Country':
        setItems({ ...items, Country: val });
        break;
      default:
        break;
    }
  }

  let filteredItems = items.data;
  const newArr = [];

  ["Name", "Specialty", "Gender", "Country"].forEach(filterBy => {
    let filterValue = items[filterBy];
    if (filterValue) filteredItems = filteredItems.filter(item => item[filterBy] === filterValue);
  });

  ["Name", "Specialty", "Gender", "Country"].forEach(elem => {
    let arr = items.data.map(item => item[elem]).filter((val, i, self) => self.indexOf(val) === i);
    newArr.push(arr);
  })

  return (
    <Router>
      <AuthProvider>
        <Nav />
        <Route exact path="/" component={Home} />
        <Route path="/main">
          <Main
            nameOptions={newArr[0]}
            specialtyOptions={newArr[1]}
            genderOptions={newArr[2]}
            countryOptions={newArr[3]}
            changeOption={filterItems}
            data={filteredItems}
          />
        </Route>
      </AuthProvider>
    </Router>
  );
}

export default App;
