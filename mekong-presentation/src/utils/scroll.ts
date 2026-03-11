/** Scroll utilities for snap-container mode.
 *  The main scroll container is <main class="snap-container"> (overflow-y: auto, height: 100vh),
 *  NOT the window. All scroll actions must target this element.
 */

export const NAVBAR_HEIGHT = 80;

export function getSnapContainer(): HTMLElement | null {
    return document.querySelector<HTMLElement>('.snap-container');
}

export function scrollToSection(id: string): void {
    const el = document.getElementById(id);
    const container = getSnapContainer();
    if (!el || !container) return;
    const containerBox = container.getBoundingClientRect();
    const elBox = el.getBoundingClientRect();
    container.scrollTo({
        top: container.scrollTop + elBox.top - containerBox.top - NAVBAR_HEIGHT,
        behavior: 'smooth',
    });
}
