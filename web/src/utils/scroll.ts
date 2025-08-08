const scrollContainer = document.querySelector('main') as HTMLElement

export const determineSnapTarget = (
    queryString: string,
    fallbackQueryString?: string,
) => {
    const snapTargets: Array<HTMLElement> = Array.from(
        document.querySelectorAll(queryString),
    )

    if (fallbackQueryString) {
        const fallback = document.querySelector(fallbackQueryString)
        if (fallback) snapTargets.push(fallback as HTMLElement)
    }

    const target = Array.from(snapTargets).find((snapTarget) => {
        const rect = snapTarget.getBoundingClientRect()

        return rect.top < window.innerHeight && rect.bottom > 0
    })

    return target as HTMLElement | undefined
}

export const attachScrollSnapListener = (
    queryString: string,
    handleTargetChange: (target?: HTMLElement) => void,
    fallbackQueryString?: string,
) => {
    if ('onscrollsnapchange' in window) {
        // Chromium
        scrollContainer.addEventListener('scrollsnapchange', (e) => {
            const target = (e as Event & { snapTargetBlock: HTMLElement })
                .snapTargetBlock
            handleTargetChange(target)
        })
    } else if ('onscrollend' in window) {
        // Firefox
        scrollContainer.addEventListener('scrollend', () => {
            const target = determineSnapTarget(queryString, fallbackQueryString)
            handleTargetChange(target)
        })
    } else {
        // Safari
        scrollContainer.addEventListener('scroll', () => {
            const target = determineSnapTarget(queryString, fallbackQueryString)
            handleTargetChange(target)
        })
    }
}
