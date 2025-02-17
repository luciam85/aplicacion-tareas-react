import React from "react";

export const VisibilityControl = ({
  isChecked,
  callback,
  description,
  cleanTasks,
}) => {
  const handleDelete = () => {
    if (window.confirm(`Esta seguro que desea eliminarlo ${description}?`)) {
      cleanTasks();
    }
  };

  return (
    <div className="d-flex justify-content-between bg-secondary text-white text-center p-2 border-secondary">
      <div className="form-check form-switch">
        <input
          type="checkbox"
          className="form-check-input"
          checked={isChecked}
          onChange={(e) => callback(e.target.checked)}
        />
        <label htmlFor="form-check-label">Mostar {description}</label>
      </div>
      <button className="btn btn-danger btn-sm" onClick={handleDelete}>
        Limpiar
      </button>
    </div>
  );
};
