import React, { useState, useCallback } from "react";
import classes from "./App.module.scss";
import "antd/dist/antd.css";
import { Layout, Button, Modal, Row, Col, Avatar, Collapse } from "antd";
import { Route, Switch } from "react-router-dom";

import {
  SwapLeftOutlined,
  SwapRightOutlined,
  BellOutlined,
  IdcardOutlined,
  FlagOutlined,
  MailOutlined,
  PoweroffOutlined,
} from "@ant-design/icons";

import Logo from "./Component/Sidebar/Logo";
import MyMenu from "./Component/Sidebar/MyMenu";
import Home from "./Container/Home";
import Student from "./Container/Student";
import Department from "./Container/Department";
import Teacher from "./Container/Teacher";
import Assistant from "./Container/Assistant";

function App() {
  const { Header, Content, Sider, Footer } = Layout;
  const [collapse, setCollapse] = useState(false);
  const [isCollapsedWidth, setCollapseWidth] = useState(false);
  const [visible, setVisible] = useState(false);

  const onClickMenuHandle = useCallback(() => {
    setCollapse(!collapse);
    if (isCollapsedWidth) {
      setVisible(!visible);
    }
  }, [collapse, visible, isCollapsedWidth]);

  return (
    <>
      <Layout>
        <Sider
          theme="light"
          className={classes.Sider}
          collapsed={collapse}
          breakpoint="xs"
          collapsedWidth={isCollapsedWidth ? "0" : "80"}
          onBreakpoint={(broken) => {
            setCollapse(broken);
            setCollapseWidth(broken);
          }}
        >
          <Logo collapsed={collapse} />
          <MyMenu
            mobileMode={isCollapsedWidth}
            onClickMenuHandle={onClickMenuHandle}
          />
        </Sider>

        {isCollapsedWidth ? (
          <Modal
            footer={null}
            closable={false}
            width="0"
            visible={visible}
            onCancel={onClickMenuHandle}
            zIndex={10}
          ></Modal>
        ) : null}

        <Layout>
          <Header className={classes.Header}>
            <Row>
              <Col span="2">
                <Button
                  className={classes.CollapseBtn}
                  onClick={onClickMenuHandle}
                >
                  {React.createElement(
                    collapse ? SwapRightOutlined : SwapLeftOutlined
                  )}
                </Button>
              </Col>

              {!isCollapsedWidth && <Col span="8">Tilte</Col>}

              <Col
                span={!isCollapsedWidth ? "6" : "12"}
                className={classes.Toolbar}
              >
                <BellOutlined />
                <FlagOutlined />
                <MailOutlined />
              </Col>
              {!isCollapsedWidth ? (
                <Col span="8" className={classes.Sign}>
                  <span>
                    <IdcardOutlined /> My Profile
                  </span>
                  <span>
                    <PoweroffOutlined /> Sign out
                  </span>
                  <Avatar src="./asset/images/neo-avatar.jpg" />
                </Col>
              ) : (
                <Col span="10" className={classes.Sign}>
                  <Collapse ghost className={classes.AvatarMobile}>
                    <Collapse.Panel
                      header={
                        <Avatar 
                          src="./asset/images/neo-avatar.jpg"
                          
                        />}
                      key="avatar"
                      showArrow={false}
                    >
                      <p>
                        <IdcardOutlined /> My Profile
                      </p>
                      <p>
                        <PoweroffOutlined /> Sign out
                      </p>
                    </Collapse.Panel>
                  </Collapse>
                </Col>
              )}
            </Row>
          </Header>
          <Content className={classes.Content}>
            <Switch>
              <Route exact path="/" component={Home} />
              <Route path="/student" component={Student} />
              <Route path="/department" component={Department} />
              <Route path="/teacher" component={Teacher} />
              <Route path="/assistant" component={Assistant} />
            </Switch>
          </Content>
          <Footer className={classes.Footer}>
            ProQ - This layout made by Heart
          </Footer>
        </Layout>
      </Layout>
    </>
  );
}

export default App;
