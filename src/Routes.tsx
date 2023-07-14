import { Route, Routes } from "../node_modules/react-router-dom/dist/index"
import { PageNotFound } from "./Components/PageNotFound"
import { AddEditCompanyProfile } from "./Container/AddEditCompanyProfile"
import { DigitalClock } from "./Container/DigitalClock"
import { Home } from "./Container/Home"
import { Register } from "./Container/Register"

export const AppRoutes = function () {
  return (
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/register" element={<Register />} />
      <Route path="/register/:token" element={<AddEditCompanyProfile />} />
      <Route path="/company" element={<AddEditCompanyProfile />} />
      <Route path="/clock" element={<DigitalClock />} />
      <Route path="*" element={<PageNotFound />} />
    </Routes>
  )
}
