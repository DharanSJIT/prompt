export const chaptersData = [
  {
    id: 'cis',
    name: 'IEEE Computational Intelligence Society',
    acronym: 'IEEE CIS',
    color: 'blue',
    description: 'Focuses on the theory, design, application, and development of biologically and linguistically motivated computational paradigms emphasizing neural networks, connectionist systems, genetic algorithms, evolutionary programming, fuzzy systems, and hybrid intelligent systems.',
    vision: 'To be the premier society for computational intelligence researchers and practitioners.',
    mission: 'To advance nature-inspired computational paradigms in science and engineering.',
    focusAreas: ['Artificial Intelligence', 'Neural Networks', 'Fuzzy Systems', 'Evolutionary Computation', 'Data Mining'],
    representatives: [
      { role: 'Chairperson', name: 'Alex Johnson', image: 'https://images.unsplash.com/photo-1599566150163-29194dcaad36?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Vice Chair', name: 'Samantha Lee', image: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Secretary', name: 'Michael Chen', image: 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Treasurer', name: 'Emily Davis', image: 'https://images.unsplash.com/photo-1527980965255-d3b416303d12?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Webmaster', name: 'David Wilson', image: 'https://images.unsplash.com/photo-1633332755192-727a05c4013d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ],
    pastEvents: [
      { title: 'Intro to Neural Networks', date: 'Jan 15, 2024', description: 'A hands-on workshop covering the basics of neural networks and backpropagation.', type: 'Workshop' },
      { title: 'AI Ethics Seminar', date: 'Feb 10, 2024', description: 'Discussion on the ethical implications of AI deployment in society.', type: 'Seminar' },
      { title: 'Evolutionary Alg. Hackathon', date: 'Mar 05, 2024', description: '24-hour coding challenge using genetic algorithms.', type: 'Hackathon' },
    ],
    upcomingEvents: [
      { title: 'Deep Learning Bootcamp', date: 'Apr 20, 2024', type: 'Workshop' },
      { title: 'Fuzzy Logic Symposium', date: 'May 12, 2024', type: 'Symposium' },
    ]
  },
  {
    id: 'cass',
    name: 'IEEE Circuits and Systems Society',
    acronym: 'IEEE CASS',
    color: 'green',
    description: 'Promotes the theory, analysis, design, tools, and implementation of circuits and systems. The field spans the theoretical fundamentals and applied technologies for signal processing and system design.',
    vision: 'To advance global prosperity by fostering technological innovation and excellence in circuits and systems.',
    mission: 'To foster the CASS community across borders and disciplines to create and disseminate knowledge in circuits and systems.',
    focusAreas: ['VLSI Systems', 'Analog & Digital Circuits', 'Signal Processing', 'Nanoelectronics', 'Power Systems'],
    representatives: [
      { role: 'Chairperson', name: 'Robert Brown', image: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Vice Chair', name: 'Laura White', image: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Secretary', name: 'James Wilson', image: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Treasurer', name: 'Sophia Martinez', image: 'https://images.unsplash.com/photo-1544005313-94ddf0286df2?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Webmaster', name: 'Daniel Garcia', image: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ],
    pastEvents: [
      { title: 'VLSI Design Workshop', date: 'Nov 12, 2023', description: 'Introduction to Verilog and FPGA programming.', type: 'Workshop' },
      { title: 'Circuit Simulation Contest', date: 'Dec 05, 2023', description: 'Simulating complex analog circuits using SPICE.', type: 'Competition' },
    ],
    upcomingEvents: [
        { title: 'Advanced PCB Design', date: 'May 05, 2024', type: 'Workshop' },
        { title: 'Guest Lecture: Nano-CASS', date: 'Jun 10, 2024', type: 'Lecture' },
    ]
  },
  {
    id: 'smcs',
    name: 'IEEE Systems, Man, and Cybernetics Society',
    acronym: 'IEEE SMCS',
    color: 'purple',
    description: 'Focuses on the integration of the theories of communication, control, cybernetics, stochastics, optimization, and system structure towards the formulation of a general theory of systems.',
    vision: 'To be recognized as the leading international organization for the advancement of theory and application in systems science and engineering, human-machine systems, and cybernetics.',
    mission: 'To serve the interests of its members and the community at large by promoting the theory, practice, and interdisciplinary aspects of systems science.',
    focusAreas: ['Cybernetics', 'Human-Machine Systems', 'Systems Science', 'Robotics', 'Intelligent Control'],
    representatives: [
      { role: 'Chairperson', name: 'Jessica Taylor', image: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Vice Chair', name: 'William Thomas', image: 'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Secretary', name: 'Olivia Anderson', image: 'https://images.unsplash.com/photo-1531123897727-8f129e1688ce?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Treasurer', name: 'Matthew Jackson', image: 'https://images.unsplash.com/photo-1519345182560-3f2917c472ef?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Webmaster', name: 'Lucas Harris', image: 'https://images.unsplash.com/photo-1504257432389-52343af06ae3?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ],
    pastEvents: [
      { title: 'Human-Robot Interaction', date: 'Oct 20, 2023', description: 'Seminar on the future of collaborative robotics.', type: 'Seminar' },
      { title: 'Systems Engineering 101', date: 'Sep 15, 2023', description: 'Fundamentals of systems thinking and engineering.', type: 'Workshop' },
    ],
    upcomingEvents: [
        { title: 'Cybernetics Symposium', date: 'Jul 15, 2024', type: 'Symposium' },
    ]
  },
  {
    id: 'its',
    name: 'IEEE Information Theory Society',
    acronym: 'IEEE ITS',
    color: 'orange',
    description: 'Concerned with the processing, transmission, storage, and use of information, and the foundations of the communication process.',
    vision: 'To be the preeminent community for researchers in information theory.',
    mission: 'To support the open exchange of ideas in information theory and its applications.',
    focusAreas: ['Coding Theory', 'Data Compression', 'Cryptography', 'Network Information Theory', 'Quantum Information'],
    representatives: [
      { role: 'Chairperson', name: 'Dr. Alan Turing', image: 'https://images.unsplash.com/photo-1463453091185-61582044d556?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Vice Chair', name: 'Grace Hopper', image: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' }, // Placeholder names/imgs
      { role: 'Secretary', name: 'Claude Shannon', image: 'https://images.unsplash.com/photo-1522075469751-3a3694c2dd77?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Treasurer', name: 'Ada Lovelace', image: 'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
      { role: 'Webmaster', name: 'Tim Berners', image: 'https://images.unsplash.com/photo-1500917293891-ef795e70e1f6?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=facearea&facepad=2&w=256&h=256&q=80' },
    ],
    pastEvents: [
      { title: 'Coding Theory Basics', date: 'Feb 20, 2024', description: 'Understanding error correction codes.', type: 'Workshop' },
      { title: 'Cryptography Challenge', date: 'Mar 10, 2024', description: 'Solving encryption puzzles.', type: 'Competition' },
    ],
    upcomingEvents: [
        { title: '5G Communication Tech', date: 'Jun 20, 2024', type: 'Seminar' },
    ]
  }
];
