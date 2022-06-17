import React from 'react';
import MedidasForm from './MedidasForm';
import styles from './Medidas.module.css';

const Medidas = (props) => {

    const saveMedidasInfoHandler = (medidaInfoData) => {
        const medidasData = medidaInfoData;
        props.onAddMedidas(medidasData);    
    }


    return(
        <div>
            <MedidasForm onSaveMedidasInfo={saveMedidasInfoHandler} />
        </div>
    )
}

export default Medidas;
