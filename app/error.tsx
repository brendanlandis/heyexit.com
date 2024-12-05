'use client';
import { useEffect } from 'react';
import './css/errors.css';

export default function Error({ error }: { error: Error }) {
  useEffect(() => {
    console.error(error);
  }, [error]);

  return (
    <>
      <div className="header-container">
        <h1>500 Error</h1>
      </div>
      <div className="content-error">
        Agh weird, something went wrong on the server end.
      </div>
    </>
  );
}
