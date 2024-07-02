import React, { useState } from 'react';
import { SubmitHandler, useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { z } from 'zod';
import { Link } from 'react-router-dom';
import { Input } from './ui/input';
import Label from './ui/label';
import { PiUserCircleFill } from 'react-icons/pi';
import FormError from './ui/form-error';
import useProfileData from '../hooks/useProfileData';
import toast from 'react-hot-toast';

const schema = z.object({
    username: z.string().min(1, 'Username is required').trim(),
    addharNumber: z
        .string()
        .regex(/^\d{4}$/, 'Addhar Number must be 4 digits')
        .trim(),
    purchaseDate: z.string().min(1, 'Purchase Date is required').trim(),
    passValidFrom: z.string().min(1, 'Pass Valid From date is required').trim(),
    passValidTill: z.string().min(1, 'Pass Valid Till date is required').trim(),
    passId: z.string().min(1, 'Pass ID is required').trim(),
    photo: z.any().optional(),
});

type FormFields = z.infer<typeof schema>;

export default function Profile() {
    const { profileData, updateProfileData } = useProfileData();
    const [photoPreview, setPhotoPreview] = useState<string | null>(profileData?.photo || null);

    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<FormFields>({
        resolver: zodResolver(schema),
        mode: 'onSubmit',
        // @ts-ignore
        defaultValues: profileData,
    });

    const onSubmit: SubmitHandler<FormFields> = async (data: any) => {
        try {
            const fileToBase64 = (file: any) =>
                new Promise<string>((resolve, reject) => {
                    const reader = new FileReader();
                    reader.readAsDataURL(file);
                    reader.onload = () => resolve(reader.result as string);
                    reader.onerror = error => reject(error);
                });

            const photoBase64 = data.photo ? await fileToBase64(data?.photo[0]) : null;

            const formData = { ...data, photo: photoBase64 };

            updateProfileData(formData);

            toast.success('Profile updated', { duration: 4000, position: 'top-center' });
        } catch (error: any) {
            console.log('Error saving data', error);
        }
    };

    const handlePhotoChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const file = event.target.files?.[0];
        if (file) {
            const reader = new FileReader();
            reader.onloadend = () => {
                setPhotoPreview(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <form className='flex flex-col items-center justify-center px-4 py-8' onSubmit={handleSubmit(onSubmit)}>
            <h2 className='text-gray-900 text-base font-semibold leading-7'>Profile</h2>
            <div className='grid grid-cols-1 gap-x-6 gap-y-4'>
                <div className=''>
                    <Label>Username</Label>
                    <Input {...register('username')} placeholder='Ex: Gagan' />
                    <FormError message={errors.username?.message} />
                </div>

                <div className='col-span-full'>
                    <label htmlFor='photo' className='text-gray-900 block text-sm font-medium leading-6'>
                        Photo
                    </label>
                    <div className='mt-2 flex items-center gap-x-3'>
                        {photoPreview ? (
                            <img src={photoPreview} alt='Profile' className='h-10 w-10 rounded-full object-cover object-center' />
                        ) : (
                            <PiUserCircleFill size={40} className='size-12 text-neutral-400' />
                        )}
                        <input
                            type='file'
                            {...register('photo')}
                            className='text-gray-900 ring-gray-300 rounded-md bg-white px-2.5 py-1.5 text-sm font-semibold shadow-sm'
                            onChange={handlePhotoChange}
                        />
                    </div>
                    <FormError message={errors.photo?.message} />
                </div>

                <div className=''>
                    <Label>Addhar Number (last 4 digits)</Label>
                    <Input {...register('addharNumber')} placeholder='Ex: 1234' />
                    <FormError message={errors.addharNumber?.message} />
                </div>

                <div className=''>
                    <Label>Purchase Date - 27 May 2024, 08:28 AM</Label>
                    <Input {...register('purchaseDate')} placeholder='Ex: 27 May 2024, 08:28 AM' />
                    <FormError message={errors.purchaseDate?.message} />
                </div>

                <div className=''>
                    <Label>Pass Valid From - 27 May 2024, 12:00 AM</Label>
                    <Input {...register('passValidFrom')} placeholder='Ex: 27 May 2024, 12:00 AM' />
                    <FormError message={errors.passValidFrom?.message} />
                </div>

                <div className=''>
                    <Label>Pass Valid till - 27 May 2024, 11:59 PM</Label>
                    <Input {...register('passValidTill')} placeholder='Ex: 27 May 2024, 11:59 PM' />
                    <FormError message={errors.passValidTill?.message} />
                </div>

                <div className=''>
                    <Label>Pass ID - TPASS1390276</Label>
                    <Input {...register('passId')} placeholder='TPASS1390276' />
                    <FormError message={errors.passId?.message} />
                </div>
            </div>
            <div className='mt-6 flex w-full max-w-md items-center justify-end gap-x-6'>
                <Link to='/'>
                    <button type='button' className='text-gray-900 text-sm font-semibold leading-6'>
                        Cancel
                    </button>
                </Link>
                <button type='submit' className='rounded-md bg-black px-3 py-2 text-sm font-semibold text-white shadow-sm' disabled={isSubmitting}>
                    {isSubmitting ? 'Saving..' : 'Save'}
                </button>
            </div>
        </form>
    );
}
