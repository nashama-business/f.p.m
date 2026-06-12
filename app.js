/* ========================================
   Business Management - Interactive App
   Summary Data + Quiz Engine (English)
   ======================================== */

// ============================================================
// SECTION 1: CHAPTER SUMMARY DATA
// ============================================================

const chaptersData = [
  {
    id: 'ch1',
    num: '1',
    title: 'Managers and You in the Workplace',
    subtitle: 'Chapter 1',
    topics: [
      {
        title: 'Who Are Managers?',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        content: `<p>A <span class="key-term">Manager</span> is someone who coordinates and oversees the work of other people so that organizational goals can be accomplished. Managers are distributed across three levels:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Top Managers</h4><p>Responsible for making organization-wide decisions and establishing the plans and goals that affect the entire organization.</p></div>
          <div class="info-card"><h4>Middle Managers</h4><p>Manage the work of first-line managers and serve as a link between top management and operational employees.</p></div>
          <div class="info-card"><h4>First-Line Managers</h4><p>Directly supervise non-managerial employees and manage day-to-day operations at the lowest level of management.</p></div>
        </div>`
      },
      {
        title: 'Four Functions of Management',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="3" y="3" width="7" height="7"/><rect x="14" y="3" width="7" height="7"/><rect x="14" y="14" width="7" height="7"/><rect x="3" y="14" width="7" height="7"/></svg>',
        content: `<p><span class="key-term">Henri Fayol</span> identified four fundamental management functions:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Planning</h4><p>Defining goals, establishing strategies, and developing plans to coordinate activities.</p></div>
          <div class="info-card"><h4>Organizing</h4><p>Arranging and structuring work to accomplish the organization's goals, determining tasks and responsibilities.</p></div>
          <div class="info-card"><h4>Leading</h4><p>Directing, motivating, and communicating with individuals and teams to achieve goals.</p></div>
          <div class="info-card"><h4>Controlling</h4><p>Monitoring performance, comparing it with standards, and taking necessary corrective action.</p></div>
        </div>`
      },
      {
        title: "Mintzberg's Managerial Roles",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
        content: `<p><span class="key-term">Henry Mintzberg</span> classified managerial roles into three groups containing ten roles:</p>
        <table class="comparison-table">
          <thead><tr><th>Category</th><th>Role</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td rowspan="3"><strong>Interpersonal Roles</strong></td><td>Figurehead</td><td>Symbolic and ceremonial duties</td></tr>
            <tr><td>Leader</td><td>Directing and motivating subordinates</td></tr>
            <tr><td>Liaison</td><td>Building external relationships and networks</td></tr>
            <tr><td rowspan="3"><strong>Informational Roles</strong></td><td>Monitor</td><td>Gathering information from the environment</td></tr>
            <tr><td>Disseminator</td><td>Transmitting information within the organization</td></tr>
            <tr><td>Spokesperson</td><td>Representing the organization to outsiders</td></tr>
            <tr><td rowspan="4"><strong>Decisional Roles</strong></td><td>Entrepreneur</td><td>Initiating change and innovation</td></tr>
            <tr><td>Disturbance Handler</td><td>Dealing with crises and problems</td></tr>
            <tr><td>Resource Allocator</td><td>Allocating organizational resources</td></tr>
            <tr><td>Negotiator</td><td>Negotiating with various parties</td></tr>
          </tbody>
        </table>`
      },
      {
        title: "Katz's Management Skills",
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 20h9"/><path d="M16.5 3.5a2.121 2.121 0 0 1 3 3L7 19l-4 1 1-4L16.5 3.5z"/></svg>',
        content: `<p><span class="key-term">Robert Katz</span> identified three essential management skills:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Technical Skills</h4><p>Job-specific knowledge and expertise in a particular field. Most important for first-line managers.</p></div>
          <div class="info-card"><h4>Human Skills</h4><p>The ability to work well with other people individually and in groups. Important at all management levels.</p></div>
          <div class="info-card"><h4>Conceptual Skills</h4><p>The ability to think and conceptualize abstract and complex situations. Most important for top managers.</p></div>
        </div>`
      },
      {
        title: 'Efficiency vs. Effectiveness',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 11.08V12a10 10 0 1 1-5.93-9.14"/><polyline points="22 4 12 14.01 9 11.01"/></svg>',
        content: `<p>Two fundamental concepts in management:</p>
        <table class="comparison-table">
          <thead><tr><th>Concept</th><th>Definition</th><th>Focus</th></tr></thead>
          <tbody>
            <tr><td><strong>Efficiency</strong></td><td>Getting the most output from the least amount of inputs</td><td>Means -- "Doing things right"</td></tr>
            <tr><td><strong>Effectiveness</strong></td><td>Completing activities that help achieve organizational goals</td><td>Ends -- "Doing the right things"</td></tr>
          </tbody>
        </table>
        <p class="mt-1">Successful management strives for both high efficiency and high effectiveness simultaneously.</p>`
      }
    ]
  },
  {
    id: 'ch1ap',
    num: 'App',
    title: 'Management History Module',
    subtitle: 'Chapter 1 Appendix',
    topics: [
      {
        title: 'Scientific Management - Frederick Taylor',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="3"/><path d="M19.4 15a1.65 1.65 0 0 0 .33 1.82l.06.06a2 2 0 0 1 0 2.83 2 2 0 0 1-2.83 0l-.06-.06a1.65 1.65 0 0 0-1.82-.33 1.65 1.65 0 0 0-1 1.51V21a2 2 0 0 1-2 2 2 2 0 0 1-2-2v-.09A1.65 1.65 0 0 0 9 19.4a1.65 1.65 0 0 0-1.82.33l-.06.06a2 2 0 0 1-2.83 0 2 2 0 0 1 0-2.83l.06-.06A1.65 1.65 0 0 0 4.68 15a1.65 1.65 0 0 0-1.51-1H3a2 2 0 0 1-2-2 2 2 0 0 1 2-2h.09A1.65 1.65 0 0 0 4.6 9a1.65 1.65 0 0 0-.33-1.82l-.06-.06a2 2 0 0 1 0-2.83 2 2 0 0 1 2.83 0l.06.06A1.65 1.65 0 0 0 9 4.68a1.65 1.65 0 0 0 1-1.51V3a2 2 0 0 1 2-2 2 2 0 0 1 2 2v.09a1.65 1.65 0 0 0 1 1.51 1.65 1.65 0 0 0 1.82-.33l.06-.06a2 2 0 0 1 2.83 0 2 2 0 0 1 0 2.83l-.06.06A1.65 1.65 0 0 0 19.4 9a1.65 1.65 0 0 0 1.51 1H21a2 2 0 0 1 2 2 2 2 0 0 1-2 2h-.09a1.65 1.65 0 0 0-1.51 1z"/></svg>',
        content: `<p><span class="key-term">Frederick Taylor</span> is known as the "Father of Scientific Management." He established four principles:</p>
        <ul class="content-list">
          <li>Develop a true science for each element of an individual's work to replace the old rule-of-thumb method.</li>
          <li>Scientifically select and then train, teach, and develop workers.</li>
          <li>Heartily cooperate with workers to ensure all work is done in accordance with scientific principles.</li>
          <li>Divide work and responsibility equally between management and workers.</li>
        </ul>
        <p><span class="key-term">Frank & Lillian Gilbreth</span> also contributed through time-and-motion studies to improve productivity.</p>`
      },
      {
        title: 'General Administrative Theory',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M3 3h18v18H3z"/><path d="M3 9h18"/><path d="M9 3v18"/></svg>',
        content: `<p>This approach focused on the entire organization rather than the individual worker:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Henri Fayol</h4><p>Developed 14 principles of management including: division of work, authority, discipline, unity of command, unity of direction, subordination of individual interest, remuneration, centralization, scalar chain, order, equity, stability of tenure, initiative, and esprit de corps.</p></div>
          <div class="info-card"><h4>Max Weber</h4><p>Developed the theory of Bureaucracy based on: division of labor, clear authority hierarchy, formal selection, formal rules and regulations, impersonality, and career orientation.</p></div>
        </div>`
      },
      {
        title: 'Behavioral Approach',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l7.78-7.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"/></svg>',
        content: `<p>The behavioral approach focused on the human side of management:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Hawthorne Studies</h4><p>Conducted by Elton Mayo at Western Electric factories. Proved that social factors and attention to workers affect productivity more than physical conditions. Discovered the Hawthorne Effect: performance improves when workers feel they are being observed.</p></div>
          <div class="info-card"><h4>Organizational Behavior (OB)</h4><p>A field studying individual and group behavior in work settings. Key contributors: Maslow (Hierarchy of Needs), McGregor (Theory X and Y), Herzberg (Two-Factor Theory).</p></div>
        </div>`
      },
      {
        title: 'Contemporary Approaches',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
        content: `<p>Management evolved toward more comprehensive modern approaches:</p>
        <table class="comparison-table">
          <thead><tr><th>Approach</th><th>Core Idea</th></tr></thead>
          <tbody>
            <tr><td><strong>Systems Approach</strong></td><td>The organization is an open system that interacts with its environment. It takes inputs (resources), transforms them into outputs (products/services) through transformation processes, with feedback loops.</td></tr>
            <tr><td><strong>Contingency Approach</strong></td><td>There is no single best way to manage in all situations. The right decision depends on the circumstances. Situational variables include: organization size, task technology, environmental uncertainty, and individual differences.</td></tr>
          </tbody>
        </table>`
      }
    ]
  },
  {
    id: 'ch8',
    num: '8',
    title: 'Planning and Goal-Setting',
    subtitle: 'Chapter 8',
    topics: [
      {
        title: 'What Is Planning and Why Is It Important?',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"/></svg>',
        content: `<p><span class="key-term">Planning</span> involves defining the organization's goals, establishing an overall strategy for achieving those goals, and developing a comprehensive set of plans to integrate and coordinate activities.</p>
        <p>Why planning is important:</p>
        <ul class="content-list">
          <li>Provides direction for managers and employees.</li>
          <li>Reduces uncertainty by forcing managers to look ahead, anticipate change, and develop responses.</li>
          <li>Minimizes waste and redundancy in activities.</li>
          <li>Establishes the goals and standards used in controlling.</li>
        </ul>`
      },
      {
        title: 'Types of Goals and Plans',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M14.5 10c-.83 0-1.5-.67-1.5-1.5v-5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5z"/><path d="M20.5 10H19V8.5c0-.83.67-1.5 1.5-1.5s1.5.67 1.5 1.5-.67 1.5-1.5 1.5z"/><path d="M9.5 14c.83 0 1.5.67 1.5 1.5v5c0 .83-.67 1.5-1.5 1.5S8 21.33 8 20.5v-5c0-.83.67-1.5 1.5-1.5z"/><path d="M3.5 14H5v1.5c0 .83-.67 1.5-1.5 1.5S2 16.33 2 15.5 2.67 14 3.5 14z"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Classification</th><th>Type</th><th>Description</th></tr></thead>
          <tbody>
            <tr><td rowspan="2"><strong>By Type</strong></td><td>Stated Goals</td><td>Official statements of what an organization says its goals are, as told to the public</td></tr>
            <tr><td>Real Goals</td><td>Goals an organization actually pursues, defined by what members actually do</td></tr>
            <tr><td rowspan="2"><strong>By Breadth</strong></td><td>Strategic Plans</td><td>Long-term, comprehensive plans established by top management</td></tr>
            <tr><td>Operational Plans</td><td>Short-term, detailed plans established by lower-level management</td></tr>
            <tr><td rowspan="2"><strong>By Specificity</strong></td><td>Specific Plans</td><td>Clearly defined goals with no room for interpretation</td></tr>
            <tr><td>Directional Plans</td><td>Flexible plans that set general guidelines</td></tr>
            <tr><td rowspan="2"><strong>By Frequency</strong></td><td>Single-Use Plans</td><td>Designed for a specific, non-recurring situation</td></tr>
            <tr><td>Standing Plans</td><td>Provide guidance for recurring activities</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Management by Objectives (MBO)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><circle cx="12" cy="12" r="6"/><circle cx="12" cy="12" r="2"/></svg>',
        content: `<p><span class="key-term">Management by Objectives (MBO)</span> is a process of setting mutually agreed-upon goals between a manager and an employee, used to evaluate employee performance.</p>
        <p>Steps of MBO:</p>
        <ul class="content-list">
          <li>Set the organization's overall objectives and goals.</li>
          <li>Translate these goals into departmental and individual objectives.</li>
          <li>Review progress toward achieving goals.</li>
          <li>Evaluate performance based on goal achievement and reward accomplishments.</li>
        </ul>`
      },
      {
        title: 'Characteristics of Well-Designed Goals (S.M.A.R.T)',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="9 11 12 14 22 4"/><path d="M21 12v7a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V5a2 2 0 0 1 2-2h11"/></svg>',
        content: `<p>Goals should be written and have <span class="key-term">SMART</span> characteristics:</p>
        <div class="info-grid">
          <div class="info-card"><h4>S - Specific</h4><p>Clear and well-defined, leaving no room for ambiguity</p></div>
          <div class="info-card"><h4>M - Measurable</h4><p>Quantifiable so progress can be tracked</p></div>
          <div class="info-card"><h4>A - Achievable</h4><p>Attainable but challenging enough to motivate</p></div>
          <div class="info-card"><h4>R - Relevant</h4><p>Aligned with strategic organizational objectives</p></div>
          <div class="info-card"><h4>T - Time-bound</h4><p>Has a clear deadline or timeframe</p></div>
        </div>`
      }
    ]
  },
  {
    id: 'ch11',
    num: '11',
    title: 'Organization Design',
    subtitle: 'Chapter 11',
    topics: [
      {
        title: 'Six Key Elements of Organizational Design',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="2" y="7" width="20" height="14" rx="2" ry="2"/><path d="M16 21V5a2 2 0 0 0-2-2h-4a2 2 0 0 0-2 2v16"/></svg>',
        content: `<p>When designing an <span class="key-term">Organizational Structure</span> (the formal arrangement of jobs), decisions must be made about six key elements:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Work Specialization</h4><p>Dividing work activities into separate job tasks to increase efficiency (also called division of labor).</p></div>
          <div class="info-card"><h4>Departmentalization</h4><p>The basis by which jobs are grouped together (functional, geographical, product, process, customer).</p></div>
          <div class="info-card"><h4>Chain of Command</h4><p>The line of authority extending from upper organizational levels to the lowest levels, clarifying who reports to whom.</p></div>
          <div class="info-card"><h4>Span of Control</h4><p>The number of employees a manager can efficiently and effectively manage.</p></div>
          <div class="info-card"><h4>Centralization & Decentralization</h4><p>The degree to which decision making is concentrated at upper levels or distributed to lower levels.</p></div>
          <div class="info-card"><h4>Formalization</h4><p>How standardized an organization's jobs are and the extent to which employee behavior is guided by rules and procedures.</p></div>
        </div>`
      },
      {
        title: 'Types of Departmentalization',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="8" y1="6" x2="21" y2="6"/><line x1="8" y1="12" x2="21" y2="12"/><line x1="8" y1="18" x2="21" y2="18"/><line x1="3" y1="6" x2="3.01" y2="6"/><line x1="3" y1="12" x2="3.01" y2="12"/><line x1="3" y1="18" x2="3.01" y2="18"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Type</th><th>Basis</th><th>Advantages</th><th>Disadvantages</th></tr></thead>
          <tbody>
            <tr><td><strong>Functional</strong></td><td>Grouped by function</td><td>Efficiency, in-depth specialization</td><td>Poor cross-functional communication</td></tr>
            <tr><td><strong>Geographical</strong></td><td>Grouped by region</td><td>Better service to local markets</td><td>Duplication of functions</td></tr>
            <tr><td><strong>Product</strong></td><td>Grouped by product line</td><td>Product specialization, closer to customers</td><td>Duplication of functions</td></tr>
            <tr><td><strong>Process</strong></td><td>Grouped by work flow</td><td>Efficient flow of activities</td><td>Limited applicability</td></tr>
            <tr><td><strong>Customer</strong></td><td>Grouped by customer type</td><td>Specialized service for each segment</td><td>Duplication of functions</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Mechanistic vs. Organic Structures',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 20V10"/><path d="M12 20V4"/><path d="M6 20v-6"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Characteristic</th><th>Mechanistic</th><th>Organic</th></tr></thead>
          <tbody>
            <tr><td>Specialization</td><td>High</td><td>Cross-functional teams</td></tr>
            <tr><td>Departmentalization</td><td>Rigid</td><td>Flexible, adaptive</td></tr>
            <tr><td>Chain of Command</td><td>Clear and defined</td><td>Cross-hierarchical teams</td></tr>
            <tr><td>Span of Control</td><td>Narrow</td><td>Wide</td></tr>
            <tr><td>Decision Making</td><td>Centralized</td><td>Decentralized</td></tr>
            <tr><td>Formalization</td><td>High</td><td>Low</td></tr>
            <tr><td>Best for</td><td>Stable environments, cost efficiency</td><td>Dynamic environments, innovation</td></tr>
          </tbody>
        </table>
        <p class="mt-1">Contingency factors affecting choice: strategy, size, technology, and degree of environmental uncertainty.</p>`
      },
      {
        title: 'Key Organizational Concepts',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 16v-4"/><path d="M12 8h.01"/></svg>',
        content: `<div class="info-grid">
          <div class="info-card"><h4>Authority</h4><p>The rights inherent in a managerial position to tell people what to do and expect compliance. Includes Line Authority (direct work supervision) and Staff Authority (advisory/support functions).</p></div>
          <div class="info-card"><h4>Unity of Command</h4><p>A management principle stating that each person should report to only one manager to avoid conflicting demands.</p></div>
          <div class="info-card"><h4>Responsibility</h4><p>The obligation to perform any assigned duties. Authority should never be granted without corresponding responsibility.</p></div>
          <div class="info-card"><h4>Employee Empowerment</h4><p>Giving employees more authority (power) to make decisions, resulting in faster response and greater engagement.</p></div>
        </div>`
      }
    ]
  },
  {
    id: 'ch16',
    num: '16',
    title: 'Leadership',
    subtitle: 'Chapter 16',
    topics: [
      {
        title: 'Leaders and Leadership',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M16 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="8.5" cy="7" r="4"/><polyline points="17 11 19 13 23 9"/></svg>',
        content: `<p>A <span class="key-term">Leader</span> is someone who can influence others and who has managerial authority. <span class="key-term">Leadership</span> is the process of leading a group and influencing that group to achieve its goals.</p>
        <p>Eight traits associated with effective leadership:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Drive</h4><p>High effort level, ambition, energy, persistence, and initiative</p></div>
          <div class="info-card"><h4>Desire to Lead</h4><p>Strong desire to influence and lead others, willingness to take responsibility</p></div>
          <div class="info-card"><h4>Honesty & Integrity</h4><p>Building trusting relationships through consistency between word and deed</p></div>
          <div class="info-card"><h4>Self-Confidence</h4><p>Convincing followers of the rightness of goals and decisions</p></div>
        </div>`
      },
      {
        title: 'Behavioral Theories of Leadership',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17 21v-2a4 4 0 0 0-4-4H5a4 4 0 0 0-4 4v2"/><circle cx="9" cy="7" r="4"/><path d="M23 21v-2a4 4 0 0 0-3-3.87"/><path d="M16 3.13a4 4 0 0 1 0 7.75"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Study</th><th>Behavioral Dimensions</th><th>Conclusion</th></tr></thead>
          <tbody>
            <tr><td><strong>University of Iowa</strong></td><td>Democratic / Autocratic / Laissez-faire</td><td>Democratic style was generally most effective</td></tr>
            <tr><td><strong>Ohio State</strong></td><td>Initiating Structure / Consideration</td><td>High-high leader achieved high performance and satisfaction (but not always)</td></tr>
            <tr><td><strong>University of Michigan</strong></td><td>Employee-oriented / Production-oriented</td><td>Employee-oriented leaders achieved higher productivity and satisfaction</td></tr>
            <tr><td><strong>Managerial Grid</strong></td><td>Concern for People (1-9) / Concern for Production (1-9)</td><td>Best style is (9,9) -- high concern for both production and people</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Contingency Theories',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><polygon points="16.24 7.76 14.12 14.12 7.76 16.24 9.88 9.88 16.24 7.76"/></svg>',
        content: `
        <div style="background: rgba(255, 71, 87, 0.1); border-left: 4px solid var(--clr-error); padding: 1rem; margin-bottom: 1rem; border-radius: 4px; color: var(--clr-text);">
          <strong style="color: var(--clr-error);">ملاحظة:</strong> هذا القسم (Section 3) مش مطلوب في الامتحان.
        </div>
        <div class="info-grid" style="opacity: 0.5; pointer-events: none;">
          <div class="info-card"><h4>Fiedler Model</h4><p>Leadership effectiveness depends on matching the leader's style (task-oriented or relationship-oriented) with the situation. Measured by the LPC questionnaire. Three situational dimensions: leader-member relations, task structure, and position power.</p></div>
          <div class="info-card"><h4>Situational Leadership Theory (SLT)</h4><p>By Hersey & Blanchard. Focuses on followers' readiness. Four styles: Telling (R1), Selling (R2), Participating (R3), Delegating (R4).</p></div>
          <div class="info-card"><h4>Path-Goal Theory</h4><p>By Robert House. The leader's job is to assist followers in attaining their goals. Four styles: Directive, Supportive, Participative, and Achievement-oriented.</p></div>
        </div>`
      },
      {
        title: 'Transformational vs. Transactional Leadership',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Type</th><th>Definition</th><th>Approach</th></tr></thead>
          <tbody>
            <tr><td><strong>Transactional Leadership</strong></td><td>Leading primarily by using social exchanges (transactions) with followers</td><td>Guiding followers toward established goals by exchanging rewards for productivity</td></tr>
            <tr><td><strong>Transformational Leadership</strong></td><td>Leadership that stimulates and inspires (transforms) followers to achieve extraordinary outcomes</td><td>Intellectual stimulation, individualized consideration, changing awareness of issues, inspiring extra effort</td></tr>
          </tbody>
        </table>
        <p class="mt-1">Transformational leadership builds on transactional leadership and goes beyond it. Research shows transformational leadership is strongly correlated with higher performance, satisfaction, creativity, and lower turnover.</p>`
      }
    ]
  },
  {
    id: 'ch18',
    num: '18',
    title: 'Controlling Activities and Operations',
    subtitle: 'Chapter 18',
    topics: [
      {
        title: 'What Is Controlling and Why Is It Important?',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M1 12s4-8 11-8 11 8 11 8-4 8-11 8-11-8-11-8z"/><circle cx="12" cy="12" r="3"/></svg>',
        content: `<p><span class="key-term">Controlling</span> is the management function that involves monitoring, comparing, and correcting work performance. Its importance lies in three areas:</p>
        <ul class="content-list">
          <li><strong>Planning:</strong> Controlling is the critical link back to planning -- without it, managers can't know if goals are being achieved.</li>
          <li><strong>Employee Empowerment:</strong> Provides information and feedback on employee performance, minimizing the chance of problems.</li>
          <li><strong>Protecting the Organization:</strong> Safeguards organizational assets from threats (natural disasters, fraud, security breaches).</li>
        </ul>`
      },
      {
        title: 'Steps in the Control Process',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
        content: `<p>The <span class="key-term">Control Process</span> consists of three steps:</p>
        <div class="info-grid">
          <div class="info-card"><h4>Step 1: Measuring Actual Performance</h4><p>Four approaches: personal observations, statistical reports, oral reports, and written reports. What is measured is critically important because it determines employee behavior.</p></div>
          <div class="info-card"><h4>Step 2: Comparing Against the Standard</h4><p>Determining the acceptable Range of Variation. Deviations outside this range require attention, whether positive or negative.</p></div>
          <div class="info-card"><h4>Step 3: Taking Managerial Action</h4><p>Three options: do nothing, correct actual performance (immediate or basic corrective action), or revise the standard.</p></div>
        </div>`
      },
      {
        title: 'Types of Control',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
        content: `<table class="comparison-table">
          <thead><tr><th>Type</th><th>Timing</th><th>Purpose</th><th>Example</th></tr></thead>
          <tbody>
            <tr><td><strong>Feedforward Control</strong></td><td>Before activity</td><td>Prevents problems before they occur</td><td>Preventive maintenance, pre-production quality checks</td></tr>
            <tr><td><strong>Concurrent Control</strong></td><td>During activity</td><td>Corrects problems as they happen</td><td>Direct supervision, Management by Walking Around (MBWA)</td></tr>
            <tr><td><strong>Feedback Control</strong></td><td>After activity</td><td>Learns from past and improves future performance</td><td>Performance reports, financial analysis</td></tr>
          </tbody>
        </table>`
      },
      {
        title: 'Tools for Measuring Organizational Performance',
        icon: '<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><line x1="18" y1="20" x2="18" y2="10"/><line x1="12" y1="20" x2="12" y2="4"/><line x1="6" y1="20" x2="6" y2="14"/></svg>',
        content: `
        <div style="background: rgba(255, 71, 87, 0.1); border-left: 4px solid var(--clr-error); padding: 1rem; margin-bottom: 1rem; border-radius: 4px; color: var(--clr-text);">
          <strong style="color: var(--clr-error);">ملاحظة:</strong> الجداول (Table 18.7) و (Table 18.10) مش مطلوبة في الامتحان.
        </div>
        <div class="info-grid">
          <div class="info-card"><h4>Balanced Scorecard</h4><p>A performance measurement tool that looks at four perspectives: Financial, Customer, Internal Business Processes, and Learning & Growth. Links strategic goals to operational measures.</p></div>
          <div class="info-card"><h4>Benchmarking</h4><p>Searching for best practices among competitors and non-competitors that lead to superior performance. Steps: form a team, collect data, analyze gaps, develop an improvement plan.</p></div>
          <div class="info-card"><h4>Productivity</h4><p>The amount of goods or services produced divided by the inputs needed to generate that output. The goal is to produce the most using the least resources.</p></div>
          <div class="info-card"><h4>Organizational Effectiveness</h4><p>A measure of how appropriate organizational goals are and how well those goals are being met.</p></div>
        </div>`
      }
    ]
  }
];


