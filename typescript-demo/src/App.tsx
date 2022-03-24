import './App.css';
import { Private } from './components/auth/Private';
import { Profile } from './components/auth/Profile';
import { Button } from './components/Button';
import { Container } from './components/Container';
import Box from './components/context/Box';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Listname } from './components/Listname';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import Domref from './components/ref/Domref';
import { Mutalref } from './components/ref/Mutalref';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggidIn';
import { User } from './components/state/User';
import { Status } from './components/Status';
import {List } from './components/Generic/List'
import { RandomNumber } from './components/retriction/randomNumber';
import { Toast } from './components/templet/Toast';




function App() {
  const PersonName = {
    first : 'Thanh',
    last : 'Dat'
  }
  const nameList = [
    {
      first : 'Thanh' ,
      last : 'Dat'
    },
    {
      first : 'Dat' ,
      last : 'Thanh'
    },
    {
      first : 'Ngo' ,
      last : 'Dat'
    },
  ]
  return (
    <div className="App">
     <Greet name='Thanh Dat'  isLoggedIn={true}/>
     <Person name ={PersonName } / >
     <Listname name ={nameList} / > 
     <Status status='error' /  >
      <Heading> Palcehoder Text</Heading>
      <Oscar>
        <Heading> Oscar sẽ thuộc về Leonardo Dicpario!</Heading>
      </Oscar>
      <Button handleClick={(event , id) => {
        console.log('Button clicked', event ,id);
      }}></Button>
      <Input value='1234' handleChange={(event)=>console.log(event)}/>
      <Container styles={{  border : '1px solid black' ,padding : '1rem'}} />
    <LoggedIn />
    <User  />
    <Counter />
    <Box />
    <Domref />
    <Mutalref />
    <Private isLoggedIn={true} Component={Profile} />
    <List items = {['abc','bcd','def']} onClick={(item)=>console.log(item)}/>
    <List items = {[1,2,3]} onClick={(item)=>console.log(item)}/>
    <RandomNumber value={10} isZero />
      <Toast position='center' />
    </div>
    
  );
}

export default App;
