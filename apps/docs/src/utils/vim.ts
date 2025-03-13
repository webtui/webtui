export function getFirstTextNode(element: Node) {
  if (element.nodeType === Node.TEXT_NODE) {
    return element;
  }

  return getFirstTextNode(element.firstChild as Node);
}

export function applyVimCursorHighlight(element: HTMLElement) {
  // Get text node from DOM
  const firstChild = element.firstChild;

  if (!firstChild) return;

  const textNode = getFirstTextNode(firstChild);

  // Get first char range
  const range = new Range();
  range.setStart(textNode, 0);
  range.setEnd(textNode, 1);

  // Create highlight
  const hi = new Highlight(range);

  CSS.highlights.set("vim", hi);
}
