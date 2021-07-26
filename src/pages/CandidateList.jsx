import React, { useEffect, useState } from "react";
import { Icon, Label, Menu, Table } from "semantic-ui-react";
import CandidateService from "./../services/candidateService";

export default function CandidateList() {
  const [candidate, setCandidate] = useState([]);
  useEffect(() => {
    let candidateService = new CandidateService();
    candidateService
      .getCandidateList()
      .then((result) => setCandidate(result.data.data));
  }, []);
  return (
    <div>
      <Table celled>
        <Table.Header>
          <Table.Row>
            <Table.HeaderCell>FirstName</Table.HeaderCell>
            <Table.HeaderCell>LastName</Table.HeaderCell>
            <Table.HeaderCell>Email</Table.HeaderCell>
          </Table.Row>
        </Table.Header>

        <Table.Body>
          {candidate.map((c) => (
            <Table.Row key={c.id}>
              <Table.Cell>{c.firstName}</Table.Cell>
              <Table.Cell>{c.lastName}</Table.Cell>
              <Table.Cell>{c.email}</Table.Cell>
            </Table.Row>
          ))}
        </Table.Body>

        <Table.Footer>
          <Table.Row>
            <Table.HeaderCell colSpan="3">
              <Menu floated="right" pagination>
                <Menu.Item as="a" icon>
                  <Icon name="chevron left" />
                </Menu.Item>
                <Menu.Item as="a">1</Menu.Item>
                <Menu.Item as="a">2</Menu.Item>
                <Menu.Item as="a">3</Menu.Item>
                <Menu.Item as="a">4</Menu.Item>
                <Menu.Item as="a" icon>
                  <Icon name="chevron right" />
                </Menu.Item>
              </Menu>
            </Table.HeaderCell>
          </Table.Row>
        </Table.Footer>
      </Table>
    </div>
  );
}
