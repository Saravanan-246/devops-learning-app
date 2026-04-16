import Home from "../features/home/Home";
import Learn from "../features/learn/Learn";

function Routes({ page, setPage, topic, setTopic }) {

  const goToLearn = (selectedTopic) => {
    if (!selectedTopic) return; // safety
    setTopic(selectedTopic);
    setPage("learn");
  };

  const goHome = () => {
    setPage("home");
    setTopic(null);
  };

  switch (page) {
    case "learn":
      return <Learn topic={topic} goHome={goHome} />;

    case "home":
    default:
      return <Home goToLearn={goToLearn} />;
  }
}

export default Routes;