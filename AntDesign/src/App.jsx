import React from "react";

// Ant Design Components

// 1. Button
import { Button, Flex } from "antd";
// 2. FloatButton
import { CommentOutlined, CustomerServiceOutlined } from "@ant-design/icons";
import { FloatButton } from "antd";
// 3. Typography
import { Space, Typography } from "antd";
import { Radio } from "antd";
// 4. Divider
import { Divider } from "antd";
// 6. Grid
import { Row, Col } from "antd";
// 7. Layout
import { Layout, Menu, Breadcrumb, theme } from "antd";
const { Header, Content, Sider, Footer } = Layout;
import {
 LaptopOutlined,
 NotificationOutlined,
 UserOutlined,
} from "@ant-design/icons";
// 8. Anchor
import { Anchor } from "antd";
// 9. BreadCrumb
import { HomeOutlined } from "@ant-design/icons";
// 10. Menu
import {
 MailOutlined,
 AppstoreOutlined,
 SettingOutlined,
} from "@ant-design/icons";
// 11. Dropdown
import { Dropdown } from "antd";
import { DownOutlined } from "@ant-design/icons";
// 12. Pagination
import { Pagination } from "antd";
// 13. Steps
import { Steps } from "antd";
import {
 SolutionOutlined,
 LoadingOutlined,
 SmileOutlined,
} from "@ant-design/icons";

