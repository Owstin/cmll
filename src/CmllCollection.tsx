import { Component, For } from 'solid-js';
import { styled } from 'solid-styled-components';

import AlgCollection from './AlgCollection';
import { CmllCollection } from './cmll';

const Container = styled('div')`
  margin-bottom: var(--size-4);
`;

const Row = styled('div')`
  --gap: var(--size-4);
  display: flex;
  flex-flow: row wrap;

  > * {
    flex: 1 0 314px;
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
  visibility: hidden;
  padding: var(--size-2);
`;

const CollectionName = styled('h1')`
  font-size: var(--size-9);
  margin-top: 0;
  margin-bottom: var(--size-4);
`;

interface Props {
  cmllCollection: CmllCollection;
}

const Cmll: Component<Props> = props =>
  Object.entries(props.cmllCollection).map(([name, collection]) => (
    <Container>
      <CollectionName>{name}</CollectionName>
      <Row>
        <For each={collection}>{alg => <AlgCollection name={alg.name} algs={alg.cases} />}</For>
        <For each={new Array(4 - (collection.length % 4)).fill(0)}>{() => <Hidden />}</For>
      </Row>
    </Container>
  ));

export default Cmll;
