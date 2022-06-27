import React from "react";

export const TaskBanner = ({ taskItems }) => (
  <h4
    className="text-white text-center p-4 mb-5 fw-bold"
    style={{ background: "#303030" }}
  >
    <span className="text-info">
      ({taskItems.filter((t) => !t.done).length} Tareas por hacer)
    </span>
  </h4>
);
