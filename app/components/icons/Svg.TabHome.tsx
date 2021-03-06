import React from 'react';
import * as Svg from 'react-native-svg';

import PropTypes from 'prop-types';
import { Theme, Colors } from '../../theme';

const SvgTabHome = ({ active, size }: any) => {
  const fill = active ? Colors.white : Theme.inactive;
  const dPath = active
    ? 'M448 463.746H298.667V314.413h-85.334v149.333H64V148.318L256 36.572l192 110.984v316.19z'
    : 'M256.274 60.84L84.324 166.237v276.826H193.27V293.73h126.958v149.333h107.994V165.476L256.274 60.84zm0-24.89l192.178 113.195v315.25H300V315.062h-86.501v149.333H64.095V150.161L256.274 35.95z';

  return (
    <Svg.Svg height={size} width={size} viewBox="0 0 512 512">
      <Svg.Path d={dPath} fill={fill} />
    </Svg.Svg>
  );
};

SvgTabHome.defaultProps = {
  active: false,
  size: 24
};

SvgTabHome.propTypes = {
  // optional
  active: PropTypes.bool,
  size: PropTypes.number
};

export default SvgTabHome;
