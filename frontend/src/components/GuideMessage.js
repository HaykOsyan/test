import React from 'react';
import { Card } from 'react-bootstrap';

const GuideMessage = () => {
    return (
        <div className='my-2'>
            <Card>
                <Card.Img variant="top" src="https://pythonist.ru/wp-content/uploads/2020/03/photo_2021-02-03_10-47-04-350x2000-1.jpg" />
                <Card.Body>
                    <Card.Text>
                        Идеальный карманный справочник для быстрого ознакомления с особенностями работы разработчиков на Python. Вы найдете море краткой информации о типах и операторах в Python, именах специальных методов, встроенных функциях, исключениях и других часто используемых стандартных модулях.
                    </Card.Text>
                </Card.Body>
            </Card>    
        </div>
    );
};

export default GuideMessage;