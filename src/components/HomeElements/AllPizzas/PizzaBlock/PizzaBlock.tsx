import React, { FC, useState } from 'react';

import { AddPizza } from './AddPizza';
import { PizzaImg } from './PizzaImg';
import { SelectorPizza } from './SelectorPizza';
import { PizzaBlockProps } from './types';

export const PizzaBlock: FC<PizzaBlockProps> = ({
  id,
  title,
  price,
  imageUrl,
  sizes,
  types,
}) => {
  const [activeType, setActiveType] = useState<number>(0);
  const [activeSize, setActiveSize] = useState<number>(0);

  return (
    <div className="pizza-block-wrapper">
      <div className="pizza-block">
        <PizzaImg id={id} imageUrl={imageUrl} title={title} />
        <SelectorPizza
          types={types}
          setActiveType={setActiveType}
          activeType={activeType}
          sizes={sizes}
          setActiveSize={setActiveSize}
          activeSize={activeSize}
        />
        <AddPizza
          id={id}
          title={title}
          price={price}
          imageUrl={imageUrl}
          activeType={activeType}
          sizes={sizes}
          activeSize={activeSize}
        />
      </div>
    </div>
  );
};
