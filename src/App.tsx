import { Routes, Route } from "react-router-dom";
import Layout from "./components/Layout";
import HomePage from "./pages/HomePage";
import EducationPage from "./pages/EducationPage";
import ExperiencePage from "./pages/ExperiencePage";
import SkillsPage from "./pages/SkillsPage";
import CertificationsPage from "./pages/CertificationsPage";
import VolunteeringPage from "./pages/VolunteeringPage";
import ProjectsPage from "./pages/ProjectsPage";
import CreditsPage from "./pages/CreditsPage";

export default function App() {
    return (
        <Routes>
            <Route element={<Layout />}>
                <Route path="/" element={<HomePage />} />
                <Route path="/education" element={<EducationPage />} />
                <Route path="/experience" element={<ExperiencePage />} />
                <Route path="/skills" element={<SkillsPage />} />
                <Route path="/certifications" element={<CertificationsPage />} />
                <Route path="/volunteering" element={<VolunteeringPage />} />
                <Route path="/projects" element={<ProjectsPage />} />
                <Route path="/credits" element={<CreditsPage />} />
            </Route>
        </Routes>
    );
}