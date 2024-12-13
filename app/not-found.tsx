import './css/errors.css';

export const metadata = {
  title: 'Hey Exit :: 404 Not Found',
};

export default function Custom404() {
  return (
    <>
      <div className="header-container">
        <h1>404 Error</h1>
      </div>
      <div className="content-error">
        Agh sorry, I moved this page around somewhere!
      </div>
    </>
  );
}
