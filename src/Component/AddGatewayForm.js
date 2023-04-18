import { useState, useEffect } from "react";

//External Libs
import { Modal, Input } from "antd";

//Custom Components
import { AddGatewayFormFields } from "../Data/AddGatewayFormFields";

const AddGatewayForm = ({ onOk, onCancel, open, gateway, action }) => {
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

  return (
    <>
      <Modal
        title={action}
        onOk={onOk}
        onCancel={onCancel}
        open={open}
        okText="Add Gateway"
      >
        {AddGatewayFormFields.map((field) => {
          if (field.show) {
            if (field.type === "select") {
              return (
                <div className="create_form_row" key={field.id}>
                  <div>{field.label}</div>
                </div>
              );
            } else {
              return (
                <div className="input-wrapper" key={field.id}>
                  <label>{field.label}</label>
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
export default AddGatewayForm;
