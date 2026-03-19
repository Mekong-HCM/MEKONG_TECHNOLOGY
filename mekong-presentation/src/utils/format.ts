/**
 * Vietnamese number formatting utilities
 * Dau phay thap phan kieu Viet: 22,00M (KHONG phai 22.00M)
 * Dau cham phan cach hang nghin: 10.000 (KHONG phai 10,000)
 */

export function formatCurrency(value: number, unit: string = 'USD'): string {
    if (Math.abs(value) >= 1_000_000) {
        const m = value / 1_000_000;
        return `${m.toFixed(2).replace('.', ',')}M ${unit}`;
    }
    if (Math.abs(value) >= 1_000) {
        const k = value / 1_000;
        return `${k.toFixed(2).replace('.', ',')}K ${unit}`;
    }
    return `${value.toFixed(2).replace('.', ',')} ${unit}`;
}

export function formatCurrencyShort(value: number, unit: string = 'USD'): string {
    if (Math.abs(value) >= 1_000_000) {
        const m = value / 1_000_000;
        const formatted = m % 1 === 0 ? m.toString() : m.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
        return `${formatted.replace('.', ',')}M ${unit}`;
    }
    if (Math.abs(value) >= 1_000) {
        const k = value / 1_000;
        const formatted = k % 1 === 0 ? k.toString() : k.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
        return `${formatted.replace('.', ',')}K ${unit}`;
    }
    return `${value.toString().replace('.', ',')} ${unit}`;
}

export function formatMillions(value: number, unit: string = 'USD'): string {
    const formatted = value % 1 === 0
        ? value.toString()
        : value.toFixed(2).replace(/0+$/, '').replace(/\.$/, '');
    return `${formatted.replace('.', ',')}M ${unit}`;
}

export function formatPercent(value: number): string {
    const formatted = value % 1 === 0
        ? `${value},0%`
        : `${value.toFixed(1).replace('.', ',')}%`;
    return formatted;
}

export function formatArea(value: number, unit: string = 'm\u00B2'): string {
    return `${formatNumber(value)} ${unit}`;
}

export function formatNumber(value: number): string {
    const parts = value.toString().split('.');
    parts[0] = parts[0].replace(/\B(?=(\d{3})+(?!\d))/g, '.');
    if (parts[1]) {
        return parts.join(',');
    }
    return parts[0];
}
