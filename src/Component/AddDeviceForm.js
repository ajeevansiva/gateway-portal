import { Modal, Input } from "antd";
import { useState, useEffect } from "react";
import { AddDeviceFormFields } from "../Data/AddDeviceFormFields";

const AddDeviceForm = ({ open, onCancel, onOk, devices }) => {
  const [uuid, setUID] = useState("");
  const [vendor, setVendor] = useState("");

  useEffect(() => {
    if (devices) {
      setUID(devices.uuid);
      setVendor(devices.vendor);
    }
  }, [devices]);

  return (
    <>
      <Modal
        title="Add Device"
        open={open}
        onOk={onOk}
        onCancel={onCancel}
        okText="Add Device"
      >
        {AddDeviceFormFields.map((field) => {
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
                  <div>{field.label}</div>
                  <Input
                    placeholder={field.label}
                    name={field.name}
                    className={field.className}
                    type={field.type}
                    disabled={field.disabled}
                    onChange={(e) => {
                      if (field.name === "uuid") {
                        setUID(e.target.value);
                      } else if (field.name === "vendor") {
                        setVendor(e.target.value);
                      }
                    }}
                    value={
                      field.name === "uuid"
                        ? uuid
                        : field.name === "vendor"
                        ? vendor
                        : ""
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
export default AddDeviceForm;
