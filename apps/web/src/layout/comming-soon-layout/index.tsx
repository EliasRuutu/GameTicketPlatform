import { useMemo } from 'react';
import { CommingSoonHeader } from '@components/comming-soon-header';

type Props = {
  full?: boolean;
  authorise?: boolean;
} & ChildrenProps;

export const CommingSoonLayout: React.FC<Props> = (props) => {
  const classNames = useMemo(() => {
    const classes = ['venium-default-layout'];
    props.full && classes.push('full');
    return classes.join(' ');
  }, [props.full]);

  return (
    <div className={classNames}>
      <CommingSoonHeader />
      <div className="content">{props.children}</div>
    </div>
  );
};
