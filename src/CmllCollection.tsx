import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import AlgCollection from './AlgCollection';
import { CmllCollection } from './cmll';

const Container = styled('div')`
  margin-bottom: var(--size-4);
`;

const Row = styled('div')`
  --gap: var(--size-4);
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    --neg-gap: calc(-1 * var(--gap));
    margin: var(--neg-gap) 0 0 var(--neg-gap);
    width: calc(100% + var(---gap));

    & > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }
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
        {collection.map(alg => (
          <AlgCollection name={alg.name} algs={alg.cases} />
        ))}
      </Row>
    </Container>
  ));

export default Cmll;
