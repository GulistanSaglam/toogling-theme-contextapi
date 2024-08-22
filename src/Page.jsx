import { useContext } from 'react';
import Header from './Header';
import { ThemeContext } from './ThemeContextProvider';

export default function Page() {
 const {theme} = useContext(ThemeContext)
  return (
    <div id="app" className={theme}>
      <Header />

      <article>
        <h2>ContextAPI Example</h2>
      </article>
    </div>
  );
}