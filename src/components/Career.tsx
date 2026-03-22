import "./styles/Career.css";

const Career = () => {
  return (
    <div className="career-section section-container">
      <div className="career-container">
        <h2>
          My career <span>&</span>
          <br /> experience
        </h2>
        <div className="career-info">
          <div className="career-timeline">
            <div className="career-dot"></div>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud Engineer Trainee</h4>
                <h5>TATA STIVE | AIRBUS</h5>
              </div>
              <h3>2024-2025</h3>
            </div>
            <p>
              Gained hands-on experience with AWS core services including EC2, S3, IAM, ECS, and RDS.
              Deployed containerized applications using Docker and implemented CI/CD pipelines with GitHub Actions.
              Worked on secure cloud networking, IAM policies, monitoring, and cost optimization strategies while
              building scalable cloud environments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Cloud DevOps Engineer</h4>
                <h5>Bell Blaze Technologies</h5>
              </div>
              <h3>2025-Present</h3>
            </div>
            <p>
              Designing and deploying production-grade AWS infrastructure using Terraform including ECS/EKS,
              VPC, ALB, CloudFront, and RDS. Built CI/CD pipelines with GitHub Actions and implemented monitoring
              using CloudWatch. Focused on security with IAM least privilege, WAF, KMS encryption, and compliance.
              Led cloud migration and containerization initiatives ensuring high availability, scalability, and
              zero-downtime deployments.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
