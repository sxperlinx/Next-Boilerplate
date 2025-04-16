'use client';

import { buttonVariants } from './button-variants';
import { Element, ButtonProps } from '@/lib/types';
import cn from '@/lib/utils';
import React from 'react';

function Button(
	{ className, variant, label, size, ...props }: ButtonProps,
	ref: React.Ref<HTMLButtonElement>,
): Element {
	return (
		<button
			className={cn(buttonVariants({ variant, size, className }))}
			ref={ref}
			{...props}
		>
			{label}
		</button>
	);
}

Button.displayName = 'Button';

export default React.forwardRef(Button);
