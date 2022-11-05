import React from 'react';
import { NextPage } from 'next';
import { Layout } from '../../collections/Page';
import { components } from '../../blocks';
import classes from './index.module.css';

type Props = {
  layout: Layout[]
  className?: string
}

const RenderBlocks: React.FC<Props> = ({ layout, className }) => {
  console.log(layout);

  return (
    <div className={[
      classes.renderBlocks,
      className,
    ].filter(Boolean).join(' ')}
    >
      {layout.map((block, i) => {
        console.log('block: ', block);
        

        const Block: NextPage = components[block.blockType];

        if (Block) {
          return (
            <section
              key={i}
              className={classes.block}
            >
              <Block {...block} />
            </section>
          );
        }

        return null;
      })}
    </div>
  );
};

export default RenderBlocks;
