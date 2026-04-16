import Home from "../features/home/Home";
import Learn from "../features/learn/Learn";

function Routes({ page, setPage, topic, setTopic }) {
  
  const goToLearn = (selectedTopic) => {
    setTopic(selectedTopic);
    setPage("learn");
  };

  const goHome = () => {
    setPage("home");
    setTopic(null);
  };

  if (page === "learn") {
    return <Learn topic={topic} goHome={goHome} />;
  }

  return <Home goToLearn={goToLearn} />;
}

export default Routes;