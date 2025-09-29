import React, { useState } from "react";
import { Container, Row, Col, Form, Button, Alert } from "react-bootstrap";
import styles from "./ComingSoonPage.module.css";

const ComingSoonPage = () => {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);
  const [loading, setLoading] = useState(false);

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    // Simulate API call
    setTimeout(() => {
      setSubscribed(true);
      setEmail("");
      setLoading(false);
    }, 1000);
  };

  return (
    <div className={styles.heroSection}>
      <Container>
        <Row className="justify-content-center text-center">
          <Col lg={8} md={10}>
            {/* Logo/Brand */}
            <div className={styles.logo}>
              <h2>Badaruddin</h2>
            </div>

            {/* Main Content */}
            <div className={styles.content}>
              <h1 className={styles.title}>
                Something <span className={styles.highlight}>Amazing</span> is
                Coming Soon
              </h1>

              <p className={styles.subtitle}>
                We're working hard to bring you something extraordinary. Stay
                tuned for our launch and be the first to know when we go live!
              </p>
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default ComingSoonPage;
