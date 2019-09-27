import React, { Fragment } from 'react';
import { arrayOf } from 'prop-types';

import { matchesPropsTypes } from '../../../../../constants/propsTypes';
import withLoading from '../../../../components/Loading';
import ListMatches from '../ListMatches';
import HEADER from '../../../../../constants/header';

function Layout({ data }) {
  return (
    <Fragment>
      <ListMatches item={HEADER} />
      { data.map(item => <ListMatches item={item} key={item.id} />)}
    </Fragment>
  );
}

Layout.propTypes = {
  data: arrayOf(matchesPropsTypes)
};

export default withLoading(Layout);
