import React, {ChangeEvent, useState} from 'react';
import {TextField} from '@material-ui/core';
import {InputNya} from "./inputNya";

type EditableSpanPropsType = {
    value: string,
    saveNewTitle: (newTitle: string) => void
}

export function EditableSpan(props: EditableSpanPropsType) {
    let [editMode, setEditMode] = useState(false);
    let [title, setTitle] = useState<string>(props.value);

    const activateEditMode = () => {
        setEditMode(true);
        // setTitle(props.value);
    };

    const deActivateEditMode = () => {
        setEditMode(false);
        props.saveNewTitle(title);
    };

    const changeTitle = (e: ChangeEvent<HTMLInputElement>) => {
        setTitle(e.currentTarget.value)
    };

    return editMode
        ? <InputNya title={title} onTitleChange={changeTitle} deActivateEditMode={deActivateEditMode} />
        : <span onDoubleClick={activateEditMode}>{props.value}</span>
}
