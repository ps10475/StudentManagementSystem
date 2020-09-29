import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu } from "antd";
import {
  ApartmentOutlined,
  ReconciliationOutlined,
  TeamOutlined,
  SettingOutlined,
  LineChartOutlined,
  PlusOutlined,
  UserOutlined,
  ScheduleOutlined,
  ReadOutlined,
  ProjectOutlined,
  CalendarOutlined
} from "@ant-design/icons";

const data = [
  {
    id: "department",
    content: "Department",
    icon: <SettingOutlined/>,
    children: [
      {
        id: "department/general",
        content: "General",
        icon: <LineChartOutlined />,
      },
      {
        id: "department/create",
        content: "Create",
        icon: <PlusOutlined />,
      },
      {
        id: "department/list",
        content: "List",
        icon: <ReconciliationOutlined />,
        children: [
          { id: "department/list/teacher", content: "Teacher" },
          { id: "department/list/student", content: "Student" },
          { id: "department/list/class", content: "Class" },
          { id: "department/list/subject", content: "Subject" },
        ],
      },
    ],
  },
  {
    id: "assistant",
    content: "Assistant",
    icon: <ApartmentOutlined />,
    children: [
      {
        id: "assistant/list",
        content: "List",
        icon: <ReconciliationOutlined />,
        children: [
          { id: "assistant/list/teacher", content: "Teacher" },
          { id: "assistant/list/student", content: "Student" },
          { id: "assistant/list/class", content: "Class" },
          { id: "assistant/list/subject", content: "Subject" },
        ],
      },
    ],
  },
  {
    id: "teacher",
    content: "Teacher",
    icon: <TeamOutlined />,
    children: [
      {
        id: "teacher/attendance",
        content: "Attendance",
        icon: <ScheduleOutlined />,
      },
      {
        id: "teacher/ownClass",
        content: "My Own Class",
        icon: <ReadOutlined />,
      },
    ],
  },
  {
    id: "student",
    content: "Student",
    icon: <UserOutlined />,
    children: [
      {
        id: "student/schedule",
        content: "Schedule",
        icon: <CalendarOutlined />,
      },
      {
        id: "student/score",
        content: "Score",
        icon: <ProjectOutlined />,
      },
      {
        id: "student/attendance",
        content: "Attendance",
        icon: <ScheduleOutlined />,
      },
    ],
  },
];

const MyMenu = React.memo((props) => {
  const { Item, SubMenu } = Menu;
  let rootSubmenuKeys = [];
  data.forEach(res => {
    rootSubmenuKeys.push(res.id)
  });
  
  const [openKeys, setOpenKeys] = useState([]);
  // ------ change OpenKeys ---------
  const onOpenChangeHandle = (keys) => {
    const lastOpenKey = keys.find((key) => openKeys.indexOf(key) === -1);
    if (rootSubmenuKeys.indexOf(lastOpenKey) === -1) {
      setOpenKeys(keys);
    } else {
      setOpenKeys(lastOpenKey ? [lastOpenKey] : []);
    }
  };
  // ---------- ITEM CLICK ----------
  const onItemClick =  async () => {
    if(props.mobileMode){
      try {
        await setOpenKeys([])
        await  props.onClickMenuHandle();
      } catch (error) {
        throw error; 
      }
    }
  }
  // --------- menu da cap ----------
  const listMenuRender = (data) => {
    if (data.children) {
      return (
        <SubMenu
          icon={data.icon ? data.icon : ""}
          key={data.id}
          title={data.content}
        >
          {data.children.map((res) => {
            return listMenuRender(res);
          })}
        </SubMenu>
      );
    } else {
      return (
        <Item icon={data.icon ? data.icon : ""} key={data.id} onClick={onItemClick}  >
          <Link to={'/'+data.id} > {data.content} </Link> 
        </Item>
      );
    }
  };

  const listMenu = data.map((res) => {
    return listMenuRender(res);
  });
  // --------- menu da cap ----------
  
  return (
    <Menu
      theme="light"
      mode="inline"
      openKeys={openKeys}
      onOpenChange={onOpenChangeHandle}
    >
      {listMenu}
    </Menu>
  );
});

export default MyMenu;
