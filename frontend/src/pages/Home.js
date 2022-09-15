import React, { useContext, useState } from 'react';
import {Button, Form, FormControl, Modal} from 'react-bootstrap';
import FileMessage from '../components/FileMessage';
import GuideMessage from '../components/GuideMessage';
import WeatherMessage from '../components/WeatherMessage';
import { weather } from '../http/weatherApi';
import '../styles/home.css';
import { confirmAlert } from 'react-confirm-alert';
import 'react-confirm-alert/src/react-confirm-alert.css';
import { createMessage } from '../http/messageAPI';
import { Context } from '..';
import { toJS } from 'mobx';

const Home = () => {
    const {user} = useContext(Context)
    const [show, setShow] = useState(false);
    const [message, setMessage] = useState('');
    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);
    const [divInner, setDivInner] =useState('')
    const [dataWeather, setDataWeather] = useState('')
    const getWeather = async () => {
        let data = await weather()
        setDataWeather(data.smart)
        setDivInner(<WeatherMessage data={dataWeather}/>)    
}
    const getGuide = () => {
        setDivInner(
            <div>
                <GuideMessage/>
                <FileMessage/>
            </div>
        )
    }

    const sentMessage = async () => {
        await createMessage(message,toJS(user.user.id)
        )        
    }
    const writeMessage = () => {
        confirmAlert({
            message: 'Вы выбрали рассылку всем пользователям. Вы уверен что хотите это сделать?',
            buttons: [
              {
                label: 'Уверен',
                onClick: () => handleShow()
              },
              {
                label: 'Отмена',
              }
            ]
          });
    }
    return (
        <div className='form-login'>    
            <Button 
                variant="danger" 
                type="button"
                onClick={getWeather}
            >
                Погода в Канаде
            </Button>            
            <Button 
                variant="primary" 
                type="submit"
                onClick={getGuide}
            >
                Хочу почитать! 
            </Button> 
            <Button 
                variant="warning" 
                type="submit"
                onClick={writeMessage}
            >
                Сделать рассылку
            </Button>
            <div className='messages-block'>
                {divInner}
                <Modal show={show} onHide={handleClose}>
                    <Modal.Header closeButton>
                    <Modal.Title>Введите сообщение, которое хотите отправить всем пользователям.</Modal.Title>
                    </Modal.Header>
                    <Modal.Body>
                        <Form>
                            <FormControl
                                type="text"
                                placeholder="Сообщение"
                                className='my-3'
                                value = {message}
                                onChange = {e => setMessage(e.target.value)}
                            />
                            <Button variant="primary" type="submit" onClick={sentMessage}>
                                Отправить
                            </Button>
                        </Form>
                    </Modal.Body>
                </Modal>
            </div>
        </div>
    );
};

export default Home;