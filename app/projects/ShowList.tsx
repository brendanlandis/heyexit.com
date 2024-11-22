import { Show } from '../types';
import { format } from 'date-fns';

export default function ShowList({
  shows,
  shortList,
}: {
  shows: Show[];
  shortList: boolean;
}) {
  return (
    <ul className="shows-text">
      {shows.map((show) => {
        const showWhere = shortList
          ? `at ${show.venue}, ${show.city}`
          : show.showName
          ? show.venue && show.venue !== 'unknown'
            ? `at ${show.showName} (held at ${show.venue} in ${show.city})`
            : `at ${show.showName}`
          : show.venue && show.venue !== 'unknown'
          ? `at ${show.venue}, ${show.city}`
          : '';
        return (
          <li key={show.id}>
            <span className="show-date">{format(show.date, 'LL/ii/yy')}</span>{' '}
            {shortList ? null : (
              <>
                <span className="show-band">
                  {show.alias || show.band.name}
                </span>{' '}
              </>
            )}
            <span className="show-where">{showWhere}</span>
            {show.notes ? (
              <span className="show-notes">{show.notes}</span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
