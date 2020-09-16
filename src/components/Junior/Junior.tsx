import React, {useState} from 'react';
import {EditableSpan} from "../../common/EditableSpan";

export function Junior() {
    let [title, setTitle] = useState<string>('justdoit');
    const saveNewTitle = (title: string) => {
        setTitle(title)
    }
    return (
        <div>
            Junior
            <div>
                <EditableSpan value={title} saveNewTitle={saveNewTitle}/>
            </div>
        </div>
    )
}



//
// удалить package-lock.json
// delete node_modules
// npm cache clean --force
// yarn install
//

