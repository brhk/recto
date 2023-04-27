import { Route, Routes } from "../node_modules/react-router-dom/dist/index"
import { AddEditCompanyProfile } from "./Container/AddEditCompanyProfile"
import { Home } from "./Container/Home"

export const AppRoutes = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/company" element={<AddEditCompanyProfile />} />
    </Routes>
  )
}
