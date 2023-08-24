import Quill from 'quill';
const Tooltip = Quill.import('ui/tooltip');
class CustomTooltip extends Tooltip {
  constructor(quill, boundsContainer) {
    super(quill, boundsContainer);
    this.quill = quill;
  }

  buildButton(iconOption, format) {
    const button = super.buildButton(iconOption, format);
    if (format === 'custom') {
      button.innerHTML = 'C'; // 'C' is the text that will be displayed on the button. You can replace this with an SVG icon or any other valid HTML.
      button.addEventListener('click', () => {
        console.log('Custom button clicked!');
      });
    }
    return button;
  }
}

export default CustomTooltip;
