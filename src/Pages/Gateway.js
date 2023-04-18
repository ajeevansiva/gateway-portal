import { Link, useNavigate } from "react-router-dom";
import { useState, useEffect } from "react";

//External Libs
import { Table, Button, Popconfirm } from "antd";

//Icons
import { PlusOutlined, EditOutlined, DeleteOutlined } from "@ant-design/icons";

//Customs Components
import AddGatewayForm from "../Component/AddGatewayForm";

//Table Data
import { GatewayData } from "../Data/GatwayTable";

//APIs
import api from "../api";

//Table Column Data
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

const Gateway = ({}) => {
  //set button size
  const [size] = useState("Small");

  //set modal controls
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

  const [selectedGateway, setSelectedGateway] = useState(null);

  return (
    <>
      {/* Portal Header */}
      <header>Gatway Management Portal</header>

      {/* Table Header */}
      <div className="table-header">
        <h1>Gateway</h1>
        <Button
          type="primary"
          size={size}
          icon={<PlusOutlined />}
          onClick={showModal}
        >
          Add Gateway
        </Button>
      </div>

      {/* Add Gateway Modal */}
      <AddGatewayForm
        open={isModalOpen}
        onOk={handleOk}
        onCancel={handleCancel}
        action={selectedGateway ? "Update" : "Add"}
        gateway={selectedGateway}
      />

      {/* Gateways Table */}
      <div className="table-wrapper">
        <Table columns={columns} dataSource={GatewayData} />
      </div>
    </>
  );
};

export default Gateway;
