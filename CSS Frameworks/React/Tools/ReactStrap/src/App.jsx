import React from "react";

// ReactStrap Components
// 1. Buttons
import { Button, CloseButton } from "reactstrap";
// 2. Accordion
import {
 Accordion,
 AccordionBody,
 AccordionHeader,
 AccordionItem,
} from "reactstrap";
// 3. Alerts
import { Alert } from "reactstrap";
// 4. Badge
import { Badge } from "reactstrap";
// 5. Breadcrumb
import { Breadcrumb, BreadcrumbItem } from "reactstrap";
// 6. Button Groups
import { ButtonGroup } from "reactstrap";
// 7. Card
import {
 Card,
 CardBody,
 CardTitle,
 CardText,
 ListGroup,
 ListGroupItem,
 CardLink,
} from "reactstrap";
// 8. Carousel
import {
 Carousel,
 CarouselItem,
 CarouselControl,
 CarouselIndicators,
 CarouselCaption,
} from "reactstrap";
// 9. Collapse
import { Collapse } from "reactstrap";
// 10. Dropdowns
import {
 Dropdown,
 DropdownToggle,
 DropdownMenu,
 DropdownItem,
} from "reactstrap";
// 11. Fade
import { Fade } from "reactstrap";
// 12. Forms
import { Form, FormGroup, Label, Input, FormText } from "reactstrap";
// 13. Input Group
import { InputGroup, InputGroupText } from "reactstrap";
// 14. Layout
import { Container, Row, Col } from "reactstrap";
// 16. Modal
import { Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";
// 17. Navs
import { Nav, NavItem, NavLink, TabContent, TabPane } from "reactstrap";
// 18. Navbar
import { Navbar, NavbarBrand, NavbarToggler } from "reactstrap";
// 19. Offcanvas
import { Offcanvas, OffcanvasHeader, OffcanvasBody } from "reactstrap";
// 20. Pagination
import { Pagination, PaginationItem, PaginationLink } from "reactstrap";
// 21. Placeholder
import { Placeholder, PlaceholderButton, CardImg } from "reactstrap";
// 22. Popovers
import { UncontrolledPopover, PopoverHeader, PopoverBody } from "reactstrap";
// 23. Progress
import { Progress } from "reactstrap";
// 24. Spinner
import { Spinner } from "reactstrap";
// 25. Table
import { Table } from "reactstrap";
// 26. Toasts
import { Toast, ToastHeader, ToastBody } from "reactstrap";
// 27. Tooltips
import { Tooltip } from "reactstrap";

function App() {
 // 2. Accordion
 const [openAccordion, setOpenAccordion] = React.useState(0);
 const toggleAccordion = (id) => {
  if (openAccordion === id) {
   setOpenAccordion(0);
  } else {
   setOpenAccordion(id);
  }
 };
 // 8. Carousel
 const items = [
  {
   src: "https://picsum.photos/id/123/1200/400",
   altText: "Slide 1",
   caption: "Slide 1",
   key: 1,
  },
  {
   src: "https://picsum.photos/id/456/1200/400",
   altText: "Slide 2",
   caption: "Slide 2",
   key: 2,
  },
  {
   src: "https://picsum.photos/id/678/1200/400",
   altText: "Slide 3",
   caption: "Slide 3",
   key: 3,
  },
 ];
 const [activeIndex, setActiveIndex] = React.useState(0);
 const [animating, setAnimating] = React.useState(false);
 const next = () => {
  if (animating) return;
  const nextIndex = activeIndex === items.length - 1 ? 0 : activeIndex + 1;
  setActiveIndex(nextIndex);
 };
 const previous = () => {
  if (animating) return;
  const nextIndex = activeIndex === 0 ? items.length - 1 : activeIndex - 1;
  setActiveIndex(nextIndex);
 };
 const goToIndex = (newIndex) => {
  if (animating) return;
  setActiveIndex(newIndex);
 };
 const slides = items.map((item) => {
  return (
   <CarouselItem
    onExiting={() => setAnimating(true)}
    onExited={() => setAnimating(false)}
    key={item.src}
   >
    <img
     src={item.src}
     alt={item.altText}
     style={{
      width: "100%",
      height: "auto",
     }}
    />
    <CarouselCaption captionText={item.caption} captionHeader={item.caption} />
   </CarouselItem>
  );
 });

 // 9. Collapse
 const [collapse, setCollapse] = React.useState(false);
 const [status, setStatus] = React.useState("Closed");
 const onEntering = () => setStatus("Opening...");
 const onEntered = () => setStatus("Opened");
 const onExiting = () => setStatus("Closing...");
 const onExited = () => setStatus("Closed");
 const toggle = () => setCollapse(!collapse);

 // 10. Dropdowns
 const [dropdownOpen, setDropdownOpen] = React.useState(false);
 const toggleDropdown = () => setDropdownOpen((prevState) => !prevState);

 // 11. Fade
 const [fade, setFade] = React.useState(true);

 // 16. Modal
 const [modal, setModal] = React.useState(false);
 const toggleModal = () => setModal(!modal);

 // 17. Navs (Tabs)
 const [activeTab, setActiveTab] = React.useState("1");
 const toggleTab = (tab) => {
  if (activeTab !== tab) setActiveTab(tab);
 };

 // 18. Navbar
 const [collapsed, setCollapsed] = React.useState(true);
 const toggleNavbar = () => setCollapsed(!collapsed);

 // 19. Offcanvas
 const [offcanvas, setOffcanvas] = React.useState(false);
 const toggleOffcanvas = () => setOffcanvas(!offcanvas);

 // 26. Toasts
 const [toast, setToast] = React.useState(false);
 const toggleToast = () => setToast(!toast);

 // 27. Tooltips
 const [tooltipOpen, setTooltipOpen] = React.useState(false);
 const toggleTooltip = () => setTooltipOpen(!tooltipOpen);

 return (
  <div className="container">
   <h3>Buttons</h3>
   <Button color="primary">Primary</Button>
   <Button color="secondary">Secondary</Button>
   <Button color="success">Success</Button>
   <Button color="info">Info</Button>
   <Button color="warning">Warning</Button>
   <Button color="danger">Danger</Button>
   <Button color="dark">Dark</Button>
   <Button color="link">Link</Button>
   <CloseButton />
   <CloseButton disabled />

   <h3>Fade</h3>
   <Button color="primary" onClick={() => setFade(!fade)}>
    Toggle Fade
   </Button>
   <Fade in={fade} tag="h5" className="mt-3">
    This content will fade in and out as the button is pressed
   </Fade>

   <h3>Accordion</h3>
   <Accordion open={openAccordion} toggle={toggleAccordion}>
    <AccordionItem>
     <AccordionHeader targetId="1">Accordion Item 1</AccordionHeader>
     <AccordionBody accordionId="1">
      <strong>This is the first item&#39;s accordion body.</strong>
      You can modify any of this with custom CSS or overriding our default
      variables. It&#39;s also worth noting that just about any HTML can go
      within the <code>.accordion-body</code>, though the transition does limit
      overflow.
     </AccordionBody>
    </AccordionItem>
    <AccordionItem>
     <AccordionHeader targetId="2">Accordion Item 2</AccordionHeader>
     <AccordionBody accordionId="2">
      <strong>This is the second item&#39;s accordion body.</strong>
      You can modify any of this with custom CSS or overriding our default
      variables. It&#39;s also worth noting that just about any HTML can go
      within the <code>.accordion-body</code>, though the transition does limit
      overflow.
     </AccordionBody>
    </AccordionItem>
    <AccordionItem>
     <AccordionHeader targetId="3">Accordion Item 3</AccordionHeader>
     <AccordionBody accordionId="3">
      <strong>This is the third item&#39;s accordion body.</strong>
      You can modify any of this with custom CSS or overriding our default
      variables. It&#39;s also worth noting that just about any HTML can go
      within the <code>.accordion-body</code>, though the transition does limit
      overflow.
     </AccordionBody>
    </AccordionItem>
   </Accordion>

   <h3>Alerts</h3>
   <Alert color="primary">This is a primary alert — check it out!</Alert>
   <Alert color="secondary">This is a primary alert — check it out!</Alert>
   <Alert>This is a primary alert — check it out!</Alert>
   <Alert color="danger">This is a primary alert — check it out!</Alert>
   <Alert color="warning">This is a primary alert — check it out!</Alert>
   <Alert color="info">This is a primary alert — check it out!</Alert>
   <Alert color="light">This is a primary alert — check it out!</Alert>
   <Alert color="dark">This is a primary alert — check it out!</Alert>

   <h3>Badge</h3>
   <Badge color="primary">New</Badge>
   <Badge color="secondary">New</Badge>

   <h3>Breadcrumb</h3>
   <Breadcrumb listTag="div">
    <BreadcrumbItem href="#" tag="a">
     Home
    </BreadcrumbItem>
    <BreadcrumbItem href="#" tag="a">
     Library
    </BreadcrumbItem>
    <BreadcrumbItem href="#" tag="a">
     Data
    </BreadcrumbItem>
    <BreadcrumbItem active tag="span">
     Bootstrap
    </BreadcrumbItem>
   </Breadcrumb>

   <h3>Button Groups</h3>
   <ButtonGroup>
    <Button color="danger">Left</Button>
    <Button color="warning">Middle</Button>
    <Button color="success">Right</Button>
   </ButtonGroup>

   <h3>Card</h3>
   <Card
    style={{
     width: "18rem",
    }}
   >
    <img alt="Card" src="https://picsum.photos/300/200" />
    <CardBody>
     <CardTitle tag="h5">Card Title</CardTitle>
     <CardText>This is some text within a card body.</CardText>
    </CardBody>
    <ListGroup flush>
     <ListGroupItem>An item</ListGroupItem>
     <ListGroupItem>A second item</ListGroupItem>
     <ListGroupItem>And a third item</ListGroupItem>
    </ListGroup>
    <CardBody>
     <CardLink href="#">Card Link</CardLink>
     <CardLink href="#">Another Card Link</CardLink>
    </CardBody>
   </Card>

   <h3>Carousel</h3>
   <Carousel activeIndex={activeIndex} next={next} previous={previous}>
    <CarouselIndicators
     items={items}
     activeIndex={activeIndex}
     onClickHandler={goToIndex}
    />
    {slides}
    <CarouselControl
     direction="prev"
     directionText="Previous"
     onClickHandler={previous}
    />
    <CarouselControl
     direction="next"
     directionText="Next"
     onClickHandler={next}
    />
   </Carousel>

   <h3>Collapse</h3>
   <Button color="primary" onClick={toggle} style={{ marginBottom: "1rem" }}>
    Toggle
   </Button>
   <h5>Current state: {status}</h5>
   <Collapse
    isOpen={collapse}
    onEntering={onEntering}
    onEntered={onEntered}
    onExiting={onExiting}
    onExited={onExited}
   >
    <Card>
     <CardBody>
      Anim pariatur cliche reprehenderit, enim eiusmod high life accusamus terry
      richardson ad squid. Nihil anim keffiyeh helvetica, craft beer labore wes
      anderson cred nesciunt sapiente ea proident.
     </CardBody>
    </Card>
   </Collapse>

   <h3>Dropdowns</h3>
   <Dropdown isOpen={dropdownOpen} toggle={toggleDropdown} direction="down">
    <DropdownToggle caret>Dropdown</DropdownToggle>
    <DropdownMenu>
     <DropdownItem header>Header</DropdownItem>
     <DropdownItem>Some Action</DropdownItem>
     <DropdownItem text>Dropdown Item Text</DropdownItem>
     <DropdownItem disabled>Action (disabled)</DropdownItem>
     <DropdownItem divider />
     <DropdownItem>Foo Action</DropdownItem>
     <DropdownItem>Bar Action</DropdownItem>
     <DropdownItem>Quo Action</DropdownItem>
    </DropdownMenu>
   </Dropdown>

   <h3>Forms</h3>
   <Form>
    <FormGroup>
     <Label for="exampleEmail">Email</Label>
     <Input
      id="exampleEmail"
      name="email"
      placeholder="with a placeholder"
      type="email"
     />
    </FormGroup>
    <FormGroup>
     <Label for="examplePassword">Password</Label>
     <Input
      id="examplePassword"
      name="password"
      placeholder="password placeholder"
      type="password"
     />
    </FormGroup>
    <FormGroup>
     <Label for="exampleSelect">Select</Label>
     <Input id="exampleSelect" name="select" type="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
     </Input>
    </FormGroup>
    <FormGroup>
     <Label for="exampleSelectMulti">Select Multiple</Label>
     <Input id="exampleSelectMulti" multiple name="selectMulti" type="select">
      <option>1</option>
      <option>2</option>
      <option>3</option>
      <option>4</option>
      <option>5</option>
     </Input>
    </FormGroup>
    <FormGroup>
     <Label for="exampleText">Text Area</Label>
     <Input id="exampleText" name="text" type="textarea" />
    </FormGroup>
    <FormGroup>
     <Label for="exampleFile">File</Label>
     <Input id="exampleFile" name="file" type="file" />
     <FormText>
      This is some placeholder block-level help text for the above input. It‘s a
      bit lighter and easily wraps to a new line.
     </FormText>
    </FormGroup>
    <FormGroup tag="fieldset">
     <legend>Radio Buttons</legend>
     <FormGroup check>
      <Input name="radio1" type="radio" />{" "}
      <Label check>
       Option one is this and that—be sure to include why it‘s great
      </Label>
     </FormGroup>
     <FormGroup check>
      <Input name="radio1" type="radio" />{" "}
      <Label check>
       Option two can be something else and selecting it will deselect option
       one
      </Label>
     </FormGroup>
     <FormGroup check disabled>
      <Input disabled name="radio1" type="radio" />{" "}
      <Label check>Option three is disabled</Label>
     </FormGroup>
    </FormGroup>
    <FormGroup check>
     <Input type="checkbox" /> <Label check>Check me out</Label>
    </FormGroup>
    <Button>Submit</Button>
   </Form>

   <h3>Input Group</h3>
   <InputGroup>
    <InputGroupText>@</InputGroupText>
    <Input placeholder="username" />
   </InputGroup>
   <br />
   <InputGroup>
    <InputGroupText>
     <Input
      addon
      aria-label="Checkbox for following text input"
      type="checkbox"
     />
    </InputGroupText>
    <Input placeholder="Check it out" />
   </InputGroup>
   <br />
   <InputGroup>
    <Input placeholder="username" />
    <InputGroupText>@example.com</InputGroupText>
   </InputGroup>

   <h3>Layout</h3>
   <Container>
    <Row>
     <Col className="bg-light border">.col</Col>
    </Row>
    <Row>
     <Col className="bg-light border">.col</Col>
     <Col className="bg-light border">.col</Col>
     <Col className="bg-light border">.col</Col>
     <Col className="bg-light border">.col</Col>
    </Row>
    <Row>
     <Col className="bg-light border" xs="3">
      .col-3
     </Col>
     <Col className="bg-light border" xs="auto">
      .col-auto - variable width content
     </Col>
     <Col className="bg-light border" xs="3">
      .col-3
     </Col>
    </Row>
    <Row>
     <Col className="bg-light border" xs="6">
      .col-6
     </Col>
     <Col className="bg-light border" xs="6">
      .col-6
     </Col>
    </Row>
    <Row>
     <Col className="bg-light border" sm="4" xs="6">
      .col-6 .col-sm-4
     </Col>
     <Col className="bg-light border" sm="4" xs="6">
      .col-6 .col-sm-4
     </Col>
     <Col className="bg-light border" sm="4">
      .col-sm-4
     </Col>
    </Row>
    <Row>
     <Col
      className="bg-light border"
      sm={{
       offset: 1,
       order: 2,
       size: 6,
      }}
     >
      .col-sm-6 .order-sm-2 .offset-sm-1
     </Col>
    </Row>
    <Row>
     <Col
      className="bg-light border"
      md={{
       offset: 3,
       size: 6,
      }}
      sm="12"
     >
      .col-sm-12 .col-md-6 .offset-md-3
     </Col>
    </Row>
    <Row>
     <Col
      className="bg-light border"
      sm={{
       offset: 1,
       size: "auto",
      }}
     >
      .col-sm-auto .offset-sm-1
     </Col>
     <Col
      className="bg-light border"
      sm={{
       offset: 1,
       size: "auto",
      }}
     >
      .col-sm-auto .offset-sm-1
     </Col>
    </Row>
   </Container>

   <h3>List Group</h3>
   <ListGroup numbered>
    <ListGroupItem>Cras justo odio</ListGroupItem>
    <ListGroupItem>Dapibus ac facilisis in</ListGroupItem>
    <ListGroupItem>Morbi leo risus</ListGroupItem>
    <ListGroupItem>Porta ac consectetur ac</ListGroupItem>
    <ListGroupItem>Vestibulum at eros</ListGroupItem>
   </ListGroup>

   <h3>Modal</h3>
   <Button color="danger" onClick={toggleModal}>
    Click Me
   </Button>
   <Modal isOpen={modal} toggle={toggleModal}>
    <ModalHeader toggle={toggleModal}>Modal title</ModalHeader>
    <ModalBody>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
     est laborum.
    </ModalBody>
    <ModalFooter>
     <Button color="primary" onClick={toggleModal}>
      Do Something
     </Button>{" "}
     <Button color="secondary" onClick={toggleModal}>
      Cancel
     </Button>
    </ModalFooter>
   </Modal>

   <h3>Navs</h3>
   <Nav tabs>
    <NavItem>
     <NavLink
      href="#"
      active={activeTab === "1"}
      onClick={() => {
       toggleTab("1");
      }}
     >
      Tab1
     </NavLink>
    </NavItem>
    <NavItem>
     <NavLink
      href="#"
      active={activeTab === "2"}
      onClick={() => {
       toggleTab("2");
      }}
     >
      Tab2
     </NavLink>
    </NavItem>
    <NavItem>
     <NavLink
      href="#"
      active={activeTab === "3"}
      onClick={() => {
       toggleTab("3");
      }}
     >
      Tab3
     </NavLink>
    </NavItem>
   </Nav>
   <TabContent activeTab={activeTab}>
    <TabPane tabId="1">
     <Row>
      <Col sm="12">
       <h4>Tab 1 Contents</h4>
      </Col>
     </Row>
    </TabPane>
    <TabPane tabId="2">
     <Row>
      <Col sm="6">
       <h4>Tab 2 Contents</h4>
      </Col>
     </Row>
    </TabPane>
    <TabPane tabId="3">
     <Row>
      <Col sm="12">
       <h4>Tab 3 Contents</h4>
      </Col>
     </Row>
    </TabPane>
   </TabContent>

   <h3>Navbar</h3>
   <Navbar color="secondary" dark>
    <NavbarBrand href="/" className="me-auto">
     reactstrap
    </NavbarBrand>
    <NavbarToggler onClick={toggleNavbar} className="me-2" />
    <Collapse isOpen={!collapsed} navbar>
     <Nav navbar>
      <NavItem>
       <NavLink href="/components/">Components</NavLink>
      </NavItem>
      <NavItem>
       <NavLink href="https://github.com/reactstrap/reactstrap">GitHub</NavLink>
      </NavItem>
     </Nav>
    </Collapse>
   </Navbar>

   <h3>Offcanvas</h3>
   <Button color="primary" onClick={toggleOffcanvas}>
    Open
   </Button>
   <Offcanvas toggle={toggleOffcanvas} isOpen={offcanvas}>
    <OffcanvasHeader toggle={toggleOffcanvas}>Offcanvas</OffcanvasHeader>
    <OffcanvasBody>
     <strong>This is the Offcanvas body.</strong>
    </OffcanvasBody>
   </Offcanvas>

   <h3>Pagination</h3>
   <Pagination>
    <PaginationItem>
     <PaginationLink first href="#" />
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" previous />
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">1</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">2</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">3</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">4</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#">5</PaginationLink>
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" next />
    </PaginationItem>
    <PaginationItem>
     <PaginationLink href="#" last />
    </PaginationItem>
   </Pagination>

   <h3>Placeholder</h3>
   <Card
    style={{
     width: "18rem",
    }}
   >
    <CardImg
     alt="Card image cap"
     src="https://picsum.photos/id/135/318/180?grayscale&blur=10"
     top
     width="100%"
    />
    <CardBody>
     <Placeholder animation="wave" tag={function noRefCheck() {}}>
      <Placeholder xs={8} />
     </Placeholder>
     <Placeholder animation="wave" tag={function noRefCheck() {}}>
      <Placeholder xs={12} />
      <Placeholder xs={7} />
     </Placeholder>
     <PlaceholderButton xs={8} />
    </CardBody>
   </Card>

   <h3>Popovers</h3>
   <Button id="PopoverLegacy" type="button">
    Launch Popover (Focus)
   </Button>
   <UncontrolledPopover
    placement="right"
    target="PopoverLegacy"
    trigger="legacy"
    flip
   >
    <PopoverHeader className="remove_this_class_when_copying">
     Focus Trigger
    </PopoverHeader>
    <PopoverBody>
     Focusing on the trigging element makes this popover appear. Blurring
     (clicking away) makes it disappear. You cannot select this text as the
     popover will disappear when you try.
    </PopoverBody>
   </UncontrolledPopover>

   <h3>Progress</h3>
   <Progress
    className="my-3"
    style={{
     height: "3px",
    }}
    value={45}
   />
   <Progress animated color="primary" striped value={17} />
   <br />
   <Progress multi>
    <Progress bar value="15" />
    <Progress bar color="secondary" value="20" />
   </Progress>

   <h3>Spinner</h3>
   <Button color="primary" disabled>
    <Spinner size="sm">Loading...</Spinner>
    <span> Loading</span>
   </Button>

   <h3>Table</h3>
   <Table bordered>
    <thead>
     <tr>
      <th>#</th>
      <th>First Name</th>
      <th>Last Name</th>
      <th>Username</th>
     </tr>
    </thead>
    <tbody>
     <tr>
      <th scope="row">1</th>
      <td>Mark</td>
      <td>Otto</td>
      <td>@mdo</td>
     </tr>
     <tr>
      <th scope="row">2</th>
      <td>Jacob</td>
      <td>Thornton</td>
      <td>@fat</td>
     </tr>
     <tr>
      <th scope="row">3</th>
      <td>Larry</td>
      <td>the Bird</td>
      <td>@twitter</td>
     </tr>
    </tbody>
   </Table>

   <h3>Toasts</h3>
   <Button color="primary" onClick={toggleToast}>
    Click Me
   </Button>
   <br />
   <br />
   <Toast
    isOpen={toast}
    style={{
     position: "fixed",
     bottom: "10px",
     right: "10px",
     zIndex: 9999,
    }}
   >
    <ToastHeader toggle={toggleToast}>Toast title</ToastHeader>
    <ToastBody>
     Lorem ipsum dolor sit amet, consectetur adipisicing elit, sed do eiusmod
     tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim
     veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea
     commodo consequat. Duis aute irure dolor in reprehenderit in voluptate
     velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat
     cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id
     est laborum.
    </ToastBody>
   </Toast>

   <h3>ToolTips</h3>
   <p>
    Somewhere in here is a{" "}
    <a
     href="https://example.com"
     target="_blank"
     rel="noreferrer"
     id="TooltipExample"
    >
     tooltip
    </a>
    .
   </p>
   <Tooltip isOpen={tooltipOpen} target="TooltipExample" toggle={toggleTooltip}>
    Hello world!
   </Tooltip>
  </div>
 );
}

export default App;
