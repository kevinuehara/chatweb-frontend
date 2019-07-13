import React from 'react'

import './styles.css'

const LateralBar = ({ users }) => {

    return (<div className='col-md-3 col-sm-12 lateral-bar'>
        <h3>Usuários Conectados</h3>
        <ul>
            {users.map(user => {
                return (<li className='username-font' key={user.id}>{user.username}
                    <span className="dot"></span>
                </li>)
            })}
        </ul>
        <button type="button" className="btn btn-danger" data-toggle="modal" data-target="#exampleModal">
            Como funciona esse maravilhoso chat?
        </button>

        <div className="modal fade modal-works" id="exampleModal" tabIndex="-1" role="dialog" aria-labelledby="exampleModalLabel" aria-hidden="true">
            <div className="modal-dialog" role="document">
                <div className="modal-content">
                    <div className="modal-header">
                        <h5 className="modal-title" id="exampleModalLabel">Como funciona?</h5>
                        <button type="button" className="close" data-dismiss="modal" aria-label="Close">
                            <span aria-hidden="true">&times;</span>
                        </button>
                    </div>
                    <div className="modal-body">
                    Funciona como qualquer outro chat né meu kkkkkk<br/>
                    O chat foi criado usando web socket com NodeJS (aka. SocketIO).<br/>
                    Qualquer um que entrar no site pode interagir pois a sala é única. <br/>

                    <b>OBS:</b> As mensagens não são salvas em nenhum momento, ou seja, caso dê refresh
                    no browser todas as mensagens serão perdidas ok ;) <br/><br/>

                    <b>Criado por Kevin Uehara</b><br/>
                    <a href="https://kevinuehara.netlify.com/" target="_blank">Sobre mim</a>
                    </div>
                    <div className="modal-footer">
                        <button type="button" className="btn btn-primary" data-dismiss="modal">Entendi, quero conversar</button>
                    </div>
                </div>
            </div>
        </div>

        <div className="lds-circle"><div></div></div>
    </div>)
}

export default LateralBar