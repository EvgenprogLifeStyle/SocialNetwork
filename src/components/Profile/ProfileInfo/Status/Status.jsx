import React, {useEffect, useState} from 'react';
import s from './Status.module.scss'

const Status = (props) => {
    const [editMode, setEditMode] = useState(false)
    const [status, setStatus] = useState(props.text)

    const activateEditMode = () => setEditMode(true)
    const onChangeStatus = (e) => setStatus(e.target.value)

    useEffect(() => {
        setStatus(props.text)
    }, [props.text])

    const deactivateEditMode = () => {
        setEditMode(false)
        props.updateStatus(status)
    }

    return (
        <>
            {!editMode
                ? <div onDoubleClick={activateEditMode} className={s.text}> {status || 'Нет статуса!'} </div>
                : <div className={s.input}>
                    <input
                        onBlur={deactivateEditMode}
                        onChange={onChangeStatus}
                        autoFocus={true}
                        type="text"
                        value={status}/>
                </div>
            }
        </>
    );
};

export default Status;