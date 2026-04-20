import { Component } from 'solid-js';
import { css, styled } from 'solid-styled-components';
import { IoSunny } from 'solid-icons/io';
import { IoMoon } from 'solid-icons/io';

/**
 * Ideas and inspiration from react-toggle
 * http://aaronshaf.github.io/react-toggle/
 */
const Toggle = styled('div')`
  --track-width: 50px;
  --track-height: 24px;
  --track-on: var(--color-blue);
  --track-off: var(--color-grey-500);

  --thumb-size: 22px;
  --thumb-color: var(--color-grey-100);

  position: relative;
  display: inline-block;
  width: var(--track-width);
  height: var(--track-height);

  .track,
  .thumb {
    pointer-events: none;
    transition: inherit;
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

const TrackLeft = css`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  left: 7px;
`;

const TrackRight = css`
  position: absolute;
  top: 0;
  bottom: 0;
  margin: auto 0;
  line-height: 0;
  width: 10px;
  height: 10px;
  right: 7px;
`;

const TrackIcon = css`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 10px;
  height: 10px;
`;

const FlipH = css`
  transform: scale(-1, 1);
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
      <div class={TrackLeft}>
        <span class={TrackIcon}>
          <IoSunny size={18} color="var(--color-sun)" />
        </span>
      </div>
      <div class={TrackRight}>
        <span class={TrackIcon}>
          <IoMoon size={18} color="var(--color-moon)" className={FlipH} />
        </span>
      </div>
    </div>
    <div class="thumb" />
  </Toggle>
);

export default ThemeToggle;
