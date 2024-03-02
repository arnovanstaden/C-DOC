'use client';

import { ISettings } from '@types';
import styles from './EditSettings.module.scss';
import Input from '@components/system/Input';
import { useState } from 'react';
import Button from '@components/system/Button/Button';
import { enqueueSnackbar } from 'notistack';
import Loader from '@components/system/Loader';
import { useForm } from 'react-hook-form';
import { errorNotification } from '@utils/notifications';

import FormRow from '@components/system/FormRow/FormRow';
import { updateShopSettings } from '@lib/settings';

const EditSettings: React.FC<ISettings> = (settings) => {
  const [loading, setLoading] = useState<boolean>(false);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm<ISettings>();

  const handleSaveSettings = async (newSettings: ISettings) => {
    setLoading(true);
    try {
      await updateShopSettings(newSettings);
      enqueueSnackbar('Settings Updated');
    } catch (e) {
      console.error(e);
      errorNotification('Error updating settings', e);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className={styles.EditSettings}>
      <div className={styles.actions}>
        <Button onClick={handleSubmit(handleSaveSettings)}>
          Save Settings
        </Button>
      </div>
      <form>
        <FormRow>
          <Input
            label='Delivery Fee 1'
            name="deliveryFee1"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('deliveryFee1', { required: true, value: settings.deliveryFee1 }) }}
            error={errors.deliveryFee1?.type === 'required' ? 'Delivery Fee 1 is required' : undefined}
          />
          <Input
            label='Threshold 1'
            name="threshold1"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('threshold1', { required: true, value: settings.threshold1 }) }}
            error={errors.threshold1?.type === 'required' ? 'Threshold 1 is required' : undefined}
          />
        </FormRow>
        <FormRow>
          <Input
            label='Delivery Fee 2'
            name="deliveryFee2"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('deliveryFee2', { value: settings.deliveryFee2 }) }}
          />
          <Input
            label='Threshold 2'
            name="threshold2"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('threshold2', { value: settings.threshold2 }) }}
          />
        </FormRow>
        <FormRow>
          <Input
            label='Delivery Fee 3'
            name="deliveryFee3"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('deliveryFee3', { value: settings.deliveryFee3 }) }}
          />
          <Input
            label='Threshold 3'
            name="threshold3"
            inputProps={{
              type: 'number',
            }}
            register={{ ...register('threshold3', { value: settings.threshold3 }) }}
          />
        </FormRow>
        <Input
          label='Upper Delivery Fee'
          name="upperFee"
          inputProps={{
            type: 'number',
          }}
          register={{ ...register('upperFee', { required: true, value: settings.upperFee }) }}
          error={errors.upperFee?.type === 'required' ? 'Upper Delivery Fee is required' : undefined}
        />
      </form>
      <Loader open={loading} />
    </div>
  );
};

export default EditSettings;
