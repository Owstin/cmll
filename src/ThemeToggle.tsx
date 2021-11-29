import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import sunny from './assets/images/sunny.png?url';
import night from './assets/images/night.png?url';

/**
 * Images and inspiration from Musthaq Ahamad (@haxzie_)
 * https://medium.com/@haxzie/dark-and-light-theme-switcher-using-css-variables-and-pure-javascript-zocada-dd0059d72fa2
 */
const Toggle = styled('div')`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: #2196f3;
  --track-off: hsl(0, 0%, 65%);

  --thumb-size: 36px;
  --thumb-on: var(--color-white);
  --thumb-off: hsl(0, 0%, 40%);

  --h-pad: 2px;
  --slide-width: calc(var(--track-width) - var(--thumb-size) + var(--h-pad));

  position: relative;
  display: inline-block;
  width: calc(var(--track-width) + var(--h-pad));
  height: var(--thumb-size);

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
  }

  .thumb {
    position: relative;
    width: var(--thumb-size);
    height: var(--thumb-size);
    transition: transform 400ms, background 400ms;
    box-shadow: var(--elevation-3);
    border-radius: 50%;
  }

  .track {
    position: absolute;
    top: calc((var(--thumb-size) - var(--track-height)) / 2);
    left: calc(var(--h-pad) / 2);
    width: var(--track-width);
    height: var(--track-height);
    border-radius: var(--track-height);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    user-select: none;

    & ~ .thumb {
      transform: translate(0);
      background: var(--thumb-off) url(${night});
      background-repeat: no-repeat;
      background-position: center;
    }

    & ~ .track {
      background-color: var(--track-off);
    }

    &:checked ~ .thumb {
      transform: translate(var(--slide-width));
      background: var(--thumb-on) url(${sunny});
      background-repeat: no-repeat;
      background-position: center;
    }

    &:checked ~ .track {
      background-color: var(--track-on);
    }
  }
`;

interface Props {
  toggleTheme: () => void;
  checked: boolean;
}

const ThemeToggle: Component<Props> = props => (
  <Toggle>
    <input
      aria-label="Theme toggle"
      type="checkbox"
      onchange={() => props.toggleTheme()}
      checked={props.checked}
    />
    <div class="track" />
    <div class="thumb" />
  </Toggle>
);

export default ThemeToggle;
