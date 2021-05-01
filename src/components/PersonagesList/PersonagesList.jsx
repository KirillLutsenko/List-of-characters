import React from 'react';
import { PersonagesType } from '../../Types';
import { Personage } from '../Personage/Personage';
import './PersonagesList.scss';

export const PersonagesList = ({
  personages,
  selectedPersonage,
  onPersonageSelected,
}) => (
  <>
    {(personages.length === 0) ? (
      <div className="personages__empty"></div>
    ) : (
      <table className="app__pesonages personages">
        <thead className="personages__header-block">
          <tr>
            <th className="personages__header-item">Name</th>
            <th className="personages__header-item">Year of birth</th>
            <th className="personages__header-item">Add comment</th>
          </tr>
        </thead>

        <tbody className="personages__personages-list">
          {personages.map(personage => (
            <Personage
              key={`${personage.name}${personage.birthYear}`}
              name={personage.name}
              birthYear={personage.birth_year}
              onPersonageSelected={onPersonageSelected}
              selectedPersonage={selectedPersonage}
            />
          ))}
        </tbody>
      </table>
    )}
  </>
);

PersonagesList.propTypes = PersonagesType;
