import { getFileFullUrl, ProductFunctions, toUSDandCurrency } from '@utils';
import { Button } from '@widgets/button';
import { Icon } from '@widgets/icon';
import Tooltip from '@widgets/tooltip';
import { useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useWindowSize } from '../../../../../libs/ui-shared/src/hooks';

type Props = {
  product: ProductModelType;
  hideAction?: boolean;
  onClick?: () => void;
  passedRef?: (node: any) => void;
  href: string;
};
const ProductCard: React.FC<Props> = (props) => {
  const { product, hideAction = false, passedRef, href } = props;
  const fileUrl = `${process.env.NEXT_PUBLIC_FILE_URL}/${product?.picture}`;
  const classNames = useMemo<string>(() => {
    const classes = ['venium-product-card'];
    hideAction && classes.push('card-action');
    return classes.join(' ');
  }, [hideAction]);

  const { width } = useWindowSize();

  return (
    <div ref={passedRef} className={classNames}>
      <Link href={href || ''}>
        <a>
          <div className="product-img">
            <div
              className="game-logo"
              style={{
                backgroundImage: `url('${getFileFullUrl(product?.game?.picture)}')`,
              }}
            ></div>
            {fileUrl ? (
              <Image
                src={fileUrl}
                layout="responsive"
                loading="lazy"
                width={206.75}
                height={229.33}
                unoptimized={true}
                alt="product"
                placeholder="blur"
                blurDataURL="blur"
                sizes="(max-width: 768px) 100vw,
                  (max-width: 1200px) 50vw,
                  33vw"
              />
            ) : (
              <div
                className="image-container"
                style={{ backgroundImage: `url('/assets/imgs/placeholder.svg')` }}
              ></div>
            )}
            <div className="portfolio-overlay"></div>
          </div>
        </a>
      </Link>
      <Link href={href || ''}>
        <a>
          <div className="title">{product?.name}</div>
        </a>
      </Link>

      {/* <div className="price-content">
        <Link href={href || ''}>
          <a>
            <div className="price">
              {toUSDandCurrency(ProductFunctions.getProductPrice(product))}
            </div>
          </a>
        </Link>
      </div> */}
    </div>
  );
};
export default ProductCard;
