import { Component } from 'solid-js';
import { Link, Title } from 'solid-meta';

import { getImageUrl } from './utils';

const Head: Component = () => (
  <>
    <Title>BigGreen's cool CMLL page</Title>
    <Link rel="icon" type="image/png" href={getImageUrl('favicon.png')} />
  </>
);

export default Head;
