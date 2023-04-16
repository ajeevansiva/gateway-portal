import { Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { ADD_GATEWAY } from "../Data/AddGateway";

const AddGateway = ({ gateway, open, onCancel }) => {
  const [serialNumber, setSerialNumber] = useState("");
  const [gateName, setGateName] = useState("");
  const [ipAddress, setIpAddress] = useState("");

  useEffect(() => {
    if (gateway) {
      setSerialNumber(gateway.serialNumber);
      setGateName(gateway.name);
      setIpAddress(gateway.ipv4Address);
    }
  }, [gateway]);

  const handleSubmit = () => {
    onSubmit(serialNumber, gateName, ipAddress);
    handleClose();
  };

  return (
    <>
      <Modal
        title="Add Gateway"
        open={open}
        onOk={handleSubmit}
        onCancel={onCancel}
      >
        {ADD_GATEWAY.map((field) => {
          if (field.show) {
            if (field.type === "select") {
              return (
                <div className="create_form_row" key={field.id}>
                  <div>{field.label}</div>
                </div>
              );
            } else {
              return (
                <div className="create_form_row" key={field.id}>
                  <div>{field.label}</div>
                  <Input
                    placeholder={field.label}
                    name={field.name}
                    className={field.className}
                    type={field.type}
                    disabled={field.disabled}
                    onChange={(e) => {
                      if (field.name === "serialNumber") {
                        setSerialNumber(e.target.value);
                      } else if (field.name === "name") {
                        setGateName(e.target.value);
                      } else if (field.name === "ipv4Address") {
                        setIpAddress(e.target.value);
                      }
                    }}
                    value={
                      field.name === "serialNumber"
                        ? serialNumber
                        : field.name === "name"
                        ? gateName
                        : ipAddress
                    }
                  />
                </div>
              );
            }
          } else {
            return null;
          }
        })}
      </Modal>
    </>
  );
};
export default AddGateway;
