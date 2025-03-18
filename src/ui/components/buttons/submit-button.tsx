'use client';

import { Element } from '@/lib/types';
import { SubmitButtonProps } from '@/lib/props';
import Button from '@/ui/components/buttons/button';
import { useFormStatus } from 'react-dom';

export function SubmitButton({
	children,
	pendingText = 'Submitting...',
	...props
}: SubmitButtonProps): Element {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			aria-disabled={pending}
			{...props}
		>
			{pending ? pendingText : children}
		</Button>
	);
}
