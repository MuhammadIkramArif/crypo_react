import React from 'react';
import { Table } from 'react-bootstrap';

const AllocationSection = () => {
  const scheduleList = [{}, {}, {}];

  return (
    <div>
      <div className='row'>
        <div className='col'>
          <Table responsive hover variant='dark'>
            <thead>
              <tr>
                <th className='fw-normal bg-color-2'>No.</th>
                <th className='fw-normal bg-color-2'>Allocation</th>
                <th className='fw-normal bg-color-2'>Date</th>
                <th className='fw-normal bg-color-2'>Claimed</th>
                <th className='fw-normal bg-color-2'>Action</th>
              </tr>
            </thead>
            <tbody className='border-top small'>
              {scheduleList.map((item) => (
                <tr>
                  <td>
                    <b>1</b>
                  </td>
                  <td>Allocation</td>
                  <td>2022-01-11</td>
                  <td>Claimed</td>
                  <td>Action</td>
                </tr>
              ))}
            </tbody>
          </Table>
        </div>
        <div className='col-12 col-md-4 col-lg-3'>
          <button
            type='button'
            className='btn btn-outline-primary fw-500 w-100'
          >
            Add token to MetaMask
          </button>
        </div>
      </div>
    </div>
  );
};

export default AllocationSection;
