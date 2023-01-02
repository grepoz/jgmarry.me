import React, { Component } from "react";

export default class ErrorBoundary extends Component {
    constructor(props) {
        super(props);
        this.state = {
            connectionError: false,
            connectionErrorMessage: "Error while connecting with database. Please try again later."
        };
    }

    static getDerivedStateFromError(error) {
        return { hasError: true };
    }

    componentDidCatch(error, errorInfo) {
        // TODO
        // email(error, errorInfo);
        console.log(`${this.state.connectionErrorMessage} Error: ${error}`);
    }

    render() {
        if (this.state.hasError) {
            return <h1>{`${this.state.connectionErrorMessage}`}</h1>;
        }

        return this.props.children;
    }
}