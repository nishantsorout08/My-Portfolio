import { useEffect, useRef } from "react";
import "./styles/WhatIDo.css";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const WhatIDo = () => {
  const containerRef = useRef<(HTMLDivElement | null)[]>([]);
  const setRef = (el: HTMLDivElement | null, index: number) => {
    containerRef.current[index] = el;
  };
  useEffect(() => {
    if (ScrollTrigger.isTouch) {
      containerRef.current.forEach((container) => {
        if (container) {
          container.classList.remove("what-noTouch");
          container.addEventListener("click", () => handleClick(container));
        }
      });
    }
    return () => {
      containerRef.current.forEach((container) => {
        if (container) {
          container.removeEventListener("click", () => handleClick(container));
        }
      });
    };
  }, []);
  return (
    <div className="whatIDO">
      <div className="what-box">
        <h2 className="title">
          W<span className="hat-h2">HAT</span>
          <div>
            I<span className="do-h2"> DO</span>
          </div>
        </h2>
      </div>
      <div className="what-box">
        <div className="what-box-in">
          <div className="what-border2">
            <svg width="100%">
              <line
                x1="0"
                y1="0"
                x2="0"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
              <line
                x1="100%"
                y1="0"
                x2="100%"
                y2="100%"
                stroke="white"
                strokeWidth="2"
                strokeDasharray="7,7"
              />
            </svg>
          </div>
          <div
            className="what-content what-noTouch"
            ref={(el) => setRef(el, 0)}
          >
            <div className="what-border1">
              <svg height="100%">
                <line
                  x1="0"
                  y1="0"
                  x2="100%"
                  y2="0"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
                <line
                  x1="0"
                  y1="100%"
                  x2="100%"
                  y2="100%"
                  stroke="white"
                  strokeWidth="2"
                  strokeDasharray="6,6"
                />
              </svg>
            </div>
            <div className="what-content-in">
              <h3>CLOUD</h3>
              <h4>Scalable Cloud Infrastructure</h4>
              <p>
                Designing and managing secure, scalable cloud environments on AWS.
                From networking and compute to storage and CDN, I build production-ready
                infrastructure with high availability and performance.
              </p>
              <h5>Skillset & tools</h5>
              <div className="what-content-flex">
                <div className="what-tags">AWS</div>
                <div className="what-tags">EC2</div>
                <div className="what-tags">S3</div>
                <div className="what-tags">VPC</div>
                <div className="what-tags">CloudFront</div>
                <div className="what-tags">Route 53</div>
                <div className="what-tags">RDS</div>
                <div className="what-tags">IAM</div>
              </div>
              <div className="what-arrow"></div>
            </div>
            </div>

            <div
              className="what-content what-noTouch"
              ref={(el) => setRef(el, 1)}
            >
              <div className="what-border1">
                <svg height="100%">
                  <line
                    x1="0"
                    y1="100%"
                    x2="100%"
                    y2="100%"
                    stroke="white"
                    strokeWidth="2"
                    strokeDasharray="6,6"
                  />
                </svg>
              </div>
              
              <div className="what-corner"></div>
              <div className="what-content-in">
                <h3>DEVOPS</h3>
                <h4>CI/CD, Containers & Secure Deployments</h4>
                <p>
                  Building automated delivery pipelines and containerized deployment workflows.
                  From GitHub Actions and Jenkins to Docker, ECS, and EKS, I focus on faster,
                  secure, and highly available application delivery with observability built in.
                </p>
                <h5>Skillset & tools</h5>
                <div className="what-content-flex">
                  <div className="what-tags">GitHub Actions</div>
                  <div className="what-tags">Jenkins</div>
                  <div className="what-tags">Docker</div>
                  <div className="what-tags">ECS</div>
                  <div className="what-tags">EKS</div>
                  <div className="what-tags">Prometheus</div>
                  <div className="what-tags">Grafana</div>
                  <div className="what-tags">CloudWatch</div>
                  <div className="what-tags">SonarQube</div>
                  <div className="what-tags">OWASP ZAP</div>
                  <div className="what-tags">Bash</div>
                  <div className="what-tags">Linux</div>
                </div>
                <div className="what-arrow"></div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default WhatIDo;

function handleClick(container: HTMLDivElement) {
  container.classList.toggle("what-content-active");
  container.classList.remove("what-sibling");
  if (container.parentElement) {
    const siblings = Array.from(container.parentElement.children);

    siblings.forEach((sibling) => {
      if (sibling !== container) {
        sibling.classList.remove("what-content-active");
        sibling.classList.toggle("what-sibling");
      }
    });
  }
}
