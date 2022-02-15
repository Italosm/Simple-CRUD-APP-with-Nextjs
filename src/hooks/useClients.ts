import Client from "../core/Client";
import ClientCollection from "../backend/db/ClientCollection";
import ClientRepository from "../core/ClientRepository";
import { useEffect, useState } from "react";
import useViewTableOrForm from "./useViewTableOrForm";


export default function useClients() {
  const repo: ClientRepository = new ClientCollection();
  const [client, setClient] = useState<Client>(Client.empty());
  const [clients, setClients] = useState<Client[]>([]);
  const {viewForm, viewTable, visibleForm, visibleTable} = useViewTableOrForm()

  // eslint-disable-next-line react-hooks/exhaustive-deps
  useEffect(getAll, []);

  function getAll() {
    repo.getAll().then((clients) => {
      setClients(clients);
      viewTable();
    });
  }

  function clientSelect(client: Client) {
    setClient(client);
    viewForm();
  }
  async function clientTrash(client: Client) {
    await repo.delete(client);
    getAll();
  }

  async function saveClient(client: Client) {
    await repo.save(client);
    getAll();
  }

  function newClient() {
    setClient(Client.empty());
    viewForm();
  }
  return {
    client,
    clients,
    visibleForm,
    visibleTable,
    viewForm,
    viewTable,
    saveClient,
    newClient,
    clientTrash,
    clientSelect, 
    getAll
  }
}
