import React, { Component } from 'react'
import socket from 'socket.io-client'

import LateralBar from '../../components/LateralBar'
import Footer from '../../components/Footer'

import './styles.css'

export default class Chat extends Component {

    state = {
        users: [],
        message: '',
        dialog: [],
        user: null
    }

    handleChangeMessage = e => {
        this.setState({ message: e.target.value })
    }

    handleSendMessage = e => {
        e.preventDefault()
        const io = socket(process.env.REACT_APP_API_URL)
        const date = `${new Date().getHours()}:${new Date().getMinutes()}`
        const msg = { message: this.state.message, date, user: this.state.user }
        io.emit('send', msg)
        this.setState({ message: '' })
    }

    handleEnterPress = e => {
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            this.handleSendMessage(e)
        }
    }

    componentDidMount() {
        const user = this.props.match.params.username
        const io = socket(process.env.REACT_APP_API_URL)
        io.emit("join", user)
        io.on('update', (users) => {
            this.setState({ users, user })
        })
        io.on('updateJoinAll', (user) => {
            console.log(user)
        })
        io.on('chat', msgObj => {
            this.setState({ dialog: [...this.state.dialog, msgObj] })
        })
    }

    render() {
        return (<div className='col-md-12'>
            <div className='row'>

                <LateralBar users={this.state.users} />

                <div className='col-md-7 col-sm-12 chat-container'>
                    <h4>Chat melhor q o discord k k :(</h4>

                    <div className='content-chat'>
                        {this.state.dialog.map(msg => {

                            if (msg.user !== this.state.user) {
                                return (<div class="container-chat">
                                    <h5 className='username float-right'>{msg.user}</h5><br />
                                    <p className='float-right'>{msg.message}</p><br />
                                    <span class="float-left">{msg.date}</span>
                                </div>)
                            }

                            return (<div class="container-chat user">
                                <h5 className='username float-left'>{msg.user}</h5><br />
                                <p>{msg.message}</p>
                                <span style={{ color: "#fff" }} class="time-right">{msg.date}</span>
                            </div>)
                        })}
                    </div>
                    <div className='input-chat-content'>
                        <div className="input-group mb-3">
                            <input onKeyPress={this.handleEnterPress} onChange={this.handleChangeMessage} value={this.state.message}
                                type="text" className="form-control" placeholder="Digite sua mensagem" />
                            <div className="input-group-prepend">
                                <button onClick={this.handleSendMessage}
                                    className="btn btn-primary" type="button">Enviar</button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>

            <Footer />
        </div >)
    }
}