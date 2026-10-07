/* EDIT THIS FILE to change the website's text. Keep quotes, commas and brackets.
   Blank URLs stay unavailable instead of opening fake links.
   Images can be PNG/JPG/SVG files uploaded beside index.html.
   Placeholder project descriptions below are examples, not completed work. */
window.PORTFOLIO = {
  name: 'Matthew Scarpello',
  title: 'Data Scientist Portfolio',
  email: '', // Example: 'yourname@example.com'
  updated: 'October 6, 2026',
  version: '1.0',
  photo: 'profile-placeholder.svg',
  photoAlt: 'Profile photo placeholder for Matthew Scarpello',
  about: '[Biography placeholder] I am interested in using data to ask better questions, test ideas, and explain what the evidence shows. This portfolio brings together my project work, analytical approach, and reflections on what I learned.',
  skills: ['Python', 'Leadership', 'Machine Learning'],
  intro: 'Explore three projects, from the question that started each analysis to its methods, findings, and lessons learned.',
  workflow: [
    {title: 'Ask', text: 'Start with a clear question and define what a useful answer would look like.'},
    {title: 'Explore', text: 'Examine the data, check its quality, and look for patterns worth investigating.'},
    {title: 'Model', text: 'Build a baseline and evaluate how well the approach answers the question.'},
    {title: 'Explain', text: 'Communicate the evidence, limitations, and next steps clearly.'}
  ],
  projects: [
    {
      id: 'noaa', number: '01', title: 'NOAA Storm Events', category: 'Classification · Economic damage',
      page: 'project-noaa.html', status: 'Project in progress', date: '[Completion date]', role: 'Data Scientist',
      image: 'project-noaa.svg', imageAlt: 'Placeholder for a NOAA storm analysis report cover',
      summary: 'Investigating how storm-event characteristics relate to whether an event has any recorded economic damage.',
      question: 'How well can storm-event characteristics predict whether a NOAA storm event is associated with any recorded economic damage?',
      tools: ['Python', 'Logistic regression', 'Data visualization'],
      description: [
        'This project investigates recorded economic damage in the NOAA NCEI Storm Events Database. Its central question is whether storm-event characteristics can help distinguish events with recorded damage from events with none.',
        '[Methods placeholder] Describe the final dataset, time period, sample size, cleaning decisions, target definition, predictor variables, and evaluation strategy here. Explain which parts of the analysis you personally completed and which were team contributions.',
        '[Results placeholder] Insert verified model results and supporting figures from the final report. Explain how performance compares with a baseline and what the results mean in practical terms. No numerical results are claimed in this portfolio draft.'
      ],
      sections: [
        {title: 'Data and preparation', text: '[Placeholder] Identify the source files and analysis period. Document missing outcomes, damage-value parsing, duplicate handling, and the final number of usable observations.'},
        {title: 'Analysis and evaluation', text: '[Placeholder] Explain the model, features, data split, baseline, and chosen evaluation metric. Describe how leakage and class imbalance were considered.'},
        {title: 'Findings and limitations', text: '[Placeholder] Add verified results, uncertainty, and the main limitations. Distinguish recorded damage from actual damage and predictive associations from causal explanations.'},
        {title: 'My contribution and next steps', text: '[Placeholder] Describe your work as Data Scientist, credit your teammates, and explain one improvement you would prioritize in a future iteration.'}
      ],
      highlights: [
        {title: 'A focused research question', text: 'Connect storm-event characteristics to the presence of recorded economic damage.', detail: 'The research question gives the analysis a specific outcome to investigate. [Placeholder] Add the exact target definition and explain why it is useful for the project audience.', image: 'highlight-question.svg', alt: 'Research question figure placeholder'},
        {title: 'An interpretable baseline', text: '[Placeholder] Summarize the baseline model and why it was selected.', detail: '[Placeholder] Insert the validated baseline result and describe the evaluation method. Add a labeled figure that compares model performance with an appropriate reference.', image: 'highlight-analysis.svg', alt: 'Model evaluation figure placeholder'},
        {title: 'Clear communication of evidence', text: '[Placeholder] Explain one important finding and its limitations.', detail: '[Placeholder] Add a real chart, a concise finding, and an explanation of what the chart does and does not support. Include the source and figure caption.', image: 'highlight-findings.svg', alt: 'Findings figure placeholder'}
      ],
      links: {code: '', report: ''},
      references: [{label: '[Placeholder] Add the exact NOAA dataset citation and supporting references.', url: ''}]
    },
    {
      id: 'two', number: '02', title: '[Project Two Title]', category: 'Placeholder · Forecasting example',
      page: 'project-two.html', status: 'Placeholder project', date: '[Completion date]', role: '[Your role]',
      image: 'project-two.svg', imageAlt: 'Project two cover placeholder',
      summary: '[Example description] Explore patterns over time and develop a forecast that helps an audience plan ahead.',
      question: '[Placeholder] How accurately can historical observations predict a future outcome?',
      tools: ['[Tool or language]', '[Forecasting method]', '[Visualization tool]'],
      description: [
        '[Example project description] This project would examine a time-based dataset to understand recurring patterns and estimate future outcomes. The aim would be to turn historical observations into a forecast that supports a clearly defined planning decision.',
        '[Methods placeholder] Name the dataset and time period. Describe how missing observations and unusual values were handled, how the data were divided chronologically, and which simple forecast served as the baseline.',
        '[Results placeholder] Report the final evaluation period and verified error measures. Explain where the forecast was useful, where it struggled, and how uncertainty should influence its use. This is sample copy, not a claim of completed work.'
      ],
      sections: [
        {title: 'Data and preparation', text: '[Placeholder] Identify the source, time interval, coverage, and relevant quality checks. Explain any aggregation or missing-data treatment.'},
        {title: 'Analysis and evaluation', text: '[Placeholder] Describe the chronological split, baseline, forecasting method, and error metric. Explain why the evaluation resembles the intended use.'},
        {title: 'Findings and limitations', text: '[Placeholder] Insert real results and an observed-versus-predicted chart. Discuss unusual periods, uncertainty, and limitations.'},
        {title: 'My contribution and next steps', text: '[Placeholder] Explain your responsibilities, credit collaborators, and identify a practical improvement.'}
      ],
      highlights: [
        {title: 'Understand the pattern', text: '[Placeholder] Identify a meaningful pattern in the historical data.', detail: '[Placeholder] Add a time-series chart and describe a verified trend or recurring pattern. Explain why it matters to the question.', image: 'highlight-question.svg', alt: 'Time-series exploration placeholder'},
        {title: 'Compare with a baseline', text: '[Placeholder] Evaluate a forecast against a simple reference.', detail: '[Placeholder] Add actual evaluation results. State the time horizon, metric, and comparison model so readers can judge the evidence.', image: 'highlight-analysis.svg', alt: 'Forecast evaluation placeholder'},
        {title: 'Translate results into decisions', text: '[Placeholder] Connect the forecast to a planning decision.', detail: '[Placeholder] Explain how an audience could use the forecast and describe when the uncertainty would be too large to act confidently.', image: 'highlight-findings.svg', alt: 'Forecast findings placeholder'}
      ],
      links: {code: '', report: ''}, references: [{label: '[Placeholder] Dataset and methodological references.', url: ''}]
    },
    {
      id: 'three', number: '03', title: '[Project Three Title]', category: 'Placeholder · Classification example',
      page: 'project-three.html', status: 'Placeholder project', date: '[Completion date]', role: '[Your role]',
      image: 'project-three.svg', imageAlt: 'Project three cover placeholder',
      summary: '[Example description] Build and evaluate a classification approach, then explain the trade-offs behind its predictions.',
      question: '[Placeholder] Which characteristics help identify observations belonging to a target category?',
      tools: ['[Tool or language]', '[Classification method]', '[Visualization tool]'],
      description: [
        '[Example project description] This project would use labeled observations to study a classification problem. The goal would be to understand which information is available at prediction time and whether a model can support a specific decision.',
        '[Methods placeholder] Define the positive class, identify the data source, and explain preprocessing. Describe the baseline, validation approach, and metrics that reflect the costs of different prediction errors.',
        '[Results placeholder] Add verified model performance and examples of the most important trade-offs. Explain the limitations of the dataset and the conditions required before the approach could be useful. This example does not represent completed work.'
      ],
      sections: [
        {title: 'Data and preparation', text: '[Placeholder] Describe the labeled data, class balance, exclusions, and checks that predictors were available before the outcome.'},
        {title: 'Analysis and evaluation', text: '[Placeholder] Explain the model, validation split, baseline, metrics, and threshold-selection process.'},
        {title: 'Findings and limitations', text: '[Placeholder] Add real results and discuss false positives, false negatives, generalizability, and data limitations.'},
        {title: 'My contribution and next steps', text: '[Placeholder] Explain your role, team contributions, lessons learned, and the most valuable next experiment.'}
      ],
      highlights: [
        {title: 'Define the outcome', text: '[Placeholder] Establish a clear and measurable target.', detail: '[Placeholder] Explain how labels were created, which observations were excluded, and why the target matches the intended decision.', image: 'highlight-question.svg', alt: 'Classification question placeholder'},
        {title: 'Evaluate meaningful trade-offs', text: '[Placeholder] Compare prediction quality with a baseline.', detail: '[Placeholder] Add a real evaluation figure and explain why the chosen metric is appropriate for the problem.', image: 'highlight-analysis.svg', alt: 'Classification evaluation placeholder'},
        {title: 'Explain the limitations', text: '[Placeholder] Communicate the evidence responsibly.', detail: '[Placeholder] Describe the strongest conclusion supported by the data and one important reason the model could fail on new observations.', image: 'highlight-findings.svg', alt: 'Classification findings placeholder'}
      ],
      links: {code: '', report: ''}, references: [{label: '[Placeholder] Dataset and methodological references.', url: ''}]
    }
  ]
};
