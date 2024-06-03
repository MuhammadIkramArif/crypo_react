import React from 'react';
import { Head } from '../../components/Head';
import { Row, Col, Container } from 'react-bootstrap';
import { InformationSidebar } from './sections/InformationSidebar';
import InformationBox from './sections/InformationBox';
import { ReactComponent as Icon0 } from '../../assets/ib-icon-0.svg';
import { ReactComponent as Icon1 } from '../../assets/ib-icon-1.svg';
import { ReactComponent as Icon2 } from '../../assets/ib-icon-2.svg';
import { ReactComponent as Icon3 } from '../../assets/ib-icon-3.svg';
import { ReactComponent as Icon4 } from '../../assets/ib-icon-4.svg';
import { useLocation } from 'react-router-dom';

const InformationPage = () => {
  const { hash } = useLocation();

  React.useEffect(() => {
    console.log(hash);
  }, [hash]);

  const [items] = React.useState([
    {
      id: 'box-1',
      set: '#box-1',

      icon: <Icon0 />,
      title: 'Investment Tokenomics',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
    {
      id: 'box-2',
      set: '#box-2',
      icon: <Icon1 />,
      title: 'Launchpad',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
    {
      id: 'box-3',
      set: '#box-3',
      icon: <Icon2 />,
      title: 'DEXPad',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
    {
      id: 'box-4',
      set: '#box-4',
      icon: <Icon3 />,
      title: 'Lockers & Mint Factory',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
    {
      id: 'box-5',
      set: '#box-5',
      icon: <Icon4 />,
      title: 'Analytics',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
    {
      id: 'box-6',
      set: '#box-6',
      icon: <Icon2 />,
      title: 'DEXPad',
      text: `Lorem Ipsum is simply dummy text of the printing and typesetting
        industry. Lorem Ipsum has been the industry's standard dummy
        text ever since the 1500s, when an unknown printer took a galley
        of type and scrambled it to make a type specimen book. It has
        survived not only five centuries, but also the leap into
        electronic typesetting, remaining essentially unchanged. It was
        popularised in the 1960s with the release of Letraset sheets
        containing Lorem Ipsum passages, and more recently with desktop
        publishing software like Aldus PageMaker including versions of
        Lorem Ipsum.Lorem Ipsum is simply dummy text of the printing and
        typesetting industry. Lorem Ipsum has been the industry's
        standard dummy text ever since the 1500s, when an unknown
        printer took a galley of type and scrambled it to make a type
        specimen book. It has survived not only five centuries, but also
        the leap into electronic typesetting, remaining essentially
        unchanged.`,
    },
  ]);

  return (
    <section className='flex-fill bg-color-2 text-white py-5 position-relative'>
      <Head title='Information' />

      <Container fluid='xxl'>
        <img
          style={{ top: '30%', width: '20%' }}
          className='position-absolute start-0'
          src='./assets/bg-5.png'
          alt='..'
        />
        <img
          style={{ top: '65%', width: '20%' }}
          className='position-absolute start-0'
          src='./assets/bg-5.png'
          alt='..'
        />

        <Row>
          <InformationSidebar className={`active`} linksArr={items} />
          <Col>
            {items.map((item) => (
              <InformationBox item={item} className={`active`} />
            ))}
          </Col>
        </Row>
      </Container>
    </section>
  );
};

export default InformationPage;
