import React, { useEffect, useState } from "react";
import useColumnFilters from "../../../Components/ComTable/utils";
import { onValue, ref } from "firebase/database";
import { realtimedb } from "../../../configs/firebase";
import ComTable from "./../../../Components/ComTable/ComTable";
import { Table, Tooltip } from "antd";

export default function User() {
  const [data, setData] = useState([]);
  const { getColumnSearchProps, getColumnApprox } = useColumnFilters();
  console.log(data);

  useEffect(() => {
    const dataRef = ref(realtimedb, "/");
    onValue(dataRef, (snapshot) => {
      const data = snapshot.val();
      try {
        const arrayData = Object.values(data.data);

        setData(arrayData.reverse());
      } catch (error) {
        setData([]);
      }
    });
    // const newData = { name: 'New Item', value: 1234 }; // Ví dụ về dữ liệu mới
    // set(ref(realtimedb, '/data'), newData); // Ghi đè tại đường dẫn '/data/item1'
  }, []);
  const expandedRowRender = (record) => {
    const columnsElders = [
      {
        title: "ip",
        fixed: "left",
        width: 100,
        dataIndex: "ip",
        key: "ip",
        sorter: (a, b) => a.ip?.localeCompare(b.ip),
        ...getColumnSearchProps("ip", "ip"),
      },
      {
        title: "Thời gian",
        width: 100,
        dataIndex: "createdAt",
        key: "createdAt",
        // sorter: (a, b) => a.createdAt?.localeCompare(b.createdAt),
        ...getColumnSearchProps("createdAt", "Thời gian"),
      },
    ];
    return (
      <Table
        scroll={{
          x: 1520,
          y: "55vh",
        }}
        bdataed
        bordered
        columns={columnsElders}
        dataSource={record.elders}
        pagination={{
          showSizeChanger: true,
          pageSizeOptions: ["10", "20", "50", "100"],
        }}
      />
    );
  };
  const columns = [
    {
      title: "Name",
      dataIndex: "user",
      key: "user",
      fixed: "left",
      sorter: (a, b) => a.user?.localeCompare(b.user),
      ...getColumnSearchProps("user", ""),
    },
    {
      title: "Thiết bị",
      dataIndex: "mobileModel",
      key: "mobileModel",
      fixed: "left",
      sorter: (a, b) => a.mobileModel?.localeCompare(b.mobileModel),
      ...getColumnSearchProps("mobileModel", ""),
    },
    {
      title: "Thiết bị",
      dataIndex: "platform",
      key: "platform",
      fixed: "left",
      sorter: (a, b) => a.platform?.localeCompare(b.platform),
      ...getColumnSearchProps("platform", ""),
    },
    {
      title: "Trình duyệt",
      dataIndex: "browserName",
      key: "browserName",
      fixed: "left",
      sorter: (a, b) => a.browserName?.localeCompare(b.browserName),
      ...getColumnSearchProps("browserName", ""),
    },
    {
      title: "ip",
      dataIndex: "ip",
      key: "ip",

      sorter: (a, b) => a.ip?.localeCompare(b.ip),
      ...getColumnSearchProps("ip", ""),
    },
    {
      title: "first",
      dataIndex: "first",
      key: "first",

      sorter: (a, b) => a.first?.localeCompare(b.first),
      ...getColumnSearchProps("first", ""),
      render: (e) => <p>{e ? "lần đầu" : "lần 2"}</p>,
    },
    {
      title: "đường dẫn",
      dataIndex: "url",
      key: "url",
      sorter: (a, b) => a.url?.localeCompare(b.url),
      ...getColumnSearchProps("url", ""),
    },
    {
      title: "Ngôn ngữ",
      dataIndex: "language",
      key: "language",
      sorter: (a, b) => a.language?.localeCompare(b.language),
      ...getColumnSearchProps("language", ""),
    },
    {
      title: "userAgent",
      dataIndex: "userAgent",
      key: "userAgent",
      sorter: (a, b) => a.userAgent?.localeCompare(b.userAgent),
      ...getColumnSearchProps("userAgent", ""),
      ellipsis: {
        showTitle: false,
      },
      render: (record) => (
        <Tooltip placement="leftBottom" title={record}>
          {record}
        </Tooltip>
      ),
    },
    {
      title: "Thời gian",
      dataIndex: "createdAt",
      key: "createdAt",
      sorter: (a, b) => a.createdAt?.localeCompare(b.createdAt),
      ...getColumnSearchProps("createdAt", ""),
    },

    // {
    //   title: "Thao tác",
    //   key: "operation",
    //   fixed: "right",
    //   width: 50,
    //   render: (_, record) => (
    //     <div className="flex items-center flex-col">
    //       <ComMenuButonTable
    //         record={record}
    //         showModalDetails={() => showModal(record)}
    //         showModalEdit={showModalEdit}
    //         // extraMenuItems={extraMenuItems}
    //         excludeDefaultItems={
    //           hasPermission ? ["delete"] : ["delete", "edit"]
    //         }
    //         // order={order}
    //       />
    //     </div>
    //   ),
    // },
  ];
  return (
    <div>
      <ComTable
        // expandable={{
        //   expandedRowRender,
        //   defaultExpandedRowKeys: ["0"],
        // }}
        y={"60vh"}
        columns={columns}
        dataSource={data}
        // loading={table.loading}
      />
    </div>
  );
}
