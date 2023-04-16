import { useState } from "react";
import { Table } from "antd";
import { GATEWAY } from "../Data/GatwayTable";
import { Link } from "react-router-dom";
import { Button, Popconfirm } from "antd";
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

const columns = [
  {
    title: "Serial Number",
    dataIndex: "serialNumber",
    key: "serialNumber",
  },
  {
    title: "Name",
    dataIndex: "name",
    key: "name",
  },
  {
    title: "IPV4 Address",
    dataIndex: "ipv4Address",
    key: "ipv4Address",
  },
  {
    title: "Actions",
    dataIndex: "actions",
    key: "actions",
    width: 120,
    render: () => (
      <div className="action-button">
        <Link to="/device">
          <Button type="link" style={{ color: "#19B469" }}>
            View Devices
          </Button>
        </Link>

        <Button type="link" icon={<EditOutlined />}>
          Edit
        </Button>
        <Popconfirm
          title="Delete the task"
          description="Are you sure to delete this Gateway?"
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
const Gateway = () => {
  const [size] = useState("Small");

  const [isModalOpen, setIsModalOpen] = useState(false);
  const showModal = () => {
    setIsModalOpen(true);
  };
  const handleOk = () => {
    setIsModalOpen(false);
  };
  const handleCancel = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <header align = "center">Gatway Management Portal</header>
      <div className="table-header">
        <h1>Gateway</h1>
        <Button type="primary" size={size} icon={<PlusOutlined />}>
          Add Gateway
        </Button>
      </div>

      <div className="table-wrapper">
        <Table columns={columns} dataSource={GATEWAY} />
      </div>
    </>
  );
};

export default Gateway;
