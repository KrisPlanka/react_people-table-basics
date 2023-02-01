import React, { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import cn from 'classnames';
import { Person } from '../../types';
import { Loader } from '../Loader/Loader';
import { getPeople } from '../../api';
import { PersonLink } from '../PersonLink/PersonLink';

export const PeoplePage: React.FC = () => {
  const { slug = '' } = useParams();
  const [people, setPeople] = useState<Person[]>([]);
  const [isPeopleLoading, setIsPeopleLoading] = useState(false);
  const [isPeopleError, setIsPeopleError] = useState(false);

  const isSelected = (person: Person) => person.slug === slug;

  useEffect(() => {
    setIsPeopleLoading(true);
    getPeople()
      .then(setPeople)
      .catch(() => setIsPeopleError(true))
      .finally(() => setIsPeopleLoading(false));
  }, []);

  const findParent = (name: string) => {
    const parent = people.find(pers => pers.name === name);

    return parent
      ? <PersonLink person={parent} />
      : name;
  };

  return (
    <>
      <h1 className="title">People Page</h1>
      <div className="block">
        <div className="box table-container">

          {isPeopleLoading && (
            <Loader />
          )}
          {isPeopleError && (
            <p data-cy="noPeopleMessage">
              There are no people on the server
            </p>
          )}

          {people.length > 0 && (
            <table
              data-cy="peopleTable"
              // eslint-disable-next-line max-len
              className="table is-striped is-hoverable is-narrow is-fullwidth"
            >
              <thead>
                <tr>
                  <th>Name</th>
                  <th>Sex</th>
                  <th>Born</th>
                  <th>Died</th>
                  <th>Mother</th>
                  <th>Father</th>
                </tr>
              </thead>

              <tbody>
                {people.map(person => (
                  <tr
                    data-cy="person"
                    className={cn({
                      // eslint-disable-next-line max-len
                      'has-background-warning': isSelected(person),
                    })}
                    key={person.slug}
                  >
                    <td>
                      <PersonLink person={person} />
                    </td>
                    <td>{person.sex}</td>
                    <td>{person.born}</td>
                    <td>{person.died}</td>
                    <td>
                      {person.motherName
                        ? findParent(person.motherName)
                        : (person.motherName || '-')}
                    </td>
                    <td>
                      {person.fatherName
                        ? findParent(person.fatherName)
                        : (person.fatherName || '-')}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          )}
          {isPeopleError && (
            <p data-cy="peopleLoadingError" className="has-text-danger">
              Something went wrong
            </p>
          )}
        </div>
      </div>
    </>
  );
};