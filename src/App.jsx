import React, { useEffect, useState } from 'react';
import { getPersonages } from './api/api';
import { PersonagesList } from './components/PersonagesList/PersonagesList';
import { PersonageComments }
  from './components/PersonageComments/PersonageComments';
import './App.scss';

export const App = () => {
  const [personages, setPersonages] = useState([]);
  const [selectedPersonage, setSelectedPersonage] = useState('');

  useEffect(() => {
    getPersonages()
      .then(response => setPersonages(response.results))
      .catch(() => setPersonages([]));
  }, []);

  const closeComments = () => {
    setSelectedPersonage('');
  };

  return (
    <div className="app">
      <h1 className="app__title">
        Personages List
      </h1>

      <div className="app__main-block">
        <PersonagesList
          personages={personages}
          selectedPersonage={selectedPersonage}
          onPersonageSelected={name => setSelectedPersonage(name)}
        />

        <PersonageComments
          selectedPersonage={selectedPersonage}
          closeComments={closeComments}
        />
      </div>
    </div>
  );
};