// ============================================================
// SECTION 2: QUIZ QUESTIONS BANK
// ============================================================

// Quiz questions are now loaded dynamically from the data/q_*.js files
// and stored in window.quizQuestions.


// ============================================================
// SECTION 3: APP STATE & NAVIGATION
// ============================================================

let currentSection = 'hero';
let currentChapterIndex = 0;

// Quiz State
let quizState = {
  active: false,
  questions: [],
  currentIndex: 0,
  answers: {},
  startTime: null,
  timerInterval: null,
  timeRemaining: 45 * 60
};

// DOM Ready
document.addEventListener('DOMContentLoaded', () => {
  renderChaptersGrid();
  renderSidebar();
  renderChapterSummary(0);
  setupNavbarScroll();
});

// Show Section
function showSection(section) {
  document.getElementById('heroSection').classList.toggle('hidden', section !== 'hero');
  document.getElementById('summarySection').classList.toggle('hidden', section !== 'summary');
  document.getElementById('quizSection').classList.toggle('hidden', section !== 'quiz');

  document.querySelectorAll('.nav-link').forEach(link => {
    link.classList.toggle('active', link.dataset.section === section);
  });

  currentSection = section;
  window.scrollTo({ top: 0, behavior: 'smooth' });

  document.getElementById('navLinks').classList.remove('open');
}

