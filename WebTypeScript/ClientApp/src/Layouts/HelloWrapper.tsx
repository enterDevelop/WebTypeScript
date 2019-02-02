import * as React from 'react';
import {connect} from 'react-redux';
import {Dispatch} from 'redux';
import { IRootReducerState } from '../Reducers/RootReducer';
import Hello from './../Components/Hello';
import {getPokemonName} from './../Actions/PokemonActions';

interface HelloWrapperCombinedProps extends HelloWrapperStateProps, HelloWrapperDispatchProps {}

class HelloWrapper extends React.PureComponent<HelloWrapperCombinedProps> {
    public componentDidMount(): void {
        this.props.getPokemonName();    
    }

    public render(): React.ReactNode {
        if (this.props.isLoading)
            return <h1>Loading...</h1>
        if (this.props.errorMessage)
            return null;
        return <Hello name={this.props.name}/>;
    }
}


interface HelloWrapperStateProps {
    name: string;
    isLoading: boolean;
    errorMessage: string;
}

interface HelloWrapperDispatchProps {
    getPokemonName: () => void;
}

const mapStateToProps = (state: IRootReducerState): HelloWrapperStateProps => ({
    name: state.pokemon.name,
    isLoading: state.pokemon.fetching,
    errorMessage: state.pokemon.errorMessage
});

const mapDispatchToProps = (dispatch: Dispatch<IRootReducerState>): HelloWrapperDispatchProps => ({
    getPokemonName: () => dispatch(getPokemonName())
});

export default connect(mapStateToProps, mapDispatchToProps)(HelloWrapper);