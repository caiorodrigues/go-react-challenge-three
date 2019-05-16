import React, { Fragment } from 'react';

import LeftList from '../../components/LeftList';
import User from '../../components/User';
import Map from '../../components/Map';

const Main = () => (
  <Fragment>
    <Map />
    <LeftList />
    <User />
  </Fragment>
);

export default Main;
