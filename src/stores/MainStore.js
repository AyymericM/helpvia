import React, { Component } from 'react'

const MainContext = React.createContext('Main')
const MainConsumer = MainContext.Consumer

class MainProvider extends Component {
    constructor() {
        super()
        this.state = {
            activeScreen: 'balance',
            planning: [
                {
                    name: 'Jean-Clodo',
                    hours: '12h',
                    descr: 'Un café svp chef'
                }
            ],
            data: {
                balance: 132.0,
                items: [
                    {
                        id: 1,
                        name: 'Café',
                        amount: 1.0
                    },
                    {
                        id: 2,
                        name: 'Cookie',
                        amount: 2.5
                    },
                    {
                        id: 3,
                        name: 'Chocolat chaud',
                        amount: 2.8
                    }
                ],
                profile: {
                    name: `Café de l'arche`,
                    adress: '',
                    mail: '',
                    type: '',
                    hours: [
                        {
                            day: 'Lundi',
                            closed: false,
                            hours: [9, 23]
                        },
                        {
                            day: 'Mardi',
                            closed: true,
                            hours: []
                        }
                    ]
                }
            }
        }

        this.actions = {
            navigate: this.navigate.bind(this),
        }
    }

    navigate(name) {
        this.setState({ activeScreen: name })
    }

    addItem(data) {
        const newItems = this.state.items.push(data)
        const id = Math.random().toString(36).substr(2, 9)
        newItems.id = id
        
        this.setState({
            data: {
                ...this.state.data,
                items: newItems
            }
        })
    }

    removeItem(id) {
        const newItems = this.state.items.filter(a => {
            a.id != id
        })

        this.setState({
            data: {
                ...this.state.data,
                items: newItems
            }
        })
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