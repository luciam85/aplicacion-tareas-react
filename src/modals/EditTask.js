import React, { useState, useEffect } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTaskPopup = ({ modal, toggle, updateTask, taskObj }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [profesor, setProfesor] = useState("");
  const [horario, setHorario] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;

    if (name === "taskName") {
      setTaskName(value);
    }
    if (name === "description") {
      setDescription(value);
    }
    if (name === "profesor") {
      setProfesor(value);
    }
    if (name === "horario") {
      setHorario(value);
    }
  };

  useEffect(() => {
    setTaskName(taskObj.Name);
    setDescription(taskObj.Description);
    setProfesor(taskObj.Profesor);
    setHorario(taskObj.Horario);
  }, []);

  const handleUpdate = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["Name"] = taskName;
    tempObj["Description"] = description;
    tempObj["Profesor"] = profesor;
    tempObj["Horario"] = horario;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Actualizar Materia</ModalHeader>
      <ModalBody>
        <div className="form-group">
          <label>Nombre de la materia</label>
          <input
            type="text"
            className="form-control"
            value={taskName}
            onChange={handleChange}
            name="taskName"
          />
        </div>
        <div className="form-group">
          <label>Descripcion</label>
          <textarea
            rows="5"
            className="form-control"
            value={description}
            onChange={handleChange}
            name="description"
          ></textarea>
        </div>
        <div className="form-group">
          <label>Profesor</label>
          <input
            type="text"
            className="form-control"
            value={profesor}
            onChange={handleChange}
            name="profesor"
          />
        </div>
        <div className="form-group">
          <label>Horarios</label>
          <textarea
            rows="3"
            className="form-control"
            value={horario}
            onChange={handleChange}
            name="horario"
          ></textarea>
        </div>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpdate}>
          Actualizar
        </Button>{" "}
        <Button color="secondary" onClick={toggle}>
          Cancelar
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTaskPopup;
