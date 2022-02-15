import Client from "../core/Client"
import { editIcon, trashIcon } from "./Icons"




interface TableProps {
    clients: Client[]
    clientSelect? : (client: Client) => void
    clientTrash? : (client: Client) => void


}



export default function Table(props: TableProps) {
    const showActions = props.clientSelect || props.clientTrash

    function renderHeader() {
        return (
            <tr>
                <th className="text-left p-4">Código</th>
                <th className="text-left p-4">Nome</th>
                <th className="text-left p-4">Idade</th>
                {showActions? <th className="p-4">Ações</th> : false }
            </tr>
        )

    }

    function renderData() {
        return props.clients?.map((client, i) => {
            return (
                <tr key={client.id} className={`${i % 2 === 0 ? 'bg-purple-200' : 'bg-purple-100' }`}>
                    <td className="text-left p-4">{client.id}</td>
                    <td className="text-left p-4">{client.name}</td>
                    <td className="text-left p-4">{client.age}</td>
                    {showActions? renderActions(client): false}   
                </tr>
            )
        })
    }

    function renderActions(client: Client) {
        return (
            <td className="flex justify-center">
                {props.clientSelect? (
                    <button onClick={() => props.clientSelect?.(client)} className={`flex justify-center items-center text-green-600 rounded-full 
                    hover:bg-purple-50 p-2 m-1`}>
                        {editIcon}
                    </button>
                ): false}
                {props.clientTrash? (
                    <button onClick={() => props.clientTrash?.(client)} className={`flex justify-center items-center text-red-600 rounded-full 
                    hover:bg-purple-50 p-2 m-1`}>
                        {trashIcon}
                    </button>
                ): false}  
            </td>
            
        )
    }

    
    return(
        <table className="w-full rounded-xl overflow-hidden">
            <thead className={`
                text-gray-100
                bg-gradient-to-r from-purple-500 to to-purple-800
            `}>
                {renderHeader()}
            </thead>
            <tbody>
                {renderData()}
            </tbody>
            
        </table>

    )
}