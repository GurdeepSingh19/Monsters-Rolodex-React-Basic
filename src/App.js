import { useState, useEffect } from 'react';
import CardList from './components/card-list/card-list.components';
import SearchBox from './components/search-box/search-box.components';
import './App.css';

const App = () =>{

  const [searchField, setSearchField] = useState(''); // [ value, setvalue]
  const [monsters,setmonsters] = useState ([]);
  const [filteredMonsters,setFilteredMonsters] = useState (monsters);

  useEffect(() => {
    fetch('https://jsonplaceholder.typicode.com/users')
        .then((response) => response.json())
        .then((users) => setmonsters(users));
  }, []);

  useEffect (()=> {

    const newFilteredMonsters =monsters.filter((monster) => {
      return monster.name.toLocaleLowerCase().includes(searchField);
    });

    setFilteredMonsters(newFilteredMonsters);

  },[monsters, searchField]);

  const onSearchChange = (event) => {
        const searchFieldString = event.target.value.toLocaleLowerCase();
        setSearchField(searchFieldString);
      }

  return (
    <div className="App">

      <h1 className='app-title'>Monsters Rolodex </h1>
        
          <SearchBox 
          onChangeHandler={onSearchChange} 
          className='monsters-search-box' 
          placeholder='Search Monster' 
          />
          <CardList monsters={filteredMonsters} />
      
      </div>
  )
}

// class App extends Component {

//   constructor(){
//     super();

//     this.state = {
//       monsters: [],
//       searchfield: ''
//     };
//   }

//   componentDidMount(){
//     fetch('https://jsonplaceholder.typicode.com/users')
//       .then((response) => response.json())
//       .then((users) => 
//         this.setState(
//           () => {
//           return {monsters: users};
//           },
//           () => {
//             console.log(this.state);
//           },
//         )
//       );
//   }

//   onSearchChange = (event) => {
//     const searchfield = event.target.value.toLocaleLowerCase();
//     this.setState(() => {
//       return{searchfield}
//     })
//   }

//   render(){

//     const { monsters, searchfield } = this.state;
//     const { onSearchChange } = this;

//     const filteredMonsters =monsters.filter((monster) => {
//       return monster.name.toLocaleLowerCase().includes(searchfield);
//     });

//     return (
//       <div className="App">

//       <h1 className='app-title'>Monsters Rolodex </h1>
//         <SearchBox onChangeHandler={onSearchChange} className='monsters-search-box' placeholder='Search Monster' />
//         <CardList monsters={filteredMonsters} />
//       </div>
//     );

//   }
  
// }

export default App;
