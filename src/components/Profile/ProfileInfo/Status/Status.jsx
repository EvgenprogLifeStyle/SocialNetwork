import React, {useState} from 'react';
import s from './Status.module.scss'

const Status = (props) => {

    let state = {editMode: false, text: props.text}
    const [isDataState, setIsDataState] = useState({})

    const activateEditMode = () => {
        setIsDataState({
            ...state, editMode: true
        })
    }

    const deactivateEditMode = () => {
        setIsDataState({
            ...state, editMode: false
        })
        props.updateStatus(isDataState.text)
    }

    const onChangeStatus = (e) => {
        setIsDataState({
            ...state,
            editMode: true,
            text: e.target.value
        })
    }

    return (
        <>
            {!isDataState.editMode
                ?
                <div onDoubleClick={activateEditMode} className={s.text}>
                    {props.text || 'Нет статуса!'}
                </div>
                :
                <div className={s.input}>
                    <input onBlur={deactivateEditMode} onChange={onChangeStatus} autoFocus={true} type="text"
                           value={isDataState.text}/>
                </div>
            }
        </>
    );
};

export default Status;