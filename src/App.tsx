import { ReactElement, useState } from 'react';
// import { useQuery, useMutation, useQueryClient, QueryClient, QueryClientProvider } from 'react-query';
import { ReactQueryDevtools } from 'react-query/devtools';
import Navbar from './components/Navbar';
import Planets from './components/Planets';
import People from './components/People';
// import logo from './logo.svg';
// import './App.css';
import EmployeeList from './components/EmployeeList';

// Create a client
// const queryClient = new QueryClient();

function App(): ReactElement {
  const [page, setPage] = useState('planets');

  return (
    <>
      <div className="App">
        <h1>Star Wars Info</h1>
        <Navbar setPage={setPage} />
        <div className="content">{page === 'planets' ? <Planets /> : <People />}</div>
        <EmployeeList />
      </div>
      <ReactQueryDevtools initialIsOpen={false} />
    </>
  );
}

export default App;
