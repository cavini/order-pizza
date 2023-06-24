import React from 'react';
import Button from '../../../components/Buttons/Button';
import { ButtonType } from '../../../components/Buttons/Button/@types';
import { useFetcher } from 'react-router-dom';
import { UpdateOrderProps } from './@types';

const UpdateOrder = ({ order }: UpdateOrderProps) => {
  const fetcher = useFetcher();

  return (
    <fetcher.Form method="PATCH" className="text-right">
      <Button type={ButtonType.PRIMARY}> Make priority</Button>
    </fetcher.Form>
  );
};

export default UpdateOrder;
