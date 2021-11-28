import { Component } from 'solid-js';
import { Link, Title } from 'solid-meta';

import favicon from './assets/favicon.png?url';

const Head: Component = () => (
  <>
    <Title>BigGreen's cool CMLL page</Title>
    <Link rel="icon" type="image/png" href={favicon} />
  </>
);

export default Head;
