import { ComponentType, useEffect } from 'react';
import { GreetingComponentProps } from '../models/GreetingComponentProps';

export function withGreeting<T extends GreetingComponentProps>(Component: ComponentType<T>) {
    const componentName = Component.name || 'Unknown';
    const func = (props: T) => {
        useEffect(() => {
            // console.log(`${props.greetIngPrefix}${componentName}`);
        }, []);

        return <Component {...props}></Component>;
    };
    func.displayName = `${componentName}WithGreeting`;
    return func;
}
