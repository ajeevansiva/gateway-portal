import { useState } from "react";
import { Table, Button, Popconfirm } from "antd";
import { DEVICE } from "../Data/DeviceTable";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";
import AddDevice from "../Component/AddDevice";

const columns = [
  {
    title: "UID",
    dataIndex: "uID",
    key: "uID",
  },
  {
    title: "Vendor",
    dataIndex: "vendor",
    key: "vendor",
  },
  {
    title: "Date Of Create",
    dataIndex: "dateOfCreate",
    key: "dateOfCreate",
  },
  {
    title: "Status",
    dataIndex: "status",
    key: "status",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: 100,
    render: () => (
      <div className="action-button">
        <Button type="link" icon={<EditOutlined />}>
          Update
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this Device ?"
          okText="Yes"
          cancelText="No"
        >
          <Button type="link" danger icon={<DeleteOutlined />}>
            Delete
          </Button>
        </Popconfirm>
      </div>
    ),
  },
];
const Device = () => {
  const [size] = useState("Small");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <div>
      <header align = "center">Gatway Management Portal</header>
      <div className="table-header">
        <h1>Devices</h1>
        <Button
          type="primary"
          size={size}
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Add Device
        </Button>
      </div>
      <AddDevice />
      <div className="table-wrapper">
        <Table columns={columns} dataSource={DEVICE} />
      </div>
    </div>
  );
};

export default Device;
