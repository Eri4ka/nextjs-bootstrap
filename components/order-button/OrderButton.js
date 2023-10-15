import { useRouter } from 'next/router';
import { useCallback } from 'react';
import { HiSortAscending } from 'react-icons/hi';
import { HiSortDescending } from 'react-icons/hi';

const availableOrderTypes = {
  asc: 'asc',
  desc: 'desc',
};

const OrderButton = ({ queryName }) => {
  const router = useRouter();

  const currentOrderType =
    availableOrderTypes[router.query[queryName]] || 'desc';

  const handleClick = useCallback(() => {
    let queryParams = {};
    for (let key in router.query) {
      if (!key.match(/^order/)) {
        queryParams[key] = router.query[key];
      }
    }

    router.replace({
      query: {
        ...queryParams,
        [queryName]:
          currentOrderType === availableOrderTypes.desc
            ? availableOrderTypes.asc
            : availableOrderTypes.desc,
      },
    });
  }, [currentOrderType, queryName, router]);

  const icon = {
    asc: <HiSortAscending className="cursor-pointer" onClick={handleClick} />,
    desc: <HiSortDescending className="cursor-pointer" onClick={handleClick} />,
  };

  return icon[currentOrderType];
};

export default OrderButton;
