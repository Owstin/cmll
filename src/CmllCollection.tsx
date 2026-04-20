import { Component } from 'solid-js';
import { styled } from 'solid-styled-components';

import AlgCollection from './AlgCollection';
import { CmllCollection } from './cmll';

const Container = styled('div')`
  margin-bottom: 1rem;
`;

const Row = styled('div')`
  --gap: 1rem;
  display: flex;
  flex-direction: row;
  flex-wrap: wrap;

  @supports (gap: var(--gap)) {
    gap: var(--gap);
  }

  @supports not (gap: var(--gap)) {
    --neg-gap: calc(-1 * var(--gap));
    margin: var(--neg-gap) 0 0 var(--neg-gap);
    width: calc(100% + 1rem);

    & > * {
      margin: var(--gap) 0 0 var(--gap);
    }
  }
`;

const CollectionName = styled('h1')`
  font-size: 36px;
  margin-top: 0;
  margin-bottom: 1rem;
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
