import './App.css';
import { Button } from './components/Button';
import { Container } from './components/Container';
import { Greet } from './components/Greet';
import { Heading } from './components/Heading';
import { Input } from './components/Input';
import { Listname } from './components/Listname';
import { Oscar } from './components/Oscar';
import { Person } from './components/Person';
import { Counter } from './components/state/Counter';
import { LoggedIn } from './components/state/LoggidIn';
import { User } from './components/state/User';
import { Status } from './components/Status';



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
    </div>
  );
}

export default App;
