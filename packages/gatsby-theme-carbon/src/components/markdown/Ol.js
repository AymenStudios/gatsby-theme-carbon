import React from 'react';
import cx from 'classnames';
import { list } from './Markdown.module.scss';

const Ol = ({ children, nested, start, ...rest }) => {
  const className = cx('bx--list--ordered', list, {
    'bx--list--nested': nested,
  });

  return (
    <ol className={className} {...rest} start={`${start}`}>
      {children}
    </ol>
  );
};

export default Ol;
