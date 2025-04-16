'use client';

import { Element, SubmitButtonProps } from '@/lib/types';
import Button from '@/ui/components/buttons/button';
import { useFormStatus } from 'react-dom';

export function SubmitButton({
	pendingText = 'Submitting...',
	label = 'Submit',
	...props
}: SubmitButtonProps): Element {
	const { pending } = useFormStatus();

	return (
		<Button
			type='submit'
			label={label}
			aria-disabled={pending}
			{...props}
		>
			{pending ? pendingText : label}
		</Button>
	);
}
