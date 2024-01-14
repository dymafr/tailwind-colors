const tailwindColors = [
  'slate',
  'gray',
  'zinc',
  'neutral',
  'stone',
  'red',
  'orange',
  'amber',
  'yellow',
  'lime',
  'green',
  'emerald',
  'teal',
  'cyan',
  'sky',
  'blue',
  'indigo',
  'violet',
  'purple',
  'fuchsia',
  'pink',
  'rose',
];

const shades = [50, 100, 200, 300, 400, 500, 600, 700, 800, 900, 950];

const container = document.querySelector('#container');

for (const color of tailwindColors) {
  const h2 = document.createElement('h2');
  h2.textContent = color;
  h2.classList.add('text-2xl', 'font-bold', 'mb-4');
  container.appendChild(h2);
  const flexContainer = document.createElement('div');
  flexContainer.classList.add('flex', 'flex-wrap');
  container.appendChild(flexContainer);
  for (const shade of shades) {
    const div = document.createElement('div');
    div.classList.add(
      'w-24',
      'h-24',
      'm-2',
      'rounded-md',
      `bg-${color}-${shade}`
    );
    flexContainer.appendChild(div);
  }
}
