import { Component } from 'solid-js';
import { Link, Title } from 'solid-meta';

import { getAssetUrl } from './utils';

const Head: Component = () => (
  <>
    <Title>BigGreen's cool CMLL page</Title>
    <Link rel="icon" type="image/png" href={getAssetUrl('favicon.png')} />
  </>
);

export default Head;
