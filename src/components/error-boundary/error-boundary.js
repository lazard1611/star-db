import React, {Component} from "react";
import ErrorInd from "../error-indicator/error-indicator";

export default class ErrorBoundary extends Component {
    state = {
        hasError: false,
    }

    componentDidCatch(error, errorInfo) {
        this.setState({
            hasError: true,
        })
    }

    render() {
        if (this.state.hasError) {
            return <ErrorInd/>
        }
        return this.props.children;
    }
}
