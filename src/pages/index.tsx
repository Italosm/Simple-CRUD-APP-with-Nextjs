import Layout from "../components/Layout";
import Table from "../components/Table";
import NewClientBtn from "../components/NewClientBtn";
import Form from "../components/Form";
import useClients from "../hooks/useClients";

export default function Home() {

  const { client, 
          clients, 
          clientSelect,
          clientTrash,
          saveClient,
          visibleTable,
          viewTable, 
          newClient } = useClients()
  return (
    <div
      className={`
      flex justify-center items-center h-screen
      bg-gradient-to-r from-blue-500 to-purple-500 text-white
      `}
    >
      <Layout title="Cadastro Simples">
        {visibleTable? (
          <>
            <div className="flex justify-end">
              <NewClientBtn
                onClick={newClient}
                myColor="green"
                className="mb-4"
              >
                Novo Cliente
              </NewClientBtn>
            </div>
            <Table
              clientSelect={clientSelect}
              clientTrash={clientTrash}
              clients={clients}
            ></Table>
          </>
        ) : (
          <Form
            client={client}
            noSave={() => viewTable()}
            changeClient={saveClient}
          />
        )}
      </Layout>
    </div>
  );
}
