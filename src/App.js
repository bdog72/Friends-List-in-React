import React from 'react';
import './App.css';

const App = () => <PersonList />;

const PersonList = () => {
  const people = [
    {
      img: 20,
      name: 'bozo',
      job: 'developer'
    },
    {
      img: 10,
      name: 'mark',
      job: 'programmer'
    },
    {
      img: 30,
      name: 'john',
      job: 'hacker'
    }
  ];

  return (
    <section>
      <Person person={people[0]} />
      <Person person={people[1]}>
        Lorem ipsum, dolor sit amet consectetur adipisicing elit. Rem fugiat
        accusantium sunt aliquam assumenda at exercitationem sint, non ab
        tenetur?
      </Person>
      <Person person={people[2]} />
    </section>
  );
};

const Person = props => {
  const { img, name, job } = props.person;
  const { children } = props;
  const url = `https://randomuser.me/api/portraits/thumb/men/${img}.jpg`;
  return (
    <div className="person">
      <img src={url} alt="" />
      <div>
        <h4>{name}</h4>
        <h4>{job}</h4>
        {children}
      </div>
    </div>
  );
};

export default App;
