import React, { Component } from 'react'

import './styles.css'

export default class Chat extends Component {

    state = {
        username: null
    }

    handleCreateUser = e => {
        e.preventDefault()
        this.props.history.push(`/chat/${this.state.username}`)
    }

    handleEnterPress = e => {
        e.preventDefault()
        if (e.key === 'Enter') {
            console.log('enter press here! ')
            this.handleCreateUser(e)
        }
    }

    handleChangeUsername = e => {
        this.setState({ username: e.target.value })
    }

    render() {
        return (<div className='col-md-12'>
            <div className='content'>
                <div className='row offset-md-2'>
                    <div className='col-md-4 container-left'>
                        <h4 className='title-login'>Chatweb Login</h4>
                    </div>
                    <div className='col-md-5 container-right'>
                        <form>
                            <div class="form-group">
                                <label for="formGroupExampleInput"><b>Usuário</b></label>
                                <input onkeyPress={this.handleEnterPress} class="form-control" type="text" placeholder="Digite seu usuário" onChange={this.handleChangeUsername} />
                            </div>

                            <button onClick={this.handleCreateUser} class="btn btn-primary">Entrar</button>
                        </form>
                    </div>
                </div>
            </div>
            <p className='legend'>Criado por Kevin Uehara .::. 2019</p>
        </div>)
    }
}