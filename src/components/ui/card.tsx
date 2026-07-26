import * as React from "react";

interface CardProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * Card – root container
 */
export const Card = React.forwardRef<HTMLElement, CardProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        rounded-lg border bg-card text-card-foreground shadow-sm
        ${className}
      `}
      {...props}
    />
  )
);
Card.displayName = "Card";

interface CardHeaderProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * CardHeader – flex container for title/description
 */
export const CardHeader = React.forwardRef<HTMLElement, CardHeaderProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        flex flex-col space-y-1.5 p-6
        ${className}
      `}
      {...props}
    />
  )
);
CardHeader.displayName = "CardHeader";

interface CardTitleProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * CardTitle – heading
 */
export const CardTitle = React.forwardRef<HTMLElement, HTMLElement, CardTitleProps>(
  ({ className, ...props }, ref) => (
    <h2
      ref={ref}
      className={`
        text-xl font-semibold leading-none tracking-tight
        ${className}
      `}
      {...props}
    />
  )
);
CardTitle.displayName = "CardTitle";

interface CardDescriptionProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * CardDescription – paragraph text
 */
export const CardDescription = React.forwardRef<HTMLElement, CardDescriptionProps>(
  ({ className, ...props }, ref) => (
    <p
      ref={ref}
      className={`
        text-sm text-muted-foreground
        ${className}
      `}
      {...props}
    />
  )
);
CardDescription.displayName = "CardDescription";

interface CardContentProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * CardContent – main content area
 */
export const CardContent = React.forwardRef<HTMLElement, CardContentProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        p-6 pt-0
        ${className}
      `}
      {...props}
    />
  )
);
CardContent.displayName = "CardContent";

interface CardFooterProps extends React.HTMLAttributes<HTMLElement> {
  className?: string;
}

/**
 * CardFooter – flex container for actions
 */
export const CardFooter = React.forwardRef<HTMLElement, CardFooterProps>(
  ({ className, ...props }, ref) => (
    <div
      ref={ref}
      className={`
        flex items-center p-6 pt-0
        ${className}
      `}
      {...props}
    />
  )
);
CardFooter.displayName = "CardFooter";