import { Col, Row } from 'react-bootstrap'

import styles from './Header.module.css';

export const Header = () => {
  return <Row>
    <Col as="header" className={styles.header}>
      <h1 className={styles.title}>Anyway Labs Test Project</h1>
      <span className={styles.subtitle}>Just some good deeds</span>
    </Col>
  </Row>
}