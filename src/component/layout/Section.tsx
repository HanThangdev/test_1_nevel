import type { ReactNode } from 'react';

type ISectionProps = {
  title?: string;
  description?: string;
  yPadding?: string;
  children: ReactNode;
  className?: string;
  isFullWidth?: boolean;
};

const Section = (props: ISectionProps) => {
  return (
    <div className={props?.className || ''}>
      <div
        className={`mx-auto ${props?.isFullWidth ? 'w-full' : 'max-w-screen-xl'}`}
      >
        {(props.title || props.description) && (
          <div className="mb-12 text-center">
            {props.title && (
              <h2 className="text-4xl font-bold text-gray-900">
                {props.title}
              </h2>
            )}
            {props.description && (
              <div className="mt-4 text-xl md:px-20">{props.description}</div>
            )}
          </div>
        )}

        {props.children}
      </div>
    </div>
  );
};

export { Section };
