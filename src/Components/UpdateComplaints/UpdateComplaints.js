import React from "react";
import Sidebar from '../Sidebar';
import ProjectTables from './ProjectTables';
import { Row, Col, Table, Card, CardTitle, CardBody } from "reactstrap";
import Header from '../Header';

const UpdateComplaints = () => {
  return (
    <div>
      <Header />
      <div style={{ display: "flex"}}>
        {/* Sidebar with padding */}
        <Sidebar style={{ padding: "80px" }} />

        {/* Table with padding */}
        <Col lg="10" style={{ padding: "40px" }}>
          <ProjectTables />
        </Col>
      </div>
    </div>
  );
};

export default UpdateComplaints;
