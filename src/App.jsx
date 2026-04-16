import { useState } from "react";
import Routes from "./app/routes";

function App() {
  const [page, setPage] = useState("home");
  const [topic, setTopic] = useState(null);

  return (
    <div className="app">
      <Routes
        page={page}
        setPage={setPage}
        topic={topic}
        setTopic={setTopic}
      />
    </div>
  );
}

export default App;