// Mobile Nav Toggle
function toggleMobileNav() {
  document.getElementById('navLinks').classList.toggle('open');
}

// Navbar scroll effect
function setupNavbarScroll() {
  window.addEventListener('scroll', () => {
    document.getElementById('navbar').classList.toggle('scrolled', window.scrollY > 50);
  });
}


// ============================================================
// SECTION 4: RENDER FUNCTIONS
// ============================================================

// Render Chapters Grid (Hero)
function renderChaptersGrid() {
  const grid = document.getElementById('chaptersGrid');
  grid.innerHTML = chaptersData.map((ch, i) => `
    <div class="chapter-card" onclick="showSection('summary'); selectChapter(${i})">
      <div class="card-number">${ch.num}</div>
      <h3>${ch.title}</h3>
      <p>${ch.subtitle}</p>
    </div>
  `).join('');
}

// Render Sidebar
function renderSidebar() {
  const nav = document.getElementById('sidebarNav');
  nav.innerHTML = chaptersData.map((ch, i) => `
    <div class="sidebar-link ${i === 0 ? 'active' : ''}" data-index="${i}" onclick="selectChapter(${i})">
      <span class="link-num">${ch.num}</span>
      <span>${ch.title}</span>
    </div>
  `).join('');
}

// Select Chapter
function selectChapter(index) {
  currentChapterIndex = index;

  document.querySelectorAll('.sidebar-link').forEach((link, i) => {
    link.classList.toggle('active', i === index);
  });

  renderChapterSummary(index);
}

