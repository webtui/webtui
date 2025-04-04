// If the user is typing in an input, textarea, select, or contenteditable element
export function isUserTyping() {
  return (
    document.activeElement &&
    (/input|textarea|select/i.test(document.activeElement.tagName) ||
      document.activeElement.hasAttribute('contenteditable'))
  );
}

// Recursively gets the first text node from a DOM element
function getFirstTextNode(element: Node) {
  if (element.nodeType === Node.TEXT_NODE) {
    return element;
  }

  return getFirstTextNode(element.firstChild as Node);
}

// Applies the ::highlight(vim) CSS pseudo-class to an element
export function applyVimCursorHighlight(element: HTMLElement) {
  const firstChild = element.firstChild;

  if (!firstChild) return;

  const textNode = getFirstTextNode(firstChild);

  const firstNonWhitespace =
    textNode.textContent?.split('').findIndex((c) => !/\s/.test(c)) ?? 0;

  const range = new Range();
  range.setStart(textNode, firstNonWhitespace);
  range.setEnd(textNode, firstNonWhitespace + 1);

  const hi = new Highlight(range);

  CSS.highlights.set('vim', hi);
}

export function vimFocusElement(element: HTMLElement) {
  element.focus();
  element.scrollIntoView({ block: 'nearest', inline: 'nearest' });
  applyVimCursorHighlight(element);
}

// Adds vim-like navigation to an element
export function applyVimNavigation(
  element: HTMLElement,
  queryString: string,
  onElementFocus?: (element: HTMLElement) => void,
) {
  element.addEventListener('keydown', (e) => {
    if (isUserTyping()) return;

    const vimTabbableElements = document.querySelectorAll(
      queryString,
    ) as NodeListOf<HTMLElement>;

    const currentIndex = Array.from(vimTabbableElements).indexOf(
      document.activeElement as HTMLElement,
    );

    if (e.key === 'j' || e.key === 'ArrowDown') {
      const nextActiveElement =
        vimTabbableElements[
          Math.min(currentIndex + 1, vimTabbableElements.length - 1)
        ];

      vimFocusElement(nextActiveElement);
      onElementFocus?.(nextActiveElement);
    }

    if (e.key === 'k' || e.key === 'ArrowUp') {
      const nextActiveElement =
        vimTabbableElements[Math.max(currentIndex - 1, 0)];

      vimFocusElement(nextActiveElement);
      onElementFocus?.(nextActiveElement);
    }

    if (e.key === 'G') {
      const lastElement = vimTabbableElements[vimTabbableElements.length - 1];

      vimFocusElement(lastElement);
      onElementFocus?.(lastElement);
    }

    if (e.key === 'g') {
      const firstElement = vimTabbableElements[0];

      vimFocusElement(firstElement);
      onElementFocus?.(firstElement);
    }
  });
}
