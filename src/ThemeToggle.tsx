import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

/**
 * Ideas and inspiration from react-toggle
 * http://aaronshaf.github.io/react-toggle/
 */
const Toggle = styled('div')`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: var(--color-blue-500);
  --track-off: var(--color-grey-500);

  --thumb-size: 22px;
  --thumb-color: var(--color-grey-100);

  position: relative;
  display: inline-block;
  width: var(--track-width);
  height: var(--track-height);

  * {
    box-sizing: border-box;
  }

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
  }

  .sun {
    position: absolute;
    top: 1px;
    left: 1px;
  }

  .moon {
    position: absolute;
    top: 1px;
    right: 1px;
  }

  .thumb {
    position: absolute;
    top: 1px;
    left: 1px;
    width: var(--thumb-size);
    height: var(--thumb-size);
    border: 1px solid var(--color-grey-500);
    border-radius: 50%;
    background-color: var(--thumb-color);
    transition: left var(--theme-transition);
  }

  .track {
    width: var(--track-width);
    height: var(--track-height);
    border-radius: var(--track-height);
    background-color: var(--track-off);
    transition: background-color var(--theme-transition), border-color var(--theme-transition);
  }

  input {
    position: absolute;
    width: 100%;
    height: 100%;
    margin: 0;
    opacity: 0;
    cursor: pointer;
    user-select: none;

    &:checked ~ .thumb {
      left: 27px;
      border-color: var(--track-on);
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
    <div class="track">
      <span class="sun">☀️</span>
      <span class="moon">🌙</span>
    </div>
    <div class="thumb" />
  </Toggle>
);

export default ThemeToggle;
