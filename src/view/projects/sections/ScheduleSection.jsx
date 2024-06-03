import React from 'react';
import { Table } from 'react-bootstrap';

const ScheduleSection = () => {
  const scheduleList = [{}, {}, {}];

  return (
    <div>
      <div className='row row-cols-1 row-cols-md-2'>
        <div>
          <Table responsive hover variant='dark'>
            <thead>
              <tr>
                <th className='fw-normal bg-color-2'>Round</th>
                <th className='fw-normal bg-color-2'>Opens</th>
                <th className='fw-normal bg-color-2'>Closes</th>
              </tr>
            </thead>
            <tbody className='border-top small'>
              {scheduleList.map((item) => (
                <tr>
                  <td>Allocation</td>
                  <td>2022-01-11 08:00:00 UTC </td>
                  <td>2022-01-11 12:45:00 UTC</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
      </div>
    </div>
  );
};

export default ScheduleSection;
