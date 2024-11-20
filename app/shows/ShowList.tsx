import { Show } from '../types';
import { format } from 'date-fns';

export default function ShowList({ shows }: { shows: Show[] }) {
  return (
    <ul className="shows-text">
      {shows.map((show) => (
        <li key={show.id}>
          <span>{format(show.date, 'E LLL io, yyyy')}</span> - <span>{show.alias || show.band.name}</span> at{' '}
          <span>{show.showName ? `${show.showName} (held at ${show.venue})` : show.venue}</span>,{' '}
          <span>{show.city}</span>
        </li>
      ))}
    </ul>
  );
}