// Render Chapter Summary
function renderChapterSummary(index) {
  const chapter = chaptersData[index];
  const content = document.getElementById('summaryContent');

  content.innerHTML = `
    <div class="summary-chapter-header fade-in">
      <h2>${chapter.title}</h2>
      <div class="chapter-subtitle">${chapter.subtitle}</div>
    </div>
    <div class="accordion-group stagger-children">
      ${chapter.topics.map((topic, i) => `
        <div class="accordion-item" id="acc-${index}-${i}">
          <div class="accordion-header" onclick="toggleAccordion('acc-${index}-${i}')">
            <h3>
              <span class="acc-icon">${topic.icon}</span>
              ${topic.title}
            </h3>
            <svg class="accordion-arrow" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>
          </div>
          <div class="accordion-body">
            <div class="accordion-body-inner">
              ${topic.content}
            </div>
          </div>
        </div>
      `).join('')}
    </div>
  `;

  // Auto-open first accordion
  setTimeout(() => {
    const first = document.getElementById(`acc-${index}-0`);
    if (first) toggleAccordion(`acc-${index}-0`);
  }, 300);
}

// Toggle Accordion
function toggleAccordion(id) {
  const item = document.getElementById(id);
  const body = item.querySelector('.accordion-body');
  const isOpen = item.classList.contains('open');

  if (isOpen) {
    body.style.maxHeight = '0';
    item.classList.remove('open');
  } else {
    body.style.maxHeight = body.scrollHeight + 'px';
    item.classList.add('open');
  }
}


