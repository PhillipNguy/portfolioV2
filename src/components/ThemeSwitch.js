import React, { useContext } from 'react';
import { ThemeContext } from '../pages/App';
import Switch from 'react-switch';

function ThemeSwitch() {
  const context = useContext(ThemeContext);
  return (
    <div>
      <label> {context.theme === 'night' ? 'Night Mode' : 'Day Mode'} </label>
      <Switch
        onChange={context.toggleTheme}
        checked={context.theme === 'night'}
      />
    </div>
  );
}

export default ThemeSwitch;
