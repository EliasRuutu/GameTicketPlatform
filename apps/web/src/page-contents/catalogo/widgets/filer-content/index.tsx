import { useTypedSelector } from '@store';
import { ProductType } from '@utils';
import { Checkbox } from '@widgets/checkbox';
import { Expansion } from '@widgets/expansion';
import { Icon } from '@widgets/icon';
import { Input } from '@widgets/input';
import { RangeSlider } from '@widgets/range-slider';
import { Select } from '@widgets/select';
import { Switch } from '@widgets/switch';
import { useRouter } from 'next/router';
import React, { useEffect, useMemo, useState } from 'react';

type Props = {
  orderItems?: MenuItemProps[];
  onChangeOrder?: (value: any) => void;
  filter: CatalogFilterType;
  setFilter: (key: string, value: string) => void;
  maxPrice: number;
};

export const FilterContent: React.FC<Props> = (props) => {
  const { orderItems, onChangeOrder, filter, setFilter, maxPrice } = props;

  const {
    category: { categories },
    platform: { platforms },
    catalog: { counts },
    game: { games },
  } = useTypedSelector((store) => store);

  const router = useRouter();

  let maxPriceChangeTimeout;
  let minPriceChangeTimeout;

  const [slider, setSlider] = useState<{ min: number; max: number }>({
    min: filter.price.min,
    max: filter.price.max,
  });

  useEffect(() => {
    setSlider({
      min: filter.price.min,
      max: filter.price.max,
    });
  }, [filter.price]);

  const onChangeFilter = (key: string, value: string): void => {
    setFilter(key, value);
  };

  const onFinalChangeSlider = ([min, max]) => {
    setSlider({ min, max });
    if (min !== filter.price.min) {
      setFilter('price.min', String(min));
    } else {
      setFilter('price.max', String(max));
    }
  };

  const onChangeSlider = ([min, max]): void => {
    setSlider({ min, max });
  };

  const onChangeDelivery = (value: string) => {
    setFilter('entrega', value);
  };

  const onChangeGame = (game: string) => {
    setFilter('juego', game);
  };

  const findOrderLabel = (): string | React.ReactNode => {
    const order = orderItems.find(
      (item) => typeof item === 'object' && item.value === filter.order
    );
    return typeof order === 'object' && order.label;
  };

  const onRemoveFilters = () => {
    setSlider({
      min: 0,
      max: maxPrice,
    });
    router.push('');
  };

  const isAppliedFilter = useMemo(() => {
    return !(
      filter.price.min === 0 &&
      filter.price.max === maxPrice &&
      filter.platform.length === 0 &&
      filter.category.length === 0 &&
      filter.types.length === 0 &&
      filter.delivery.length === 0 &&
      filter.order === 'relevant' &&
      filter.game === '' &&
      (!filter.search || filter.search === '')
    );
  }, [filter]);

  return (
    <div className="catalog-filter-content">
      {isAppliedFilter && (
        <div className="remove-filter">
          <div className="trash" onClick={onRemoveFilters}>
            <Icon name="trash" size={16.67} />
            <span>Limpiar filtros</span>
          </div>
        </div>
      )}

      <section className="type">
        <Expansion
          header={
            <React.Fragment>
              <div className="title">Tipo de producto</div>
              <div className="description">
                {filter.types?.map((item) => ProductType[item]?.label)?.join(', ')}
              </div>
            </React.Fragment>
          }
        >
          <ul>
            {Object.keys(ProductType).map((key, index) => (
              <li
                key={index}
                className={filter.types?.includes(ProductType[key].code) ? 'active' : ''}
                onClick={() => onChangeFilter('tipo', ProductType[key].code)}
              >
                <div className="checked">
                  <Checkbox
                    checked={filter.types?.includes(ProductType[key].code)}
                    onChange={() => onChangeFilter('tipo', ProductType[key].code)}
                  />
                </div>
                <div className="label">{ProductType[key].label}</div>
                <div className="count">{counts.type[key] || 0}</div>
              </li>
            ))}
          </ul>
        </Expansion>
      </section>
    </div>
  );
};