// ============================================================
// SECTION 5: QUIZ ENGINE
// ============================================================

function shuffleArray(array) {
  const arr = [...array];
  for (let i = arr.length - 1; i > 0; i--) {
    const j = Math.floor(Math.random() * (i + 1));
    [arr[i], arr[j]] = [arr[j], arr[i]];
  }
  return arr;
}

window.seenQuestions = window.seenQuestions || new Set();

function startQuiz() {
  const scope = document.getElementById('quizChapterSelect').value;
  let availableQuestions = [];

  if (scope === 'all') {
    availableQuestions = window.quizQuestions;
  } else if (scope.endsWith('_all')) {
    // e.g., ch1_all -> filter by chapter 'ch1'
    const chapterId = scope.split('_')[0];
    availableQuestions = window.quizQuestions.filter(q => q.chapter === chapterId);
  } else {
    // e.g., ch1_t1 -> filter by topic matching the scope exactly
    availableQuestions = window.quizQuestions.filter(q => q.topic === scope);
  }

  // Filter out questions the user has already seen in previous attempts
  let unseenQuestions = availableQuestions.filter(q => !window.seenQuestions.has(q.question));

  const countPref = document.getElementById('quizCountSelect').value;
  let targetCount = availableQuestions.length;
  if (countPref !== 'all') {
    targetCount = Math.min(availableQuestions.length, parseInt(countPref, 10));
  }

  // If we don't have enough unseen questions, reset the pool so they can practice again
  if (unseenQuestions.length < targetCount) {
    availableQuestions.forEach(q => window.seenQuestions.delete(q.question));
    unseenQuestions = availableQuestions;
  }

  // Shuffle properly using Fisher-Yates and pick targetCount
  let pool = shuffleArray(unseenQuestions).slice(0, targetCount);

  // Mark these specific questions as seen for future attempts
  pool.forEach(q => window.seenQuestions.add(q.question));

  quizState.questions = pool;
  quizState.currentIndex = 0;
  quizState.answers = {};
  
  const timePref = document.getElementById('quizTimeSelect').value;
  quizState.timeRemaining = parseInt(timePref, 10) * 60;
  
  quizState.active = true;
  quizState.startTime = Date.now();

  document.getElementById('totalQ').textContent = quizState.questions.length;

  document.getElementById('quizStart').classList.add('hidden');
  document.getElementById('quizActive').classList.remove('hidden');
  document.getElementById('quizResults').classList.add('hidden');

  renderQuestion();
  startTimer();
  updateLiveScoreboard();
}

