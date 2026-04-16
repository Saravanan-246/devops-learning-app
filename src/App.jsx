import { useState } from "react";
import Routes from "./app/routes";

function App() {
  const [page, setPage] = useState("home");
  const [topic, setTopic] = useState(null);

  return (
    <Routes
      page={page}
      setPage={setPage}
      topic={topic}
      setTopic={setTopic}
    />
  );
}

export default App;