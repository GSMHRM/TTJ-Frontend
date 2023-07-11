import { Routes, Route } from "react-router-dom";
import * as P from "../pages";

export default function Router() {
    return (
        <Routes>
            <Route path="/" element={<P.Login />} />
        </Routes>
    )
}