function App() {
 // 3. Typography
 const [editableStr, setEditableStr] = React.useState(
  "This is an editable text."
 );
 const [editableStrWithSuffix, setEditableStrWithSuffix] = React.useState(
  "This is a loooooooooooooooooooooooooooooooong editable text with suffix."
 );
 const [editableStrWithSuffixStartPart, editableStrWithSuffixSuffixPart] =
  React.useMemo(
   () => [
    editableStrWithSuffix.slice(0, -12),
    editableStrWithSuffix.slice(-12),
   ],
   [editableStrWithSuffix]
  );
 // 5. Flex
 const [direction, setDirection] = React.useState("horizontal");
 // 7. Layout
 const items1 = ["1", "2", "3"].map((key) => ({
  key,
  label: `nav ${key}`,
 }));
 const {
  token: { colorBgContainer, borderRadiusLG },
 } = theme.useToken();
 const [collapsed, setCollapsed] = React.useState(false);
 const items2 = [UserOutlined, LaptopOutlined, NotificationOutlined].map(
  (icon, index) => {
   const key = String(index + 1);
   return {
    key: `sub${key}`,
    icon: React.createElement(icon),
    label: `subnav ${key}`,
    children: new Array(4).fill(null).map((_, j) => {
     const subKey = index * 4 + j + 1;
     return {
      key: subKey,
      label: `option${subKey}`,
     };
    }),
   };
  }
 );
 return (
  <>
   {/* 7. Layout */}
   <Layout hasSider>
    <Sider
     width={200}
     collapsible
     collapsed={collapsed}
     onCollapse={(value) => setCollapsed(value)}
     style={{
      background: colorBgContainer,
      overflow: "auto",
      height: "100vh",
      position: "fixed",
      left: 0,
      top: 0,
      bottom: 0,
      borderRight: "1px solid #f0f0f0",
     }}
    >
     <Menu
      mode="inline"
      defaultSelectedKeys={["1"]}
      defaultOpenKeys={["sub1"]}
      style={{
       height: "100%",
       borderRight: 0,
      }}
      items={items2}
     />
    </Sider>
    <Layout
     style={{
      marginLeft: collapsed ? 80 : 200,
      transition: "margin-left 0.2s",
     }}
    >
     <Header
      style={{
       display: "flex",
       alignItems: "center",
       position: "sticky",
       top: 0,
       left: 0,
       zIndex: 1,
      }}
     >
      <div
       className="logo"
       style={{
        width: "120px",
        minWidth: "120px",
        height: "32px",
        background: "rgba(255,255,255,.2)",
        borderRadius: "6px",
        marginInlineEnd: "24px",
       }}
      />
      <Menu
       theme="dark"
       mode="horizontal"
       defaultSelectedKeys={["2"]}
       items={items1}
       style={{
        flex: 1,
        minWidth: 0,
       }}
      />
     </Header>
     <Layout
      style={{
       padding: 24,
      }}
     >
      {/* 9. BreadCrumb */}
      <Breadcrumb
       style={{
        marginBottom: "16px",
       }}
      >
       <Breadcrumb.Item href="/">
        <HomeOutlined />
        <span>Home</span>
       </Breadcrumb.Item>
       <Breadcrumb.Item href="/">
        <UserOutlined />
        <span>User</span>
       </Breadcrumb.Item>
       <Breadcrumb.Item href="/">
        <LaptopOutlined />
        <span>Application</span>
       </Breadcrumb.Item>
      </Breadcrumb>
      <Content
       style={{
        padding: 24,
        margin: 0,
        minHeight: 280,
        background: colorBgContainer,
        borderRadius: borderRadiusLG,
        overflow: "auto",
       }}
      >
       {/* 1. Button */}
       <Flex gap="small" wrap="wrap">
        <Button type="primary">Primary Button</Button>
        <Button>Default Button</Button>
        <Button type="dashed">Dashed Button</Button>
        <Button type="text">Text Button</Button>
        <Button type="link">Link Button</Button>
       </Flex>
       {/* 10. Menu */}
       <Menu
        mode="horizontal"
        defaultSelectedKeys={["mail"]}
        style={{
         marginTop: 24,
        }}
        items={[
         {
          label: "Navigation One",
          key: "mail",
          icon: <MailOutlined />,
         },
         {
          label: "Navigation Two",
          key: "app",
          icon: <AppstoreOutlined />,
          disabled: true,
         },
         {
          label: "Navigation Three - Submenu",
          key: "SubMenu",
          icon: <SettingOutlined />,
          children: [
           {
            type: "group",
            label: "Item 1",
            children: [
             {
              label: "Option 1",
              key: "setting:1",
             },
             {
              label: "Option 2",
              key: "setting:2",
             },
            ],
           },
           {
            type: "group",
            label: "Item 2",
            children: [
             {
              label: "Option 3",
              key: "setting:3",
             },
             {
              label: "Option 4",
              key: "setting:4",
             },
            ],
           },
          ],
         },
         {
          label: (
           <a
            href="https://ant.design"
            target="_blank"
            rel="noopener noreferrer"
           >
            Navigation Four - Link
           </a>
          ),
          key: "alipay",
         },
        ]}
       />
       <br />
       {/* 11. Dropdown */}
       <Dropdown
        menu={{
         items: [
          {
           label: "1st menu item",
           key: "0",
          },
          {
           label: <span>2nd menu item</span>,
           key: "1",
          },
          {
           type: "divider",
          },
          {
           label: "3rd menu item",
           key: "3",
          },
         ],
        }}
        trigger={["click"]}
       >
        <a onClick={(e) => e.preventDefault()}>
         <Space>
          Click me
          <DownOutlined />
         </Space>
        </a>
       </Dropdown>
       <br />
       <br />
       <Dropdown
        menu={{
         items: [
          {
           label: "1st menu item",
           key: "0",
          },
          {
           label: <span>2nd menu item</span>,
           key: "1",
          },
          {
           type: "divider",
          },
          {
           label: "3rd menu item",
           key: "3",
          },
         ],
        }}
        trigger={["contextMenu"]}
       >
        <div
         style={{
          color: "#aaa",
          background: "#f5f5f5",
          height: 200,
          textAlign: "center",
          lineHeight: "200px",
         }}
        >
         Right Click on here
        </div>
       </Dropdown>
       <br />
       <br />
       {/* 12. Pagination */}
       <Pagination
        total={85}
        showSizeChanger
        showQuickJumper
        showTotal={(total) => `Total ${total} items`}
        onChange={(page, pageSize) => {
         console.log(page, pageSize);
        }}
        onShowSizeChange={(current, size) => {
         console.log("S: " + current, size);
        }}
       />
       <br />
       {/* 3. Typography */}
       <Space direction="vertical">
        <Typography.Title
         style={{
          margin: 0,
         }}
        >
         h1. Ant Design
        </Typography.Title>
        <Typography.Title
         level={2}
         style={{
          margin: 0,
         }}
        >
         h2. Ant Design
        </Typography.Title>
        <Typography.Title
         level={3}
         style={{
          margin: 0,
         }}
        >
         h3. Ant Design
        </Typography.Title>
        <Typography.Title
         level={4}
         style={{
          margin: 0,
         }}
        >
         h4. Ant Design
        </Typography.Title>
        <Typography.Title
         level={5}
         style={{
          margin: 0,
         }}
        >
         h5. Ant Design
        </Typography.Title>
        <Typography.Title
         level={5}
         style={{
          margin: 0,
         }}
        >
         h6. Ant Design
        </Typography.Title>
        <Typography.Text>Ant Design (default)</Typography.Text>
        <Typography.Text type="secondary">
         Ant Design (secondary)
        </Typography.Text>
        <Typography.Text type="success">Ant Design (success)</Typography.Text>
        <Typography.Text type="warning">Ant Design (warning)</Typography.Text>
        <Typography.Text type="danger">Ant Design (danger)</Typography.Text>
        <Typography.Text disabled>Ant Design (disabled)</Typography.Text>
        <Typography.Text mark>Ant Design (mark)</Typography.Text>
        <Typography.Text code>Ant Design (code)</Typography.Text>
        <Typography.Text keyboard>Ant Design (keyboard)</Typography.Text>
        <Typography.Text underline>Ant Design (underline)</Typography.Text>
        <Typography.Text delete>Ant Design (delete)</Typography.Text>
        <Typography.Text strong>Ant Design (strong)</Typography.Text>
        <Typography.Text italic>Ant Design (italic)</Typography.Text>
        <Typography.Link href="https://ant.design" target="_blank">
         Ant Design (Link)
        </Typography.Link>
        <Radio>Radio</Radio>
        <Typography.Paragraph
         editable={{
          onChange: setEditableStr,
         }}
        >
         {editableStr}
        </Typography.Paragraph>
        <Typography.Paragraph
         editable={{
          onChange: setEditableStrWithSuffix,
          text: editableStrWithSuffix,
         }}
         ellipsis={{
          suffix: editableStrWithSuffixSuffixPart,
         }}
        >
         {editableStrWithSuffixStartPart}
        </Typography.Paragraph>
        <Typography.Paragraph copyable>
         This is a copyable text.
        </Typography.Paragraph>
        <Typography.Paragraph
         ellipsis={{
          rows: 2,
          expandable: true,
          symbol: "more",
         }}
        >
         Ant Design, a design language for background applications, is refined
         by Ant UED Team. Ant Design, a design language for background
         applications, is refined by Ant UED Team. Ant Design, a design language
         for background applications, is refined by Ant UED Team. Ant Design, a
         design language for background applications, is refined by Ant UED
         Team. Ant Design, a design language for background applications, is
         refined by Ant UED Team. Ant Design, a design language for background
         applications, is refined by Ant UED Team.
        </Typography.Paragraph>
        <Typography.Text
         code
         style={{
          width: 100,
         }}
         ellipsis={{
          tooltip: true,
         }}
        >
         Ant Design (default)
        </Typography.Text>
       </Space>
       {/* 4. Divider */}
       <Divider>Default</Divider>
       <Divider dashed>Dashed</Divider>
       <Divider orientation="left">Left Text</Divider>
       <Divider orientation="right">Right Text</Divider>
       <Divider orientation="center">Center Text</Divider>
       <Divider plain>Plain</Divider>
       {/* 5. Flex */}
       <Flex gap="middle" vertical>
        <Radio.Group
         value={direction}
         onChange={(e) => setDirection(e.target.value)}
        >
         <Radio value="horizontal">horizontal</Radio>
         <Radio value="vertical">vertical</Radio>
        </Radio.Group>
        <Flex vertical={direction === "vertical"}>
         {Array.from({
          length: 4,
         }).map((_, i) => (
          <div
           key={i}
           style={{
            width: "25%",
            height: 54,
            backgroundColor: i % 2 ? "#1677ff" : "#1677ffbf",
           }}
          />
         ))}
        </Flex>
        <Flex justify="center" align="center" gap={5}>
         <Button type="primary">Primary</Button>
         <Button type="primary">Primary</Button>
         <Button type="primary">Primary</Button>
         <Button type="primary">Primary</Button>
        </Flex>
       </Flex>
       <br />
       <br />
       {/* 6. Grid */}
       <Row>
        <Col
         span={24}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col
        </Col>
       </Row>
       <br />
       <Row>
        <Col
         span={12}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col-12
        </Col>
        <Col
         span={12}
         style={{
          backgroundColor: "#1677ff",
          color: "#fff",
          padding: 10,
         }}
        >
         col-12
        </Col>
       </Row>
       <br />
       <Row>
        <Col
         span={8}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col-8
        </Col>
        <Col
         span={8}
         style={{
          backgroundColor: "#1677ff",
          color: "#fff",
          padding: 10,
         }}
        >
         col-8
        </Col>
        <Col
         span={8}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col-8
        </Col>
       </Row>
       <br />
       <Row>
        <Col
         span={6}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col-6
        </Col>
        <Col
         span={6}
         style={{
          backgroundColor: "#1677ff",
          color: "#fff",
          padding: 10,
         }}
        >
         col-6
        </Col>
        <Col
         span={6}
         style={{
          backgroundColor: "#1677ffbf",
          color: "#fff",
          padding: 10,
         }}
        >
         col-6
        </Col>
        <Col
         span={6}
         style={{
          backgroundColor: "#1677ff",
          color: "#fff",
          padding: 10,
         }}
        >
         col-6
        </Col>
       </Row>
       <br />
       {/* 8. Anchor */}
       <Anchor>
        <Anchor.Link href="#components-anchor-demo-basic" title="Basic demo" />
        <Anchor.Link
         href="#components-anchor-demo-static"
         title="Static demo"
        />
        <Anchor.Link href="#API" title="API">
         <Anchor.Link href="#Anchor-Props" title="Anchor Props" />
         <Anchor.Link href="#Link-Props" title="Link Props" />
        </Anchor.Link>
       </Anchor>
       <br />
       {/* 13. Steps */}
       <Steps
        current={1}
        percent={60}
        items={[
         {
          title: "Finished",
          description: "This is a description.",
         },
         {
          title: "In Progress",
          subTitle: "Left 00:00:08",
          description: "This is a description.",
         },
         {
          title: "Waiting",
          description: "This is a description.",
         },
        ]}
       />
       <br />
       <Steps
        progressDot
        current={1}
        items={[
         {
          title: "Finished",
          description: "This is a description.",
         },
         {
          title: "In Progress",
          description: "This is a description.",
         },
         {
          title: "Waiting",
          description: "This is a description.",
         },
        ]}
       />
       <br />
       <Steps
        direction="vertical"
        progressDot
        current={1}
        items={[
         {
          title: "Finished",
          description: "This is a description.",
         },
         {
          title: "In Progress",
          description: "This is a description.",
         },
         {
          title: "Waiting",
          description: "This is a description.",
         },
        ]}
       />
       <br />
       <Steps
        items={[
         {
          title: "Login",
          status: "finish",
          icon: <UserOutlined />,
         },
         {
          title: "Verification",
          status: "finish",
          icon: <SolutionOutlined />,
         },
         {
          title: "Pay",
          status: "process",
          icon: <LoadingOutlined />,
         },
         {
          title: "Done",
          status: "wait",
          icon: <SmileOutlined />,
         },
        ]}
       />
       {/* 2. FloatButton */}
       <div>
        <FloatButton.Group
         trigger="click"
         type="primary"
         style={{
          right: 24,
         }}
         icon={<CustomerServiceOutlined />}
        >
         <FloatButton />
         <FloatButton badge={{ count: 5 }} icon={<CommentOutlined />} />
        </FloatButton.Group>

        <FloatButton.Group
         trigger="hover"
         type="primary"
         style={{
          right: 94,
         }}
         icon={<CustomerServiceOutlined />}
        >
         <FloatButton />
         <FloatButton icon={<CommentOutlined />} />
        </FloatButton.Group>

        <FloatButton.BackTop
         style={{
          right: 164,
         }}
        />
       </div>
      </Content>
      <Footer style={{ textAlign: "center" }}>
       Ant Design ©{new Date().getFullYear()} Created by Ant UED
      </Footer>
     </Layout>
    </Layout>
   </Layout>
  </>
 );
}

export default App;
