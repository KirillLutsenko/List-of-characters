import React from 'react';
import classnames from 'classnames';
import { PersonagesType } from '../../Types';

export const Personage = ({
  name,
  birthYear,
  onPersonageSelected,
  selectedPersonage,
}) => (
  <tr
    className="personages__table-row"
  >
    <td className="personages__table-item">
      {name}
    </td>

    <td className="personages__table-item">
      {birthYear}
    </td>

    <td className="personages__table-item">
      <button
        type="submit"
        className={classnames(
          'personages__button button',
          { 'personages__button button button--active': selectedPersonage
            === name },
        )}
        onClick={() => onPersonageSelected(name)}
      >
        Comments
      </button>
    </td>
  </tr>
);

Personage.propTypes = PersonagesType;
