// If the user is typing in an input, textarea, select, or contenteditable element
export function isUserTyping() {
    return (
        document.activeElement &&
        (/input|textarea|select/i.test(document.activeElement.tagName) ||
            document.activeElement.hasAttribute('contenteditable'))
    )
}

// Recursively gets the first text node from a DOM element
function getFirstTextNode(element: Node) {
    if (element.nodeType === Node.TEXT_NODE) {
        return element
    }

    return getFirstTextNode(element.firstChild as Node)
}

// Applies the ::highlight(vim) CSS pseudo-class to an element
export function applyVimCursorHighlight(element: HTMLElement) {
    const firstChild = element.firstChild

    if (!firstChild) return

    const textNode = getFirstTextNode(firstChild)

    if (
        typeof textNode?.textContent !== 'string' ||
        textNode.textContent.trim() === ''
    ) {
        CSS.highlights.clear()
        return
    }

    const firstNonWhitespace =
        textNode.textContent?.split('').findIndex((c) => !/\s/.test(c)) ?? 0

    const range = new Range()
    range.setStart(textNode, firstNonWhitespace)
    range.setEnd(textNode, firstNonWhitespace + 1)

    const hi = new Highlight(range)

    CSS.highlights.set('vim', hi)
}

export function vimFocusElement(element: HTMLElement) {
    element.focus()
    element.scrollIntoView({ block: 'nearest', inline: 'nearest' })
    applyVimCursorHighlight(element)
}

// Adds vim-like navigation to an element
export function applyVimNavigation(
    element: HTMLElement,
    queryString: string,
    onElementFocus?: (element: HTMLElement) => void,
) {
    function reattachTabbableElements() {
        const vimTabbableElements = element.querySelectorAll(
            queryString,
        ) as NodeListOf<HTMLElement>

        for (const el of vimTabbableElements) {
            el.onfocus = () => {
                vimFocusElement(el)
                onElementFocus?.(el)
            }
        }

        return vimTabbableElements
    }

    reattachTabbableElements()

    element.addEventListener('keydown', (e) => {
        if (isUserTyping()) return

        const activeElements = reattachTabbableElements()

        if (
            Array.from(activeElements).indexOf(
                document.activeElement as HTMLElement,
            ) === -1
        )
            return

        const { next, prev, first, last } = paginateElements(
            document.activeElement as HTMLElement,
            activeElements,
        )

        if (e.key === 'j' || e.key === 'ArrowDown') next.focus()
        if (e.key === 'k' || e.key === 'ArrowUp') prev.focus()
        if (e.key === 'g') first.focus()
        if (e.key === 'G') last.focus()
    })
}

export function paginateElements(
    element: HTMLElement,
    elements: NodeListOf<HTMLElement> | HTMLElement[],
) {
    const currentIndex = Array.from(elements).indexOf(element)
    const first = elements[0]
    const next = elements[Math.min(currentIndex + 1, elements.length - 1)]
    const prev = elements[Math.max(currentIndex - 1, 0)]
    const last = elements[elements.length - 1]

    return { first, next, prev, last }
}
