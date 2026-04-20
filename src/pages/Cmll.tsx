import { useRouteData } from 'solid-app-router';
import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';

import AlgCollection from '../AlgCollection';

import { CmllData } from './Cmll.data';

const Container = styled('section')`
  margin-bottom: var(--size-4);
`;

const Row = styled('div')`
  --gap: var(--size-4);
  display: flex;
  flex-flow: row wrap;

  > * {
    flex: 1 0 var(--size-80);
  }

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    --neg-gap: calc(-1 * var(--gap));
    margin: var(--neg-gap) 0 0 var(--neg-gap);
    width: calc(100% + var(---gap));

    > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }
`;

const Hidden = styled('div')`
  visibility: collapse;
`;

const CollectionName = styled('h1')`
  font-size: var(--scale-5);
  margin-top: 0;
  margin-bottom: var(--size-4);
`;

const rowItems = 4;

const Cmll: Component = () => {
  const cmllData = useRouteData<CmllData>();
  return (
    <For each={Object.entries(cmllData)}>
      {([name, collection]) => (
        <Container>
          <CollectionName>{name}</CollectionName>
          <Row>
            <For each={collection}>{alg => <AlgCollection name={alg.name} algs={alg.cases} />}</For>
            <For each={new Array(rowItems - (collection.length % rowItems)).fill(0)}>
              {() => <Hidden />}
            </For>
          </Row>
        </Container>
      )}
    </For>
  );
};

export default Cmll;
