import { useEffect } from 'react';
import { Greeter } from '../utilities/greet';

function useGreeting(componentName: string, greet: Greeter): void {
    useEffect(() => {
        greet(componentName);
    }, []);
}

export { useGreeting };