function exitQuiz() {
  const modal = document.getElementById('confirmModal');
  modal.classList.remove('hidden');
  // Trigger reflow for animation
  void modal.offsetWidth;
  modal.style.opacity = '1';
  document.getElementById('confirmModalContent').style.transform = 'translateY(0)';
}

function closeConfirmModal() {
  const modal = document.getElementById('confirmModal');
  modal.style.opacity = '0';
  document.getElementById('confirmModalContent').style.transform = 'translateY(-20px)';
  setTimeout(() => {
    modal.classList.add('hidden');
  }, 300);
}

function confirmExitQuiz() {
  closeConfirmModal();
  clearInterval(quizState.timerInterval);
  quizState.active = false;
  document.getElementById('quizActive').classList.add('hidden');
  document.getElementById('quizStart').classList.remove('hidden');
  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function renderQuestion() {
  const q = quizState.questions[quizState.currentIndex];
  const total = quizState.questions.length;
  const current = quizState.currentIndex + 1;

  document.getElementById('currentQ').textContent = current;
  document.getElementById('progressFill').style.width = `${(current / total) * 100}%`;

  document.getElementById('prevBtn').disabled = quizState.currentIndex === 0;

  if (quizState.currentIndex === total - 1) {
    document.getElementById('nextBtn').classList.add('hidden');
    document.getElementById('submitBtn').classList.remove('hidden');
  } else {
    document.getElementById('nextBtn').classList.remove('hidden');
    document.getElementById('submitBtn').classList.add('hidden');
  }

  const letters = ['A', 'B', 'C', 'D'];
  const typeBadge = q.type === 'tf'
    ? '<span class="question-type-badge tf">True / False</span>'
    : '<span class="question-type-badge mcq">Multiple Choice</span>';

  const container = document.getElementById('questionContainer');
  container.innerHTML = `
    <div class="question-card fade-in">
      ${typeBadge}
      <div class="question-text">${q.question}</div>
      <div class="options-list">
        ${q.options.map((opt, i) => {
          return `
            <div class="option-item" data-index="${i}" onclick="selectOption(${i})">
              <span class="option-letter">${q.type === 'tf' ? (i === 0 ? 'T' : 'F') : letters[i]}</span>
              <span class="option-text">${opt}</span>
            </div>
          `;
        }).join('')}
      </div>
      <div class="question-feedback" id="feedback"></div>
    </div>
  `;

  // Restore immediate feedback if already answered
  const existingAnswer = quizState.answers[quizState.currentIndex];
  if (existingAnswer !== undefined) {
    showImmediateFeedback(existingAnswer);
  }
}

function selectOption(index) {
  // Prevent changing answer if already answered
  if (quizState.answers[quizState.currentIndex] !== undefined) return;

  quizState.answers[quizState.currentIndex] = index;
  showImmediateFeedback(index);
  updateLiveScoreboard();
}

function updateLiveScoreboard() {
  let correct = 0;
  let incorrect = 0;
  const total = quizState.questions.length;
  
  for (let i = 0; i < total; i++) {
    if (quizState.answers[i] !== undefined) {
      if (quizState.answers[i] === quizState.questions[i].correct) {
        correct++;
      } else {
        incorrect++;
      }
    }
  }
  
  const correctEl = document.getElementById('liveCorrect');
  const incorrectEl = document.getElementById('liveIncorrect');
  const remainingEl = document.getElementById('liveRemaining');
  
  if(correctEl) correctEl.textContent = correct;
  if(incorrectEl) incorrectEl.textContent = incorrect;
  if(remainingEl) remainingEl.textContent = total - (correct + incorrect);
}

function showImmediateFeedback(selectedIndex) {
  const q = quizState.questions[quizState.currentIndex];
  const options = document.querySelectorAll('.option-item');
  const feedbackDiv = document.getElementById('feedback');

  options.forEach((item, i) => {
    item.classList.add('disabled'); // prevent further clicks
    if (i === q.correct) {
      item.classList.add('correct');
    } else if (i === selectedIndex && i !== q.correct) {
      item.classList.add('incorrect');
    }
  });

  const isCorrect = (selectedIndex === q.correct);
  
  if (isCorrect) {
    feedbackDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m6 2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             <div><strong>Correct!</strong><br>${q.feedback}</div>`;
    feedbackDiv.className = 'question-feedback correct show';
  } else {
    feedbackDiv.innerHTML = `<svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M10 14l2-2m0 0l2-2m-2 2l-2-2m2 2l2 2m7-2a9 9 0 11-18 0 9 9 0 0118 0z" /></svg>
                             <div><strong>Incorrect.</strong><br>${q.feedback}</div>`;
    feedbackDiv.className = 'question-feedback incorrect show';
  }
}

function nextQuestion() {
  if (quizState.currentIndex < quizState.questions.length - 1) {
    quizState.currentIndex++;
    renderQuestion();
  }
}

function prevQuestion() {
  if (quizState.currentIndex > 0) {
    quizState.currentIndex--;
    renderQuestion();
  }
}

function startTimer() {
  if (quizState.timerInterval) clearInterval(quizState.timerInterval);

  if (quizState.timeRemaining === 0) {
    document.getElementById('timerDisplay').textContent = "∞";
    return;
  }

  updateTimerDisplay();

  quizState.timerInterval = setInterval(() => {
    quizState.timeRemaining--;

    if (quizState.timeRemaining <= 0) {
      clearInterval(quizState.timerInterval);
      submitQuiz();
      return;
    }

    updateTimerDisplay();

    const timer = document.getElementById('quizTimer');
    if (quizState.timeRemaining <= 300) {
      timer.classList.add('warning');
    }
  }, 1000);
}

function updateTimerDisplay() {
  const mins = Math.floor(quizState.timeRemaining / 60);
  const secs = quizState.timeRemaining % 60;
  document.getElementById('timerDisplay').textContent =
    `${String(mins).padStart(2, '0')}:${String(secs).padStart(2, '0')}`;
}

function submitQuiz() {
  clearInterval(quizState.timerInterval);
  quizState.active = false;

  const totalTime = Math.floor((Date.now() - quizState.startTime) / 1000);
  const totalQ = quizState.questions.length;
  let correctCount = 0;

  quizState.questions.forEach((q, i) => {
    if (quizState.answers[i] === q.correct) {
      correctCount++;
    }
  });

  const percentage = Math.round((correctCount / totalQ) * 100);
  const timeMins = Math.floor(totalTime / 60);
  const timeSecs = totalTime % 60;

  let message = '';
  let circleColor = '';
  if (percentage >= 90) {
    message = 'Excellent! Outstanding performance reflecting a deep understanding of the material.';
    circleColor = 'var(--clr-success)';
  } else if (percentage >= 75) {
    message = 'Very Good! You have a strong grasp of the core concepts.';
    circleColor = 'var(--clr-secondary)';
  } else if (percentage >= 60) {
    message = 'Good. Review the topics you missed to strengthen your understanding.';
    circleColor = 'var(--clr-accent-warm)';
  } else {
    message = 'You need to review the material again. Keep going!';
    circleColor = 'var(--clr-accent)';
  }

  const circumference = 2 * Math.PI * 80;
  const offset = circumference - (percentage / 100) * circumference;

  document.getElementById('quizActive').classList.add('hidden');
  const resultsDiv = document.getElementById('quizResults');
  resultsDiv.classList.remove('hidden');

  resultsDiv.innerHTML = `
    <div class="fade-in">
      <h2 style="margin-bottom: var(--space-xl);">Results</h2>

      <div class="results-score-circle">
        <svg viewBox="0 0 180 180">
          <circle class="circle-bg" cx="90" cy="90" r="80"/>
          <circle class="circle-fill" cx="90" cy="90" r="80" style="stroke: ${circleColor}; stroke-dashoffset: ${offset};"/>
        </svg>
        <div class="score-text">
          <div class="score-number">${percentage}%</div>
          <div class="score-label">${correctCount} / ${totalQ}</div>
        </div>
      </div>

      <div class="results-stats">
        <div class="stat-card correct-stat">
          <div class="stat-value">${correctCount}</div>
          <div class="stat-label">Correct Answers</div>
        </div>
        <div class="stat-card incorrect-stat">
          <div class="stat-value">${totalQ - correctCount}</div>
          <div class="stat-label">Incorrect Answers</div>
        </div>
        <div class="stat-card time-stat">
          <div class="stat-value">${timeMins}:${String(timeSecs).padStart(2, '0')}</div>
          <div class="stat-label">Time Taken</div>
        </div>
      </div>

      <p class="results-message">${message}</p>

      <div class="results-actions">
        <button class="btn btn-primary" onclick="resetQuiz()">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="23 4 23 10 17 10"/><path d="M20.49 15a9 9 0 1 1-2.12-9.36L23 10"/></svg>
          Retake Quiz
        </button>
        <button class="btn btn-secondary" onclick="showSection('summary')">
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M2 3h6a4 4 0 0 1 4 4v14a3 3 0 0 0-3-3H2z"/><path d="M22 3h-6a4 4 0 0 0-4 4v14a3 3 0 0 1 3-3h7z"/></svg>
          Review Summary
        </button>
      </div>

      <div class="review-section">
        <h3>Answer Review</h3>
        ${quizState.questions.map((q, i) => {
          const userAnswer = quizState.answers[i];
          const isCorrect = userAnswer === q.correct;
          return `
            <div class="review-item ${isCorrect ? 'review-correct' : 'review-incorrect'}">
              <div class="review-question-num">Question ${i + 1} ${q.type === 'tf' ? '(True/False)' : '(Multiple Choice)'}</div>
              <div class="review-question-text">${q.question}</div>
              ${!isCorrect && userAnswer !== undefined ? `
                <div class="review-answer your-answer">Your answer: ${q.options[userAnswer]}</div>
              ` : ''}
              ${!isCorrect && userAnswer === undefined ? `
                <div class="review-answer your-answer">Not answered</div>
              ` : ''}
              <div class="review-answer correct-answer">Correct answer: ${q.options[q.correct]}</div>
              ${q.feedback ? `<p style="margin-top: 8px; font-size: 0.8rem; color: var(--clr-text-muted);">${q.feedback}</p>` : ''}
            </div>
          `;
        }).join('')}
      </div>
    </div>
  `;

  setTimeout(() => {
    const fill = resultsDiv.querySelector('.circle-fill');
    if (fill) fill.style.strokeDashoffset = offset;
  }, 100);

  window.scrollTo({ top: 0, behavior: 'smooth' });
}

function resetQuiz() {
  document.getElementById('quizResults').classList.add('hidden');
  document.getElementById('quizStart').classList.remove('hidden');
  document.getElementById('quizActive').classList.add('hidden');

  document.getElementById('quizTimer').classList.remove('warning');

  quizState = {
    active: false,
    questions: [],
    currentIndex: 0,
    answers: {},
    startTime: null,
    timerInterval: null,
    timeRemaining: 45 * 60
  };
  window.scrollTo({ top: 0, behavior: 'smooth' });
}
