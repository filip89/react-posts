const greetingStart = 'Hello from';

type Greeter = (componentName: string) => void;

function getGreeting(componentName: string): string {
    return `${greetingStart} ${componentName}`;
}

const consoleGreet: Greeter = (componentName) => {
    console.log(getGreeting(componentName));
};

// other example
// const alertGreet: Greeter = (componentName) => {
//     alert(getGreeting(componentName));
// };

const greet = consoleGreet;

export { greet };
export type { Greeter };
