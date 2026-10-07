(() => {
  'use strict';
  const data = window.PORTFOLIO;
  if (!data) return;
  const $ = (id) => document.getElementById(id);
  const text = (id, value) => { if ($(id)) $(id).textContent = value; };
  const el = (tag, className, value) => {
    const node = document.createElement(tag);
    if (className) node.className = className;
    if (value !== undefined) node.textContent = value;
    return node;
  };
  function safeURL(value) {
    if (!value || typeof value !== 'string') return '';
    try { const url = new URL(value, location.href); return ['http:', 'https:', 'file:'].includes(url.protocol) ? url.href : ''; }
    catch { return ''; }
  }
  function tags(id, values) { if ($(id)) $(id).replaceChildren(...values.map(value => el('span', 'skill', value))); }
  function image(id, src, alt) { if ($(id)) { $(id).src = safeURL(src); $(id).alt = alt; } }
  document.querySelectorAll('[data-name]').forEach(node => node.textContent = data.name);
  document.querySelectorAll('[data-title]').forEach(node => node.textContent = data.title);
  document.querySelectorAll('[data-version]').forEach(node => node.textContent = data.version);
  document.querySelectorAll('[data-updated]').forEach(node => node.textContent = data.updated);
  document.querySelectorAll('[data-contact]').forEach(node => {
    if (data.email && /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(data.email)) {
      const a = el('a', 'contact', data.email); a.href = 'mailto:' + data.email; node.replaceWith(a);
    }
  });
  let dark = window.matchMedia('(prefers-color-scheme: dark)').matches;
  try { const saved = localStorage.getItem('portfolio-theme'); if (saved) dark = saved === 'dark'; } catch {}
  function applyTheme() {
    document.documentElement.dataset.theme = dark ? 'dark' : 'light';
    document.querySelectorAll('.theme-toggle').forEach(button => { button.setAttribute('aria-pressed', String(dark)); button.textContent = dark ? 'Light appearance' : 'Dark appearance'; });
  }
  document.querySelectorAll('.theme-toggle').forEach(button => button.addEventListener('click', () => {
    dark = !dark; applyTheme(); try { localStorage.setItem('portfolio-theme', dark ? 'dark' : 'light'); } catch {}
  }));
  applyTheme();

  // Deliberate wheel gestures: one step per gesture; leave browser zoom alone.
  // At either end of a collection, normal page scrolling continues.
  function wheelSteps(node, move, canMove) {
    let sum = 0, last = 0, lockedUntil = 0;
    node.addEventListener('wheel', event => {
      if (event.ctrlKey || event.metaKey || Math.abs(event.deltaX) > Math.abs(event.deltaY)) return;
      const now = performance.now();
      const direction = Math.sign(event.deltaY);
      if (!direction) return;
      if (now < lockedUntil) { event.preventDefault(); return; }
      if (!canMove(direction)) { sum = 0; return; }
      event.preventDefault();
      if (now - last > 180 || Math.sign(sum) !== direction) sum = 0;
      last = now;
      sum += event.deltaY * (event.deltaMode === 1 ? 16 : event.deltaMode === 2 ? 400 : 1);
      if (Math.abs(sum) >= 45) { move(direction); sum = 0; lockedUntil = now + 500; }
    }, {passive: false});
  }

  if ($('project-view')) {
    text('about-copy', data.about); text('projects-intro', data.intro); tags('skills', data.skills); image('profile', data.photo, data.photoAlt);
    document.title = data.name + ' | ' + data.title;
    let projectIndex = Math.max(0, data.projects.findIndex(project => location.hash === '#' + project.id));
    let highlightIndex = 0;
    let workflowIndex = 0;
    const optionButtons = data.projects.map((project, index) => {
      const button = el('button', 'project-option'); button.type = 'button';
      button.setAttribute('aria-controls', 'project-view');
      const thumbnail = el('img'); thumbnail.src = safeURL(project.image); thumbnail.alt = ''; thumbnail.width = 48; thumbnail.height = 60;
      const copy = el('span'); copy.append(el('span', 'option-number', 'PROJECT ' + project.number), el('span', 'option-name', project.title));
      button.append(thumbnail, copy); button.addEventListener('click', () => selectProject(index)); return button;
    });
    $('project-options').replaceChildren(...optionButtons);
    function renderHighlight() {
      const highlights = data.projects[projectIndex].highlights;
      const item = highlights[highlightIndex];
      text('highlight-number', 'Highlight ' + String(highlightIndex + 1).padStart(2, '0') + ' / ' + String(highlights.length).padStart(2, '0'));
      text('highlight-title', item.title); text('highlight-description', item.detail);
      image('highlight-image', item.image, item.alt); text('highlight-caption', item.alt);
      [...$('highlight-dots').children].forEach((button, index) => button.setAttribute('aria-pressed', String(index === highlightIndex)));
    }
    function selectProject(index, announce = true) {
      if (index < 0 || index >= data.projects.length) return;
      projectIndex = index; highlightIndex = 0;
      const project = data.projects[index];
      optionButtons.forEach((button, i) => button.setAttribute('aria-pressed', String(i === index)));
      text('project-count', project.number + ' / ' + String(data.projects.length).padStart(2, '0'));
      for (const key of ['title', 'category', 'date', 'role', 'status', 'summary']) text('project-' + key, project[key]);
      tags('project-tools', project.tools); $('project-link').href = project.page;
      $('project-prev').disabled = index === 0; $('project-next').disabled = index === data.projects.length - 1;
      $('highlight-list').replaceChildren(...project.highlights.map(item => {
        const li = el('li'); li.append(el('strong', '', item.title + '. '), document.createTextNode(item.text)); return li;
      }));
      $('highlight-dots').replaceChildren(...project.highlights.map((item, i) => {
        const button = el('button'); button.type = 'button'; button.setAttribute('aria-label', 'Highlight ' + (i + 1) + ': ' + item.title);
        button.addEventListener('click', () => { highlightIndex = i; renderHighlight(); text('project-announcement', item.title); }); return button;
      }));
      renderHighlight();
      if (announce) {
        text('project-announcement', 'Selected project ' + (index + 1) + ' of ' + data.projects.length + ': ' + project.title);
        try { history.replaceState(null, '', '#' + project.id); } catch {}
      }
    }
    $('project-prev').addEventListener('click', () => selectProject(projectIndex - 1));
    $('project-next').addEventListener('click', () => selectProject(projectIndex + 1));
    $('project-selector').addEventListener('keydown', event => {
      if (!['ArrowUp', 'ArrowDown', 'Home', 'End'].includes(event.key)) return;
      event.preventDefault();
      const next = event.key === 'Home' ? 0 : event.key === 'End' ? data.projects.length - 1 : projectIndex + (event.key === 'ArrowDown' ? 1 : -1);
      selectProject(Math.max(0, Math.min(data.projects.length - 1, next))); optionButtons[projectIndex].focus({preventScroll:true});
    });
    wheelSteps($('project-selector'), direction => selectProject(projectIndex + direction), direction => projectIndex + direction >= 0 && projectIndex + direction < data.projects.length);
    for (const [id, direction] of [['highlight-prev', -1], ['highlight-next', 1]]) $(id).addEventListener('click', () => {
      const items = data.projects[projectIndex].highlights; highlightIndex = (highlightIndex + direction + items.length) % items.length;
      renderHighlight(); text('project-announcement', items[highlightIndex].title);
    });
    function selectWorkflow(index) {
      workflowIndex = Math.max(0, Math.min(data.workflow.length - 1, index));
      text('workflow-number', String(workflowIndex + 1).padStart(2, '0')); text('workflow-name', data.workflow[workflowIndex].title); text('workflow-text', data.workflow[workflowIndex].text);
      [...$('workflow-tabs').children].forEach((button, i) => button.setAttribute('aria-pressed', String(i === workflowIndex)));
    }
    $('workflow-tabs').replaceChildren(...data.workflow.map((stage, index) => {
      const button = el('button', '', stage.title); button.type = 'button'; button.addEventListener('click', () => selectWorkflow(index)); return button;
    }));
    wheelSteps($('workflow-stage'), direction => selectWorkflow(workflowIndex + direction), direction => workflowIndex + direction >= 0 && workflowIndex + direction < data.workflow.length);
    $('workflow-stage').addEventListener('keydown', event => { if (['ArrowDown', 'ArrowUp'].includes(event.key)) { event.preventDefault(); selectWorkflow(workflowIndex + (event.key === 'ArrowDown' ? 1 : -1)); } });
    window.addEventListener('hashchange', () => { const index = data.projects.findIndex(project => '#' + project.id === location.hash); if (index >= 0) selectProject(index, false); });
    selectWorkflow(0); selectProject(projectIndex, false);
  }

  if ($('detail-content')) {
    const project = data.projects.find(item => item.id === document.body.dataset.project) || data.projects[0];
    document.title = project.title + ' | ' + data.name;
    document.querySelector('meta[name="description"]').content = project.summary;
    for (const key of ['title', 'category', 'date', 'role', 'status', 'summary', 'question']) text('detail-' + key, project[key]);
    image('detail-image', project.image, project.imageAlt); tags('detail-tools', project.tools);
    $('back-to-project').href = 'index.html#' + project.id;
    const content = $('detail-content'); content.replaceChildren(el('h2', '', 'Project overview'), ...project.description.map(paragraph => el('p', '', paragraph)));
    for (const section of project.sections) content.append(el('h2', '', section.title), el('p', '', section.text));
    content.append(el('h2', '', 'Project highlights'));
    for (const item of project.highlights) {
      const row = el('section', 'highlight-view'); const figure = el('figure'); const img = el('img');
      img.src = safeURL(item.image); img.alt = item.alt; img.width = 640; img.height = 420; img.loading = 'lazy';
      figure.append(img, el('figcaption', '', item.alt)); const copy = el('div', 'highlight-copy');
      copy.append(el('h3', '', item.title), el('p', '', item.detail)); row.append(figure, copy); content.append(row);
    }
    content.append(el('h2', '', 'Project resources'));
    const resources = el('div', 'project-actions');
    for (const [key, label] of [['code', 'View project code'], ['report', 'Read project report']]) {
      const url = safeURL(project.links[key]);
      if (url) { const a = el('a', 'button', label); a.href = url; resources.append(a); }
      else resources.append(el('span', 'resource-missing', '[Placeholder: ' + (key === 'code' ? 'code link' : 'report link') + ']'));
    }
    content.append(resources, el('h2', '', 'Sources and references'));
    const refs = el('ul'); for (const reference of project.references) { const li = el('li'); const url = safeURL(reference.url); if (url) { const a = el('a', '', reference.label); a.href = url; li.append(a); } else li.textContent = reference.label; refs.append(li); } content.append(refs);
    const related = $('related-projects');
    for (const other of data.projects.filter(item => item.id !== project.id)) { const a = el('a', 'button', other.title); a.href = other.page; related.append(a); }
  }
})();
