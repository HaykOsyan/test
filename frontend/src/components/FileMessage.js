import React from 'react';
import { Button, Nav } from 'react-bootstrap';
import { zipFile } from '../http/fileAPI';
import { FILE_ROUTE } from '../utils/consts';

const FileMessage = () => {

    const downloadZip = () => {
        zipFile()
    }

    return (
        <div className='my-2'>
            <Button
                    variant="info"
                    onClick={downloadZip}
                >
                <Nav.Link 
                href={FILE_ROUTE}
                >
                Скачать идеальный карманный справочник
                </Nav.Link>
            </Button>
        </div>
    );
};

export default FileMessage;