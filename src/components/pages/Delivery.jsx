import { NavLink, Routes, Route } from "react-router-dom";

function Rezetka() {
  return <p>Rezetka Delivery Information</p>;
}

function NovaPoshta() {
  return <p>Nova Poshta Delivery Information</p>;
}

function UkrPoshta() {
  return <p>Ukr Poshta Delivery Information</p>;
}

export default function Delivery() {
  return (
    <div>
      <nav>
        <NavLink to="/delivery/rezetka">Rezetka</NavLink>
        <NavLink to="/delivery/nova-poshta">Nova Poshta</NavLink>
        <NavLink to="/delivery/ukr-poshta">Ukr Poshta</NavLink>
      </nav>

      <main>
        <Routes>
          <Route path="rezetka" element={<Rezetka />} />
          <Route path="nova-poshta" element={<NovaPoshta />} />
          <Route path="ukr-poshta" element={<UkrPoshta />} />
          <Route index element={<Rezetka />} /> {/* Default route */}
        </Routes>
      </main>
    </div>
  );
}
