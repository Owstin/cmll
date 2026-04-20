import { Component } from 'solid-js';
import { Link, Meta, Title } from 'solid-meta';

import favicon from './assets/favicon.ico?url';

const Head: Component = () => (
  <>
    <Title>BigGreen's cool CMLL page</Title>
    <Link rel="icon" type="image/x-icon" href={favicon} />
    <Meta name="description" content="Curated list of BigGreen approved CMLL algoirthms" />
  </>
);

export default Head;
