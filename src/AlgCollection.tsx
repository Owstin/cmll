import { Accessor, Component, createSignal, For, Show } from 'solid-js';
import { styled } from 'solid-styled-components';

import { Theme } from './ThemeSwitcher';
import { getAssetUrl } from './utils';

const Card = styled('div')`
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: var(--radius-sm);
  padding: var(--size-2);
  background-color: ${props => (props.theme as Accessor<Theme>)().cardColor};
  transition: background-color var(--theme-transition);

  &:hover,
  &:focus {
    box-shadow: 0 0 0 2px rgba(0, 0, 0, 0.5), var(--elevation-4);
  }
`;

const Center = styled('div')`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

const AlgName = styled('h2')`
  margin: 0;
`;

const AlgImage = styled('img')<{ rotation?: number }>`
  transition-duration: 800ms;
  &:not([rotation]) {
    transform: rotate(0deg);
  }
  &[rotation~='90'] {
    transform: rotate(90deg);
  }
  &[rotation~='-90'] {
    transform: rotate(-90deg);
  }
  &[rotation~='180'] {
    transform: rotate(180deg);
  }
`;

const AlgList = styled('div')<{ expanded?: boolean }>`
  --gap: var(--size-2);
  display: flex;
  flex-direction: column;
  overflow: hidden;
  position: relative;

  &[expanded~='false'] {
    max-height: 0;
    transition: max-height 800ms cubic-bezier(0, 1, 0, 1);
  }

  &[expanded~='true'] {
    max-height: 1000px;
    transition: max-height 1000ms ease-in-out;
  }

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    > * {
      margin-bottom: var(--gap);
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;

const getRotation = (alg: string) => {
  const rotations: Record<string, number> = {
    '(U)': 90,
    "(U')": -90,
    '(U2)': 180,
  };
  const [rotation] = /^\(U['2]?\)+/.exec(alg) || [];
  return rotations[rotation];
};

interface Props {
  name: string;
  algs: string[];
}

const AlgCollection: Component<Props> = props => {
  const expandable = props.algs.length > 3;
  const [rotation, setRotation] = createSignal<number>();
  const [expanded, setExpanded] = createSignal(false);
  return (
    <Card onmouseenter={() => setExpanded(true)} onmouseleave={() => setExpanded(false)}>
      <AlgName>{props.name}</AlgName>
      <Center>
        <AlgImage
          rotation={rotation()}
          src={getAssetUrl(`images/${props.name}.png`)}
          alt={`CMLL ${props.name} image`}
          width="200"
          height="200"
        />
        <AlgList>
          <For each={props.algs.slice(0, 3)}>
            {alg => (
              <div>
                <span
                  onmouseenter={() => setRotation(getRotation(alg))}
                  onmouseleave={() => setRotation()}
                >
                  {alg}
                </span>
              </div>
            )}
          </For>
          <Show when={expandable}>
            <AlgList expanded={expanded()}>
              <For each={props.algs.slice(3)}>
                {alg => (
                  <div>
                    <span
                      onmouseenter={() => setRotation(getRotation(alg))}
                      onmouseleave={() => setRotation()}
                    >
                      {alg}
                    </span>
                  </div>
                )}
              </For>
            </AlgList>
          </Show>
        </AlgList>
      </Center>
    </Card>
  );
};

export default AlgCollection;
