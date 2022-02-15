import { useState } from 'react'
import Entry from './Entry'
import Client from '../core/Client'
import NewClientBtn from './NewClientBtn'

interface FormProps {
    client: Client
    noSave?: () => void
    changeClient?: (client : Client) => void

}

export default function Form(props : FormProps) {
    const id = props.client?.id
    const [name, setName] = useState(props.client?.name ?? '')
    const [age, setAge] = useState(props.client?.age ?? 0)

    return (
        <div>
            {id? (
                <Entry text="Código" value={id} className="mb-4" readonly></Entry>
            ): false}
            <Entry text="Nome" value={name} onChange={setName} className="mb-4"></Entry>
            <Entry text="Idade" type="number" value={age} onChange={setAge}></Entry>
            <div className='flex justify-end mt-5'>
                <NewClientBtn myColor='blue' className='mr-2' 
                    onClick={() => props.changeClient?.(new Client(name, +age, id))}>
                    {id ? 'Alterar' : 'Salvar'}
                </NewClientBtn>
                <NewClientBtn onClick={props.noSave}>
                    Cancelar
                </NewClientBtn>
            </div>
        </div>
    )
}