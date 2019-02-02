import * as React from 'react';

interface IHelloProps {
    name: string;
}

class Hello extends React.PureComponent<IHelloProps> {
    constructor(props: IHelloProps) {
        super(props)
    }
    
    public render() {
        return <h1>Hello, {this.props.name}</h1>
    }
}

export default Hello;