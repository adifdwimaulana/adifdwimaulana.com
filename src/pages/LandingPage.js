import React from 'react';
import Header from 'partials/Header';

export default class LandingPage extends React.Component {
    render() {
        return (
            <>
                <Header {...this.props}></Header>
            </>
        )
    }
}
