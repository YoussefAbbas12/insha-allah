import { Route, Switch } from "wouter";
import Layout from "./components/Layout";
import Home from "./pages/Home";
import Courses from "./pages/Courses";
import CourseDetails from "./pages/CourseDetails";
import CoursePlayer from "./pages/CoursePlayer";
import Categories from "./pages/Categories";
import NotFound from "./pages/not-found";
import { ThemeProvider } from "./contexts/ThemeContext";
import { LanguageProvider } from "./contexts/LanguageContext";

function App() {
  return (
    <ThemeProvider>
      <LanguageProvider>
        <Layout>
          <Switch>
            <Route path="/" component={Home} />
            <Route path="/courses" component={Courses} />
            <Route path="/categories" component={Categories} />
            <Route path="/course/:slug" component={CourseDetails} />
            <Route path="/learn/:slug" component={CoursePlayer} />
            <Route component={NotFound} />
          </Switch>
        </Layout>
      </LanguageProvider>
    </ThemeProvider>
  );
}

export default App;
