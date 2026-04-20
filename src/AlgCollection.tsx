import { Component, createSignal } from 'solid-js';
import { styled } from 'solid-styled-components';

import { getImageUrl } from './utils';

const Card = styled('div')`
  --elevation-3: 0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(0, 0, 0, 0.06);
  --elevation-4: 0 10px 15px -3px rgba(0, 0, 0, 0.1), 0 4px 6px -2px rgba(0, 0, 0, 0.05);

  min-width: 314px;
  box-shadow: 0 0 0 1px rgba(0, 0, 0, 0.25), var(--elevation-3);
  border-radius: 6px;
  padding: 0.5rem;
  background-color: white;

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

const AlgName = styled('h3')`
  margin: 0;
`;

const AlgImage = styled('img')<{ rotation: number }>`
  transition-duration: 800ms;
  transform: rotate(${props => props.rotation}deg);
`;

const AlgList = styled('div')`
  --gap: 0.5rem;
  position: relative;
  display: flex;
  flex-direction: column;

  @supports (gap: 0.5rem) {
    gap: 0.5rem;
  }

  @supports not (gap: var(--gap)) {
    & > * {
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
  return rotations[rotation] || 0;
};

interface Props {
  name: string;
  algs: string[];
}

const AlgCollection: Component<Props> = props => {
  const [rotation, setRotation] = createSignal(0);
  return (
    <Card>
      <AlgName>{props.name}</AlgName>
      <Center>
        <AlgImage
          rotation={rotation()}
          src={getImageUrl(`images/${props.name}.png`)}
          alt={`CMLL ${props.name} image`}
        />
        <AlgList>
          {props.algs.map(alg => (
            <div>
              <span
                onmouseenter={() => setRotation(getRotation(alg))}
                onmouseleave={() => setRotation(0)}
              >
                {alg}
              </span>
            </div>
          ))}
        </AlgList>
      </Center>
    </Card>
  );
};

export default AlgCollection;
