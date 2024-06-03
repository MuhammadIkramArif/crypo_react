import React from 'react';

const ProjectDetailsSection = () => {
  const poolList = [
    { title: 'Opens', value: '2022-01-11 08:00:00 UTC' },
    { title: 'FCFS Opens', value: '2022-01-11 12:45:00 UTC' },
    { title: 'Closes', value: '2022-01-11 14:00:00 UTC' },
    { title: 'Swap Rate', value: '2022-01-11 08:00:00 UTC' },
    { title: 'Cap', value: '300000 BUSD' },
    { title: 'Total Users Participated', value: '3640' },
    { title: 'Total Funds Swapped', value: '300006.4960 BUSD' },
    { title: 'Access Type', value: 'Private' },
  ];

  const tokenList = [
    { title: 'Name', value: 'WeWay' },
    { title: 'Token Symbol', value: 'WWY' },
    { title: 'Total Supply', value: '10000000000' },
  ];

  return (
    <div>
      <ul className='nav row row-cols-1 row-cols-md-2 gy-3'>
        <li>
          <div className='border border-secondary bg-color-2'>
            <ul className='nav flex-column'>
              <li className='title'>
                <div className='py-2 px-3 bg-color-2'>Pool information</div>
              </li>
              {poolList.map((item) => (
                <li>
                  <div className='border-top border-secondary bg-dark d-flex flex-wrap justify-content-between py-2 px-3'>
                    <div>
                      <span className='text-primary'>{item.title}</span>
                    </div>
                    <div>
                      <span>{item.value}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
        <li>
          <div className='border border-secondary bg-color-2'>
            <ul className='nav flex-column'>
              <li className='title'>
                <div className='py-2 px-3 bg-color-2'>Token information</div>
              </li>
              {tokenList.map((item) => (
                <li>
                  <div className='border-top border-secondary bg-dark d-flex flex-wrap justify-content-between py-2 px-3'>
                    <div>
                      <span className='text-primary'>{item.title}</span>
                    </div>
                    <div>
                      <span>{item.value}</span>
                    </div>
                  </div>
                </li>
              ))}
            </ul>
          </div>
        </li>
      </ul>
    </div>
  );
};

export default ProjectDetailsSection;
