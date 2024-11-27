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
          ? show.city
            ? `- ${show.city} - ${show.venue}`
            : `- ${show.venue}`
          : show.showName
          ? show.venue && show.venue !== 'unknown'
            ? `- ${show.showName} - ${show.city}, ${show.venue}`
            : `- ${show.showName}`
          : show.venue && show.venue !== 'unknown'
          ? `- ${show.city} - ${show.venue}`
          : '';
        return (
          <li key={show.id}>
            <span className="show-date">{format(show.date, 'LL/dd/yy')}</span>{' '}
            {shortList ? null : (
              <>
                <span className="show-band">
                  {show.alias || show.band.name}
                </span>{' '}
              </>
            )}
            <span className="show-where">{showWhere}</span>
            {show.notes ? (
              <span className="show-notes"> ({show.notes})</span>
            ) : null}
          </li>
        );
      })}
    </ul>
  );
}
