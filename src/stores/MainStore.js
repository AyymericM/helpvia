import React, { Component } from 'react'

const MainContext = React.createContext('Main')
const MainConsumer = MainContext.Consumer

class MainProvider extends Component {
    constructor() {
        super()
        this.state = {
            activeScreen: 'home'
        }

        this.actions = {
            navigate: this.navigate.bind(this),
        }
    }

    navigate(name) {
        this.setState({ activeScreen: name })
    }

    render () {
        return (
            <MainContext.Provider value={{state: this.state, actions: this.actions}}>
                {this.props.children}
            </MainContext.Provider>
        )
    }
}

export {
    MainContext,
    MainProvider,
    MainConsumer
}