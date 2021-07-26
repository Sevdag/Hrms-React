import React, { useEffect, useState } from 'react'
import { Icon, Menu, Table } from 'semantic-ui-react'
import JobService from './../services/jobService';


export default function JobPosition() {

    const [jobs, setJobs]=useState([]);

    useEffect(()=>{
        let jobService = new JobService()
        jobService.getJob().then(result=>setJobs(result.data.data))
    })

    return (
        <div>
           <Table celled>
    <Table.Header>
      <Table.Row>
        <Table.HeaderCell>id</Table.HeaderCell>
        <Table.HeaderCell>JobName</Table.HeaderCell>
      </Table.Row>
    </Table.Header>

    <Table.Body>
        {
            jobs.map((job)=>(
                <Table.Row key={job.id}>
                <Table.Cell>{job.id}</Table.Cell>
                <Table.Cell>{job.jobName}</Table.Cell>
        
              </Table.Row>
            ))
        }
   
    </Table.Body>

    <Table.Footer>
      <Table.Row>
        <Table.HeaderCell colSpan='3'>
          <Menu floated='right' pagination>
            <Menu.Item as='a' icon>
              <Icon name='chevron left' />
            </Menu.Item>
            <Menu.Item as='a'>1</Menu.Item>
            <Menu.Item as='a'>2</Menu.Item>
            <Menu.Item as='a'>3</Menu.Item>
            <Menu.Item as='a'>4</Menu.Item>
            <Menu.Item as='a' icon>
              <Icon name='chevron right' />
            </Menu.Item>
          </Menu>
        </Table.HeaderCell>
      </Table.Row>
    </Table.Footer>
  </Table>
        </div>
    )
}