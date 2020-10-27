import React from 'react';

type Props = {
    header?: React.ReactNode;
    children: React.ReactNode;
    footer?: React.ReactNode;
};

function Template({ header, children, footer }: Props) {
    return (
        <div>
            {header}
            <div>{children}</div>
            {footer}
        </div>
    );
}

export default Template;
