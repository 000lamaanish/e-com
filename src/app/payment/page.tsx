
'use client';

import { useForm } from 'react-hook-form';
import { zodResolver } from '@hookform/resolvers/zod';
import { paymentSchema, PaymentFormData } from './paymentschema';

export default function PaymentForm() {
    const {
        register,
        handleSubmit,
        formState: { errors, isSubmitting },
    } = useForm<PaymentFormData>({
        resolver: zodResolver(paymentSchema),
    });

    const onSubmit = (data: PaymentFormData) => {
        console.log('Payment Data:', data);
    };

    return (
        <form onSubmit={handleSubmit(onSubmit)} className="max-w-md mx-auto p-4 bg-white shadow-md rounded">
            <h2 className="text-2xl font-bold mb-4">Payment Information</h2>

            <div className="mb-4">
                <label className="block text-gray-700">Name</label>
                <input
                    {...register('name')}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Full Name"
                />
                {errors.name && <p className="text-red-500 text-sm">{errors.name.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Email</label>
                <input
                    {...register('email')}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="Email Address"
                />
                {errors.email && <p className="text-red-500 text-sm">{errors.email.message}</p>}
            </div>

            <div className="mb-4">
                <label className="block text-gray-700">Card Number</label>
                <input
                    {...register('cardNumber')}
                    className="w-full px-3 py-2 border rounded"
                    placeholder="1234 5678 9012 3456"
                />
                {errors.cardNumber && <p className="text-red-500 text-sm">{errors.cardNumber.message}</p>}
            </div>

            <div className="mb-4 flex space-x-4">
                <div className="w-1/2">
                    <label className="block text-gray-700">Expiry (MM/YY)</label>
                    <input
                        {...register('expiry')}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="MM/YY"
                    />
                    {errors.expiry && <p className="text-red-500 text-sm">{errors.expiry.message}</p>}
                </div>

                <div className="w-1/2">
                    <label className="block text-gray-700">CVC</label>
                    <input
                        {...register('cvc')}
                        className="w-full px-3 py-2 border rounded"
                        placeholder="CVC"
                    />
                    {errors.cvc && <p className="text-red-500 text-sm">{errors.cvc.message}</p>}
                </div>
            </div>

            <button
                type="submit"
                disabled={isSubmitting}
                className="w-full bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
            >
                {isSubmitting ? 'Processing...' : 'Pay Now'}
            </button>
        </form>
    );
}
