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
                <h4>Web Developer</h4>
                <h5>Upfirepro</h5>
              </div>
              <h3>2021</h3>
            </div>
            <p>
              Developed and maintained responsive websites using modern frontend
              and backend technologies. Worked on multiple client projects
              focusing on UI implementation, bug fixing, and deployment.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Senior Web Developer</h4>
                <h5>Upwork & Independent Clients</h5>
              </div>
              <h3>2023</h3>
            </div>
            <p>
              Delivered custom web solutions using PHP, WordPress, and
              JavaScript for international clients. Built and maintained dynamic
              websites, handled client requirements, and optimized performance
              and SEO for production deployments.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Lead FrontEnd Developer</h4>
                <h5>Build DAO</h5>
              </div>
              <h3>2025</h3>
            </div>
            <p>
              Built complete applications using React.js, Next.js. Integrated
              backend authentication using Node.js & MongoDB. Created responsive
              UI/UX and designed wireframes using Figma.
            </p>
          </div>
          <div className="career-info-box">
            <div className="career-info-in">
              <div className="career-role">
                <h4>Full Stack Developer</h4>
                <h5>Data Medicine Company</h5>
              </div>
              <h3>NOW</h3>
            </div>
            <p>
              Lead developer of Softifex Pharmaceutical ERP system using ASP.NET
              Web Forms, C#, Entity Framework, and SQL Server. Designed and
              implemented core modules including inventory, sales, procurement,
              and accounting with real-time stock tracking and transaction
              management. Integrated REST APIs and mobile booking systems for
              seamless field operations.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Career;
