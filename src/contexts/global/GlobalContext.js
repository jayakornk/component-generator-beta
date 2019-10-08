import React, { createContext, useState } from 'react';
import PropTypes from 'prop-types';
import axios from 'axios';
import templates from './templates';

export const GlobalContext = createContext();

function GlobalContextProvider({ children }) {
  const [components, setComponents] = useState(templates);
  const [setting, setSetting] = useState({
    targetURL: 'https://pages.prontomarketing.com/',
    themeName: 'phoenix-child',
  });

  const [currentShortcode, setCurrentShortcode] = useState('');
  const [currentCSS, setCurrentCSS] = useState('');
  const [currentJS, setCurrentJS] = useState('');
  const [parsedHTML, setParsedHTML] = useState('');

  const parseShortcode = async (shortcode) => {
    const html = await axios.post('http://component-generator.local/wp-json/parse/html', {
      shortcode,
    });
    setParsedHTML(html.data.html);
    setSetting({
      ...setting,
      themeName: html.data.themename,
    });
    setCurrentShortcode(shortcode);
  };
  
  // useEffect(() => parseShortcode());

  // parseShortcode('[row]Hey[/row]');
  // console.log(parsedHTML);

  return (
    <GlobalContext.Provider value={{
      components, setComponents, parseShortcode, parsedHTML, currentShortcode, setting, setSetting, currentCSS, setCurrentCSS, currentJS, setCurrentJS
    }}
    >
      {children}
    </GlobalContext.Provider>
  );
}

GlobalContextProvider.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default GlobalContextProvider;
