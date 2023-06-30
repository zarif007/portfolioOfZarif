import { FC } from "react";

import { cva, VariantProps } from "class-variance-authority";
import { cn } from "@/libs/utils";
import { Press_Start_2P } from '@next/font/google'

const press_Start_2P = Press_Start_2P({
  subsets: ['latin'],
  weight: ['400']
})

export const headingVariants = cva(
  "text-black dark:text-white font-extrabold leading-tight tracking-tighter",
  {
    variants: {
      size: {
        xl: "font-bold md:text-xl text-md",
        xl3: "md:text-5xl text-3xl font-extrabold",
        xl7: "md:text-9xl text-7xl font-extrabold",
      },
    },
    defaultVariants: {
      size: "xl",
    },
  }
);

interface LargeHeadingProps
  extends React.HTMLAttributes<HTMLHeadingElement>,
    VariantProps<typeof headingVariants> {}

const LargeHeading: FC<LargeHeadingProps> = ({
  children,
  className,
  size,
  ...props
}) => {
  return (
    <h1 {...props} className={`${cn(headingVariants({ size, className }))}`}>
      {children}
    </h1>
  );
};

export default LargeHeading;