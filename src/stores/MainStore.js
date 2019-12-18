import React, { Component } from 'react'

const MainContext = React.createContext('Main')
const MainConsumer = MainContext.Consumer

class MainProvider extends Component {
    constructor() {
        super()
        this.state = {
            activeScreen: 'donations',
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
                        id: '2bl6rn1ph',
                        emoji: '🥐',
                        name: 'Croissants',
                        amount: 15,
                        price: 1.0
                    },
                    {
                        id: '9jsx86nm4',
                        emoji: '🥪',
                        name: 'Sandwichs poulet',
                        amount: 4,
                        price: 3.8
                    },
                    {
                        id: '1naip2jzl',
                        emoji: '💧',
                        name: `Bouteille d'eau`,
                        amount: 30,
                        price: 1.1
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